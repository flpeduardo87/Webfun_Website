import { Link } from "react-router-dom";
import logoLight from "@/assets/logo.svg";
import logoDark from "@/assets/logo-dark.svg";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
export const Footer = () => {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <span className="inline-flex items-center gap-2">
                <img src={logoLight} alt="Webfun" className="h-10 w-auto dark:hidden" />
                <img src={logoDark} alt="Webfun" className="hidden h-10 w-auto dark:block" />
                <span className="sr-only">Webfun</span>
              </span>
            </Link>
            <p className="text-base text-muted-foreground">
              Criamos sites rápidos, bonitos e otimizados para converter visitantes em clientes.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/webfun.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/webfun.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/webfun/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`https://wa.me/5547997618824?text=${encodeURIComponent(
                  "Olá! Vim pelo site e quero entender como vocês podem ajudar meu negócio."
                )}&utm_source=site&utm_medium=footer&utm_campaign=whatsapp_cta&utm_content=footer_link`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-bold">Serviços</h3>
            <ul className="space-y-2 text-base">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary">
                  Criação de Sites
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary">
                  Lojas Virtuais
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary">
                  Landing Pages
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary">
                  Otimização SEO
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 font-bold">Empresa</h3>
            <ul className="space-y-2 text-base">
              <li>
                <a href="/sobre" className="text-muted-foreground hover:text-primary">
                  Sobre
                </a>
              </li>
              <li>
                <a href="/portfolio" className="text-muted-foreground hover:text-primary">
                  Portfólio
                </a>
              </li>
              <li>
                <a href="/pricing" className="text-muted-foreground hover:text-primary">
                  Planos
                </a>
              </li>
              <li>
                <a href="/contato" className="text-muted-foreground hover:text-primary">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-bold">Contato</h3>
            <ul className="space-y-3 text-base">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <a href="tel:+5547997618824" className="hover:text-primary">
                  +55 (47) 99761-8824
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:contato@webfun.com.br" className="hover:text-primary">
                  contato@webfun.com.br
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Canoinhas/SC — Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-base text-muted-foreground">
          <p>Feito com <span className="text-red-500">❤️</span> por Webfun &copy; {new Date().getFullYear()} - Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
