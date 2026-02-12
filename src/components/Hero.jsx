import { useState, memo, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "../contexts/LanguageContext";

const heroImage = "https://images.unsplash.com/photo-1507682226856-0e0b0a7a41e5?auto=format&fit=crop&w=800&q=60";

const VideoCard = memo(function VideoCard({ onLoad }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      video.currentTime = 0;
      video.play().catch(() => {});
    };

    video.addEventListener('ended', handleEnded);
    return () => video.removeEventListener('ended', handleEnded);
  }, []);

  return (
    <video
      ref={videoRef}
      src="/boldmens-logo.mp4"
      className="h-full w-full object-cover"
      autoPlay
      loop
      muted
      playsInline
      preload="none"
      onLoadedData={onLoad}
      width="400"
      height="711"
    />
  );
});

function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const t = useTranslation();

  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[92vh] items-center overflow-hidden bg-white dark:bg-neutral-950 pb-20 pt-28 text-neutral-900 dark:text-white"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-white/95 dark:from-neutral-950/95 via-white/90 dark:via-neutral-950/90 to-white dark:to-neutral-950"
        aria-hidden="true"
      />
      <div className="container relative grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
        <motion.div 
          className="space-y-6 md:space-y-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.38em] text-neutral-600 dark:text-neutral-400">
            <span className="h-px w-10 bg-orange-500" />
            {t.hero.subtitle}
          </div>
          <h1 className="text-[clamp(2.5rem,8vw,4.9rem)] font-display leading-[1.04] text-neutral-900 dark:text-neutral-100">
            {t.hero.title}
          </h1>
          <p className="max-w-2xl text-base md:text-lg text-neutral-700 dark:text-neutral-300">
            {t.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <a
              href="https://www.fresha.com/pt/a/boldmens-salon-estoril-rua-9-de-abril-99a-nat7n6mn/booking?allOffer=true&pId=832755&cartId=6344b719-9962-47ce-bf23-c346cbe5086b"
              className="inline-flex items-center justify-center rounded-full bg-neutral-900 dark:bg-orange-600 px-6 md:px-7 py-3 text-xs md:text-sm font-semibold uppercase tracking-[0.35em] text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-500 active:scale-95"
            >
              {t.hero.bookBtn}
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center rounded-full border border-neutral-900 dark:border-neutral-700 px-6 md:px-7 py-3 text-xs md:text-sm font-semibold uppercase tracking-[0.35em] text-neutral-900 dark:text-neutral-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-orange-500 hover:text-orange-600 active:scale-95"
            >
              {t.hero.servicesBtn}
            </a>
          </div>
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400">
            {t.hero.location}
          </p>
        </motion.div>
        <motion.div 
          className="flex gap-6 lg:hidden mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <article className="relative flex-1 overflow-hidden rounded-[32px] border border-neutral-200 bg-white/80 shadow-lg aspect-[9/16] max-h-[400px]">
            {!videoLoaded && <div className="h-full w-full bg-neutral-100 animate-pulse" />}
            <VideoCard onLoad={() => setVideoLoaded(true)} />
            <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-white/90" />
          </article>
        </motion.div>
        <motion.div 
          className="hidden gap-6 lg:flex"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
        >
          <article className="relative flex-1 overflow-hidden rounded-[40px] border border-neutral-200 bg-white/80 shadow-lg">
            {!videoLoaded && <div className="h-full w-full bg-neutral-100 animate-pulse" />}
            <VideoCard onLoad={() => setVideoLoaded(true)} />
            <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-white/90" />
          </article>
          <div className="flex w-48 flex-col justify-between rounded-[32px] border border-neutral-200 dark:border-neutral-800 bg-neutral-900 dark:bg-neutral-800 p-6 text-white shadow-md">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white">
              {t.hero.hours}
            </p>
            <div className="space-y-4 text-sm text-neutral-200 dark:text-neutral-300">
              <div>
                <p>{t.hero.weekdays}</p>
                <p className="text-white">{t.hero.weekdaysTime}</p>
              </div>
              <div>
                <p>{t.hero.saturday}</p>
                <p className="text-white">{t.hero.saturdayTime}</p>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Rua+9+de+Abril+99%2C+Estoril%2C+Portugal+2765-609"
              className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-200 dark:text-orange-300 transition hover:text-orange-400"
              target="_blank"
              rel="noreferrer"
            >
              Rua 9 de Abril, 99 - Estoril, Portugal
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(Hero);
