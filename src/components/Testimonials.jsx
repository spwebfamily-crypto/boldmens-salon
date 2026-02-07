import PropTypes from "prop-types";

function Testimonials({ items = [] }) {
  if (!items.length) {
    return null;
  }

  return (
    <section className="py-24 md:py-32 bg-white transition-colors duration-300 dark:bg-neutral-950">
      <div className="container space-y-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-orange-600 dark:text-orange-500">
              <span className="h-px w-8 bg-orange-500" />
              Vozes Bold Mens
            </span>
            <h2 className="text-[clamp(2rem,3vw,3.25rem)] leading-tight text-neutral-900 dark:text-white">
              Clientes que transformam rituais em performance di&aacute;ria.
            </h2>
          </div>
          <p className="max-w-xl text-sm text-neutral-700 dark:text-neutral-400">
            Feedback cont&iacute;nuo para aprimorar cada detalhe: da playlist ao
            blend de &oacute;leos essenciais no seu ritual favorito.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((testimonial) => (
            <article
              key={testimonial.id}
              className="flex h-full flex-col justify-between gap-6 rounded-[32px] border border-neutral-200 bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
            >
              <p className="text-lg text-neutral-900 dark:text-neutral-200">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                  {testimonial.name}
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-orange-600 dark:text-orange-500">
                  {testimonial.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

Testimonials.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      quote: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
    }),
  ),
};

Testimonials.defaultProps = {
  items: [],
};

export default Testimonials;
