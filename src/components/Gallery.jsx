import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "../contexts/LanguageContext";

function Gallery({ items = [] }) {
  const observerRef = useRef(null);
  const elementsRef = useRef([]);
  const t = useTranslation();

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-8");
            entry.target.classList.add("opacity-100", "translate-y-0");
            observerRef.current.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" },
    );

    elementsRef.current.forEach((el) => {
      if (el) observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [items]);

  if (!items.length) {
    return null;
  }

  return (
    <section className="py-24 md:py-32 bg-white dark:bg-neutral-950 transition-colors duration-300">
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
            <div
              key={item.id}
              ref={(el) => (elementsRef.current[index] = el)}
              className="opacity-0 translate-y-8 transition-all duration-1000 ease-out"
            >
              <figure className="group relative h-full overflow-hidden rounded-[32px] border border-neutral-200 bg-white shadow-md transition duration-500 hover:-translate-y-1 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="aspect-[4/5] h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 text-sm text-white">
                  {item.alt}
                </figcaption>
              </figure>
            </div>
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

Gallery.defaultProps = {
  items: [],
};

export default Gallery;
