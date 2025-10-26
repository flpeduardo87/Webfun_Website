import { Button } from "@/components/ui/button";
import { Check, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in space-y-8">
            <div className="space-y-4">
              <h1 className="font-bold tracking-tight leading-tight text-[36px] sm:text-[36px] md:text-[62px] lg:text-[64px]">
                A melhor solução{" "}
                <span className="text-primary">para o seu negócio</span>{" "}
                decolar na internet
              </h1>
              <p className="text-[18px] leading-snug text-muted-foreground">
                Criamos sites rápidos, bonitos e otimizados para converter visitantes em clientes — com suporte dedicado.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3">
              {[
                "Sites modernos e responsivos",
                "SEO e performance desde o lançamento",
                "Suporte e manutenção dedicada",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-base font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="px-6 text-base shadow-lg hover:shadow-xl transition-shadow">
                <a href="/pricing">Nossos Planos</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-6 text-base">
                <a href="/contato">Falar com Especialista</a>
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="animate-slide-up relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={heroImage}
                alt="Profissional de negócios"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute top-60 left-6 rounded-xl bg-card p-4 shadow-lg border animate-scale-in hidden md:block">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-base font-semibold">Orçamento gratuito</p>
                  <p className="text-xs text-muted-foreground">Sem compromisso</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 rounded-xl bg-card p-4 shadow-lg border animate-fade-in hidden md:block">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-base font-semibold">Aumente suas vendas</p>
                  <p className="text-xs text-muted-foreground">Campanhas focadas em conversão</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};