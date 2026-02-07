import PropTypes from "prop-types";

function Experience({ highlights = [], amenities = [] }) {
  return (
    <section className="relative py-24 md:py-32 bg-white transition-colors duration-300 dark:bg-neutral-950">
      <div className="container grid gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
        <div className="space-y-8">
          <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-orange-600 dark:text-orange-500">
            <span className="h-px w-8 bg-orange-500" />
            Por que BoldMen's Salon
          </span>
          <h2 className="text-[clamp(2rem,3vw,3.25rem)] leading-tight text-neutral-900 dark:text-white">
            A jornada completa: da consultoria inicial ao drink
            p&oacute;s-servi&ccedil;o.
          </h2>
          <p className="max-w-2xl text-base text-neutral-700 dark:text-neutral-400">
            Nosso concierge digital registra prefer&ecirc;ncias, playlists e
            observa&ccedil;&otilde;es t&eacute;cnicas. Na chegada, o grooming
            artist conduz um ritual alinhado ao seu estilo e &agrave; sua
            agenda.
          </p>
          <div className="space-y-6">
            {highlights.map((item) => (
              <article
                key={item.id}
                className="rounded-[32px] border border-neutral-200 bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
              >
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-400">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="space-y-8 rounded-[32px] border border-neutral-200 bg-neutral-50 p-8 shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.35em] text-orange-600 dark:text-orange-500">
              Amenidades do clube
            </p>
            <p className="text-sm text-neutral-700 dark:text-neutral-400">
              Experi&ecirc;ncias complementares inclu&iacute;das no BoldMen's
              Salon Privilege.
            </p>
          </div>
          <ul className="space-y-5">
            {amenities.map((amenity) => (
              <li
                key={amenity}
                className="flex items-start gap-4 text-sm text-neutral-700 dark:text-neutral-300"
              >
                <span
                  className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-orange-500"
                  aria-hidden="true"
                />
                <span>{amenity}</span>
              </li>
            ))}
          </ul>
          <div className="rounded-[32px] border border-orange-200 bg-orange-50 p-6 text-sm text-neutral-800 shadow-inner dark:border-orange-900 dark:bg-orange-900/20 dark:text-neutral-200">
            <p className="font-semibold uppercase tracking-[0.3em] text-orange-700">
              Bold Mens Privilege
            </p>
            <p className="mt-2">
              Programa anual com acesso priorit&aacute;rio &agrave;s 36 vagas
              semanais, eventos fechados e locker pessoal para seus produtos
              favoritos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

Experience.propTypes = {
  highlights: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      copy: PropTypes.string.isRequired,
    }),
  ),
  amenities: PropTypes.arrayOf(PropTypes.string),
};

Experience.defaultProps = {
  highlights: [],
  amenities: [],
};

export default Experience;
