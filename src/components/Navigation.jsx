import { useState } from "react";
import { Link } from "react-router-dom";
import logoIcon from "../assets/logo-icon.png";
import { useLanguage, useTranslation } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";

const languageOptions = ["PT", "EN", "ES", "RU"];

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const current = useTranslation();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-950/90 backdrop-blur-lg">
      <div className="container flex items-center justify-between gap-6 py-4">
        <div className="w-11 lg:hidden" />
        <a href="#inicio" className="lg:hidden absolute left-1/2 -translate-x-1/2">
          <img src={logoIcon} alt="BoldMen's Salon" className="h-10 w-10 dark:invert-0 invert" />
        </a>
        <nav className="hidden items-center gap-8 text-[11px] uppercase tracking-[0.35em] text-neutral-600 dark:text-neutral-300 lg:flex">
          <a
            href="#inicio"
            className="transition text-neutral-600 dark:text-neutral-300 hover:text-orange-500 dark:hover:text-orange-400"
          >
            {current.nav[0].label}
          </a>
          <Link
            to="/secret"
            className="transition hover:text-orange-500 animate-pulse text-orange-500"
          >
            <span style={{ filter: 'drop-shadow(0 0 8px rgb(249 115 22))' }}>{current.collection}</span>
          </Link>
          <a
            href="https://wa.me/351912074656"
            className="transition text-neutral-600 dark:text-neutral-300 hover:text-orange-500 dark:hover:text-orange-400"
          >
            {current.askQuestions}
          </a>
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 transition hover:text-orange-500 dark:hover:text-orange-400"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>
          <div
            className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-neutral-600 dark:text-neutral-300"
            aria-label={current.selectLanguage}
            role="group"
          >
            {languageOptions.map((code) => {
              const isActive = language === code;
              return (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLanguage(code)}
                  aria-pressed={isActive}
                  className={`rounded-full border px-3 py-2 transition ${
                    isActive
                      ? "border-neutral-900 dark:border-orange-500 bg-neutral-900 dark:bg-orange-500 text-white"
                      : "border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 hover:border-orange-500 hover:text-orange-500"
                  }`}
                >
                  {code}
                </button>
              );
            })}
          </div>
        </div>
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={toggleTheme}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 transition hover:text-orange-500 dark:hover:text-orange-400"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>
          <button
            className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white"
            onClick={() => setIsOpen((currentOpen) => !currentOpen)}
            aria-label={current.openMenu}
          >
            <div className="space-y-1">
              <span className="block h-0.5 w-5 rounded bg-neutral-900 dark:bg-white" />
              <span className="block h-0.5 w-5 rounded bg-neutral-900 dark:bg-white" />
            </div>
          </button>
        </div>
      </div>
      {isOpen ? (
        <div
          className="max-h-[85vh] overflow-y-auto border-t border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-950/95 px-6 py-6 lg:hidden"
          role="dialog"
          aria-modal="true"
        >
          <nav className="flex flex-col gap-4 text-xs uppercase tracking-[0.35em] text-neutral-700 dark:text-neutral-300">
            <a
              href="#inicio"
              className="py-2 text-neutral-800 dark:text-neutral-200 transition hover:text-orange-500"
              onClick={() => setIsOpen(false)}
            >
              {current.nav[0].label}
            </a>
            <Link
              to="/secret"
              className="py-2 text-orange-500 transition hover:text-orange-400 animate-pulse"
              onClick={() => setIsOpen(false)}
            >
              <span style={{ filter: 'drop-shadow(0 0 8px rgb(249 115 22))' }}>{current.collection}</span>
            </Link>
            <a
              href="https://www.fresha.com/pt/a/boldmens-salon-estoril-rua-9-de-abril-99a-nat7n6mn/booking?allOffer=true&pId=832755&cartId=6344b719-9962-47ce-bf23-c346cbe5086b"
              className="py-2 text-neutral-800 dark:text-neutral-200 transition hover:text-orange-500"
              onClick={() => setIsOpen(false)}
            >
              {current.bookAppointment}
            </a>
            <a
              href="https://wa.me/351912074656"
              className="py-2 text-neutral-800 dark:text-neutral-200 transition hover:text-orange-500"
              onClick={() => setIsOpen(false)}
            >
              {current.askQuestions}
            </a>
          </nav>
          <div
            className="mt-6 flex flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-600 dark:text-neutral-400"
            aria-label={current.selectLanguage}
          >
            {languageOptions.map((code) => {
              const isActive = language === code;
              return (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLanguage(code)}
                  aria-pressed={isActive}
                  className={`flex-1 rounded-full border px-3 py-2 transition ${
                    isActive
                      ? "border-neutral-900 dark:border-orange-500 bg-neutral-900 dark:bg-orange-500 text-white"
                      : "border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-orange-500 hover:text-orange-500"
                  }`}
                >
                  {code}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Navigation;
