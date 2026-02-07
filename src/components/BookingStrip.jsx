import { useEffect, useRef } from "react";

function BookingStrip() {
  const mapRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-8");
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" },
    );

    if (mapRef.current) observer.observe(mapRef.current);
    if (buttonRef.current) observer.observe(buttonRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative z-10 -mt-12">
      <div className="container">
        <div className="grid gap-4 rounded-[32px] border border-neutral-200 bg-white p-6 shadow-lg md:grid-cols-3 md:p-8">
          <div className="group">
            <div className="transition-transform duration-300 group-hover:-translate-y-1">
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                Localiza&ccedil;&atilde;o
              </p>
              <p className="mt-2 text-base font-semibold text-neutral-900">
                BoldMen's Salon — R. 9 de Abril 99, 2765-609 Estoril, Portugal
              </p>
            </div>
          </div>
          <div className="group border-y border-neutral-200 py-4 md:border-x md:border-y-0 md:px-6 md:py-0">
            <div className="transition-transform duration-300 group-hover:-translate-y-1">
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                Reserva concierge
              </p>
              <a
                href="mailto:contato@boldmens.co"
                className="mt-2 inline-flex items-center gap-2 text-base font-medium text-orange-600 transition hover:text-orange-500"
              >
                contato@boldmens.co
              </a>
            </div>
          </div>
          <div className="group md:pl-6">
            <div className="transition-transform duration-300 group-hover:-translate-y-1">
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                Atendimento
              </p>
              <p className="mt-2 text-base font-semibold text-neutral-900">
                Segunda a Sexta &mdash; 10h &agrave;s 19h
              </p>
              <p className="text-base font-semibold text-neutral-900">
                S&aacute;bado &mdash; 09h &agrave;s 16h
              </p>
              <a
                href="tel:+351912074656"
                className="mt-2 inline-block text-lg font-semibold text-orange-600 transition hover:text-orange-500"
              >
                +351 912 074 656
              </a>
            </div>
          </div>
        </div>
        <div
          ref={mapRef}
          className="mt-4 overflow-hidden rounded-[32px] border border-neutral-200 bg-neutral-100 shadow-lg transition-all duration-1000 ease-out opacity-0 translate-y-8"
        >
          <iframe
            title="Localiza&ccedil;&atilde;o BoldMen's Salon"
            src="https://www.google.com/maps?q=BoldMen%27s+Salon+R.+9+de+Abril+99,+2765-609+Estoril,+Portugal&output=embed"
            className="h-72 w-full md:h-80"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
          />
        </div>
        <div
          ref={buttonRef}
          className="mt-6 flex justify-center transition-all duration-1000 ease-out delay-100 opacity-0 translate-y-8"
        >
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=BoldMen%27s+Salon+R.+9+de+Abril+99,+2765-609+Estoril,+Portugal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-full bg-neutral-900 px-8 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-lg transition hover:-translate-y-1 hover:bg-orange-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            Como chegar
          </a>
        </div>
      </div>
    </section>
  );
}

export default BookingStrip;
