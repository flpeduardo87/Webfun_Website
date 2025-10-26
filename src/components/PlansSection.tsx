import { Globe, ShoppingCart, ArrowRight, FileText, Megaphone, TrendingUp, Sparkles, Check, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

function PlanosCriacaoSitesSection() {
  const [billingType, setBillingType] = useState<'anual' | 'mensal'>('anual');
  const plansSites = [
    {
      name: 'Start',
      anual: { price: 'R$ 990', sub: 'Equivalente a R$ 82,50/mês', period: '/ano' },
      mensal: { price: 'R$ 99', sub: 'Equivalente a R$ 99/mês', period: '/mês' },
      features: [
        { text: 'Site one-page moderno', included: true },
        { text: 'Otimização SEO básica', included: true },
        { text: 'Integração WhatsApp', included: true },
        { text: 'Hospedagem inclusa', included: true },
        { text: 'Landing page exclusiva', included: false },
        { text: 'Loja virtual', included: false },
        { text: 'Suporte prioritário', included: false },
      ],
      link: 'https://wa.me/5547997618824?text=Olá! Tenho interesse no plano Start.'
    },
    {
      name: 'Profissional',
      anual: { price: 'R$ 1.490', sub: 'Equivalente a R$ 124,17/mês', period: '/ano' },
      mensal: { price: 'R$ 149', sub: 'Equivalente a R$ 149/mês', period: '/mês' },
      features: [
        { text: 'Site institucional moderno', included: true },
        { text: 'Landing page de alta conversão', included: true },
        { text: 'Otimização SEO avançada', included: true },
        { text: 'Integração WhatsApp', included: true },
        { text: 'Suporte técnico prioritário', included: true },
        { text: 'Loja virtual', included: false },
        { text: 'Gestão de tráfego pago', included: false },
      ],
      link: 'https://wa.me/5547997618824?text=Olá! Tenho interesse no plano Profissional.'
    },
    {
      name: 'E-commerce',
      anual: { price: 'R$ 2.490', sub: 'Equivalente a R$ 207,50/mês', period: '/ano' },
      mensal: { price: 'R$ 249', sub: 'Equivalente a R$ 249/mês', period: '/mês' },
      features: [
        { text: 'Loja virtual completa', included: true },
        { text: 'Integração com meios de pagamento', included: true },
        { text: 'Otimização SEO para e-commerce', included: true },
        { text: 'Integração WhatsApp e Instagram', included: true },
        { text: 'Suporte técnico especializado', included: true },
        { text: 'Gestão de tráfego pago', included: true },
        { text: 'Landing page exclusiva', included: true },
      ],
      link: 'https://wa.me/5547997618824?text=Olá! Tenho interesse no plano E-commerce.'
    },
  ];
  return (
    <section className="py-16 bg-background" id="planos-criacao-sites">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Planos para Criação de Sites</h2>
          <p className="text-lg text-muted-foreground">Escolha o plano ideal para seu site profissional. Pague mensal ou anual e economize!</p>
        </div>
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-4">
            <span className={`text-base font-medium ${billingType === 'mensal' ? 'text-black dark:text-white' : 'text-muted-foreground'}`}>Mensal</span>
            <button
              type="button"
              aria-label="Alternar cobrança"
              className={`relative w-14 h-7 rounded-full bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50`}
              onClick={() => setBillingType(billingType === 'anual' ? 'mensal' : 'anual')}
            >
              <span
                className="absolute top-1 w-5 h-5 rounded-full bg-white shadow transition-all"
                style={{ left: billingType === 'anual' ? 'calc(100% - 1.5rem)' : '0.25rem' }}
              />
            </button>
            <span className={`text-base font-medium ${billingType === 'anual' ? 'text-black dark:text-white' : 'text-muted-foreground'}`}>Anual <span className="font-normal">(-10%)</span></span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plansSites.map((plan, idx) => (
            <div key={plan.name} className="rounded-2xl border bg-white dark:bg-muted p-8 flex flex-col items-center shadow-lg">
              <h3 className="text-2xl font-bold mb-2 text-center">{plan.name}</h3>
              <div className="text-3xl font-bold mb-0 text-black dark:text-white">{plan[billingType].price} <span className="text-base font-normal text-muted-foreground">{plan[billingType].period}</span></div>
              <div className="text-sm font-medium text-primary mb-4">{plan[billingType].sub}</div>
              <ul className="mb-6 space-y-2 w-full">
                {plan.features.map((feature, i) => (
                  <li key={i} className={`flex items-center gap-2 ${!feature.included ? 'opacity-70' : ''}`}>
                    <span className={`flex items-center justify-center h-6 w-6 rounded-full ${feature.included ? 'bg-primary/10' : 'bg-gray-200 dark:bg-gray-700'}`}>
                      {feature.included ? (
                        <Check className="h-4 w-4 text-primary" />
                      ) : (
                        <X className="h-4 w-4 text-muted-foreground" />
                      )}
                    </span>
                    {feature.included ? (
                      feature.text
                    ) : (
                      <span className="line-through">{feature.text}</span>
                    )}
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="w-full font-medium rounded-full py-4 text-base">
                <a href={plan.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 justify-center">
                  Contratar Agora
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlanosLandingPageSection() {
  return (
    <section id="planos-landing-page" className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Landing Page Profissional</h2>
      <div className="flex justify-center">
        <div className="rounded-2xl border shadow-lg p-8 flex flex-col items-center bg-white dark:bg-muted w-full max-w-md">
          <div className="mb-4 flex items-center justify-center h-14 w-14 rounded-full bg-primary/10">
            <FileText className="h-7 w-7 text-primary" />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-center">Landing Page</h3>
          <div className="mb-2">
            <span className="text-3xl font-bold text-black dark:text-white">R$ 500</span>
          </div>
          <div className="mb-4">
            <span className="text-sm text-primary font-medium">Equivalente a R$ 41,67/mês</span>
          </div>
          
          <div className="mb-6 w-full">
            <ul className="space-y-2">
              <li className="flex items-center gap-2"><span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary/10"><Check className="w-4 h-4 text-primary" /></span>Design profissional</li>
              <li className="flex items-center gap-2"><span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary/10"><Check className="w-4 h-4 text-primary" /></span>Página otimizada</li>
              <li className="flex items-center gap-2"><span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary/10"><Check className="w-4 h-4 text-primary" /></span>Formulário de contato</li>
              <li className="flex items-center gap-2"><span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary/10"><Check className="w-4 h-4 text-primary" /></span>Integração com WhatsApp</li>
              <li className="flex items-center gap-2"><span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary/10"><Check className="w-4 h-4 text-primary" /></span>Entrega rápida</li>
            </ul>
          </div>
          <Button asChild size="lg" className="w-full justify-center">
            <a href="#contato" className="inline-flex items-center gap-2 justify-center w-full text-center">
              Solicitar Landing Page
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function PlanosSocialMediaSection() {
  const plans = [
    {
      name: 'Básico',
      price: 'R$ 299',
      sub: '8 postagens mensais',
      period: '/mês',
      features: [
        { text: 'Artes personalizadas', included: true },
        { text: 'Agendamento de posts', included: true },
        { text: 'Relatório básico de desempenho', included: true },
        { text: 'Consultoria mensal', included: false },
        { text: 'Suporte prioritário', included: false },
      ],
      link: 'https://wa.me/5547997618824?text=Olá! Tenho interesse no plano Social Media Básico.'
    },
    {
      name: 'Profissional',
      price: 'R$ 499',
      sub: '16 postagens mensais',
      period: '/mês',
      features: [
        { text: 'Artes personalizadas', included: true },
        { text: 'Agendamento de posts', included: true },
        { text: 'Relatório avançado de desempenho', included: true },
        { text: 'Consultoria mensal', included: true },
        { text: 'Suporte prioritário', included: false },
      ],
      link: 'https://wa.me/5547997618824?text=Olá! Tenho interesse no plano Social Media Profissional.'
    },
    {
      name: 'Premium',
      price: 'R$ 799',
      sub: '30 postagens mensais',
      period: '/mês',
      features: [
        { text: 'Artes personalizadas', included: true },
        { text: 'Agendamento de posts', included: true },
        { text: 'Relatório premium de desempenho', included: true },
        { text: 'Consultoria estratégica', included: true },
        { text: 'Suporte prioritário', included: true },
      ],
      link: 'https://wa.me/5547997618824?text=Olá! Tenho interesse no plano Social Media Premium.'
    },
  ];
  return (
    <section className="py-16 bg-background" id="planos-social-media">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Planos de Social Media</h2>
          <p className="text-lg text-muted-foreground">Escolha o plano ideal para fortalecer sua presença nas redes sociais.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div key={plan.name} className="rounded-2xl border bg-white dark:bg-muted p-8 flex flex-col items-center shadow-lg">
              <h3 className="text-2xl font-bold mb-2 text-center">{plan.name}</h3>
              <div className="text-3xl font-bold mb-0 text-black dark:text-white">{plan.price} <span className="text-base font-normal text-muted-foreground">{plan.period}</span></div>
              <div className="text-sm font-medium text-primary mb-4">{plan.sub}</div>
              <ul className="mb-6 space-y-2 w-full">
                {plan.features.map((feature, i) => (
                  <li key={i} className={`flex items-center gap-2 ${!feature.included ? 'opacity-70' : ''}`}>
                    <span className={`flex items-center justify-center h-6 w-6 rounded-full ${feature.included ? 'bg-primary/10' : 'bg-gray-200 dark:bg-gray-700'}`}>
                      {feature.included ? (
                        <Check className="h-4 w-4 text-primary" />
                      ) : (
                        <X className="h-4 w-4 text-muted-foreground" />
                      )}
                    </span>
                    {feature.included ? (
                      feature.text
                    ) : (
                      <span className="line-through">{feature.text}</span>
                    )}
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="w-full font-medium rounded-full py-4 text-base">
                <a href={plan.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 justify-center">
                  Contratar Agora
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const PlansSection = () => {
  return (
    <>
      {/* Nossos Planos */}
      <section className="py-16 bg-background" id="nossos-planos">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Nossos Planos</h2>
            <p className="text-lg text-muted-foreground">Soluções completas para cada etapa do seu negócio digital. Escolha o serviço ideal e comece hoje mesmo!</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {/* Card: Criação de Sites */}
            <div className="rounded-2xl border shadow-lg p-8 flex flex-col items-start bg-white dark:bg-muted">
              <div className="mb-4 flex items-center justify-center h-14 w-14 rounded-full bg-primary/10">
                <Globe className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-left">Criação de Sites</h3>
              <div className="text-muted-foreground mb-6 text-left">
                <p>Seu site pronto para gerar resultados.</p>
                <p>Design moderno, responsivo e otimizado para conversão.</p>
              </div>
              <Button asChild size="lg" className="justify-start">
                <a href="#planos-criacao-sites" className="inline-flex items-center gap-2">
                  Ver planos
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
            {/* Card: Lojas Virtuais */}
            <div className="rounded-2xl border shadow-lg p-8 flex flex-col items-start bg-white dark:bg-muted">
              <div className="mb-4 flex items-center justify-center h-14 w-14 rounded-full bg-primary/10">
                <ShoppingCart className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-left">Lojas Virtuais</h3>
              <div className="text-muted-foreground mb-6 text-left">
                <p>Venda online com estrutura profissional.</p>
                <p>Gestão fácil, segurança e integração com meios de pagamento.</p>
              </div>
              <Button asChild size="lg" className="justify-start">
                <a href="/lojas-virtuais" className="inline-flex items-center gap-2">
                  Ver planos
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
            {/* Card: Landing Pages */}
            <div className="rounded-2xl border shadow-lg p-8 flex flex-col items-start bg-white dark:bg-muted">
              <div className="mb-4 flex items-center justify-center h-14 w-14 rounded-full bg-primary/10">
                <FileText className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-left">Landing Pages</h3>
              <div className="text-muted-foreground mb-6 text-left">
                <p>Páginas que vendem e geram leads.</p>
                <p>Campanhas, lançamentos e foco total em conversão.</p>
              </div>
              <Button asChild size="lg" className="justify-start">
                <a href="/landing-pages" className="inline-flex items-center gap-2">
                  Ver planos
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
            {/* Card: Social Media */}
            <div className="rounded-2xl border shadow-lg p-8 flex flex-col items-start bg-white dark:bg-muted">
              <div className="mb-4 flex items-center justify-center h-14 w-14 rounded-full bg-primary/10">
                <Megaphone className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-left">Social Media</h3>
              <div className="text-muted-foreground mb-6 text-left">
                <p>Gestão e conteúdo para redes sociais.</p>
                <p>Fortaleça sua marca e engaje seu público.</p>
              </div>
              <Button asChild size="lg" className="justify-start">
                <a href="#planos-social-media" className="inline-flex items-center gap-2">
                  Ver planos
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
            {/* Card: Tráfego Pago */}
            <div className="rounded-2xl border shadow-lg p-8 flex flex-col items-start bg-white dark:bg-muted">
              <div className="mb-4 flex items-center justify-center h-14 w-14 rounded-full bg-primary/10">
                <TrendingUp className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-left">Tráfego Pago</h3>
              <div className="text-muted-foreground mb-6 text-left">
                <p>Atraia clientes rapidamente.</p>
                <p>Campanhas segmentadas para resultados imediatos.</p>
              </div>
              <Button asChild size="lg" className="justify-start">
                <a href="/trafego-pago" className="inline-flex items-center gap-2">
                  Ver planos
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
            {/* Card: IA para Negócios */}
            <div className="rounded-2xl border shadow-lg p-8 flex flex-col items-start bg-white dark:bg-muted">
              <div className="mb-4 flex items-center justify-center h-14 w-14 rounded-full bg-primary/10">
                <Sparkles className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-left">IA para Negócios</h3>
              <div className="text-muted-foreground mb-6 text-left">
                <p>Automatize sua empresa.</p>
                <p>Inteligência artificial para produtividade e inovação.</p>
              </div>
              <Button asChild size="lg" className="justify-start">
                <a href="/ia-para-negocios" className="inline-flex items-center gap-2">
                  Ver planos
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Planos para Criação de Sites */}
      <PlanosCriacaoSitesSection />
      {/* Planos de Landing Page */}
      <PlanosLandingPageSection />
      {/* Planos de Social Media */}
      <PlanosSocialMediaSection />
    </>
  );
}
