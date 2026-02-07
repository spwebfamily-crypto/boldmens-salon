import Services from '../components/Services';
import { useTranslation } from '../contexts/LanguageContext';

function ServicesPage() {
  const t = useTranslation();

  return (
    <div className="pt-20">
      <Services items={t.services.items} />
    </div>
  );
}

export default ServicesPage;
