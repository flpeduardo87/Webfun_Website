import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Sun,
  Moon,
  Globe,
  ShoppingCart,
  FileText,
  Megaphone,
  TrendingUp,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTheme } from "next-themes";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import logoLight from "@/assets/logo.svg";
import logoDark from "@/assets/logo-dark.svg";

const services: { title: string; description: string; href: string; icon: LucideIcon }[] = [
  { title: "Criação de Sites", description: "Seu site pronto para gerar resultados.", href: "/site-institucional", icon: Globe },
  { title: "Lojas Virtuais", description: "Venda online com estrutura profissional.", href: "/lojas-virtuais", icon: ShoppingCart },
  { title: "Landing Pages", description: "Páginas que vendem e geram leads.", href: "/landing-pages", icon: FileText },
  { title: "Social Media", description: "Gestão e conteúdo para redes sociais.", href: "/social-media", icon: Megaphone },
  { title: "Tráfego Pago", description: "Atraia clientes rapidamente.", href: "/trafego-pago", icon: TrendingUp },
  { title: "IA para Negócios", description: "Automatize sua empresa", href: "/ia-para-negocios", icon: Sparkles },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background md:bg-background/95 md:backdrop-blur md:supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-3 md:px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="inline-flex items-center gap-2">
              <img src={logoLight} alt="WebFun" className="h-9 w-auto md:h-10 dark:hidden" />
              <img src={logoDark} alt="WebFun" className="hidden h-9 w-auto md:h-10 dark:block" />
              <span className="sr-only">webfun</span>
            </span>
          </Link>

          {/* Navegação Desktop */}
          <div className="hidden md:flex md:items-center md:space-x-6">
                  <Link to="/" className="text-base font-medium transition-colors hover:text-primary">
              Início
            </Link>

            {/* Sobre Nós antes de Serviços */}
                  <Link to="/sobre" className="text-base font-medium transition-colors hover:text-primary">
              Sobre
            </Link>

            {/* Mega Menu - Serviços */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-base transition-colors hover:bg-primary/10 focus:bg-primary/10 data-[state=open]:bg-primary data-[state=open]:text-primary-foreground">
                    Serviços
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="left-0 md:left-auto ml-0 md:ml-0 -ml-12 md:-ml-0">
                    <div className="grid w-[680px] gap-3 px-6 pb-6 pt-5 md:grid-cols-2">
                      {services.map((service) => {
                        const Icon = service.icon;
                        return (
                          <NavigationMenuLink key={service.title} asChild>
                            <Link
                              to={service.href}
                              className={cn(
                                "group flex select-none rounded-md p-3 leading-none no-underline outline-none transition-colors",
                                "hover:bg-accent focus:bg-accent"
                              )}
                            >
                              <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                  <Icon className="h-5 w-5 text-primary transition-colors duration-200 group-hover:text-primary-foreground group-focus:text-primary-foreground" />
                                  <div className="text-base font-semibold leading-none text-foreground transition-colors group-hover:text-white group-focus:text-white">
                                    {service.title}
                                  </div>
                                </div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground transition-colors group-hover:text-white group-focus:text-white">
                                  {service.description}
                                </p>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        );
                      })}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

                  <Link to="/portfolio" className="text-base font-medium transition-colors hover:text-primary">
              Portfólio
            </Link>
            <Link to="/pricing" className="text-base font-medium transition-colors hover:text-primary">
              Planos
            </Link>
            <Link to="/contato" className="text-base font-medium transition-colors hover:text-primary">
              Contato
            </Link>
          </div>

          {/* Ações à direita */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Desktop: toggle de tema */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hidden md:inline-flex"
              aria-label="Alternar tema"
            >
              <Sun className="h-8 w-8 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-8 w-8 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Alternar tema</span>
            </Button>

            {/* Desktop: CTA */}
            <Button asChild className="hidden md:inline-flex px-6">
              <a
                href="https://wa.me/5547997618824?text=Ol%C3%A1!%20Quero%20um%20site%20profissional%20e%20gostaria%20de%20saber%20mais.%20Pode%20me%20ajudar?&utm_source=site&utm_medium=navbar_cta&utm_campaign=whatsapp_cta"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar no WhatsApp"
                className="flex items-center gap-2"
              >
                Começar Agora <ArrowRight className="w-5 h-5" />
              </a>
            </Button>

            {/* Mobile: toggle de tema (maior) */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="md:hidden p-0 flex items-center justify-center bg-transparent border-0 cursor-pointer transition-colors"
              aria-label="Alternar tema"
            >
              <Sun className="w-6 h-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 hover:text-primary active:scale-98" strokeWidth={1.5} />
              <Moon className="absolute w-5 h-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 hover:text-primary active:scale-98" strokeWidth={1.5} />
              <span className="sr-only">Alternar tema</span>
            </button>

            {/* Mobile: botão hambúrguer (maior) */}
            <button
              className="md:hidden p-0 flex items-center justify-center bg-transparent border-0 cursor-pointer transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Abrir menu"
            >
              {isOpen ? (
                <X className="w-7 h-7 transition-all hover:text-primary active:scale-98" strokeWidth={1.5} />
              ) : (
                <Menu className="w-7 h-7 transition-all hover:text-primary active:scale-98" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Navegação Mobile (ordem pode permanecer a mesma) */}
      {isOpen && (
        <div className="md:hidden pb-4 animate-fade-in">
          <div className="container mx-auto px-3 md:px-4">
            <div className="flex flex-col space-y-3 rounded-2xl border bg-card p-4 shadow-sm">
              <Link
                to="/"
                className="text-base font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Início
              </Link>
              <Link
                to="/sobre"
                className="text-base font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Sobre
              </Link>

              <div className="space-y-2">
                <div className="flex items-center text-base font-medium">
                  Serviços
                </div>
                <div className="ml-1 grid grid-cols-1 gap-2">
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={service.title}
                        to={service.href}
                        className="group flex items-center gap-3 rounded-md p-2 transition-colors hover:bg-accent focus:bg-accent"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20 transition-colors duration-200 group-hover:bg-primary group-focus:bg-primary">
                          <Icon className="h-5 w-5 text-primary transition-colors duration-200 group-hover:text-primary-foreground group-focus:text-primary-foreground" />
                        </span>
                        <span>
                          <div className="text-base font-medium leading-none transition-colors group-hover:text-white group-focus:text-white">
                            {service.title}
                          </div>
                          <p className="text-sm text-muted-foreground transition-colors group-hover:text-white group-focus:text-white">
                            {service.description}
                          </p>
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              <Link
                to="/portfolio"
                className="text-base font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Portfólio
              </Link>
              <Link
                to="/pricing"
                className="text-base font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/contato"
                className="text-base font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Contato
              </Link>

              <div className="pt-3">
                <Button className="w-full" onClick={() => setIsOpen(false)}>
                  Pedir Orçamento
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};