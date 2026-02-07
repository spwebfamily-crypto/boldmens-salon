import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../contexts/LanguageContext';

const clothingImages = [
  { id: 1, src: '/roupas/bone_creme_front.jpg', alt: 'Boné Creme Frente' },
  { id: 2, src: '/roupas/bone_creme_side.jpg', alt: 'Boné Creme Lateral' },
  { id: 3, src: '/roupas/bone_preto_bordado_back.jpg', alt: 'Boné Preto Bordado' },
  { id: 4, src: '/roupas/Casaco preto_rafael.jpg', alt: 'Casaco Preto Rafael' },
  { id: 5, src: '/roupas/casaco preto_rafael_back.jpg', alt: 'Casaco Preto Rafael Costas' },
  { id: 6, src: '/roupas/casaco_creme_front.jpg', alt: 'Casaco Creme Frente' },
  { id: 7, src: '/roupas/meias_front.jpg', alt: 'Meias' },
  { id: 8, src: '/roupas/mural_bones.jpg', alt: 'Mural Bonés' },
  { id: 9, src: '/roupas/mural_t-shirts.jpg', alt: 'Mural T-Shirts' },
  { id: 10, src: '/roupas/outfit_bone_preto_front.jpg', alt: 'Outfit Boné Preto' },
];

function SecretPage() {
  const t = useTranslation();
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [[page, direction], setPage] = useState([0, 0]);

  const openCarousel = () => {
    setShowIntro(true);
    setTimeout(() => {
      setShowIntro(false);
      setIsCarouselOpen(true);
    }, 2000);
  };

  const closeCarousel = () => setIsCarouselOpen(false);

  const paginate = (newDirection) => {
    const newIndex = (currentIndex + newDirection + clothingImages.length) % clothingImages.length;
    setCurrentIndex(newIndex);
    setPage([newIndex, newDirection]);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45,
    }),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 flex items-center justify-center px-4 pt-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-8xl md:text-9xl mb-8"
        >
          👕
        </motion.div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4 uppercase tracking-wider"
        >
          {t.secret.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-lg md:text-xl text-neutral-400 mb-8"
        >
          {t.secret.subtitle}
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          onClick={openCarousel}
          className="inline-block px-8 py-3 bg-orange-500 text-white rounded-full font-semibold uppercase tracking-wider text-sm hover:bg-orange-600 transition cursor-pointer"
        >
          {t.secret.button}
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
              animate={{ 
                opacity: [0, 1, 1, 1],
                scale: [0.5, 1.3, 1.3, 1.3],
                rotateX: [-90, 0, 0, 0],
              }}
              exit={{
                opacity: 0,
                scale: 1.5,
                filter: 'blur(20px)',
              }}
              transition={{ 
                duration: 2,
                times: [0, 0.3, 0.7, 1],
                exit: { duration: 0.6, ease: 'easeOut' }
              }}
              className="text-8xl md:text-[12rem] font-bold text-white uppercase tracking-[0.2em] px-4"
              style={{ 
                textShadow: '0 0 20px rgba(249, 115, 22, 1), 0 0 40px rgba(249, 115, 22, 0.8), 0 0 60px rgba(249, 115, 22, 0.6), 0 0 100px rgba(249, 115, 22, 0.4)',
                fontFamily: '"Bebas Neue", sans-serif',
                letterSpacing: '0.15em',
                fontSize: 'clamp(3rem, 15vw, 12rem)'
              }}
            >
              Be Bold!
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isCarouselOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.5, rotate: 180 }}
              transition={{ delay: 0.2 }}
              onClick={closeCarousel}
              className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center text-white text-3xl hover:text-orange-500 transition bg-white/10 rounded-full hover:bg-white/20 z-20"
            >
              ×
            </motion.button>

            <div className="relative w-full max-w-6xl h-[80vh] flex items-center justify-center perspective-1000">
              <motion.button
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ delay: 0.3 }}
                onClick={() => paginate(-1)}
                className="absolute left-4 md:left-8 z-20 w-14 h-14 flex items-center justify-center text-white text-4xl hover:text-orange-500 transition bg-white/10 rounded-full hover:bg-white/20"
              >
                ‹
              </motion.button>

              <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                  <motion.div
                    key={page}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.4 },
                      scale: { duration: 0.4 },
                      rotateY: { duration: 0.6 },
                    }}
                    className="absolute w-full h-full flex flex-col items-center justify-center px-4"
                  >
                    <motion.img
                      src={clothingImages[currentIndex].src}
                      alt={clothingImages[currentIndex].alt}
                      className="max-w-full max-h-[70vh] w-auto h-auto object-contain rounded-2xl shadow-2xl"
                      initial={{ filter: 'blur(20px)' }}
                      animate={{ filter: 'blur(0px)' }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              <motion.button
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ delay: 0.3 }}
                onClick={() => paginate(1)}
                className="absolute right-4 md:right-8 z-20 w-14 h-14 flex items-center justify-center text-white text-4xl hover:text-orange-500 transition bg-white/10 rounded-full hover:bg-white/20"
              >
                ›
              </motion.button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-8 flex gap-2"
            >
              {clothingImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setPage([index, index > currentIndex ? 1 : -1]);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-orange-500 w-8'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default SecretPage;
