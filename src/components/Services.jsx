import { useState } from "react";
import PropTypes from "prop-types";
import Modal from "./Modal";
import { useTranslation } from "../contexts/LanguageContext";

const bookingUrl =
  "https://www.fresha.com/pt/a/boldmens-salon-estoril-rua-9-de-abril-99a-nat7n6mn/booking?allOffer=true&pId=832755&cartId=6344b719-9962-47ce-bf23-c346cbe5086b";

function Services({ items = [] }) {
  const [selectedService, setSelectedService] = useState(null);
  const t = useTranslation();

  return (
    <section id="servicos" className="py-24 md:py-32 bg-white transition-colors duration-300 dark:bg-neutral-950">
      <div className="container space-y-14">
        <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-orange-600 dark:text-orange-500">
              <span className="h-px w-8 bg-orange-500" />
              {t.services.tag}
            </span>
            <h2 className="text-[clamp(2rem,3vw,3.25rem)] leading-tight text-neutral-900 dark:text-white">
              {t.services.title}
            </h2>
            <p className="text-base text-neutral-700 dark:text-neutral-400">
              {t.services.description}
            </p>
          </div>
          <a
            href="#contato"
            className="inline-flex items-center justify-center rounded-full border border-neutral-900 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-neutral-900 transition hover:bg-orange-500 hover:border-orange-500 hover:text-white dark:border-white dark:text-white"
          >
            {t.services.menuButton}
          </a>
        </header>
        <div className="grid gap-6 lg:grid-cols-2">
          {items.map((service) => (
            <article
              key={service.id}
              onClick={() => setSelectedService(service)}
              onKeyDown={(e) => {
                if (e.target.closest("a")) return;
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedService(service);
                }
              }}
              role="button"
              tabIndex={0}
              className="group relative cursor-pointer overflow-hidden rounded-[32px] border border-neutral-200 bg-white p-8 transition duration-500 hover:-translate-y-1 hover:border-orange-500 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900"
            >
              <div
                className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
                aria-hidden="true"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-transparent to-orange-100 dark:from-orange-900/20 dark:to-orange-900/10" />
              </div>
              <div className="relative flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">
                    {service.title}
                  </h3>
                  <span className="rounded-full border border-orange-200 bg-orange-50 px-4 py-1 text-xs uppercase tracking-[0.35em] text-orange-600 dark:border-orange-900 dark:bg-orange-900/20 dark:text-orange-400">
                    {service.duration}
                  </span>
                </div>
                <p className="text-sm text-neutral-700 dark:text-neutral-400">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center justify-between text-sm font-semibold uppercase tracking-[0.3em] text-neutral-900 dark:text-white">
                  <span>{service.price}</span>
                  <a
                    href={bookingUrl}
                    onClick={(e) => e.stopPropagation()}
                    className="text-orange-600 transition hover:text-orange-500 dark:text-orange-500"
                  >
                    {t.services.bookNow}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Modal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
      >
        {selectedService && (
          <div className="p-8 md:p-10 dark:text-white">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <span className="inline-block rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-600 dark:border-orange-900 dark:bg-orange-900/20 dark:text-orange-400">
                  {selectedService.duration}
                </span>
                <h3 className="mt-3 text-2xl font-semibold text-neutral-900 dark:text-white md:text-3xl">
                  {selectedService.title}
                </h3>
              </div>
              <p className="text-xl font-semibold text-neutral-900 dark:text-white">
                {selectedService.price}
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
                {selectedService.description}
              </p>
              <div className="rounded-2xl bg-neutral-50 p-5 dark:bg-neutral-800">
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-900 dark:text-white">
                  {t.services.included}
                </h4>
                <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
                  {t.services.includedItems.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={bookingUrl}
                className="flex w-full items-center justify-center rounded-full bg-neutral-900 py-4 text-sm font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-orange-600 dark:bg-white dark:text-neutral-900 dark:hover:bg-orange-500 dark:hover:text-white"
              >
                {t.services.bookNow}
              </a>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}

Services.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    }),
  ),
};

Services.defaultProps = {
  items: [],
};

export default Services;
