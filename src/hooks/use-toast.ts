import * as React from "react";

type ToastVariant = "default" | "destructive";

export type ToasterToast = {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  variant?: ToastVariant;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

type State = {
  toasts: ToasterToast[];
};

type Action =
  | { type: "ADD_TOAST"; toast: ToasterToast }
  | { type: "UPDATE_TOAST"; toast: Partial<ToasterToast> & { id: string } }
  | { type: "DISMISS_TOAST"; toastId?: string }
  | { type: "REMOVE_TOAST"; toastId?: string };

const TOAST_LIMIT = 3;
const TOAST_REMOVE_DELAY = 1000;

let count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

const listeners = new Set<(state: State) => void>();
let memoryState: State = { toasts: [] };

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((l) => l(memoryState));
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_TOAST": {
      const toasts = [action.toast, ...state.toasts].slice(0, TOAST_LIMIT);
      return { ...state, toasts };
    }
    case "UPDATE_TOAST": {
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      };
    }
    case "DISMISS_TOAST": {
      const { toastId } = action;
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          !toastId || t.id === toastId ? { ...t, open: false } : t
        ),
      };
    }
    case "REMOVE_TOAST": {
      const { toastId } = action;
      return {
        ...state,
        toasts: toastId
          ? state.toasts.filter((t) => t.id !== toastId)
          : [],
      };
    }
    default:
      return state;
  }
}

const removeQueue = new Map<string, ReturnType<typeof setTimeout>>();
function addToRemoveQueue(toastId: string) {
  if (removeQueue.has(toastId)) return;
  const timeout = setTimeout(() => {
    dispatch({ type: "REMOVE_TOAST", toastId });
    removeQueue.delete(toastId);
  }, TOAST_REMOVE_DELAY);
  removeQueue.set(toastId, timeout);
}

export function toast(props: Omit<ToasterToast, "id" | "open">) {
  const id = genId();

  const onOpenChange = (open: boolean) => {
    if (!open) {
      dispatch({ type: "DISMISS_TOAST", toastId: id });
      addToRemoveQueue(id);
    } else {
      dispatch({ type: "UPDATE_TOAST", toast: { id, open: true } });
    }
  };

  const toastObj: ToasterToast = {
    id,
    open: true,
    onOpenChange,
    ...props,
  };

  dispatch({ type: "ADD_TOAST", toast: toastObj });

  return {
    id,
    dismiss: () => {
      dispatch({ type: "DISMISS_TOAST", toastId: id });
      addToRemoveQueue(id);
    },
    update: (props: Partial<Omit<ToasterToast, "id">>) =>
      dispatch({ type: "UPDATE_TOAST", toast: { id, ...props } }),
  };
}

export function useToast() {
  const [state, setState] = React.useState<State>(memoryState);

  React.useEffect(() => {
    listeners.add(setState);
    return () => {
      listeners.delete(setState);
    };
  }, []);

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => {
      dispatch({ type: "DISMISS_TOAST", toastId });
      if (toastId) addToRemoveQueue(toastId);
      else state.toasts.forEach((t) => addToRemoveQueue(t.id));
    },
  };
}