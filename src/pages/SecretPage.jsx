import { useState, memo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../contexts/LanguageContext';

const products = [
  { id: 1, name: 'BONE CREME', category: 'HEADWEAR', images: ['/roupas/bone_creme_front.jpg', '/roupas/bone_creme_side.jpg'] },
  { id: 2, name: 'BONE PRETO BORDADO', category: 'HEADWEAR', images: ['/roupas/bone_preto_bordado_back.jpg'] },
  { id: 3, name: 'CASACO PRETO', category: 'OUTERWEAR', images: ['/roupas/Casaco preto_rafael.jpg', '/roupas/casaco preto_rafael_back.jpg'] },
  { id: 4, name: 'CASACO CREME', category: 'OUTERWEAR', images: ['/roupas/casaco_creme_front.jpg'] },
  { id: 5, name: 'MEIAS BOLD', category: 'ACCESSORIES', images: ['/roupas/meias_front.jpg'] },
  { id: 6, name: 'OUTFIT COMPLETO', category: 'COLLECTION', images: ['/roupas/outfit_bone_preto_front.jpg'] },
  { id: 7, name: 'MURAL BONES', category: 'GALLERY', images: ['/roupas/mural_bones.jpg'] },
  { id: 8, name: 'MURAL T-SHIRTS', category: 'GALLERY', images: ['/roupas/mural_t-shirts.jpg'] },
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
      <div className="relative aspect-[3/4] bg-neutral-200 dark:bg-neutral-900 overflow-hidden mb-4">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>
      <div className="space-y-1">
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">{product.category}</p>
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
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-neutral-900 dark:text-white mb-4 tracking-tighter">
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
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          >
            <button
              onClick={handleClose}
              className="absolute top-8 right-8 text-white text-4xl hover:text-neutral-400 transition z-10"
              aria-label="Close"
            >
              ×
            </button>

            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8" onClick={(e) => e.stopPropagation()}>
              <div className="relative aspect-[3/4] bg-neutral-900">
                <img
                  src={selectedProduct.images[currentImageIndex]}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
                {selectedProduct.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {selectedProduct.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-2 h-2 rounded-full transition ${
                          idx === currentImageIndex ? 'bg-white w-8' : 'bg-white/40'
                        }`}
                        aria-label={`Image ${idx + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>

              <div className="flex flex-col justify-center text-white space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-neutral-400 mb-2">{selectedProduct.category}</p>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">{selectedProduct.name}</h2>
                  <p className="text-neutral-400 text-sm uppercase tracking-wider">COMING SOON</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default memo(SecretPage);
