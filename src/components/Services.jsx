import { useState } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
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
            className="inline-flex items-center justify-center rounded-full border border-neutral-900 dark:border-neutral-700 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-neutral-900 dark:text-neutral-200 transition hover:bg-orange-500 hover:border-orange-500 hover:text-white"
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
              className="group relative cursor-pointer overflow-hidden rounded-[32px] border border-neutral-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:shadow-xl active:scale-[0.98] dark:border-neutral-800 dark:bg-neutral-900"
            >
              <div className="relative flex flex-col gap-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white uppercase">
                    {service.title}
                  </h3>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-2xl font-bold text-orange-600 dark:text-orange-500">{service.price}</span>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">{service.duration}</span>
                  </div>
                </div>
                <p className="text-sm text-neutral-700 dark:text-neutral-400 leading-relaxed">
                  {service.description}
                </p>
                {service.includedServices && (
                  <div className="mt-2 space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-600 dark:text-neutral-500">Itens inclusos</p>
                    {service.includedServices.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between text-sm">
                        <span className="text-neutral-700 dark:text-neutral-400 uppercase text-xs tracking-wider">{item.name}</span>
                        <span className="text-neutral-500 dark:text-neutral-500 text-xs">{item.duration}</span>
                      </div>
                    ))}
                  </div>
                )}
                <div className="mt-4">
                  <a
                    href={bookingUrl}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-orange-600 dark:text-orange-400 transition hover:text-orange-500"
                  >
                    {t.services.bookNow}
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {!!selectedService && (
          <Modal
            isOpen={!!selectedService}
            onClose={() => setSelectedService(null)}
          >
            <motion.div 
              className="p-8 md:p-10 dark:text-white"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.div 
                className="mb-6 flex items-start justify-between gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
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
              </motion.div>
              <div className="space-y-6">
                <motion.p 
                  className="text-base leading-relaxed text-neutral-600 dark:text-neutral-300"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  {selectedService.description}
                </motion.p>
                <motion.div 
                  className="rounded-2xl bg-neutral-50 p-5 dark:bg-neutral-800"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-900 dark:text-white">
                    {t.services.included}
                  </h4>
                  <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
                    {t.services.includedItems.map((item, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.05, duration: 0.3 }}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
                <motion.a
                  href={bookingUrl}
                  className="flex w-full items-center justify-center rounded-full bg-neutral-900 py-4 text-sm font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-orange-600 dark:bg-white dark:text-neutral-900 dark:hover:bg-orange-500 dark:hover:text-white"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t.services.bookNow}
                </motion.a>
              </div>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
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
