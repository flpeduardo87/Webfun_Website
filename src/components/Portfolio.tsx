import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SquareArrowOutUpRight, ArrowRight } from "lucide-react";
import imgFlavia from "@/assets/portfolio/projeto-flavia-sussenbach-advogados.webp";
import imgTresReis from "@/assets/portfolio/projeto-frigorifico-tres-reis.webp";
import imgMielke from "@/assets/portfolio/projeto-mielke-energia-solar.webp";
import imgPerform from "@/assets/portfolio/projeto-perform-solucoes-industriais.webp";
import imgDavet from "@/assets/portfolio/projeto-pousada-luiz-davet.webp";
import imgSerelepe from "@/assets/portfolio/projeto-serelepe-kids.webp";

const projects = [
  {
    category: "Advocacia",
    title: "Flavia Sussenbach Advogados",
    description: "Site institucional para escritório de advocacia, com diversos serviços e contato rápido. Credibilidade e confiança.",
    metric: "Projeto real",
  period: "2025",
  image: imgFlavia,
    link: "https://flaviasussenbachadvogados.com.br/"
  },
  {
    category: "Frigorífico",
    title: "Frigorífico Três Reis",
    description: "Loja virtual para frigorífico, apresentando produtos, estrutura e diferenciais. Foco em geração de novos negócios.",
    metric: "Projeto real",
    period: "2025",
  image: imgTresReis,
    link: "https://frigorificotresreis.com.br/"
  },
  {
    category: "Energia Solar",
    title: "Mielke Energia Solar",
    description: "Site institucional para empresa de energia solar, com portfólio de projetos e simulação online. Destaque para sustentabilidade.",
    metric: "Projeto real",
    period: "2025",
  image: imgMielke,
    link: "https://mielkeenergiasolar.com.br/"
  },
  {
    category: "Indústria",
    title: "Perform Soluções Industriais",
    description: "Site institucional para indústria, com catálogo de soluções e área técnica. Foco em captação de leads qualificados.",
    metric: "Projeto real",
    period: "2025",
  image: imgPerform,
    link: "https://perform.ind.br/"
  },
  {
    category: "Turismo",
    title: "Pousada Luiz Davet",
    description: "Site institucional para pousada, com galeria de fotos, reservas e informações turísticas. Experiência digital para hóspedes.",
    metric: "Projeto real",
    period: "2025",
  image: imgDavet,
    link: "https://pousadaluizdavet.com.br/"
  },
  {
    category: "E-commerce",
    title: "Serelepe Kids",
    description: "Loja virtual para moda infantil, calculadora de fretes, pagamento online e integração com redes sociais. Foco em vendas.",
    metric: "Projeto real",
    period: "2025",
  image: imgSerelepe,
    link: "https://serelepekids.com/"
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
                  <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-[12px] font-medium bg-primary/10 text-primary border-transparent">
                            {project.category === "E-commerce" || project.title.toLowerCase().includes("loja") || project.description.toLowerCase().includes("loja") ? "Loja Virtual" : "Website"}
                    </Badge>
                    <Badge variant="outline" className="text-[12px] font-medium bg-primary/10 text-primary border-transparent">
                      {project.period}
                    </Badge>
                  </div>
                  <Button
                    variant="default"
                    size="icon"
                    className="bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500 h-10 w-10"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Ver projeto ${project.title}`}>
                      <SquareArrowOutUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="px-6">
            <a href="/criacao-de-sites#planos" className="flex items-center gap-2 justify-center" style={{ textTransform: 'none' }}>
              Quero meu site profissional
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
