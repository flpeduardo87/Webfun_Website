import { useEffect, useState } from "react";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Check, X, Globe, ShoppingCart, FileText, Megaphone, TrendingUp, Sparkles } from "lucide-react";

const PlanosPage = () => {
  useEffect(() => {
    if (window.location.hash) {
      const el = document.getElementById(window.location.hash.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  // Switcher state e dados dos planos
  const [isMensal, setIsMensal] = useState(true);
  const planos = [
    {
      nome: "Start",
      mensal: { valor: "R$ 99", legenda: "/por mês", ref: "Pagamento recorrente" },
      unico: { valor: "R$ 990", legenda: "pagamento único", ref: "Equivalente a R$ 82,50/mês" },
      beneficios: [
        "Site one-page moderno",
        "Hospedagem SSD dedicada",
        "Otimização SEO básica",
        "Integração WhatsApp",
        "Suporte técnico básico",
        { off: "Blog/Notícias" },
        { off: "Loja virtual" },
      ],
    },
    {
      nome: "Profissional",
      mensal: { valor: "R$ 149", legenda: "/por mês", ref: "Pagamento recorrente" },
      unico: { valor: "R$ 1.490", legenda: "/pagamento único", ref: "Equivalente a R$ 124,17/mês" },
      beneficios: [
        "Site institucional moderno",
        "Hospedagem SSD dedicada",
        "Otimização SEO avançada",
        "Integração WhatsApp",
        "Suporte técnico prioritário",
        "Blog/Notícias",
        { off: "Loja virtual" },
       
      ],
    },
    {
      nome: "E-commerce",
      mensal: { valor: "R$ 249", legenda: "/por mês", ref: "Pagamento recorrente" },
      unico: { valor: "R$ 2.490", legenda: "pagamento único", ref: "Equivalente a R$ 207,50/mês" },
      beneficios: [
        "Loja virtual completa",
        "Hospedagem SSD dedicada",
        "Integração com meios de pagamento",
        "Otimização SEO para e-commerce",
        "Integração WhatsApp e Instagram",
        "Suporte técnico especializado",
        "Landing page exclusiva",
      ],
    },
  ];

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
                  <a href="#pricing" style={{ textTransform: 'none' }}>
                    Ver nossos planos
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="px-6">
                  <Link to="/contato" style={{ textTransform: 'none' }}>Falar com atendente</Link>
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
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&w=1200"
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

  {/* Seção de planos */}
  {/* Seção Nossos Planos - ícones Lucide e botões pill */}
  <section className="py-12">
    <div className="container mx-auto px-4">
      <h2 className="mb-2 text-3xl font-bold tracking-tight leading-tight sm:text-4xl md:text-5xl text-center">Nossos Planos</h2>
      <p className="text-[18px] leading-snug text-muted-foreground text-center mb-8">
        Soluções completas para cada etapa do seu negócio digital. Escolha o serviço ideal e comece hoje mesmo!
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        {/* Card 1 */}
        <div className="bg-card rounded-xl border border-border shadow-sm p-6 flex flex-col items-start gap-3">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20 mb-2">
            <Globe className="h-7 w-7 text-primary" />
          </span>
          <h3 className="font-semibold text-lg mb-1 text-foreground">Criação de Sites</h3>
          <p className="text-base text-muted-foreground">Seu site pronto para gerar resultados. Design moderno, responsivo e otimizado para conversão.</p>
          <Button asChild variant="outline" className="mt-2 px-6 py-2 text-[16px] font-medium rounded-full border-primary text-primary hover:bg-primary/10 transition-colors">
            <a href="#criacao-de-sites" className="flex items-center gap-2">Ver planos <ArrowRight className="w-4 h-4" /></a>
          </Button>
        </div>
        {/* Card 2 */}
        <div className="bg-card rounded-xl border border-border shadow-sm p-6 flex flex-col items-start gap-3">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20 mb-2">
            <ShoppingCart className="h-7 w-7 text-primary" />
          </span>
          <h3 className="font-semibold text-lg mb-1 text-foreground">Lojas Virtuais</h3>
          <p className="text-base text-muted-foreground">Venda online com estrutura profissional. Gestão fácil, segurança e integração com meios de pagamento.</p>
          <Button asChild variant="outline" className="mt-2 px-6 py-2 text-[16px] font-medium rounded-full border-primary text-primary hover:bg-primary/10 transition-colors">
            <a href="#lojas-virtuais" className="flex items-center gap-2">Ver planos <ArrowRight className="w-4 h-4" /></a>
          </Button>
        </div>
        {/* Card 3 */}
        <div className="bg-card rounded-xl border border-border shadow-sm p-6 flex flex-col items-start gap-3">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20 mb-2">
            <FileText className="h-7 w-7 text-primary" />
          </span>
          <h3 className="font-semibold text-lg mb-1 text-foreground">Landing Pages</h3>
          <p className="text-base text-muted-foreground">Páginas que vendem e geram leads. Campanhas, lançamentos e foco total em conversão.</p>
          <Button asChild className="mt-2 px-6 py-2 text-[16px] font-medium rounded-full bg-primary text-white hover:bg-primary/90 transition-colors">
            <a href="#landing-pages" className="flex items-center gap-2">Ver planos <ArrowRight className="w-4 h-4" /></a>
          </Button>
        </div>
        {/* Card 4 */}
        <div className="bg-card rounded-xl border border-border shadow-sm p-6 flex flex-col items-start gap-3">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20 mb-2">
            <Megaphone className="h-7 w-7 text-primary" />
          </span>
          <h3 className="font-semibold text-lg mb-1 text-foreground">Social Media</h3>
          <p className="text-base text-muted-foreground">Gestão e conteúdo para redes sociais. Fortaleça sua marca e engaje seu público.</p>
          <Button asChild className="mt-2 px-6 py-2 text-[16px] font-medium rounded-full bg-primary text-white hover:bg-primary/90 transition-colors">
            <a href="#social-media" className="flex items-center gap-2">Ver planos <ArrowRight className="w-4 h-4" /></a>
          </Button>
        </div>
        {/* Card 5 */}
        <div className="bg-card rounded-xl border border-border shadow-sm p-6 flex flex-col items-start gap-3">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20 mb-2">
            <TrendingUp className="h-7 w-7 text-primary" />
          </span>
          <h3 className="font-semibold text-lg mb-1 text-foreground">Tráfego Pago</h3>
          <p className="text-base text-muted-foreground">Atraia clientes rapidamente. Campanhas segmentadas para resultados imediatos.</p>
          <Button asChild className="mt-2 px-6 py-2 text-[16px] font-medium rounded-full bg-primary text-white hover:bg-primary/90 transition-colors">
            <a href="#trafego-pago" className="flex items-center gap-2">Ver planos <ArrowRight className="w-4 h-4" /></a>
          </Button>
        </div>
        {/* Card 6 */}
        <div className="bg-card rounded-xl border border-border shadow-sm p-6 flex flex-col items-start gap-3">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20 mb-2">
            <Sparkles className="h-7 w-7 text-primary" />
          </span>
          <h3 className="font-semibold text-lg mb-1 text-foreground">IA para Negócios</h3>
          <p className="text-base text-muted-foreground">Automatize sua empresa. Inteligência artificial para produtividade e inovação.</p>
          <Button asChild className="mt-2 px-6 py-2 text-[16px] font-medium rounded-full bg-primary text-white hover:bg-primary/90 transition-colors">
            <a href="#ia-para-negocios" className="flex items-center gap-2">Ver planos <ArrowRight className="w-4 h-4" /></a>
          </Button>
        </div>
      </div>
    </div>
  </section>

      {/* Planos para Criação de Sites */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-2 text-3xl font-bold tracking-tight leading-tight sm:text-4xl md:text-5xl text-center">Planos para Criação de Sites</h2>
          <p className="text-[18px] leading-snug text-muted-foreground text-center mb-6">Escolha o plano ideal para seu site profissional. Pague mensal ou único!</p>
          <div className="flex justify-center items-center gap-4 mb-8">
            <span className={`text-base font-medium ${isMensal ? "text-primary" : "text-foreground"}`}>Pagamento Mensal</span>
            <button
              className="relative inline-flex h-6 w-12 items-center rounded-full bg-muted transition-colors focus:outline-none border border-border"
              aria-label="Alternar pagamento"
              onClick={() => setIsMensal((v) => !v)}
            >
              <span
                className="absolute left-1 top-1 h-4 w-4 rounded-full bg-primary transition-transform"
                style={{ transform: isMensal ? "translateX(0px)" : "translateX(24px)" }}
              ></span>
            </button>
            <span className={`text-base font-medium ${!isMensal ? "text-primary" : "text-foreground"}`}>Pagamento Único</span>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {planos.map((plano, idx) => (
              <div key={plano.nome} className="bg-card rounded-xl border border-border shadow-sm p-6 flex flex-col items-start gap-3">
                <h3 className="font-bold mb-1 text-foreground text-[24px]">{plano.nome}</h3>
                <p className="text-2xl font-bold text-foreground mb-0">
                  {isMensal ? plano.mensal.valor : plano.unico.valor}
                  <span className="text-base font-normal text-muted-foreground"> {isMensal ? plano.mensal.legenda : plano.unico.legenda}</span>
                </p>
                <p className="text-sm text-primary mb-2">{isMensal ? plano.mensal.ref : plano.unico.ref}</p>
                <ul className="mb-4 space-y-1">
                  {plano.beneficios.map((b, i) =>
                    typeof b === "string" ? (
                      <li key={i} className="flex items-center gap-2 text-base text-foreground"><Check className="h-5 w-5 text-primary" />{b}</li>
                    ) : (
                      <li key={i} className="flex items-center gap-2 text-base text-muted-foreground line-through"><X className="h-5 w-5 text-muted-foreground" />{b.off}</li>
                    )
                  )}
                </ul>
                {plano.nome === "Start" ? (
                  <Button asChild variant="outline" className="w-full px-6 py-2 text-[16px] font-medium rounded-full">
                    <a href="#contatar" className="flex items-center gap-2 justify-center">Contratar agora <ArrowRight className="w-4 h-4" /></a>
                  </Button>
                ) : plano.nome === "E-commerce" ? (
                  <Button asChild variant="outline" className="w-full px-6 py-2 text-[16px] font-medium rounded-full">
                    <a href="#contatar" className="flex items-center gap-2 justify-center">Contratar agora <ArrowRight className="w-4 h-4" /></a>
                  </Button>
                ) : (
                  <Button asChild className="w-full px-6 py-2 text-[16px] font-medium rounded-full bg-primary text-white hover:bg-primary/90 transition-colors">
                    <a href="#contatar" className="flex items-center gap-2 justify-center">Contratar agora <ArrowRight className="w-4 h-4" /></a>
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />
    </div>
  );
};

export default PlanosPage;
