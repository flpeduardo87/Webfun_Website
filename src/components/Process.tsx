const steps = [
  {
    number: "01",
    title: "Imersão e Estratégia",
    description:
      "Entendemos a fundo seu negócio, seu público e seus objetivos para traçar a melhor estratégia digital para o seu site.",
  },
  {
    number: "02",
    title: "Design Focado em Conversão",
    description:
      "Criamos um layout moderno e intuitivo, pensando em cada detalhe da jornada do usuário para maximizar as conversões.",
  },
  {
    number: "03",
    title: "Tecnologia e Desenvolvimento",
    line1: "Tecnologia e",
    line2: "Desenvolvimento",
    description:
      "Codificamos seu site com as tecnologias mais modernas, garantindo performance, segurança e responsividade.",
  },
  {
    number: "04",
    title: "Lançamento e Otimização",
    line1: "Lançamento",
    line2: "Otimização",
    description:
      "Colocamos seu site no ar, configuramos as ferramentas de análise e acompanhamos os resultados para otimizações.",
  },
];

export const Process = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-8">
          <h2 className="mb-4 text-3xl font-bold tracking-tight leading-tight sm:text-4xl md:text-5xl">
            Da ideia ao sucesso online
          </h2>
          <p className="text-[18px] leading-snug text-muted-foreground">
            Planejamento, design e execução: um processo ágil que gera resultados.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="animate-fade-in relative space-y-3"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Step Number */}
              <div className="flex items-center gap-3">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20 text-2xl font-bold text-primary">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block flex-1 h-px bg-border" />
                )}
              </div>

              {/* Content */}
              <div className="space-y-1.5">
                {(() => {
                  if ((step as any).line1) {
                    return (
                      <h3 className="text-xl font-bold">
                        <span className="block">{(step as any).line1}</span>
                        {(step as any).line2 && <span className="block">{(step as any).line2}</span>}
                      </h3>
                    );
                  }
                  const title = step.title;
                  const splitConjunction = " e ";
                  let line1 = title;
                  let line2 = "";
                  const idx = title.indexOf(splitConjunction);
                  if (idx !== -1) {
                    line1 = title.slice(0, idx) + " e";
                    line2 = title.slice(idx + splitConjunction.length);
                  } else {
                    const words = title.split(" ");
                    if (words.length >= 4) {
                      line1 = words.slice(0, words.length - 2).join(" ");
                      line2 = words.slice(words.length - 2).join(" ");
                    } else if (words.length === 3) {
                      line1 = words[0];
                      line2 = words.slice(1).join(" ");
                    } else if (words.length === 2) {
                      line1 = words[0];
                      line2 = words[1];
                    }
                  }
                  return (
                    <h3 className="text-xl font-bold">
                      <span className="block">{line1}</span>
                      {line2 && <span className="block">{line2}</span>}
                    </h3>
                  );
                })()}
                <p className="text-base text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
