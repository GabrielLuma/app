import { Clock, MapPin, Ticket, ExternalLink } from "lucide-react";
import { Reveal, Eyebrow, WhatsAppIcon, WHATSAPP_LINK, MAPS_LINK } from "./shared";

const HOURS = [
  { days: "Segunda a Sexta", time: "9h às 18h" },
  { days: "Sábado", time: "9h às 13h" },
  { days: "Domingo", time: "Fechado" },
];

export const Visita = () => (
  <section
    id="visita"
    className="relative py-28 lg:py-40 bg-[#121218] border-t border-amber-500/10 overflow-hidden"
    data-testid="visita-section"
  >
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] furnace-glow" />
    <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
      <div className="text-center max-w-2xl mx-auto">
        <Reveal>
          <Eyebrow>Planeje sua visita</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 font-serif font-light text-3xl sm:text-4xl lg:text-5xl text-stone-100 tracking-tight leading-tight">
            Um passeio para <span className="italic text-amber-400">toda a família</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <div
            className="mt-8 inline-flex items-center gap-3 rounded-full border border-amber-500/40 bg-amber-500/10 px-6 py-3"
            data-testid="free-admission-badge"
          >
            <Ticket className="w-5 h-5 text-amber-400" />
            <span className="font-serif italic text-xl text-amber-300">Entrada gratuita</span>
          </div>
        </Reveal>
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <Reveal delay={0.15}>
          <div
            className="h-full rounded-2xl backdrop-blur-xl bg-black/50 border border-amber-500/20 p-8 sm:p-10"
            data-testid="hours-card"
          >
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-amber-500" />
              <h3 className="font-serif text-2xl text-stone-100">Horários</h3>
            </div>
            <ul className="mt-7 space-y-5">
              {HOURS.map((h) => (
                <li
                  key={h.days}
                  className="flex items-center justify-between border-b border-amber-500/10 pb-5 last:border-0 last:pb-0"
                >
                  <span className="text-stone-300">{h.days}</span>
                  <span className="font-mono text-sm text-amber-400/90 tracking-wider">
                    {h.time}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-stone-500 leading-relaxed">
              Produção de cristal ao vivo: seg a sex, 9h às 13h. Sábado, sob
              agendamento prévio.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div
            className="h-full rounded-2xl backdrop-blur-xl bg-black/50 border border-amber-500/20 p-8 sm:p-10 flex flex-col"
            data-testid="address-card"
          >
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-amber-500" />
              <h3 className="font-serif text-2xl text-stone-100">Onde estamos</h3>
            </div>
            <p className="mt-7 text-stone-300 leading-relaxed">
              Rua Rudolf Roedel, 233
              <br />
              Salto Weissbach · Blumenau — SC
              <br />
              CEP 89032-080
            </p>
            <div className="mt-auto pt-8 flex flex-col gap-3">
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="maps-directions-button"
                className="flex items-center justify-center gap-2 rounded-full border border-amber-500/40 hover:border-amber-400 text-amber-300 px-6 py-3 text-sm tracking-wide transition-colors duration-300"
              >
                <ExternalLink className="w-4 h-4" />
                Traçar rota no Google Maps
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="visita-whatsapp-button"
                className="flex items-center justify-center gap-2 rounded-full bg-amber-500 hover:bg-amber-400 text-[#0B0B0E] font-semibold px-6 py-3 text-sm transition-all duration-300 hover:shadow-[0_0_40px_rgba(226,135,67,0.35)]"
              >
                <WhatsAppIcon className="w-4 h-4" />
                Falar no WhatsApp · (47) 99205-6444
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
