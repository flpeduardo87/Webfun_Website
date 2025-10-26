import { useEffect } from "react";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PlansSection } from "@/components/PlansSection";

const PricingPage = () => {
  useEffect(() => {
    if (window.location.hash) {
      const el = document.getElementById(window.location.hash.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);
  return (
    <div className="min-h-screen">
      {/* Hero padrão */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 pt-8 pb-16 md:pt-14 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-5 flex flex-col justify-center h-full">
              <div className="mb-2">
                <p className="text-base font-semibold uppercase tracking-wider text-primary/80">Planos e Preços</p>
              </div>
              <h1 className="font-bold tracking-tight leading-tight text-[32px] sm:text-[40px] md:text-[56px] lg:text-[60px]">
                Flexibilidade e transparência
              </h1>
              <p className="text-[18px] leading-snug text-muted-foreground max-w-xl">
                Escolha o plano ideal para cada fase do seu projeto digital. Compare recursos, valores e benefícios para evoluir com segurança.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="px-6 flex items-center gap-2">
                  <a href="#pricing">
                    Ver Nossos Planos
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="px-6">
                  <Link to="/contato">Falar com Especialista</Link>
                </Button>
              </div>
              <div className="flex items-center gap-4 pt-6">
                <div className="flex items-center gap-4 pt-6">
                  <div className="flex -space-x-4">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Pessoa 1" className="h-12 w-12 rounded-full border-2 border-white shadow" />
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Pessoa 2" className="h-12 w-12 rounded-full border-2 border-white shadow" />
                    <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="Pessoa 3" className="h-12 w-12 rounded-full border-2 border-white shadow" />
                  </div>
                  <span className="text-base text-gray-700 block leading-tight ml-11 sm:ml-0">
                    Mais de <span className="font-bold text-gray-900">200</span> projetos entregues para clientes em todo o Brasil.
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl border">
                <img
                
                  src="https://images.pexels.com/photos/3184632/pexels-photo-3184632.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Análise de custos e benefícios"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>


  {/* Nossos Planos */}
  <PlansSection />

      {/* Depoimentos */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />
    </div>
  );
};

export default PricingPage;
