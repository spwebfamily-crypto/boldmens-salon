import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense, memo } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Hero from './components/Hero';
import WhatsAppButton from './components/WhatsAppButton';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { useTranslation } from './contexts/LanguageContext';

const GoogleReviews = lazy(() => import('./components/GoogleReviews'));
const Services = lazy(() => import('./components/Services'));
const Barbers = lazy(() => import('./components/Barbers'));
const Gallery = lazy(() => import('./components/Gallery'));
const CallToAction = lazy(() => import('./components/CallToAction'));
const SecretPage = lazy(() => import('./pages/SecretPage'));

const Loader = () => <div className="h-20" />;

const HomePage = memo(function HomePage() {
  const t = useTranslation();
  
  return (
    <>
      <Hero />
      <Suspense fallback={<Loader />}>
        <GoogleReviews />
        <Services items={t.services.items} />
        <Barbers />
        <Gallery items={t.gallery?.items || []} />
        <CallToAction />
      </Suspense>
    </>
  );
});

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-white dark:bg-neutral-950 text-ink dark:text-white transition-colors duration-300">
            <Navigation />
            <WhatsAppButton />
            <main>
              <Suspense fallback={<Loader />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/secret" element={<SecretPage />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
