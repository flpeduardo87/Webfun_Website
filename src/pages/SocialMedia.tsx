import { Megaphone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";

export default function SocialMediaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 pt-8 pb-16 md:pt-14 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-4 flex flex-col justify-center h-full">
              <div className="mb-2">
                <p className="text-base font-semibold uppercase tracking-wider text-primary/80">Social Media</p>
              </div>
              <h1 className="font-bold tracking-tight leading-tight text-[32px] sm:text-[40px] md:text-[56px] lg:text-[60px]">
                Gestão e conteúdo<br />para redes sociais
              </h1>
              <p className="text-[18px] leading-snug text-muted-foreground max-w-xl">
                Gerenciamos suas redes sociais com estratégia, criatividade e foco em engajamento e resultados.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="px-6 flex items-center gap-2">
                  <a
                    href={`https://wa.me/5547997618824?text=${encodeURIComponent('Olá! Gostaria de melhorar minha presença nas redes sociais.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Falar com Especialista
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="px-6">
                  <a href="/portfolio">Ver nosso Portfólio</a>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&w=600" alt="Social Media" className="rounded-2xl shadow-lg w-full h-auto" />
            </div>
          </div>
        </div>
      </section>
      {/* ...Checklist, Benefícios, Depoimentos, FAQ... */}
      <Testimonials />
      <FAQ />
    </div>
  );
}
