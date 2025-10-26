import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Clock, Globe, Search, Headphones, ShoppingCart, MessageCircle, Cloud, type LucideIcon } from "lucide-react";

const faqs = [
  {
    q: "Em quanto tempo meu site fica pronto?",
    a: "Projetos institucionais costumam levar de 7 a 15 dias corridos, dependendo do escopo e da velocidade de aprovação dos conteúdos.",
  },
  {
    q: "Vocês cuidam de domínio e hospedagem?",
    a: "Sim. Podemos orientar ou cuidar de tudo para você: registro de domínio, configuração de DNS e hospedagem com monitoramento.",
  },
  {
    q: "Meu site vai aparecer no Google?",
    a: "Aplicamos SEO técnico e boas práticas de velocidade e estrutura. O posicionamento depende também de conteúdo e concorrência, mas você já sai com uma base sólida.",
  },
  {
    q: "Tem suporte após a entrega?",
    a: "Sim. Oferecemos planos de manutenção e suporte para manter o site seguro, atualizado e com melhorias contínuas.",
  },
  {
    q: "Fazem loja virtual e landing pages?",
    a: "Sim. Temos soluções específicas para e-commerce e páginas de alta conversão para campanhas de tráfego pago.",
  },
	{
		q: "Quais outros serviços vocês oferecem?",
		a: "Além de sites, criamos lojas virtuais, landing pages, gestão de redes sociais, tráfego pago, automações com IA e consultoria digital personalizada para empresas de todos os portes.",
	},
];

const faqIcons: LucideIcon[] = [Clock, Cloud, Search, Headphones, ShoppingCart, Globe];

export const FAQ = () => {
  return (
    <section id="faq" className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight leading-tight sm:text-4xl md:text-5xl">
            Perguntas Frequentes
          </h2>
          <p className="text-[18px] leading-snug text-muted-foreground">
            Tire suas dúvidas sobre prazos, escopo e funcionamento.
          </p>
        </div>

        {/* Container mais estreito e com visual de card */}
        <div className="mx-auto max-w-2xl rounded-2xl border bg-card px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 shadow-sm">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, i) => {
              const Icon = faqIcons[i] ?? Clock;
              return (
                <AccordionItem key={i} value={`item-${i}`} className="last:border-b-0">
                  <AccordionTrigger className="text-left text-base md:text-lg font-semibold py-3 hover:no-underline hover:text-foreground/90 data-[state=open]:text-primary">
                    <span className="flex items-center gap-3">
                      <span className="inline-flex h-9 w-9 aspect-square shrink-0 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20">
                        <Icon className="h-5 w-5 text-primary" />
                      </span>
                      {item.q}
                    </span>
                  </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  {item.a}
                </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>

        <div className="mt-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="px-6">
              <a
                href={`https://wa.me/5547997618824?text=${encodeURIComponent(
                  "Olá! Tenho algumas dúvidas sobre os serviços e gostaria de falar com um especialista."
                )}&utm_source=site&utm_medium=faq_cta&utm_campaign=whatsapp_cta&utm_content=faq`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fale conosco no WhatsApp"
                className="inline-flex items-center gap-2"
              >
                Ainda tem dúvidas? Fale conosco
                <MessageCircle className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};