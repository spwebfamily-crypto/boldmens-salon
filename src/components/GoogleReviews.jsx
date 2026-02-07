import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../contexts/LanguageContext';

function GoogleReviews() {
  const t = useTranslation();
  
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const reviews = t.reviews.items;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container px-4">
        <motion.div 
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-orange-600 mb-4">
            <span className="h-px w-8 bg-orange-500" />
            {t.reviews.tag}
          </span>
          <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] leading-tight text-neutral-900 mb-4 md:mb-6 px-4">
            {t.reviews.title}
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6 md:mb-8">
            <span className="text-4xl md:text-5xl font-bold text-neutral-900">4.9</span>
            <div>
              <div className="flex gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 md:w-6 md:h-6 fill-orange-500" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs md:text-sm text-neutral-600">{t.reviews.basedOn}</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-8 md:mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reviews.map((review, index) => {
            const avatar = review.name.split(' ').map(n => n[0]).join('');
            return (
            <motion.article 
              key={index} 
              className="rounded-[24px] md:rounded-[32px] border border-neutral-200 bg-white p-4 md:p-6 shadow-md hover:shadow-lg transition"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-orange-500 text-white font-semibold text-sm md:text-base">
                  {avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-neutral-900 text-sm md:text-base truncate">{review.name}</p>
                  <p className="text-xs text-neutral-500">{review.date}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-2 md:mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-orange-500" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs md:text-sm text-neutral-700 leading-relaxed">{review.text}</p>
            </motion.article>
          );})}
        </motion.div>

        <motion.div 
          className="rounded-[24px] md:rounded-[40px] border border-neutral-200 bg-white p-4 md:p-8 shadow-lg mb-6 md:mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.844753!2d-9.3764911!3d38.6953615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ec5edf74664bd%3A0x4df25e3be83a61bd!2sBoldMen's%20Salon!5e0!3m2!1spt-PT!2spt!4v1234567890"
            width="100%"
            height="300"
            className="md:h-[450px]"
            style={{ border: 0, borderRadius: '16px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="BoldMen's Salon Location"
          />
        </motion.div>

        <motion.div 
          className="text-center flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=BoldMen%27s+Salon+R.+9+de+Abril+99,+2765-609+Estoril,+Portugal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-full bg-neutral-900 px-8 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-lg transition hover:-translate-y-1 hover:bg-orange-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            {t.reviews.getDirections}
          </a>
          <a
            href="https://www.google.com/maps/place/BoldMen%E2%80%99s+Salon/@38.6953615,-9.3764911,945m/data=!3m1!1e3!4m8!3m7!1s0xd1ec5edf74664bd:0x4df25e3be83a61bd!8m2!3d38.6953573!4d-9.3739162!9m1!1b1!16s%2Fg%2F11kb4rb4ms"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-900 px-6 md:px-8 py-3 md:py-4 text-xs md:text-sm font-semibold uppercase tracking-[0.35em] text-neutral-900 transition hover:bg-orange-500 hover:border-orange-500 hover:text-white hover:-translate-y-1"
          >
            {t.reviews.viewAll}
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default GoogleReviews;
