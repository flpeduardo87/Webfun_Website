import { Button } from "@/components/ui/button";
import { Check, Clock3, Search, Smartphone, Share2, TrendingUp, Pencil, Headphones, ShieldCheck, ArrowRight } from "lucide-react";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";

export default function SiteInstitucionalPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 pt-8 pb-16 md:pt-14 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-4 flex flex-col justify-center h-full">
              <div className="mb-2">
                <p className="text-base font-semibold uppercase tracking-wider text-primary/80">Criação de Sites</p>
              </div>
              <h1 className="font-bold tracking-tight leading-tight text-[32px] sm:text-[40px] md:text-[56px] lg:text-[60px]">
                Site profissional,<br></br>rápido e moderno
              </h1>
              <p className="text-[18px] leading-snug text-muted-foreground max-w-xl">
                Desenvolvemos sites institucionais modernos, responsivos e otimizados para gerar credibilidade e resultados reais para sua empresa.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="px-6 flex items-center gap-2">
                  <a
                    href={`https://wa.me/5547997618824?text=${encodeURIComponent('Olá! Gostaria de criar um site institucional para minha empresa.')}`}
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
              <div className="flex items-center gap-4 pt-6">
                <div className="flex -space-x-4">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Pessoa 1" className="h-12 w-12 rounded-full border-2 border-white shadow" />
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Pessoa 2" className="h-12 w-12 rounded-full border-2 border-white shadow" />
                  <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="Pessoa 3" className="h-12 w-12 rounded-full border-2 border-white shadow" />
                </div>
                <div>
                  <span className="text-base text-gray-700 block leading-tight ml-11 sm:ml-0">
                    Mais de <span className="font-bold text-gray-900">200</span> sites entregues para clientes em todo o Brasil.
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl border">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Site institucional moderno"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Checklist de benefícios */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-8">
            <h2 className="mb-4 text-3xl font-bold tracking-tight leading-tight sm:text-4xl md:text-5xl">
              Por que ter um site institucional?
            </h2>
            <p className="text-[18px] leading-snug text-muted-foreground">
              Confira os principais benefícios de ter um site profissional para sua empresa:
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
            {[
              {
                icon: <span className="bg-primary/10 p-3 rounded-full flex items-center justify-center"><Check className="h-7 w-7 text-primary" /></span>,
                title: "Credibilidade e confiança",
                text: "Transmita profissionalismo e gere confiança para clientes e parceiros.",
              },
              {
                icon: <span className="bg-primary/10 p-3 rounded-full flex items-center justify-center"><Clock3 className="h-7 w-7 text-primary" /></span>,
                title: "Disponível 24h",
                text: "Seu negócio acessível a qualquer hora, todos os dias.",
              },
              {
                icon: <span className="bg-primary/10 p-3 rounded-full flex items-center justify-center"><Search className="h-7 w-7 text-primary" /></span>,
                title: "Facilidade no Google",
                text: "Seja encontrado facilmente por quem busca seus serviços.",
              },
              {
                icon: <span className="bg-primary/10 p-3 rounded-full flex items-center justify-center"><Smartphone className="h-7 w-7 text-primary" /></span>,
                title: "Design responsivo",
                text: "Seu site perfeito em qualquer dispositivo: celular, tablet ou computador.",
              },
              {
                icon: <span className="bg-primary/10 p-3 rounded-full flex items-center justify-center"><Share2 className="h-7 w-7 text-primary" /></span>,
                title: "Integração digital",
                text: "Conecte WhatsApp, redes sociais e outros canais ao seu site.",
              },
              {
                icon: <span className="bg-primary/10 p-3 rounded-full flex items-center justify-center"><TrendingUp className="h-7 w-7 text-primary" /></span>,
                title: "Otimização para conversão",
                text: "Transforme visitantes em clientes com estratégias de conversão.",
              },
              {
                icon: <span className="bg-primary/10 p-3 rounded-full flex items-center justify-center"><Pencil className="h-7 w-7 text-primary" /></span>,
                title: "Gestão prática",
                text: "Atualize conteúdos facilmente, sem depender de terceiros.",
              },
              {
                icon: <span className="bg-primary/10 p-3 rounded-full flex items-center justify-center"><Headphones className="h-7 w-7 text-primary" /></span>,
                title: "Suporte dedicado",
                text: "Conte com atendimento especializado sempre que precisar.",
              },
              {
                icon: <span className="bg-primary/10 p-3 rounded-full flex items-center justify-center"><ShieldCheck className="h-7 w-7 text-primary" /></span>,
                title: "Segurança de dados",
                text: "Proteja as informações da sua empresa e dos seus clientes com tecnologia de ponta.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-muted rounded-xl shadow p-6 flex flex-col items-start gap-4 border border-border/40">
                <div>{item.icon}</div>
                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-base">{item.text}</p>
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
}
