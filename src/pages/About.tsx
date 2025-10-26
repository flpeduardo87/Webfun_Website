import { Problems } from "@/components/Problems";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Briefcase, Users, Star, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
  <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 pt-8 pb-16 md:pt-14 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <p className="text-base font-semibold uppercase tracking-wider text-primary/80">Quem somos</p>
              <h1 className="font-bold tracking-tight leading-tight text-[32px] sm:text-[40px] md:text-[56px] lg:text-[60px]">
                Nós transformamos ideias em resultados
              </h1>
              <p className="text-[18px] leading-snug text-muted-foreground max-w-xl">
                Unimos estratégia, design e tecnologia para criar experiências digitais que geram valor para o seu negócio.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="px-6 flex items-center gap-2">
                  <Link to="/portfolio">
                    Ver Portfólio
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="px-6">
                  <Link to="/contato">Falar com Especialista</Link>
                </Button>
              </div>
              <div className="flex items-center gap-4 pt-6">
                <div className="flex -space-x-4">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Pessoa 1" className="h-12 w-12 rounded-full border-2 border-white shadow" />
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Pessoa 2" className="h-12 w-12 rounded-full border-2 border-white shadow" />
                  <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="Pessoa 3" className="h-12 w-12 rounded-full border-2 border-white shadow" />
                </div>
                <div>
                  <span className="text-base text-gray-700 block leading-tight ml-11 sm:ml-0">
                    Mais de <span className="font-bold text-gray-900">200</span> projetos entregues para clientes em todo o Brasil.
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl border">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Nossa equipe em colaboração"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Problems />
      <Process />
      <Testimonials />
      <FAQ />
    </div>
  );
}
