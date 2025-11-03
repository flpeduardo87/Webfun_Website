import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Globe, Search, Wrench, Check } from "lucide-react";

const features = [
  {
    id: "criacao",
    label: "Criação de Sites",
    icon: Globe,
    title: "Sites que vendem e encantam",
    subtitle: "Design moderno com foco em conversão.",
    description:
      "Desenvolvemos sites institucionais, landing pages e portais que não são apenas bonitos, mas projetados estrategicamente para converter visitantes em clientes. Foco em usabilidade, velocidade e na mensagem da sua marca.",
    items: [
      "Site institucional",
      "Landing pages",
      "Portais personalizados",
    ],
    ctaLabel: "Quero meu site",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&w=600",
  },
  {
    id: "seo",
    label: "Otimização SEO",
    icon: Search,
    title: "Seja encontrado no Google",
    subtitle: "Estrutura e conteúdo preparados para ranquear.",
    description:
      "Otimizamos toda a estrutura do seu site (SEO On-Page) para que os mecanismos de busca entendam sobre o que é seu negócio e o mostrem para as pessoas certas, gerando tráfego qualificado e orgânico.",
    items: [
      "SEO Técnico",
      "Otimização de Conteúdo",
      "Monitoramento de Resultados",
    ],
    ctaLabel: "Quero melhorar meu SEO",
    image: "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&w=600",
  },
  {
    id: "manutencao",
    label: "Manutenção e Suporte",
    icon: Wrench,
    title: "Foque no seu negócio, nós cuidamos do resto",
    subtitle: "Segurança, atualizações e suporte contínuo.",
    description:
      "Oferecemos planos de manutenção para garantir que seu site esteja sempre seguro, atualizado e funcionando perfeitamente. Suporte técnico rápido para você ter total tranquilidade.",
    items: [
      "Atualizações constantes",
      "Backup e segurança",
      "Suporte técnico ágil",
    ],
    ctaLabel: "Quero manutenção e suporte",
    image: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&w=600",
  },
];

export const Features = () => {
  const [activeTab, setActiveTab] = useState("criacao");

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-8">
          <h2 className="mb-4 text-3xl font-bold tracking-tight leading-tight sm:text-4xl md:text-5xl">
            Sua presença digital começa aqui
          </h2>
          <p className="text-[18px] leading-snug text-muted-foreground">
            Do primeiro site ao crescimento contínuo — suporte total para sua marca no digital.
          </p>
        </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-8 gap-2">
            {features.map((feature) => (
              <TabsTrigger
                key={feature.id}
                value={feature.id}
                    className="group flex items-center justify-center gap-2"
              >
                    <feature.icon className="block h-4 w-4 text-primary group-data-[state=active]:text-primary-foreground" />
                    <span className="hidden sm:inline leading-none">{feature.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {features.map((feature) => (
            <TabsContent
              key={feature.id}
              value={feature.id}
              className="animate-fade-in"
            >
              <div className="grid gap-12 lg:grid-cols-2 items-center">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold">{feature.title}</h3>
                  {feature.subtitle && (
                    <p className="text-[18px] leading-snug text-muted-foreground">{feature.subtitle}</p>
                  )}
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.items.map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20">
                          <Check className="h-4 w-4 text-primary" />
                        </span>
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2">
                    <Button asChild size="lg" className="px-6">
                      <a
                        href={`https://wa.me/5547997618824?text=${encodeURIComponent(
                          `Olá! Tenho interesse em ${feature.label} e gostaria de saber mais. Você pode me ajudar?`
                        )}&utm_source=site&utm_medium=features_tabs&utm_campaign=whatsapp_cta&utm_content=${encodeURIComponent(feature.id)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Falar no WhatsApp sobre ${feature.label}`}
                        className="inline-flex items-center gap-2"
                        style={{ textTransform: 'none' }}
                      >
                        {feature.ctaLabel.charAt(0).toUpperCase() + feature.ctaLabel.slice(1).toLowerCase()}
                        <feature.icon className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="relative">
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl border shadow-lg">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
