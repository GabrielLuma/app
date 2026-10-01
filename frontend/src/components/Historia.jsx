import { Reveal, Eyebrow } from "./shared";
import { openLightbox } from "./Lightbox";

const ACERVO = [
  {
    src: "/images/acervo-japamala.jpg",
    alt: "Japamala de contas de cristal pintadas à mão com apliques dourados",
    title: "Colar da Sorte · China",
    desc: "As bolas são pintadas através das aberturas",
    fit: "contain",
  },
  {
    src: "/images/acervo-canecas-lagarto.jpg",
    alt: "Canecas de cristal com lagartos modelados à mão",
    title: "1880 · Boêmia/República Tcheca",
    desc: "Canecos de vidro opalino com pintura esmalte e ouro",
  },
  {
    src: "/images/acervo-tacas-ouro.jpg",
    alt: "Taças de cristal rubi ornamentadas com cenas douradas",
    title: "1995 · Trabalho de Emil Rimpler",
    desc: "Zwiesel/Alemanha — Lapidação e gravura. Overlay de cristal rubi com camada de ouro",
  },
];

export const Historia = () => (
  <section id="historia" className="relative py-28 lg:py-40" data-testid="historia-section">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div>
          <Reveal>
            <Eyebrow>O museu</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-serif font-light text-3xl sm:text-4xl lg:text-5xl text-stone-100 tracking-tight leading-tight">
              Uma viagem no tempo através do{" "}
              <span className="italic text-amber-400">vidro</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-stone-200 leading-relaxed text-lg sm:text-xl font-light">
              Visitando o museu, deixe-se maravilhar pela habilidade e
              criatividade dos mestres vidreiros, que aliam técnicas centenárias
              ao conceito de inovação. Um passeio agradável e enriquecedor para
              toda a família.
            </p>
          </Reveal>

        </div>

        <div className="relative">
          <div className="space-y-5">
            <Reveal delay={0.15}>
              <div className="overflow-hidden rounded-2xl border border-amber-500/20 shadow-[0_20px_60px_rgba(0,0,0,0.5)] group">
                <img
                  src="/images/museu-corredor.jpg"
                  alt="Corredor de exposição do Museu do Cristal com vitrines iluminadas"
                  loading="lazy"
                  onClick={() =>
                    openLightbox(
                      "/images/museu-corredor.jpg",
                      "Corredor de exposição do Museu do Cristal com vitrines iluminadas"
                    )
                  }
                  className="w-full aspect-[4/3] object-cover cursor-zoom-in transition-transform duration-700 group-hover:scale-105"
                  data-testid="historia-museum-photo"
                />
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="overflow-hidden rounded-2xl border border-amber-500/20 shadow-[0_20px_60px_rgba(0,0,0,0.5)] group">
                <img
                  src="/images/historia-livro.jpg"
                  alt="Livro antigo L'Arte Vetraria, de 1668, aberto sobre mesa de madeira"
                  loading="lazy"
                  onClick={() =>
                    openLightbox(
                      "/images/historia-livro.jpg",
                      "Livro antigo L'Arte Vetraria, de 1668, aberto sobre mesa de madeira"
                    )
                  }
                  className="w-full aspect-[3/2] object-cover cursor-zoom-in transition-transform duration-700 group-hover:scale-105"
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
            <Reveal key={p.title} delay={0.1 + i * 0.12} className="h-full">
              <figure
                className="group h-full flex flex-col rounded-2xl overflow-hidden border border-amber-500/15 bg-[#16161E] hover:border-amber-500/40 transition-colors duration-500"
                data-testid={`acervo-card-${i}`}
              >
                <div className="overflow-hidden shrink-0">
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    onClick={() => openLightbox(p.src, p.alt)}
                    className={`w-full aspect-[4/3] cursor-zoom-in transition-transform duration-700 group-hover:scale-105 ${
                      p.fit === "contain" ? "object-contain bg-white" : "object-cover"
                    }`}
                  />
                </div>
                <figcaption className="p-6 flex-1 flex flex-col">
                  <p className="font-serif text-xl text-stone-100 min-h-[3.5rem]">{p.title}</p>
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
