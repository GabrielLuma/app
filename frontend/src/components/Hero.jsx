import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { WhatsAppIcon, WHATSAPP_LINK } from "./shared";

const HERO_IMG = "/images/hero-fogo.jpg";

const LINES = [
  { text: "Onde a areia e o fogo", italic: false },
  { text: "se transformam em", italic: true },
  { text: "obras de arte.", italic: false },
];

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.22]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="topo"
      ref={ref}
      className="relative min-h-screen flex items-end overflow-hidden"
      data-testid="hero-section"
    >
      <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Mestre vidreiro moldando cristal incandescente na fornalha"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0E]/80 via-[#0B0B0E]/45 to-[#0B0B0E]" />
        <div className="absolute inset-0 furnace-glow" />
      </motion.div>

      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-24 pt-44 w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: -24, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center mb-10"
        >
          <img
            src="/images/logo-glaspark.png"
            alt="Glas Park — Museu do Cristal"
            className="h-28 sm:h-36 lg:h-44 w-auto [filter:drop-shadow(0_0_28px_rgba(255,255,255,0.28))]"
            data-testid="hero-logo"
          />
        </motion.div>

        <h1
          className="mt-8 font-serif font-light text-stone-100 leading-[0.98] tracking-tight text-5xl sm:text-6xl lg:text-8xl"
          data-testid="hero-title"
        >
          {LINES.map((line, i) => (
            <span key={i} className="block overflow-hidden pb-1">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.1,
                  delay: 0.25 + i * 0.16,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`block ${
                  line.italic ? "italic text-amber-400" : ""
                }`}
              >
                {line.text}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-xl text-base sm:text-lg text-stone-300 leading-relaxed"
        >
          Venha conhecer o Glas Park, a loja de fábrica da Cristais Di Murano.
          Visite também o nosso Museu do Cristal, onde você pode conhecer a
          arte do cristal, sua história e toda a sua beleza.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 flex items-center gap-4 max-w-xl"
        >
          <span className="h-px w-10 bg-gradient-to-r from-amber-500 to-transparent shrink-0" />
          <span className="font-serif italic text-xl sm:text-2xl text-amber-300 leading-snug [text-shadow:0_0_24px_rgba(226,135,67,0.35)]">
            Desde 1995 em Blumenau — produção ao vivo dos mestres vidreiros e
            entrada gratuita.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="hero-whatsapp-cta"
            className="group flex items-center gap-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-[#0B0B0E] font-semibold px-7 py-3.5 transition-all duration-300 hover:shadow-[0_0_40px_rgba(226,135,67,0.35)]"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Agendar pelo WhatsApp
          </a>
          <a
            href="#historia"
            data-testid="hero-discover-cta"
            className="rounded-full border border-amber-500/30 hover:border-amber-500/60 text-stone-200 hover:text-amber-300 px-7 py-3.5 text-sm tracking-wide transition-colors duration-300"
          >
            Conhecer o museu
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-amber-500/70" />
        </motion.div>
      </motion.div>
    </section>
  );
};
