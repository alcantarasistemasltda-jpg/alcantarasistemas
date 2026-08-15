import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { MethodologySection } from "@/components/sections/MethodologySection";
import { ProjectDiagnosisSection } from "@/components/sections/ProjectDiagnosisSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#090d16] text-slate-100 selection:bg-cyan-500 selection:text-black flex flex-col justify-between">
      {/* Header Fixo & Sticky */}
      <Header />

      {/* Seções Principais */}
      <main className="flex-1">
        <Hero />
        <ServicesSection />
        <ProductsSection />
        <MethodologySection />
        <ProjectDiagnosisSection />
        <AboutSection />
      </main>

      {/* Footer Institucional */}
      <Footer />
    </div>
  );
}
