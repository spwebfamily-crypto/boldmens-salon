import { useTranslation } from "../contexts/LanguageContext";

function CallToAction() {
  const t = useTranslation();

  return (
    <section
      id="contato"
      className="relative py-24 md:py-32 bg-white dark:bg-neutral-950 transition-colors duration-300"
    >
      <div className="container">
        <div className="grid gap-8 rounded-[40px] border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-8 shadow-lg md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:p-10">
          <div className="space-y-5">
            <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-orange-600 dark:text-orange-500">
              <span className="h-px w-8 bg-orange-500" />
              {t.cta.tag}
            </span>
            <h2 className="text-[clamp(1.8rem,3vw,3rem)] leading-tight text-neutral-900 dark:text-white">
              {t.cta.title}
            </h2>
            <p className="text-base text-neutral-700 dark:text-neutral-400">
              {t.cta.description}
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href="tel:+351912074656"
                className="flex items-center justify-between rounded-full bg-neutral-900 px-6 py-4 text-sm font-semibold uppercase tracking-[0.35em] text-white transition hover:-translate-y-0.5 hover:bg-orange-500"
              >
                {t.cta.phoneBtn}
                <span aria-hidden="true">&rarr;</span>
              </a>
              <a
                href="mailto:contato@boldmens.co"
                className="flex items-center justify-between rounded-full border border-neutral-900 dark:border-neutral-700 px-6 py-4 text-sm font-semibold uppercase tracking-[0.35em] text-neutral-900 dark:text-white transition hover:-translate-y-0.5 hover:border-orange-500 hover:text-orange-500"
              >
                {t.cta.emailBtn}
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="grid gap-6 rounded-[32px] border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800 p-8 shadow-sm">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-orange-600 dark:text-orange-500">
                {t.cta.hoursTitle}
              </p>
              <ul className="mt-3 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                <li>{t.cta.weekdays}</li>
                <li>{t.cta.saturday}</li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-orange-600 dark:text-orange-500">
                {t.cta.contactTitle}
              </p>
              <p className="mt-2 text-sm text-neutral-800 dark:text-neutral-200">
                {t.cta.whatsapp}
                <span className="font-semibold text-orange-600 dark:text-orange-500">
                  {" "}
                  +351 912 074 656
                </span>
              </p>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                {t.cta.responseTime}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
