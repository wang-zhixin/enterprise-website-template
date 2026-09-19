import { useEffect, useRef } from 'react';

export const useScrollReveal = () => {
  const motionRoot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = motionRoot.current;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!root || preference.matches || !('IntersectionObserver' in window)) return;

    const elements = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]'));
    const animations = new Set<Animation>();
    elements.forEach((element) => element.setAttribute('data-reveal-pending', ''));

    const observer = new IntersectionObserver((entries) => {
      entries.filter((entry) => entry.isIntersecting).forEach((entry, index) => {
        observer.unobserve(entry.target);
        const direction = entry.target.getAttribute('data-reveal');
        const distance = window.innerWidth < 640 ? 40 : 72;
        const start = direction === 'left'
          ? `-${distance}px 0`
          : direction === 'right' ? `${distance}px 0` : `0 ${distance}px`;
        const animation = entry.target.animate(
          [{ opacity: 0, translate: start }, { opacity: 1, translate: '0 0' }],
          {
            duration: 1200,
            delay: Math.min(index, 3) * 180,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            fill: 'backwards',
          },
        );
        entry.target.removeAttribute('data-reveal-pending');
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -12% 0px' });

    elements.forEach((element) => observer.observe(element));
    const clear = () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
      elements.forEach((element) => element.removeAttribute('data-reveal-pending'));
    };
    const stop = () => {
      if (preference.matches) clear();
    };
    const revealFocused = (event: FocusEvent) => {
      const element = (event.target as HTMLElement).closest('[data-reveal]');
      if (!element) return;
      observer.unobserve(element);
      element.removeAttribute('data-reveal-pending');
      element.getAnimations().forEach((animation) => animation.cancel());
    };
    root.addEventListener('focusin', revealFocused);
    preference.addEventListener('change', stop);
    return () => {
      clear();
      root.removeEventListener('focusin', revealFocused);
      preference.removeEventListener('change', stop);
    };
  }, []);

  return motionRoot;
};
