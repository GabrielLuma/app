import { Logo, WhatsAppIcon, WHATSAPP_LINK, MAPS_LINK } from "./shared";

export const Footer = () => (
  <footer className="relative border-t border-amber-500/15 bg-[#0B0B0E]" data-testid="site-footer">
    <div className="gold-line" />
    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-3">
            <Logo className="w-10 h-10" />
            <div className="leading-tight">
              <span className="block font-serif text-xl text-stone-100 tracking-[0.12em] uppercase">Glas Park</span>
              <span className="block text-[10px] font-mono uppercase tracking-[0.3em] text-amber-500/80">
                Museu do Cristal · Blumenau
              </span>
            </div>
          </div>
          <p className="mt-6 text-sm text-stone-400 leading-relaxed max-w-xs">
            Desde 1995, um espaço criativo dedicado à arte, à história e à beleza
            do cristal.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-mono uppercase tracking-[0.25em] text-amber-500/90">
            Visitação
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-stone-400">
            <li>Seg a Sex · 9h às 18h</li>
            <li>Sábado · 9h às 13h</li>
            <li>Produção ao vivo · Seg a Sex, 9h às 13h30</li>
            <li className="text-amber-300/90">Entrada gratuita</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-mono uppercase tracking-[0.25em] text-amber-500/90">
            Contato
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-stone-400">
            <li>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-300 transition-colors"
                data-testid="footer-address-link"
              >
                Rua Rudolf Roedel, 233 — Salto Weissbach, Blumenau — SC
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-amber-300 transition-colors"
                data-testid="footer-whatsapp-link"
              >
                <WhatsAppIcon className="w-4 h-4" />
                (47) 99205-6444
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-14 pt-8 border-t border-amber-500/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-stone-500">
          © {new Date().getFullYear()} Glas Park · Museu do Cristal — Blumenau. Todos os direitos reservados.
        </p>
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-stone-600">
          Arte · Fogo · Cristal
        </p>
      </div>
    </div>
  </footer>
);
