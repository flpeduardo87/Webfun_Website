import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import HomePage from "@/pages/Index.tsx";
import AboutPage from "@/pages/About.tsx";
import ServicesPage from "@/pages/ServicesPage.tsx";
import PortfolioPage from "@/pages/PortfolioPage.tsx";
import PlanosPage from "@/pages/Planos.tsx";
import ContactPage from "@/pages/ContactPage.tsx";
import LojasVirtuaisPage from "@/pages/LojasVirtuais";
import CriacaoDeSitesPage from "@/pages/CriacaoDeSites";
import LandingPagesPage from "@/pages/LandingPages";
import SocialMediaPage from "@/pages/SocialMedia";
import TrafegoPagoPage from "@/pages/TrafegoPago";
import IAParaNegociosPage from "@/pages/IAParaNegocios";
import NotFound from "@/pages/NotFound";
import ScrollToTop from "@/components/ScrollToTop";

function Layout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Home mantém sua própria estrutura (inclui Navbar/Footer internamente) */}
          <Route path="/" element={<HomePage />} />

          {/* Demais páginas usam o layout padrão com Navbar/Footer */}
          <Route element={<Layout />}>
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/servicos" element={<ServicesPage />} />
            <Route path="/criacao-de-sites" element={<CriacaoDeSitesPage />} />
            <Route path="/lojas-virtuais" element={<LojasVirtuaisPage />} />
            <Route path="/landing-pages" element={<LandingPagesPage />} />
            <Route path="/social-media" element={<SocialMediaPage />} />
            <Route path="/trafego-pago" element={<TrafegoPagoPage />} />
            <Route path="/ia-para-negocios" element={<IAParaNegociosPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/planos" element={<PlanosPage />} />
            <Route path="/contato" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <Toaster richColors position="top-right" />
      </BrowserRouter>
    </ThemeProvider>
  );
}