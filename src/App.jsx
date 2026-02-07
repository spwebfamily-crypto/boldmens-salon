import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import BookingPopup from './components/BookingPopup';
import Hero from './components/Hero';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { useTranslation } from './contexts/LanguageContext';

const About = lazy(() => import('./components/About'));
const GoogleReviews = lazy(() => import('./components/GoogleReviews'));
const Services = lazy(() => import('./components/Services'));
const Barbers = lazy(() => import('./components/Barbers'));
const Gallery = lazy(() => import('./components/Gallery'));
const CallToAction = lazy(() => import('./components/CallToAction'));
const SecretPage = lazy(() => import('./pages/SecretPage'));

function HomePage() {
  const t = useTranslation();
  
  return (
    <>
      <Hero />
      <Suspense fallback={<div className="h-20" />}>
        <About />
        <GoogleReviews />
        <Services items={t.services.items} />
        <Barbers />
        <Gallery items={t.gallery?.items || []} />
        <CallToAction />
      </Suspense>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-white dark:bg-neutral-950 text-ink dark:text-white transition-colors duration-300">
            <Navigation />
            <BookingPopup />
            <main className="overflow-hidden">
              <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="text-neutral-500">Carregando...</div></div>}>
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
