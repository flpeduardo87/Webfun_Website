import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle } from "lucide-react";
import { toast } from "sonner";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    business: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada! Em breve entraremos em contato.");
    setFormData({ name: "", phone: "", email: "", business: "" });
  };

  return (
    <section id="contact" className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-2 lg:gap-12 items-start">
          {/* Coluna Esquerda: Texto acima do Título + CTA */}
          <div className="text-center lg:text-left space-y-4 lg:self-center">
            <p className="text-[18px] leading-snug text-muted-foreground">
              Nos conte sobre seu negócio
            </p>
            <h2 className="mb-3 font-bold tracking-tight leading-tight text-[32px] sm:text-[40px] md:text-[56px]">
              <span className="block">O primeiro passo</span>
              <span className="block text-primary">para a nova fase</span>
              <span className="block">do seu negócio</span>
            </h2>

            <div className="pt-4">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Button variant="outline" size="lg" asChild className="px-6">
                  <a
                    href={`https://wa.me/5547997618824?text=${encodeURIComponent(
                      "Olá! Quero conversar sobre um projeto e entender como podemos começar."
                    )}&utm_source=site&utm_medium=contact_cta&utm_campaign=whatsapp_cta&utm_content=contact_top`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Fale conosco no WhatsApp"
                    className="inline-flex items-center gap-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Dúvidas? Fale conosco
                  </a>
                </Button>
                <span className="text-base text-muted-foreground">
                  Ou ligue para{" "}
                  <a href="tel:+5547997618824" className="font-medium text-foreground hover:underline">
                    +55 (47) 99761-8824
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Formulário */}
          <div className="rounded-2xl border bg-card p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome completo</Label>
                  <Input
                    id="name"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="business">Seu negócio</Label>
                <Textarea
                  id="business"
                  placeholder="Conte um pouco sobre seu negócio e seus objetivos..."
                  rows={4}
                  value={formData.business}
                  onChange={(e) =>
                    setFormData({ ...formData, business: e.target.value })
                  }
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Enviar
              </Button>

              <p className="text-center text-base text-muted-foreground">
                Ao clicar no botão acima, nosso time entrará em contato e fará um
                diagnóstico da sua operação.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};