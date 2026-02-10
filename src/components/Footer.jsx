import { memo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../contexts/LanguageContext';

function Footer() {
  const t = useTranslation();

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 py-10 transition-colors duration-300">
      <div className="container flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <Link
            to="/"
            className="text-sm font-semibold uppercase tracking-[0.4em] text-neutral-900 dark:text-white"
          >
            BoldMen's Salon
          </Link>
          <p className="text-xs text-neutral-600 dark:text-white">
            Rua 9 de Abril 99 - Estoril, Portugal - CP 2765-609
          </p>
        </div>
        <div className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.3em] text-neutral-600 dark:text-white">
          <a href="#servicos" className="transition hover:text-orange-500 dark:text-white">
            {t.footer.services}
          </a>
          <a href="#equipe" className="transition hover:text-orange-500 dark:text-white">
            {t.footer.team}
          </a>
          <a 
            href="https://www.fresha.com/pt/a/boldmens-salon-estoril-rua-9-de-abril-99a-nat7n6mn/booking?allOffer=true&pId=832755&cartId=6344b719-9962-47ce-bf23-c346cbe5086b"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-orange-500 dark:text-white"
          >
            {t.footer.bookings}
          </a>
        </div>
        <div className="flex justify-end">
          <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 dark:text-white">
            &copy; {new Date().getFullYear()} BoldMen's Salon.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
