import { Portfolio } from "@/components/Portfolio";
import { Testimonials } from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Briefcase, Clock, Award, ArrowRight } from "lucide-react";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
  <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 pt-8 pb-16 md:pt-14 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <p className="text-base font-semibold uppercase tracking-wider text-primary/80">Portfólio</p>
              <h1 className="font-bold tracking-tight leading-tight text-[32px] sm:text-[40px] md:text-[56px] lg:text-[60px]">
                Projetos que geram impacto real
              </h1>
              <p className="text-[18px] leading-snug text-muted-foreground max-w-xl">
                Seleção de sites, e-commerces e páginas de alta conversão que entregamos.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="px-6">
                  <a
                    href={`https://wa.me/5547997618824?text=${encodeURIComponent('Olá! Vi um projeto no portfólio e quero um site assim.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 justify-center"
                  >
                    Quero um Projeto assim
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="px-6">
                  <Link to="/servicos">Conhecer Serviços</Link>
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-2">
                {[
                  { label: "Projetos ativos", value: "+38", icon: Briefcase },
                  { label: "Tempo aproximado", value: "7 dias", icon: Clock },
                  { label: "Sites premiados", value: "+12", icon: Award },
                ].map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="flex flex-col items-start justify-center gap-2 rounded-xl border bg-card p-4 text-left">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 mb-1">
                        <Icon className="h-5 w-5 text-primary" />
                      </span>
                      <div className="font-bold leading-tight" style={{ fontSize: '20px' }}>{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {[
                "https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg?auto=compress&cs=tinysrgb&w=800",
                "https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=800",
                "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
                "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=800",
              ].map((src, i) => (
                <div key={i} className="aspect-[4/3] overflow-hidden rounded-2xl border shadow-lg">
                  <img src={src} alt="Projeto" className="h-full w-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Portfolio />
      <Testimonials />
    </div>
  );
}
