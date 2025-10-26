import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { FAQ } from "@/components/FAQ";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 pt-8 pb-16 md:pt-14 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <p className="text-base font-semibold uppercase tracking-wider text-primary/80">Serviços</p>
              <h1 className="font-bold tracking-tight leading-tight text-[32px] sm:text-[40px] md:text-[56px] lg:text-[60px]">
                Soluções completas para o seu negócio
              </h1>
              <p className="text-[18px] leading-snug text-muted-foreground max-w-xl">
                Da criação ao crescimento contínuo: sites, SEO, performance e manutenção.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="px-6 flex items-center gap-2">
                  <a href="/pricing#pricing" className="flex items-center gap-2">
                    Ver Nossos Planos
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </a>
                </Button>
                <Button asChild variant="outline" className="px-6 flex items-center gap-2">
                  <a
                    href={`https://wa.me/5547997618824?text=${encodeURIComponent('Olá! Gostaria de conversar sobre um projeto.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Falar com Especialista
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl border">
                <img
                  src="https://images.pexels.com/photos/5380651/pexels-photo-5380651.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Design e desenvolvimento de sites"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Services />
      <Process />
      <FAQ />
    </div>
  );
}
