import { useEffect, useRef } from 'react';

export function ScrollAnimation() {
  useEffect(() => {
    // Wait for page to fully load before setting up animations
    const timer = setTimeout(() => {
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      }, observerOptions);

      // Only observe elements that are not already in viewport
      const animatedElements = document.querySelectorAll('.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right, .animate-on-scroll-scale');
      animatedElements.forEach(el => {
        // Skip elements that are already visible on page load
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        if (!isVisible) {
          observer.observe(el);
        }
      });

      return () => {
        animatedElements.forEach(el => observer.unobserve(el));
      };
    }, 100); // Small delay to ensure page is stable

    return () => clearTimeout(timer);
  }, []);

  return null;
}
