import { Reveal, Eyebrow } from "./shared";

const IMGS = [
  {
    url: "https://images.unsplash.com/photo-1776663772031-bc08915613d7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGdsYXNzJTIwc2N1bHB0dXJlJTIwYXJ0JTIwZGFya3xlbnwwfHx8fDE3OTA4NzE3OTJ8MA&ixlib=rb-4.1.0&q=85",
    alt: "Escultura iridescente de vidro colorido",
  },
  {
    url: "https://images.unsplash.com/photo-1637324110774-cebee794246c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHw0fHxjb2xvcmZ1bCUyMGdsYXNzJTIwc2N1bHB0dXJlJTIwYXJ0JTIwZGFya3xlbnwwfHx8fDE3OTA4NzE3OTJ8MA&ixlib=rb-4.1.0&q=85",
    alt: "Escultura fluida de vidro âmbar em fundo escuro",
  },
];

const STATS = [
  { value: "1995", label: "Ano de fundação" },
  { value: "2.000+", label: "Anos de história do vidro" },
  { value: "100%", label: "Entrada gratuita" },
];

export const Historia = () => (
  <section id="historia" className="relative py-28 lg:py-40" data-testid="historia-section">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div>
          <Reveal>
            <Eyebrow>A nossa história</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-serif font-light text-3xl sm:text-4xl lg:text-5xl text-stone-100 tracking-tight leading-tight">
              Uma viagem no tempo através do{" "}
              <span className="italic text-amber-400">vidro</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-stone-300 leading-relaxed text-base sm:text-lg">
              Fundado em 1995, o Museu do Cristal é um espaço criativo onde você
              conhece o cristal, sua arte, sua história e sua beleza. Um material
              fascinante que o homem manipula há mais de 2.000 anos.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-5 text-stone-400 leading-relaxed">
              Visitando a fábrica, deixe-se maravilhar pela habilidade e
              criatividade dos mestres vidreiros, que aliam técnicas centenárias
              ao conceito de inovação. Um passeio agradável e enriquecedor para
              toda a família.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-3 gap-6">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={0.35 + i * 0.1}>
                <div data-testid={`historia-stat-${i}`}>
                  <p className="font-serif text-3xl sm:text-4xl text-amber-400">{s.value}</p>
                  <p className="mt-2 text-xs font-mono uppercase tracking-[0.18em] text-stone-500">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 gap-5">
            <Reveal delay={0.15} className="mt-12">
              <div className="overflow-hidden rounded-2xl border border-amber-500/20 shadow-[0_20px_60px_rgba(0,0,0,0.5)] group">
                <img
                  src={IMGS[0].url}
                  alt={IMGS[0].alt}
                  loading="lazy"
                  className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="overflow-hidden rounded-2xl border border-amber-500/20 shadow-[0_20px_60px_rgba(0,0,0,0.5)] group">
                <img
                  src={IMGS[1].url}
                  alt={IMGS[1].alt}
                  loading="lazy"
                  className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </Reveal>
          </div>
          <div className="absolute -inset-10 furnace-glow -z-10" />
        </div>
      </div>
    </div>
  </section>
);
