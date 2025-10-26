import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail } from "lucide-react";
import { Briefcase, Clock, Award } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
  <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 pt-8 pb-16 md:pt-14 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              {/* ...existing code... */}
              <p className="text-base font-semibold uppercase tracking-wider text-primary/80">Contato</p>
              <h1 className="font-bold tracking-tight leading-tight text-[32px] sm:text-[40px] md:text-[56px] lg:text-[60px]">
                Vamos conversar<br></br>sobre seu projeto
              </h1>
              <p className="text-[18px] leading-snug text-muted-foreground max-w-xl">
                Tire suas dúvidas e receba um orçamento personalizado em poucos minutos.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="px-6">
                  <a
                    href={`https://wa.me/5547997618824?text=${encodeURIComponent('Olá! Gostaria de conversar sobre um projeto.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 justify-center"
                  >
                    Falar no WhatsApp
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="outline" className="px-6">
                  <a
                    href="mailto:contato@webfun.com.br?subject=Contato%20via%20site&body=Olá! Gostaria de conversar sobre um projeto."
                    className="flex items-center gap-2 justify-center"
                  >
                    Enviar E-mail agora
                    <Mail className="w-5 h-5" />
                  </a>
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
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Atendimento ao cliente"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
      <FAQ />
    </div>
  );
}
