const ITEMS = [
  "Entrada Gratuita",
  "Desde 1995",
  "Cristais di Murano",
  "Produção ao Vivo",
  "Técnicas Centenárias",
  "Arte em Vidro Soprado",
];

export const Marquee = () => (
  <div
    className="relative py-6 border-y border-amber-500/15 bg-[#121218] overflow-hidden"
    data-testid="editorial-marquee"
  >
    <div className="flex w-max animate-marquee">
      {[0, 1].map((copy) => (
        <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
          {ITEMS.map((item, i) => (
            <span key={i} className="flex items-center">
              <span className="font-serif italic text-xl sm:text-2xl text-stone-400 px-8 whitespace-nowrap">
                {item}
              </span>
              <span className="text-amber-500/60 text-sm">✦</span>
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);
