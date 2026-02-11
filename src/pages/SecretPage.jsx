import { useState, memo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../contexts/LanguageContext';

const products = [
  { id: 1, name: 'BONE CREME', category: 'HEADWEAR', images: ['/roupas/bone_creme_front.jpg', '/roupas/bone_creme_side.jpg'] },
  { id: 2, name: 'BONE PRETO BORDADO', category: 'HEADWEAR', images: ['/roupas/bone_preto_bordado_back.jpg'] },
  { id: 5, name: 'MEIAS BOLD', category: 'ACCESSORIES', images: ['/roupas/meias_front.jpg'] },
];

const ProductCard = memo(function ProductCard({ product, index, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="relative aspect-[3/4] bg-neutral-200 dark:bg-neutral-900 overflow-hidden mb-4 rounded-2xl">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          width="400"
          height="533"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>
      <div className="space-y-1">
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">{product.category}</p>
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white tracking-tight">{product.name}</h3>
      </div>
    </motion.div>
  );
});

function SecretPage() {
  const t = useTranslation();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleClose = useCallback(() => setSelectedProduct(null), []);
  const handleSelect = useCallback((product) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-black pt-20">
      <div className="container max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-5xl md:text-8xl font-bold text-neutral-900 dark:text-white tracking-tighter md:dark:[text-shadow:0_0_40px_rgba(255,255,255,0.5),0_0_80px_rgba(255,255,255,0.3)]">
            BOLD COLLECTION
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              onClick={() => handleSelect(product)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleClose}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 overflow-y-auto"
          >
            <button
              onClick={handleClose}
              className="fixed top-4 right-4 md:top-8 md:right-8 text-white text-4xl hover:text-neutral-400 transition z-10"
              aria-label="Close"
            >
              ×
            </button>

            <motion.div 
              className="w-full max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center my-auto" 
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full aspect-[3/4] bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl">
                <motion.img
                  key={currentImageIndex}
                  src={selectedProduct.images[currentImageIndex]}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  width="600"
                  height="800"
                />
                {selectedProduct.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {selectedProduct.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-2 h-2 rounded-full transition ${
                          idx === currentImageIndex ? 'bg-orange-500 w-8' : 'bg-white/40'
                        }`}
                        aria-label={`Image ${idx + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>

              <div className="flex flex-col justify-center text-white space-y-6 px-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-neutral-400 mb-2">{selectedProduct.category}</p>
                  <h2 
                    className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-orange-500 dark:text-orange-400"
                    style={{ textShadow: '0 0 30px rgba(249, 115, 22, 0.8), 0 0 60px rgba(249, 115, 22, 0.5)' }}
                  >
                    {selectedProduct.name}
                  </h2>
                </div>
                <a
                  href="https://wa.me/351912074656?text=Ol%C3%A1%20tenho%20interesse%20de%20comprar%20pe%C3%A7as%20da%20cole%C3%A7%C3%A3o%20bold"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 dark:bg-orange-600 px-8 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-orange-600 dark:hover:bg-orange-700 active:scale-95 w-fit"
                >
                  <img src="/favicon.png" alt="BoldMen's" className="w-5 h-5 invert" />
                  Adquirir o seu
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default memo(SecretPage);
