import { useEffect } from "react";
import Lenis from "lenis";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Historia } from "@/components/Historia";
import { Espetaculo } from "@/components/Espetaculo";
import { Loja } from "@/components/Loja";
import { Visita } from "@/components/Visita";
import { Footer } from "@/components/Footer";
import { WhatsAppIcon, WHATSAPP_LINK } from "@/components/shared";
import { motion } from "framer-motion";

function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const onAnchor = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        e.preventDefault();
        lenis.scrollTo(target, { offset: -70 });
      }
    };
    document.addEventListener("click", onAnchor);
    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", onAnchor);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-[#0B0B0E] text-stone-100 min-h-screen" data-testid="app-root">
      <div className="grain-overlay" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Historia />
        <Espetaculo />
        <Loja />
        <Visita />
      </main>
      <Footer />

      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        data-testid="floating-whatsapp-button"
        aria-label="Conversar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-amber-500 text-[#0B0B0E] shadow-[0_8px_32px_rgba(226,135,67,0.45)] hover:bg-amber-400 hover:scale-105 transition-all duration-300"
      >
        <WhatsAppIcon className="w-6 h-6" />
      </motion.a>
    </div>
  );
}

export default App;
