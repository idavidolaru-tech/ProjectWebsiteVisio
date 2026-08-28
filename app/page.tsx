import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Challenge from "@/components/Challenge";
import Speakers from "@/components/Speakers";
import Program from "@/components/Program";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">
        Sari la conținut
      </a>
      <ScrollReveal />
      <Header />
      <main id="main">
        <span id="top" />
        <Hero />
        <About />
        <Challenge />
        <Speakers />
        <Program />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
