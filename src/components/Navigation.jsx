import { useState } from "react";
import { Link } from "react-router-dom";
import logoIcon from "../assets/logo-icon.png";
import { useLanguage, useTranslation } from "../contexts/LanguageContext";

const languageOptions = ["PT", "EN", "ES", "RU"];

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const current = useTranslation();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur-lg">
      <div className="container flex items-center justify-between gap-6 py-4">
        <nav className="hidden items-center gap-8 text-[11px] uppercase tracking-[0.35em] text-neutral-600 lg:flex">
          {current.nav.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="transition hover:text-orange-500"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/secret"
            className="transition hover:text-orange-500 text-lg animate-pulse"
          >
            <span style={{ filter: 'drop-shadow(0 0 8px rgb(249 115 22))' }}>👕</span>
          </Link>
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <div
            className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-neutral-600"
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
                      ? "border-neutral-900 bg-neutral-900 text-white"
                      : "border-neutral-200 text-neutral-600 hover:border-orange-500 hover:text-orange-500"
                  }`}
                >
                  {code}
                </button>
              );
            })}
          </div>
          <a
            href="tel:+351912074656"
            className="text-[11px] uppercase tracking-[0.35em] text-neutral-500 transition hover:text-orange-500"
          >
            +351 912 074 656
          </a>
          <a
            href="https://www.fresha.com/pt/a/boldmens-salon-estoril-rua-9-de-abril-99a-nat7n6mn/booking?allOffer=true&pId=832755&cartId=6344b719-9962-47ce-bf23-c346cbe5086b"
            className="rounded-full border border-neutral-900 px-6 py-2 text-[11px] font-semibold uppercase tracking-[0.4em] text-neutral-900 transition hover:bg-orange-500 hover:border-orange-500 hover:text-white"
          >
            {current.ctaDesktop}
          </a>
        </div>
        <button
          className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 text-neutral-900 lg:hidden"
          onClick={() => setIsOpen((currentOpen) => !currentOpen)}
          aria-label={current.openMenu}
        >
          <div className="space-y-1">
            <span className="block h-0.5 w-5 rounded bg-neutral-900" />
            <span className="block h-0.5 w-5 rounded bg-neutral-900" />
          </div>
        </button>
      </div>
      {isOpen ? (
        <div
          className="max-h-[85vh] overflow-y-auto border-t border-neutral-200 bg-white/95 px-6 py-6 lg:hidden"
          role="dialog"
          aria-modal="true"
        >
          <nav className="flex flex-col gap-4 text-xs uppercase tracking-[0.35em] text-neutral-700">
            {current.nav.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="py-2 text-neutral-800 transition hover:text-orange-500"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/secret"
              className="py-2 text-neutral-800 transition hover:text-orange-500 text-lg animate-pulse"
              onClick={() => setIsOpen(false)}
            >
              <span style={{ filter: 'drop-shadow(0 0 8px rgb(249 115 22))' }}>👕</span> Secret
            </Link>
          </nav>
          <div className="mt-6 flex flex-col gap-3 text-[11px] uppercase tracking-[0.35em] text-neutral-600">
            <a
              href="tel:+351912074656"
              className="transition hover:text-orange-500"
            >
              +351 912 074 656
            </a>
            <a
              href="https://www.fresha.com/pt/a/boldmens-salon-estoril-rua-9-de-abril-99a-nat7n6mn/booking?allOffer=true&pId=832755&cartId=6344b719-9962-47ce-bf23-c346cbe5086b"
              className="rounded-full border border-neutral-900 px-6 py-3 text-center font-semibold text-neutral-900 transition hover:bg-orange-500 hover:border-orange-500 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {current.ctaMobile}
            </a>
          </div>
          <div
            className="mt-5 flex flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-600"
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
                      ? "border-neutral-900 bg-neutral-900 text-white"
                      : "border-neutral-200 text-neutral-700 hover:border-orange-500 hover:text-orange-500"
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
