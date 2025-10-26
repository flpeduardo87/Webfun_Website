import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problems } from "@/components/Problems";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <Services />
        <Portfolio />
        <Features />
        <Pricing />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
