import { useEffect, useRef, memo } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "../contexts/LanguageContext";

const GalleryItem = memo(function GalleryItem({ item, index, onVisible }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onVisible(ref.current);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [onVisible]);

  return (
    <div
      ref={ref}
      className="opacity-0 translate-y-8 transition-all duration-500 ease-out"
    >
      <figure className="group relative h-full overflow-hidden rounded-[32px] border border-neutral-200 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
        <img
          src={item.src}
          alt={item.alt}
          className="aspect-[4/5] h-full w-full object-cover transition duration-300 group-hover:scale-105"
          loading="lazy"
          decoding="async"
          width="400"
          height="500"
        />
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 text-sm text-white">
          {item.alt}
        </figcaption>
      </figure>
    </div>
  );
});

function Gallery({ items = [] }) {
  const t = useTranslation();

  const handleVisible = (el) => {
    if (el) {
      el.classList.remove("opacity-0", "translate-y-8");
      el.classList.add("opacity-100", "translate-y-0");
    }
  };

  if (!items.length) return null;

  return (
    <section className="py-24 md:py-32 bg-white dark:bg-neutral-950">
      <div className="container space-y-10">
        <header className="space-y-4">
          <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-orange-600 dark:text-orange-500">
            <span className="h-px w-8 bg-orange-500" />
            {t.gallery.tag}
          </span>
          <h2 className="text-[clamp(2rem,3vw,3.25rem)] leading-tight text-neutral-900 dark:text-white">
            {t.gallery.title}
          </h2>
          <p className="max-w-3xl text-base text-neutral-700 dark:text-neutral-300">
            {t.gallery.description}
          </p>
        </header>
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((item, index) => (
            <GalleryItem key={item.id} item={item} index={index} onVisible={handleVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}

Gallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }),
  ),
};

export default memo(Gallery);
