import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, Eyebrow, WhatsAppIcon, WHATSAPP_LINK } from "./shared";

const PIECES = [
  {
    url: "https://images.unsplash.com/photo-1779636231616-4de77a181100?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxjcnlzdGFsJTIwZ29ibGV0cyUyMHdpbmUlMjBnbGFzcyUyMGx1eHVyeSUyMGFtYmVyJTIwZGFya3xlbnwwfHx8fDE3OTA4NzE3ODh8MA&ixlib=rb-4.1.0&q=85",
    title: "Taças Lapidadas de Cristal",
    category: "Taças",
    desc: "Conjunto nobre com refração dourada e lapidação artesanal singular.",
  },
  {
    url: "https://images.unsplash.com/photo-1779636231655-aeb3cb95d44e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwyfHxjcnlzdGFsJTIwZ29ibGV0cyUyMHdpbmUlMjBnbGFzcyUyMGx1eHVyeSUyMGFtYmVyJTIwZGFya3xlbnwwfHx8fDE3OTA4NzE3ODh8MA&ixlib=rb-4.1.0&q=85",
    title: "Copos Ornamentais",
    category: "Copos",
    desc: "Cristal de altíssima transparência, lapidado à mão.",
  },
  {
    url: "https://images.unsplash.com/photo-1783628642381-4d3a2a5839d2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHozfHxjcnlzdGFsJTIwZ29ibGV0cyUyMHdpbmUlMjBnbGFzcyUyMGx1eHVyeSUyMGFtYmVyJTIwZGFya3xlbnwwfHx8fDE3OTA4NzE3ODh8MA&ixlib=rb-4.1.0&q=85",
    title: "Vasos & Peças Decorativas",
    category: "Decorativos",
    desc: "Todas as cores e a tradição dos consagrados Cristais di Murano.",
  },
];

const TABS = ["Todas", "Taças", "Copos", "Decorativos"];

export const Loja = () => {
  const [tab, setTab] = useState("Todas");
  const visible = tab === "Todas" ? PIECES : PIECES.filter((p) => p.category === tab);

  return (
    <section id="loja" className="relative py-28 lg:py-40" data-testid="loja-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <div className="max-w-xl">
            <Reveal>
              <Eyebrow>A loja</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-serif font-light text-3xl sm:text-4xl lg:text-5xl text-stone-100 tracking-tight leading-tight">
                Leve um pedaço da <span className="italic text-amber-400">arte</span> para casa
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-stone-400 leading-relaxed">
                Uma linha completa de taças, copos e uma grande variedade de
                cristais decorativos, com todas as cores e a tradição di Murano.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.25}>
            <div className="flex flex-wrap gap-2" data-testid="loja-tabs">
              {TABS.map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  data-testid={`loja-tab-${t.toLowerCase().replace(/\s/g, "-")}`}
                  className={`rounded-full px-5 py-2.5 text-sm tracking-wide transition-colors duration-300 border ${
                    tab === t
                      ? "bg-amber-500 text-[#0B0B0E] border-amber-500 font-semibold"
                      : "border-amber-500/25 text-stone-300 hover:border-amber-500/60 hover:text-amber-300"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <motion.div layout className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.article
                layout
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="group rounded-2xl overflow-hidden border border-amber-500/15 bg-[#16161E] hover:border-amber-500/40 transition-colors duration-500"
                data-testid={`loja-piece-${p.category.toLowerCase()}`}
              >
                <div className="overflow-hidden">
                  <img
                    src={p.url}
                    alt={p.title}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-amber-500/90">
                    {p.category}
                  </span>
                  <h3 className="mt-2 font-serif text-2xl text-stone-100">{p.title}</h3>
                  <p className="mt-2 text-sm text-stone-400 leading-relaxed">{p.desc}</p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal delay={0.15} className="mt-14 text-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="loja-whatsapp-cta"
            className="inline-flex items-center gap-2.5 rounded-full border border-amber-500/40 hover:border-amber-400 text-amber-300 hover:text-amber-200 px-7 py-3.5 text-sm tracking-wide transition-colors duration-300"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Consultar disponibilidade de peças
          </a>
        </Reveal>
      </div>
    </section>
  );
};
