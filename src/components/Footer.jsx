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
          <p className="text-xs text-neutral-600 dark:text-neutral-400">
            Rua 9 de Abril 99 - Estoril, Portugal - CP 2765-609
          </p>
        </div>
        <div className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.3em] text-neutral-600 dark:text-neutral-400">
          <Link to="/servicos" className="transition hover:text-orange-500">
            {t.footer.services}
          </Link>
          <Link to="/equipe" className="transition hover:text-orange-500">
            {t.footer.team}
          </Link>
          <Link to="/contato" className="transition hover:text-orange-500">
            {t.footer.bookings}
          </Link>
        </div>
        <div className="flex justify-end">
          <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 dark:text-neutral-500">
            &copy; {new Date().getFullYear()} BoldMen's Salon.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
