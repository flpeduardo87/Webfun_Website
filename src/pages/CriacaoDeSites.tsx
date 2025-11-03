import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ShieldCheck, Clock, Search, Smartphone, Link2, Zap, Wrench, Headphones, Headset, UserCheck, Check, X } from "lucide-react";
import { useEffect, useState, lazy, Suspense } from "react";
const TestimonialsLazy = lazy(() => import("@/components/Testimonials").then(m => ({ default: m.Testimonials })));
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const FAQLazy = lazy(() => import("@/components/FAQ").then(m => ({ default: m.FAQ })));

const beneficios = [
	{
		icon: ShieldCheck,
		title: "Credibilidade e confiança",
		desc: "Transmita profissionalismo e gere confiança para clientes e parceiros.",
		tags: ["Profissionalismo", "Autoridade", "Reputação"],
	},
	{
		icon: Clock,
		title: "Disponível 24h",
		desc: "Seu negócio acessível a qualquer hora, todos os dias.",
		tags: ["100% online", "Suporte rápido", "Acesso 24/7"],
	},
	{
		icon: Search,
		title: "Facilidade no Google",
		desc: "Seja encontrado facilmente por quem busca seus serviços.",
		tags: ["SEO", "Visibilidade", "Indexação"],
	},
	{
		icon: Smartphone,
		title: "Design responsivo",
		desc: "Seu site perfeito em qualquer dispositivo: celular, tablet ou computador.",
		tags: ["Mobile-first", "UX", "Responsivo"],
	},
	{
		icon: Link2,
		title: "Integração digital",
		desc: "Conecte WhatsApp, redes sociais e outros canais ao seu site.",
		tags: ["Google", "Instagram", "Facebook"],
	},
	{
		icon: Zap,
		title: "Otimização para conversão",
		desc: "Transforme visitantes em clientes com estratégias de conversão.",
		tags: ["CRO", "Leads", "Conversão"],
	},
	{
		icon: Wrench,
		title: "Gestão prática",
		desc: "Atualize conteúdos facilmente, sem depender de terceiros.",
		tags: ["Autonomia", "CMS", "Atualização fácil"],
	},
	{
		icon: Headphones,
		title: "Suporte dedicado",
		desc: "Conte com atendimento especializado sempre que precisar.",
		tags: ["Atendimento", "Ajuda", "Suporte"],
	},
	{
		icon: UserCheck,
		title: "Segurança de dados",
		desc: "Proteja as informações da sua empresa e dos seus clientes com tecnologia de ponta.",
		tags: ["SSL", "LGPD", "Proteção"],
	},
];

export default function CriacaoDeSitesPage() {
	return (
		<div className="min-h-screen">
			{/* Scroll suave para âncoras ao carregar a rota */}
			{(() => {
				// Executa apenas no cliente
				if (typeof window !== "undefined") {
					// Pequeno hook em linha para evitar alterar muito a estrutura
					// e garantir o scroll para hashes (e.g., #planos)
					// eslint-disable-next-line react-hooks/rules-of-hooks
					useEffect(() => {
						if (window.location.hash) {
							const id = window.location.hash.replace('#', '');
							const el = document.getElementById(id);
							if (el) el.scrollIntoView({ behavior: 'smooth' });
						}
					}, []);
				}
				return null;
			})()}
			{/* Hero */}
			<section className="relative overflow-hidden bg-background pt-8 pb-16 md:pt-14 md:pb-24">
				<div className="container mx-auto px-4">
					<div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
						{/* Conteúdo à esquerda */}
						<div className="space-y-6">
							<p className="text-base font-semibold uppercase tracking-wider text-primary/80">
								CRIAÇÃO DE SITES
							</p>
							<h1 className="font-bold tracking-tight leading-tight text-[42px] sm:text-[42px] md:text-[56px] lg:text-[56px] mb-2 text-foreground">
								Site profissional,
								<br />rápido e moderno
							</h1>
							<p className="text-[18px] leading-snug text-muted-foreground mb-4">
								Impulsione seu negócio com soluções. Sites, landing pages, lojas virtuais e muito mais.<b> Planos a partir de apenas R$ 99,00/mês.</b>
							</p>
							<div className="flex flex-col sm:flex-row gap-4 mb-4">
								<Button
									asChild
									size="lg"
									className="px-6 text-base shadow-lg hover:shadow-xl transition-shadow"
								>
									<a href="#planos" className="flex items-center gap-2">
										Ver nossos planos
										<ArrowRight className="w-5 h-5" />
									</a>
								</Button>
								<Button
									asChild
									size="lg"
									variant="outline"
									className="px-6 text-base"
								>
									<a
										href={`https://wa.me/5547997618824?text=${encodeURIComponent(
											"Olá! Vim pelo site e quero entender como vocês podem ajudar meu negócio."
										)}&utm_source=site&utm_medium=hero&utm_campaign=whatsapp_cta&utm_content=hero_criacao_sites_sec`}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2"
									>
										Falar com atendente
										<Headset className="w-5 h-5" />
									</a>
								</Button>
							</div>
							<div className="flex items-center gap-3 lg:gap-2 mt-2">
								<div className="flex -space-x-4 pr-6 lg:pr-0">
									<img
										src="https://randomuser.me/api/portraits/men/32.jpg"
										alt="Pessoa 1"
										className="h-12 w-12 rounded-full border-2 border-white shadow"
									/>
									<img
										src="https://randomuser.me/api/portraits/women/44.jpg"
										alt="Pessoa 2"
										className="h-12 w-12 rounded-full border-2 border-white shadow"
									/>
									<img
										src="https://randomuser.me/api/portraits/men/65.jpg"
										alt="Pessoa 3"
										className="h-12 w-12 rounded-full border-2 border-white shadow"
									/>
								</div>
								<span className="text-[14px] lg:text-[16px] text-muted-foreground ml-6 sm:ml-8 lg:ml-3 xl:ml-2 2xl:ml-1">
									Mais de{" "}
									<span className="font-bold text-foreground">200</span> projetos
									entregues para clientes em todo o Brasil.
								</span>
							</div>
						</div>
						{/* Imagem à direita */}
						<div className="hidden lg:block">
							<div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl border">
								<img
									src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&w=1200"
									alt="Equipe trabalhando em site institucional"
									className="h-full w-full object-cover"
									loading="lazy"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Grid de benefícios */}
			<section className="py-12">
				<div className="container mx-auto px-4">
					<h2 className="mb-4 text-3xl font-bold tracking-tight leading-tight sm:text-4xl md:text-5xl text-center">
						Por que ter um site profissional?
					</h2>
					<p className="text-[18px] leading-snug text-muted-foreground text-center mb-10">
						Confira os principais benefícios de ter um site profissional para sua
						empresa:
					</p>
					<div className="grid gap-6 md:grid-cols-3">
						{beneficios.map((item, idx) => {
							const Icon = item.icon;
							return (
								<div
									key={idx}
									className="bg-card rounded-xl border border-border shadow-sm p-6 flex flex-col items-start gap-3"
								>
									<span className="mb-2">
										<span className="inline-flex h-11 w-11 aspect-square shrink-0 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20">
											<Icon className="h-6 w-6 text-primary" />
										</span>
									</span>
									<h3 className="font-semibold text-lg mb-1 text-foreground">
										{item.title}
									</h3>
									<p className="text-base text-muted-foreground">
										{item.desc}
									</p>
									{/* Tags no rodapé do card */}
									{item.tags && (
										<div className="mt-3 flex flex-wrap gap-2">
											{item.tags.map((t, i) => (
												<Badge key={i} variant="outline" className="border-blue-200 text-blue-600 dark:text-blue-400 dark:border-blue-500">
													{t}
												</Badge>
											))}
										</div>
									)}
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* Seção de planos para criação de sites */}
			<section id="planos" className="py-12 scroll-mt-12 md:scroll-mt-16">
				<div className="container mx-auto px-4">
					<h2 className="mb-2 text-3xl font-bold tracking-tight leading-tight sm:text-4xl md:text-5xl text-center">Planos para <br className="block sm:hidden" /> Criação de Sites</h2>
					<p className="text-[18px] leading-snug text-muted-foreground text-center mb-6">Escolha o plano ideal para seu site profissional. Pague mensal ou único!</p>
					{/* Switch mensal/único e cards de planos */}
					{(() => {
						const [isMensal, setIsMensal] = useState(true);
						const planos = [
							{
								nome: "Start",
								mensal: { valor: "R$ 99", legenda: "/mês", ref: "Pagamento recorrente" },
								unico: { valor: "R$ 990", legenda: "/pagamento único", ref: "Equivalente a R$ 82,50/mês" },
								beneficios: [
									"Site one-page moderno",
									"Hospedagem SSD dedicada",
									"Otimização SEO básica",
									"Integração WhatsApp",
									"Hospedagem inclusa",
									{ off: "Blog/Notícias" },
									{ off: "Loja virtual" },
								],
							},
							{
								nome: "Profissional",
								mensal: { valor: "R$ 149", legenda: "/mês", ref: "Pagamento recorrente" },
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
								mensal: { valor: "R$ 249", legenda: "/mês", ref: "Pagamento recorrente" },
								unico: { valor: "R$ 2.490", legenda: "/pagamento único", ref: "Equivalente a R$ 207,50/mês" },
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
							<>
								<div className="flex justify-center items-center gap-4 mb-8">
									<span className={`font-medium whitespace-nowrap ${isMensal ? "text-primary" : "text-foreground"} text-sm sm:text-base`}>Pagamento Mensal</span>
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
									<span className={`font-medium whitespace-nowrap ${!isMensal ? "text-primary" : "text-foreground"} text-sm sm:text-base`}>Pagamento Único</span>
								</div>
								<div className="grid gap-6 md:grid-cols-3">
									{planos.map((plano, idx) => (
										<div key={plano.nome} className="relative bg-card rounded-xl border border-border shadow-sm p-6 flex flex-col items-start gap-3">
											{plano.nome === "Profissional" && (
												<Badge variant="default" className="absolute top-3 right-3">
													Mais Popular
												</Badge>
											)}
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
											<Button asChild variant={plano.nome === "Profissional" ? "default" : "outline"} className="w-full px-6 py-2 text-[16px] font-medium rounded-full">
												<a href="#contatar" className="flex items-center gap-2 justify-center">Contratar agora <ArrowRight className="w-4 h-4" /></a>
											</Button>
										</div>
									))}
								</div>
							</>
						);
					})()}
				</div>
			</section>

			<Suspense fallback={null}>
				<TestimonialsLazy />
			</Suspense>

			<Suspense fallback={null}>
				<FAQLazy />
			</Suspense>
		</div>
	);
}
