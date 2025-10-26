// Componente Pricing foi movido para src/pages/PlanosPrecos.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Check, X, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Start",
    monthlyPrice: "99",
    features: [
      { name: "Site one-page moderno", included: true },
      { name: "Otimização SEO básica", included: true },
      { name: "Integração WhatsApp", included: true },
      { name: "Hospedagem inclusa", included: true },
      { name: "Landing page exclusiva", included: false },
      { name: "Loja virtual", included: false },
      { name: "Suporte prioritário", included: false }
    ]
  },
  {
    name: "Profissional",
    monthlyPrice: "149",
    popular: true,
    features: [
      { name: "Site institucional moderno", included: true },
      { name: "Landing page de alta conversão", included: true },
      { name: "Otimização SEO avançada", included: true },
      { name: "Integração WhatsApp", included: true },
      { name: "Suporte técnico prioritário", included: true },
      { name: "Loja virtual", included: false },
      { name: "Gestão de tráfego pago", included: false }
    ]
  },
  {
    name: "E-commerce",
    monthlyPrice: "249",
    features: [
      { name: "Loja virtual completa", included: true },
      { name: "Integração com meios de pagamento", included: true },
      { name: "Otimização SEO para e-commerce", included: true },
      { name: "Integração WhatsApp e Instagram", included: true },
      { name: "Suporte técnico especializado", included: true },
      { name: "Gestão de tráfego pago", included: true },
      { name: "Landing page exclusiva", included: true }
    ]
  }
];

export const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  return (
    <section id="pricing" className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-8">
          <h2 className="mb-4 text-3xl font-bold tracking-tight leading-tight sm:text-4xl md:text-5xl">
            Nossos Planos
          </h2>
          <p className="text-[18px] leading-snug text-muted-foreground">
            Escolha o plano ideal para começar agora e evoluir com o seu negócio.
          </p>
        </div>
        <div className="mb-12 grid grid-cols-1 lg:grid-cols-3">
          <div className="lg:col-start-2 justify-self-stretch flex items-center">
            <div className="flex-1 flex justify-end pr-2">
              <span className={!isAnnual ? "font-medium" : "text-muted-foreground"}>Mensal</span>
            </div>
            <div className="px-3">
              <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
            </div>
            <div className="flex-1 flex justify-start pl-2">
              <span className={isAnnual ? "font-medium" : "text-muted-foreground"}>Anual (-10%)</span>
            </div>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => {
            // Valores anuais fixos conforme solicitado
            let annual = 0;
            if (plan.name === "Start") annual = 990;
            else if (plan.name === "Profissional") annual = 1490;
            else if (plan.name === "E-commerce") annual = 2490;
            // Formata valor anual com ponto separador de milhares
            const annualFormatted = annual.toLocaleString('pt-BR');
            const annualMonthly = (annual / 12).toFixed(2).replace('.', ',');
            return (
              <Card key={index} className="relative">
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-base font-medium">
                      Mais Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="space-y-2">
                    {isAnnual ? (
                      <>
                        <div className="flex items-baseline justify-center gap-1">
                          <span className="text-4xl font-bold">R$ {annualFormatted}</span>
                          <span className="text-muted-foreground">/ ano</span>
                        </div>
                        {/* Removido texto redundante 'ou R$ ... à vista' */}
                        <p className="text-xs text-primary font-medium">
                          Equivalente a R$ {annualMonthly}/mês
                        </p>
                      </>
                    ) : (
                      <>
                        <div className="flex items-baseline justify-center gap-1">
                          <span className="text-4xl font-bold">R$ {plan.monthlyPrice}</span>
                          <span className="text-muted-foreground">/ mês</span>
                        </div>
                        <p className="text-xs text-primary font-medium">Pagamento recorrente mensal</p>
                      </>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <div
                          className={`flex h-5 w-5 items-center justify-center rounded-full ring-1 ${
                            feature.included
                              ? "bg-primary/10 ring-primary/20"
                              : "bg-muted ring-muted-foreground/10"
                          }`}
                        >
                          {feature.included ? (
                            <Check className="h-4 w-4 text-primary" />
                          ) : (
                            <X className="h-4 w-4 text-muted-foreground" />
                          )}
                        </div>
                        <span className={feature.included ? "font-medium" : "text-muted-foreground line-through"}>{feature.name}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full px-6"
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                  >
                    <span className="flex items-center justify-center gap-2 w-full">
                      Contratar Agora
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
