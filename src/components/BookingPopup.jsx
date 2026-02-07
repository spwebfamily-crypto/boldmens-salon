import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../contexts/LanguageContext';

function BookingPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslation();

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('hasSeenBookingPopup');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('hasSeenBookingPopup', 'true');
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-neutral-400 hover:text-neutral-900 transition text-2xl"
            >
              ×
            </button>
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="text-6xl mb-4"
              >
                ✂️
              </motion.div>
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3 uppercase tracking-wide">
                {t.popup?.title || 'Reserve Agora'}
              </h2>
              <p className="text-neutral-600 mb-6 text-sm md:text-base">
                {t.popup?.description || 'Agende seu horário e garanta o melhor atendimento'}
              </p>
              <a
                href="https://www.fresha.com/pt/a/boldmens-salon-estoril-rua-9-de-abril-99a-nat7n6mn/booking?allOffer=true&pId=832755&cartId=6344b719-9962-47ce-bf23-c346cbe5086b"
                className="block w-full bg-orange-500 text-white py-3 px-6 rounded-full font-semibold uppercase tracking-wider text-sm hover:bg-orange-600 transition"
              >
                {t.popup?.button || 'Reservar'}
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default BookingPopup;
