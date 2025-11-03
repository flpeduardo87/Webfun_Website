import { Button } from "@/components/ui/button";
import { Check, TrendingUp, ArrowRight, Headset } from "lucide-react";
import heroImage from "@/assets/hero-image.webp";

export const Hero = () => {
  return (
  <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 pt-[25px] pb-12 md:pb-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in space-y-8">
            <div className="space-y-3">
              <h1 className="font-bold tracking-tight leading-[0.90] md:leading-[1.00] text-[42px] sm:text-[42px] md:text-[70px] lg:text-[70px] mb-2 mt-[20px] md:mt-[-90px]">
                Aumente suas{" "}
                <span>vendas</span>{" "}
                com os nossos serviços
              </h1>
                  <p className="text-[18px] leading-snug text-muted-foreground mb-0">
                Impulsione seu negócio com soluções. Sites,  landing pages, lojas virtuais e muito mais. <b>Planos a partir de apenas R$ 99,00/mês.</b>
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3 -mt-4 block md:hidden">
            
              {["Mais resultados para sua empresa",
                "Mais praticidade no seu dia a dia",
                "Mais eficiência para seu negócio",
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
                <a href="/#services" className="flex items-center gap-2">
                  Nossos serviços
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-6 text-base">
                <a href="https://wa.me/5547997618824?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20entender%20como%20voc%C3%AAs%20podem%20ajudar%20meu%20neg%C3%B3cio.&utm_source=site&utm_medium=hero&utm_campaign=whatsapp_cta&utm_content=hero_criacao_sites_sec" className="flex items-center gap-2">
                  Falar com atendente
                  <Headset className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Image + Floating Cards */}
          <div className="animate-slide-up relative flex items-center justify-center">
            <div className="relative w-full">
              <img
                src={heroImage}
                alt="Profissional de negócios"
                className="max-w-full h-auto relative top-[-20px]"
                fetchPriority="high"
                decoding="async"
                sizes="(max-width: 1024px) 100vw, 50vw"
                width={1200}
                height={900}
              />
              {/* Mobile mini-cards (near image, 3 per row, desktop untouched) */}
              <div className="md:hidden absolute -bottom-6 left-0 translate-x-0 w-full grid grid-cols-3 gap-2">
                {/* Receita */}
                <div className="rounded-lg border bg-card/95 backdrop-blur p-2 shadow-sm -translate-y-[200px] col-start-1 justify-self-start z-10">
                  <div className="flex items-center gap-1">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                      <TrendingUp className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <span className="text-[11px] font-semibold text-foreground">Receita</span>
                  </div>
                  <div className="mt-1 flex items-end justify-between">
                    <span className="text-[12px] font-bold text-foreground leading-none">R$ 26,8k</span>
                    <span className="text-[10px] text-green-600 font-semibold leading-none">+27,6%</span>
                  </div>
                </div>

                {/* Avaliações */}
                <div className="rounded-lg border bg-card/95 backdrop-blur p-2 shadow-sm -translate-x-[40px]">
                  <div className="flex items-center gap-1">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <span className="text-[11px] font-semibold text-foreground">Avaliações</span>
                  </div>
                  <div className="mt-1">
                    <span className="text-[11px] font-semibold leading-tight text-foreground line-clamp-2">Henrique avaliou um novo produto</span>
                  </div>
                </div>

                {/* Notificações */}
                <div className="rounded-lg border bg-card/95 backdrop-blur p-2 shadow-sm -translate-y-[120px]">
                  <div className="flex items-center gap-1">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                      <svg width="16" height="16" fill="none"><circle cx="8" cy="8" r="8" fill="#fbbf24"/><text x="8" y="11" text-anchor="middle" font-size="8" fill="#fff">S</text></svg>
                    </div>
                    <span className="text-[11px] font-semibold text-foreground">Notificações</span>
                  </div>
                  <div className="mt-1">
                    <span className="text-[11px] font-semibold leading-tight text-foreground line-clamp-2">Sofia fez um pedido na sua loja</span>
                  </div>
                </div>
              </div>
              {/* Linha divisória inferior */}
          {/* ...restante do conteúdo do Hero... */}
        </div>
      </div>
      {/* Linha divisória inferior - fora do bloco da imagem, no final do Hero */}
            </div>
            {/* Floating Cards - Modern Style */}
            {/* Receita Card */}
            <div className="absolute top-[150px] left-[660px] bg-white dark:bg-background rounded-xl shadow-lg border p-3 w-[220px] h-[120px] flex flex-col justify-between hidden md:flex">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <span className="font-semibold text-sm text-foreground">Receita</span>
                <span className="ml-auto text-xs text-muted-foreground">Total</span>
              </div>
              <div className="flex items-end justify-between mt-2">
                <span className="text-1xl font-bold text-foreground">R$ 26.859,00</span>
                <span className="text-xs text-green-600 font-semibold">+27,6%</span>
              </div>
              <div className="mt-2">
                <svg width="100%" height="24" viewBox="0 0 120 24" fill="none"><path d="M0 20 Q 20 10 40 18 Q 60 26 80 8 Q 100 16 120 4" stroke="#22c55e" strokeWidth="2" fill="none"/></svg>
              </div>
            </div>
            {/* Avaliações Card */}
            <div className="absolute top-[320px] right-[30px] bg-white dark:bg-background rounded-xl shadow-lg border p-3 w-[220px] h-[120px] flex flex-col justify-between hidden md:flex">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <span className="font-semibold text-sm text-foreground">Avaliações</span>
                <span className="ml-auto text-xs text-muted-foreground">Ver todas</span>
              </div>
              <div className="flex items-end justify-between mt-2">
                <span className="font-bold text-[14px] leading-tight text-foreground">Henrique avaliou um novo produto</span>
                <span className="text-xs text-blue-600 font-semibold">Agora</span>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <div className="flex w-full items-center justify-between">
                  <svg className="-mt-3" width="80" height="16" viewBox="0 0 80 16" fill="none"><path d="M0 12 Q 20 2 40 10 Q 60 18 80 6" stroke="#3b82f6" strokeWidth="2" fill="none"/></svg>
                  <span className="text-yellow-500 text-lg -mt-3 ml-auto">★★★★★</span>
                </div>
              </div>
            </div>
            {/* Notificações Card */}
            <div className="absolute bottom-[100px] left-[730px] bg-white dark:bg-background rounded-xl shadow-lg border p-3 w-[220px] h-[120px] flex flex-col justify-between hidden md:flex">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="10" fill="#fbbf24"/><text x="10" y="15" textAnchor="middle" fontSize="12" fill="#fff">S</text></svg>
                </div>
                <span className="font-semibold text-sm text-foreground">Notificações</span>
                <span className="ml-auto text-xs text-muted-foreground whitespace-nowrap">Ver todas</span>
              </div>
              <div className="flex items-end justify-between mt-2">
                <span className="font-bold text-[14px] leading-tight text-foreground">Sofia fez um pedido na sua loja</span>
                <span className="text-xs text-blue-600 font-semibold">Agora</span>
              </div>
              <div className="mt-2">
                <svg className="-mt-3" width="100%" height="24" viewBox="0 0 120 24" fill="none"><path d="M0 20 Q 30 10 60 18 Q 90 26 120 8" stroke="#fbbf24" strokeWidth="2" fill="none"/></svg>
              </div>
            </div>
          </div>
  </section>
  );
};