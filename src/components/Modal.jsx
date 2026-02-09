import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

function Modal({ isOpen, onClose, children }) {
  const modalRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      // Pequeno delay para permitir que o navegador renderize antes de aplicar a classe de opacidade
      requestAnimationFrame(() => setIsVisible(true));
    } else {
      setIsVisible(false);
      // Aguarda a duração da transição (300ms) antes de desmontar
      const timer = setTimeout(() => setIsMounted(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );

        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    if (isMounted) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";

      // Foca no primeiro elemento interativo ao abrir
      setTimeout(() => {
        if (modalRef.current) {
          const focusableElements = modalRef.current.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
          );
          if (focusableElements.length > 0) {
            focusableElements[0].focus();
          }
        }
      }, 50);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isMounted, onClose]);

  if (!isMounted) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop com transição de opacidade */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ease-out ${
          isVisible ? "bg-opacity-50" : "bg-opacity-0"
        }`}
        aria-hidden="true"
        onClick={onClose}
      />

      {/* Conteúdo do Modal com transição de escala e opacidade */}
      <div
        ref={modalRef}
        className={`relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-lg bg-white p-6 shadow-xl transition-all duration-500 ease-out md:max-w-lg dark:bg-neutral-900 ${
          isVisible ? "scale-100 opacity-100 translate-y-0" : "scale-90 opacity-0 translate-y-8"
        }`}
      >
        <div className="pointer-events-none sticky top-0 z-10 -ml-6 -mr-6 -mt-6 mb-4 flex justify-end px-6 pt-6">
          <button
            onClick={onClose}
            className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-neutral-500 shadow-sm backdrop-blur-sm transition hover:bg-neutral-100 hover:text-orange-500 dark:bg-neutral-900/80 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white"
            aria-label="Close modal"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Modal;
