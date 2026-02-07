import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import BookingPopup from './components/BookingPopup';
import Hero from './components/Hero';
import About from './components/About';
import GoogleReviews from './components/GoogleReviews';
import Services from './components/Services';
import Barbers from './components/Barbers';
import Gallery from './components/Gallery';
import CallToAction from './components/CallToAction';
import SecretPage from './pages/SecretPage';
import { LanguageProvider } from './contexts/LanguageContext';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <GoogleReviews />
      <Services />
      <Barbers />
      <Gallery />
      <CallToAction />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-base text-ink">
          <Navigation />
          <BookingPopup />
          <main className="overflow-hidden">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/secret" element={<SecretPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
