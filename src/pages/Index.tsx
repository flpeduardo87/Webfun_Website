import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problems } from "@/components/Problems";
import { lazy, Suspense } from "react";
const Services = lazy(() => import("@/components/Services").then(m => ({ default: m.Services })));
const Portfolio = lazy(() => import("@/components/Portfolio").then(m => ({ default: m.Portfolio })));
const Features = lazy(() => import("@/components/Features").then(m => ({ default: m.Features })));
const Pricing = lazy(() => import("@/components/Pricing").then(m => ({ default: m.Pricing })));
const Process = lazy(() => import("@/components/Process").then(m => ({ default: m.Process })));
const Testimonials = lazy(() => import("@/components/Testimonials").then(m => ({ default: m.Testimonials })));
const Contact = lazy(() => import("@/components/Contact").then(m => ({ default: m.Contact })));
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <Suspense fallback={null}>
          <Services />
        </Suspense>
        <Suspense fallback={null}>
          <Portfolio />
        </Suspense>
        <Suspense fallback={null}>
          <Features />
        </Suspense>
        <Suspense fallback={null}>
          <Pricing />
        </Suspense>
        <Suspense fallback={null}>
          <Process />
        </Suspense>
        <Suspense fallback={null}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={null}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
