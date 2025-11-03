import { Quote, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";

type Testimonial = {
  id: number;
  name: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ketlyn Calliari",
    company: "Studio LK",
  avatar: "avatars/ketlyn-avatar.png",
    rating: 5,
    text:
      "Me ajudaram demais. Eu precisava de um site com um pouco de rapidez e eles entregaram dentro do prazo. Recomendo a todos!",
  },
  {
    id: 2,
    name: "Adriano de Liz",
    company: "Mudanças Adriano",
  avatar: "avatars/adriano-avatar.png",
    rating: 5,
    text:
      "Tudo fluiu muito rápido e em alguns dias meu site estava no ar. Fiquei muito feliz com o resultado. Foi um ótimo investimento para meu negócio!",
  },
  {
    id: 3,
    name: "Felippe Davet",
    company: "Pousada Luiz Davet",
  avatar: "avatars/felippe-avatar.png",
    rating: 5,
    text:
      "Me ajudaram demais. Eu precisava de um site com um pouco de rapidez e eles entregaram dentro do prazo. Recomendo a todos!",
  },
  {
    id: 4,
    name: "Flavia Süssenbach",
    company: "Flavia Süssenbach Advogados",
    avatar: "avatars/flavia-avatar.png",
    rating: 5,
    text:
      "A WebFun superou minhas expectativas. Atendimento excelente, entrega rápida e resultado acima do esperado. Recomendo para todos que buscam qualidade!",
  },
  {
    id: 5,
    name: "João Krull",
    company: "Frigorífico Três Reis",
  avatar: "avatars/joao-avatar.png",
    rating: 5,
    text:
      "O site ficou incrível, rápido, fácil de atualizar e trouxe mais clientes. Atendimento nota 10! Recomendo a WebFun para quem quer crescer online.",
  },
  {
    id: 6,
    name: "Jean Mielke",
    company: "Mielke Energia Solar",
    avatar: "avatars/jean-avatar.png",
    rating: 5,
    text:
      "Equipe super atenciosa, criaram um site lindo, funcional e fácil de usar. Recomendo para quem busca resultado rápido e profissional!",
  },
];

export const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelected(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api) return;
    // Só roda autoplay se houver mais de um slide
    if (testimonials.length < 2) return;
    const id = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 7000);
    return () => clearInterval(id);
  }, [api]);
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight leading-tight sm:text-4xl md:text-5xl text-foreground">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg leading-snug text-muted-foreground">
            Depoimentos reais de quem já acelerou os resultados com a WebFun
          </p>
        </div>

        <div className="relative">
          <Carousel opts={{ align: "start", loop: true }} setApi={setApi}>
            <CarouselContent>
              {testimonials.map((t) => (
                <CarouselItem key={t.id} className="md:basis-1/3 lg:basis-1/3">
                  <article className="group relative h-full rounded-2xl border bg-card p-6 md:p-7 lg:p-8 shadow-sm transition-all hover:shadow-lg">
                    {/* Selo de aspas elegante */}
                    <div className="pointer-events-none absolute top-3 right-4 hidden md:block">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20">
                        <Quote className="h-4 w-4 text-primary" />
                      </div>
                    </div>

                    {/* Estrelas */}
                    <div className="mb-4 flex gap-1">
                      <span className="text-[20px] font-bold" style={{ color: '#EAB308', letterSpacing: '2px' }}>★★★★★</span>
                    </div>

                    {/* Texto do depoimento */}
                    <p className="mb-6 leading-relaxed text-muted-foreground">{`“${t.text}”`}</p>

                    {/* Pessoa */}
                    <div className="flex items-center gap-4">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        loading="lazy"
                        className="h-12 w-12 rounded-full border object-cover"
                      />
                      <div>
                        <p className="font-semibold text-foreground">{t.name}</p>
                        <p className="text-base font-medium text-primary">{t.company}</p>
                      </div>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-2" />
            <CarouselNext className="-right-2" />
          </Carousel>
          {/* Dots pagination */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`Ir para depoimento ${i + 1}`}
                onClick={() => api?.scrollTo(i)}
                className={
                  (i === selected
                    ? "bg-primary"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50") +
                  " h-2.5 w-2.5 rounded-full transition-colors"
                }
              />
            ))}
          </div>
        </div>

        {/* CTA abaixo */}
        <div className="mt-10 text-center">
          <Button asChild size="lg" className="px-6">
            <a href="/portfolio" className="flex items-center gap-2 justify-center" style={{ textTransform: 'none' }}>
              Veja mais em portfólio
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
