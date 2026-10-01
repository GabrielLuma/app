import { Reveal, Eyebrow, WhatsAppIcon, WHATSAPP_LINK } from "./shared";
import { openLightbox } from "./Lightbox";

const PHOTOS = [
  { src: "/images/loja/loja-6.jpg", alt: "Prateleiras com vasos de cristal coloridos" },
  { src: "/images/loja/loja-2.jpg", alt: "Vasos e copos de cristal expostos na loja" },
  { src: "/images/loja/loja-8.jpg", alt: "Abajures e luminárias de cristal" },
  { src: "/images/loja/loja-4.jpg", alt: "Salão da loja com prateleiras de cristais coloridos" },
  { src: "/images/loja/loja-7.jpg", alt: "Prateleiras com vasos de cristal em tons escuros" },
  { src: "/images/loja/loja-3.jpg", alt: "Vasos de cristal em exposição na loja" },
  { src: "/images/loja/loja-9.jpg", alt: "Prateleiras com taças e copos de cristal transparente" },
  { src: "/images/loja/loja-5.jpg", alt: "Parede de prateleiras iluminadas com cristais" },
  { src: "/images/loja/loja-10.jpg", alt: "Estantes com cristais transparentes e vasos decorativos" },
];

export const Loja = () => (
  <section id="loja" className="relative py-28 lg:py-40" data-testid="loja-section">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
        <div className="max-w-xl">
          <Reveal>
            <Eyebrow>A loja</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-serif font-light text-3xl sm:text-4xl lg:text-5xl text-stone-100 tracking-tight leading-tight">
              Leve a <span className="italic text-amber-400">arte</span> com você
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

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5" data-testid="loja-gallery">
        {PHOTOS.map((p, i) => (
          <Reveal key={p.src} delay={0.05 + (i % 3) * 0.08}>
            <figure
              className="group overflow-hidden rounded-2xl border border-amber-500/15 hover:border-amber-500/40 transition-colors duration-500"
              data-testid={`loja-photo-${i}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                onClick={() => openLightbox(p.src, p.alt)}
                className="w-full aspect-[4/3] object-cover object-center cursor-zoom-in transition-transform duration-700 group-hover:scale-105"
              />
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
