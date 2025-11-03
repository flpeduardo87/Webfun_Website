import { AlertCircle, Smartphone, Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const problems = [
	{
		icon: AlertCircle,
		title: "Perdendo clientes para a concorrência?",
		description:
			"Um site profissional e bem posicionado te coloca como líder de mercado, atraindo clientes que buscam exatamente o que você oferece.",
	},
	{
		icon: Smartphone,
		title: "Seu site não funciona bem no celular?",
		description:
			"Desenvolvemos sites ultra-rápidos com design responsivo que oferecem uma experiência perfeita em qualquer dispositivo.",
	},
	{
		icon: Search,
		title: "Não sabe como atrair mais visitantes?",
		description:
			"Todos os nossos sites são construídos com otimização para o Google (SEO), ajudando sua empresa a ser encontrada por quem precisa de você.",
	},
];

export const Problems = () => {
	return (
		<section className="py-12 md:py-16 bg-muted/30">
			<div className="container mx-auto px-4">
				<div className="mx-auto max-w-3xl text-center mb-8">
					<h2 className="mb-4 text-3xl font-bold tracking-tight leading-tight sm:text-4xl md:text-5xl">
						Seu negócio é visto na internet?
					</h2>
					<p className="text-[18px] leading-snug text-muted-foreground">
						Descubra os principais gargalos e como destravar sua presença
						online.
					</p>
					</div>

				<div className="grid gap-8 md:grid-cols-3">
					{problems.map((problem, index) => (
						<div
							key={index}
							className="group animate-fade-in rounded-xl border bg-card p-8 shadow-sm transition-all hover:shadow-lg"
							style={{ animationDelay: `${index * 100}ms` }}
						>
							<div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20 transition-colors group-hover:bg-primary/20">
								<problem.icon className="h-7 w-7 text-primary" />
							</div>
							<h3 className="mb-3 text-xl font-bold">
								{problem.title}
							</h3>
							<p className="text-muted-foreground leading-relaxed mb-4">
								{problem.description}
							</p>
							<Button asChild size="sm" className="px-4 text-base mt-2">
								<a
									href="#services"
									className="flex items-center gap-2"
								>
									Saiba mais
									<ArrowRight className="w-4 h-4" />
								</a>
							</Button>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
