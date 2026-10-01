import { Reveal, Eyebrow } from "./shared";

const STATS = [
  { value: "1995", label: "Ano de fundação" },
  { value: "2.000+", label: "Anos de história do vidro" },
  { value: "100%", label: "Entrada gratuita" },
];

const ACERVO = [
  {
    src: "/images/acervo-tacas-ouro.jpg",
    alt: "Taças de cristal ornamentadas com aplicações em ouro",
    title: "Taças Ornamentadas a Ouro",
    desc: "Cristal rubi com medalhões e folhagens em ouro",
  },
  {
    src: "/images/acervo-canecas-lagarto.jpg",
    alt: "Canecas de cristal com lagartos modelados à mão",
    title: "Canecas com Lagartos",
    desc: "Aplicações modeladas à mão, esmaltadas e douradas",
  },
  {
    src: "/images/acervo-canecas-estanho.jpg",
    alt: "Canecas de cristal gravadas com tampas de estanho",
    title: "Canecas com Tampa de Estanho",
    desc: "Gravação heráldica e ferragens em estanho maciço",
  },
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
              Fundado em 1995, o Glas Park é um espaço criativo onde você
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
          <div className="space-y-5">
            <Reveal delay={0.15}>
              <div className="overflow-hidden rounded-2xl border border-amber-500/20 shadow-[0_20px_60px_rgba(0,0,0,0.5)] group">
                <img
                  src="/images/museu-corredor.jpg"
                  alt="Corredor de exposição do Museu do Cristal com vitrines iluminadas"
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                  data-testid="historia-museum-photo"
                />
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="overflow-hidden rounded-2xl border border-amber-500/20 shadow-[0_20px_60px_rgba(0,0,0,0.5)] group">
                <img
                  src="/images/acervo-tacas-ouro.jpg"
                  alt="Taças de cristal ornamentadas com aplicações em ouro"
                  loading="lazy"
                  className="w-full aspect-[3/2] object-cover transition-transform duration-700 group-hover:scale-105"
                  data-testid="historia-goblets-photo"
                />
              </div>
            </Reveal>
          </div>
          <div className="absolute -inset-10 furnace-glow -z-10" />
        </div>
      </div>

      <div className="mt-24 lg:mt-32">
        <Reveal>
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <Eyebrow>Peças do acervo</Eyebrow>
              <h3 className="mt-4 font-serif font-light text-2xl sm:text-3xl text-stone-100 tracking-tight">
                Detalhes que contam <span className="italic text-amber-400">histórias</span>
              </h3>
            </div>
            <p className="max-w-sm text-sm text-stone-500 leading-relaxed">
              Cada vitrine guarda peças que atravessaram séculos de técnica,
              fogo e imaginação.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACERVO.map((p, i) => (
            <Reveal key={p.title} delay={0.1 + i * 0.12}>
              <figure
                className="group rounded-2xl overflow-hidden border border-amber-500/15 bg-[#16161E] hover:border-amber-500/40 transition-colors duration-500"
                data-testid={`acervo-card-${i}`}
              >
                <div className="overflow-hidden">
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <figcaption className="p-6">
                  <p className="font-serif text-xl text-stone-100">{p.title}</p>
                  <p className="mt-1.5 text-sm text-stone-400">{p.desc}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);
