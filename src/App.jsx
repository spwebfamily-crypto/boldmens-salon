import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import BookingPopup from './components/BookingPopup';
import Home from './pages/Home';
import ExperiencePage from './pages/ExperiencePage';
import ServicesPage from './pages/ServicesPage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';
import SecretPage from './pages/SecretPage';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-base text-ink">
          <Navigation />
          <BookingPopup />
          <main className="overflow-hidden">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/experiencia" element={<ExperiencePage />} />
              <Route path="/servicos" element={<ServicesPage />} />
              <Route path="/equipe" element={<TeamPage />} />
              <Route path="/contato" element={<ContactPage />} />
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
