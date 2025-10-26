import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SquareArrowOutUpRight, ArrowRight } from "lucide-react";

const projects = [
  {
    category: "Website",
    title: "Clínica Médica Saúde Total",
    description: "Site institucional com agendamento online",
    metric: "+58% conversões",
    period: "3 meses",
    image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    category: "E-commerce",
    title: "Arte & Mania",
    description: "Loja virtual completa",
    metric: "+125% vendas",
    period: "6 meses",
    image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    category: "Landing Page",
    title: "Academia de Negócios",
    description: "Landing page para lançamento",
    metric: "72% conversão",
    period: "1ª semana",
    image: "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-8">
          <h2 className="mb-4 text-3xl font-bold tracking-tight leading-tight sm:text-4xl md:text-5xl">
            Resultados que falam por si
          </h2>
          <p className="text-[18px] leading-snug text-muted-foreground">
            Dezenas de empresas já aumentaram suas vendas com nossos sites profissionais.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group animate-fade-in overflow-hidden rounded-2xl border bg-card shadow-sm transition-all hover:shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary/90 backdrop-blur">
                    {project.category}
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                <p className="mb-4 text-base text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-bold text-primary">{project.metric}</p>
                    <p className="text-xs text-muted-foreground">{project.period}</p>
                  </div>
                  <Button
                    variant="default"
                    size="icon"
                    className="bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500 h-10 w-10"
                  >
                    <SquareArrowOutUpRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="px-6">
            <a href="/pricing#pricing" className="flex items-center gap-2 justify-center">
              Quero meu Site Profissional
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
