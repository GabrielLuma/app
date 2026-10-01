import { Flame, CalendarClock } from "lucide-react";
import { Reveal, Eyebrow, WhatsAppIcon, WHATSAPP_AGENDAMENTO_LINK } from "./shared";
import { openLightbox } from "./Lightbox";

const SHOTS = [
  {
    src: "/images/producao/prod-1.jpg",
    alt: "Fornos da fábrica com fileiras de peças de cristal em produção",
  },
  {
    src: "/images/producao/prod-2.jpg",
    alt: "Mestre vidreiro soprando o cristal incandescente na fornalha",
  },
  {
    src: "/images/hero-soprador.jpg",
    alt: "Mestre vidreiro modelando o cristal no cano de sopro",
  },
];

export const Espetaculo = () => (
  <section
    id="producao"
    className="relative py-28 lg:py-40 bg-[#121218] border-y border-amber-500/10 overflow-hidden"
    data-testid="espetaculo-section"
  >
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70vw] h-[40vh] furnace-glow" />
    <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
      <div className="max-w-2xl">
        <Reveal>
          <Eyebrow>Produção ao vivo</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 font-serif font-light text-3xl sm:text-4xl lg:text-5xl text-stone-100 tracking-tight leading-tight">
            Mestres vidreiros em <span className="italic text-amber-400">cena</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-7 text-stone-300 leading-relaxed text-base sm:text-lg">
            Assista de perto à produção de cristal ao vivo: um verdadeiro
            espetáculo de habilidade, fogo e criatividade, onde cada peça nasce
            diante dos seus olhos.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-9 flex flex-wrap gap-4">
            <div
              className="flex items-center gap-3 rounded-xl backdrop-blur-xl bg-black/40 border border-amber-500/20 px-5 py-4"
              data-testid="live-schedule-weekdays"
            >
              <Flame className="w-5 h-5 text-amber-500" />
              <div>
                <p className="text-sm font-semibold text-stone-100">Segunda a Sexta</p>
                <p className="text-xs font-mono text-amber-400/90 tracking-wider">9h às 13h30</p>
              </div>
            </div>
            <div
              className="flex items-center gap-3 rounded-xl backdrop-blur-xl bg-black/40 border border-amber-500/20 px-5 py-4"
              data-testid="live-schedule-saturday"
            >
              <CalendarClock className="w-5 h-5 text-amber-500" />
              <div>
                <p className="text-sm font-semibold text-stone-100">Sábado</p>
                <p className="text-xs font-mono text-amber-400/90 tracking-wider">
                  Sob consulta de disponibilidade
                </p>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.4}>
          <a
            href={WHATSAPP_AGENDAMENTO_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="schedule-live-show-btn"
            className="mt-9 inline-flex items-center gap-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-[#0B0B0E] font-semibold px-7 py-3.5 transition-all duration-300 hover:shadow-[0_0_40px_rgba(226,135,67,0.35)]"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Consultar disponibilidade aos sábados
          </a>
        </Reveal>
      </div>

      <div className="mt-16 lg:mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-5" data-testid="producao-gallery">
        {SHOTS.map((shot, i) => (
          <Reveal key={shot.src} delay={0.08 + i * 0.08}>
            <figure
              className="group relative overflow-hidden rounded-2xl border border-amber-500/20"
              data-testid={`producao-shot-${i}`}
            >
              <img
                src={shot.src}
                alt={shot.alt}
                loading="lazy"
                onClick={() => openLightbox(shot.src, shot.alt)}
                className="w-full aspect-[4/3] object-cover cursor-zoom-in transition-transform duration-700 group-hover:scale-105"
              />
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
