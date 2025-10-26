import { Globe, ShoppingCart, FileText, Megaphone, TrendingUp, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Globe,
    title: "Criação de Sites",
    description: "Seu site pronto para gerar resultados.",
    details: "Desenvolvemos sites modernos, rápidos e responsivos, com foco em conversão e credibilidade para destacar seu negócio.",
    cta: "Quero meu site",
  },
  {
    icon: ShoppingCart,
    title: "Lojas Virtuais",
    description: "Venda online com estrutura profissional.",
    details: "Criamos lojas completas, seguras e eficientes, preparadas para vender todos os dias com autonomia e performance.",
    cta: "Quero vender online",
  },
  {
    icon: FileText,
    title: "Landing Pages",
    description: "Páginas que vendem e geram leads.",
    details: "Criamos páginas rápidas, responsivas e persuasivas, ideais para campanhas de vendas ou geração de leads.",
    cta: "Quero minha página",
  },
  {
    icon: Megaphone,
    title: "Social Media",
    description: "Gestão e conteúdo para redes sociais.",
    details: "Impulsione sua presença digital com estratégias, design e conteúdo criativo para engajar seu público nas redes sociais.",
    cta: "Quero crescer nas redes",
  },
  {
    icon: TrendingUp,
    title: "Tráfego Pago",
    description: "Atraia clientes rapidamente.",
    details: "Campanhas no Google, Facebook e Instagram para atrair o cliente certo e aumentar suas vendas de forma rápida.",
    cta: "Quero mais clientes",
  },
  {
    icon: Sparkles,
    title: "IA para Negócios",
    description: "Automatize sua empresa",
    details: "Implemente soluções de inteligência artificial para automatizar processos e potencializar resultados no seu negócio.",
    cta: "Quero IA no meu negócio",
  },
];

export const Services = () => {
  return (
  <section id="services" className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-8">
          <h2 className="mb-4 text-3xl font-bold tracking-tight leading-tight sm:text-4xl md:text-5xl">
            Nossos Serviços
          </h2>
          <p className="text-[18px] leading-snug text-muted-foreground">
            Soluções completas para construir, posicionar e escalar sua marca no digital.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group animate-fade-in border-border/50 transition-all hover:border-primary/50 hover:shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20 transition-colors group-hover:bg-primary/20">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base font-medium">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-base text-muted-foreground leading-relaxed">
                  {service.details}
                </p>
                <Button
                  asChild
                  variant="default"
                  className="bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500 px-6 gap-1"
                >
                  <a
                    href={`https://wa.me/5547997618824?text=${encodeURIComponent(`Olá! Tenho interesse em ${service.title} e gostaria de saber mais.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {service.cta}
                    <ArrowRight className="ml-0 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
