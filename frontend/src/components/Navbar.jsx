import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { WhatsAppIcon, WHATSAPP_LINK } from "./shared";

const LINKS = [
  { href: "#historia", label: "História" },
  { href: "#producao", label: "Produção ao Vivo" },
  { href: "#loja", label: "Loja" },
  { href: "#visita", label: "Visite" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-black/60 border-b border-amber-500/15"
          : "bg-transparent border-b border-transparent"
      }`}
      data-testid="main-navbar"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#topo" className="flex items-center group" data-testid="navbar-logo-link">
          <img
            src="/images/logo-glaspark.png"
            alt="Glas Park — Museu do Cristal"
            className="h-14 w-auto transition-transform duration-500 group-hover:scale-105"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8" data-testid="navbar-links">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.href.slice(1)}`}
              className="text-sm text-stone-300 hover:text-amber-400 transition-colors duration-300 tracking-wide"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="navbar-whatsapp-button"
            className="flex items-center gap-2 rounded-full bg-amber-500 hover:bg-amber-400 text-[#0B0B0E] text-sm font-semibold px-5 py-2.5 transition-colors duration-300"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Agendar visita
          </a>
        </nav>

        <button
          className="md:hidden text-stone-200 p-2"
          onClick={() => setOpen(!open)}
          data-testid="mobile-menu-toggle"
          aria-label="Abrir menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden backdrop-blur-xl bg-black/80 border-b border-amber-500/15"
            data-testid="mobile-menu"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  data-testid={`mobile-nav-link-${l.href.slice(1)}`}
                  className="text-stone-200 text-base hover:text-amber-400 transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="mobile-whatsapp-button"
                className="flex items-center justify-center gap-2 rounded-full bg-amber-500 text-[#0B0B0E] font-semibold px-5 py-3 mt-2"
              >
                <WhatsAppIcon className="w-4 h-4" />
                Agendar visita
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
