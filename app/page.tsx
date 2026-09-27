import HeroHome from "./components/HeroHome";
import ProcessSection from "./components/ProcessSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import BlogSection from "./components/BlogSection";
import ContactSection from "./components/ContactSection";

export default function HomePage() {
  return (
    <main className="bg-white text-slate-700 font-sans overflow-x-hidden">
      <HeroHome />
      <ProcessSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <BlogSection />
      <ContactSection />
    </main>
  );
}