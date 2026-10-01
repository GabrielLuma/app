import { motion } from "framer-motion";

export const WHATSAPP_LINK =
  "https://wa.me/5547992056444?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20Museu%20do%20Cristal%20e%20agendamento.";

export const WHATSAPP_AGENDAMENTO_LINK =
  "https://wa.me/5547992056444?text=Ol%C3%A1!%20Gostaria%20de%20consultar%20a%20disponibilidade%20da%20produ%C3%A7%C3%A3o%20ao%20vivo%20aos%20s%C3%A1bados.";

export const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=Rua+Rudolf+Roedel+233+Salto+Weissbach+Blumenau+SC";

export const Logo = ({ className = "w-9 h-9" }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
    <defs>
      <linearGradient id="logoGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#E28743" />
        <stop offset="100%" stopColor="#D4AF37" />
      </linearGradient>
    </defs>
    <path d="M24 5C24 5 11 20.5 11 29.5a13 13 0 0 0 26 0C37 20.5 24 5 24 5Z" stroke="url(#logoGrad)" strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M24 13v23M17 26.5l7 5.5 7-5.5" stroke="url(#logoGrad)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.75" />
  </svg>
);

export const WhatsAppIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.83 9.83 0 0 0 12.04 2Zm0 18.03h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23Zm4.52-6.16c-.25-.13-1.47-.72-1.7-.8-.22-.09-.39-.13-.55.12-.17.25-.64.8-.78.97-.15.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.13-.55-1.34-.76-1.83-.2-.48-.4-.42-.55-.43h-.47c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.6.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29Z" />
  </svg>
);

export const Reveal = ({ children, delay = 0, className = "", y = 44 }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-70px" }}
    transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const Eyebrow = ({ children }) => (
  <p className="text-xs uppercase tracking-[0.28em] font-mono text-amber-500/90 font-medium">
    {children}
  </p>
);

export function getMuseumStatus() {
  const now = new Date();
  const day = now.getDay();
  const h = now.getHours() + now.getMinutes() / 60;
  const live = day >= 1 && day <= 5 && h >= 9 && h < 13.5;
  const open =
    (day >= 1 && day <= 5 && h >= 9 && h < 18) || (day === 6 && h >= 9 && h < 13);
  if (live) return { key: "live", label: "Produção ao vivo acontecendo agora" };
  if (open) return { key: "open", label: "Aberto para visitação agora" };
  return { key: "closed", label: "Fechado no momento" };
}
