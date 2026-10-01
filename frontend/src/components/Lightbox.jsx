import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ZoomOut } from "lucide-react";

export const openLightbox = (src, alt) =>
  window.dispatchEvent(new CustomEvent("open-lightbox", { detail: { src, alt } }));

export const Lightbox = () => {
  const [img, setImg] = useState(null);
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    const onOpen = (e) => {
      setImg(e.detail);
      setZoomed(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setImg(null);
    };
    window.addEventListener("open-lightbox", onOpen);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("open-lightbox", onOpen);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = img ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [img]);

  return (
    <AnimatePresence>
      {img && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/92 backdrop-blur-md overflow-hidden"
          onClick={() => setImg(null)}
          data-testid="lightbox-overlay"
        >
          <div className="absolute top-5 right-5 flex gap-3 z-10">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setZoomed((z) => !z);
              }}
              data-testid="lightbox-zoom-toggle"
              aria-label={zoomed ? "Reduzir zoom" : "Ampliar"}
              className="flex items-center justify-center w-11 h-11 rounded-full border border-amber-500/40 bg-black/60 text-amber-300 hover:bg-amber-500 hover:text-[#0B0B0E] transition-colors duration-300"
            >
              {zoomed ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setImg(null)}
              data-testid="lightbox-close"
              aria-label="Fechar"
              className="flex items-center justify-center w-11 h-11 rounded-full border border-amber-500/40 bg-black/60 text-amber-300 hover:bg-amber-500 hover:text-[#0B0B0E] transition-colors duration-300"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <motion.img
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            src={img.src}
            alt={img.alt}
            onClick={(e) => {
              e.stopPropagation();
              setZoomed((z) => !z);
            }}
            className={`max-h-[86vh] max-w-[92vw] rounded-xl object-contain transition-transform duration-500 ${
              zoomed ? "scale-[1.9] cursor-zoom-out" : "cursor-zoom-in"
            }`}
            data-testid="lightbox-image"
          />

          {img.alt && (
            <p
              className="absolute bottom-6 inset-x-0 text-center text-sm text-stone-300 px-6 pointer-events-none"
              data-testid="lightbox-caption"
            >
              {img.alt}
            </p>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
