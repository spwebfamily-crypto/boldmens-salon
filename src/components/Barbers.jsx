import PropTypes from "prop-types";
import { useTranslation } from "../contexts/LanguageContext";

const TEAM_IMAGES = {
  "rafael-lima": "/equipe/rafael_new.jpg",
  "felipe-silva": "/equipe/felipe_new.jpg",
  "vitor-hugo": "/equipe/vitor.jpg",
};

function Barbers() {
  const t = useTranslation();

  return (
    <section
      id="equipe"
      className="py-24 md:py-32 bg-white dark:bg-neutral-950 transition-colors duration-300"
    >
      <div className="container space-y-12">
        <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-orange-600 dark:text-orange-500">
              <span className="h-px w-8 bg-orange-500" />
              {t.team.tag}
            </span>
            <h2 className="text-[clamp(2rem,3vw,3.25rem)] leading-tight text-neutral-900 dark:text-white">
              {t.team.title}
            </h2>
          </div>
          <p className="max-w-xl text-sm text-neutral-700 dark:text-neutral-300">
            {t.team.description}
          </p>
        </header>
        <div className="grid gap-8 md:grid-cols-2">
          {t.team.members.map((member) => (
            <article
              key={member.id}
              className="group flex flex-col overflow-hidden rounded-[32px] border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-md transition duration-500 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[4/5] overflow-hidden border-b border-neutral-200 dark:border-neutral-800">
                <img
                  src={TEAM_IMAGES[member.id]}
                  alt={member.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="500"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-white/70 dark:from-neutral-900/70 via-transparent"
                  aria-hidden="true"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-8">
                <div>
                  <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
                    {member.bio}
                  </p>
                </div>
                <p className="text-xs uppercase tracking-[0.35em] text-orange-600 dark:text-orange-500">
                  {member.focus}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

Barbers.propTypes = {};

export default Barbers;
