import { useEffect, useRef } from 'react';
import { NextPage } from 'next';
import Hero from '../components/Hero';
import CompanyOverview from '../components/CompanyOverview';
import PartnerCompanies from '../components/PartnerCompanies';
import Features from '../components/Features';
import CaseStudies from '../components/CaseStudies';
import Testimonials from '../components/Testimonials';
import Careers from '../components/Careers';
import MainLayout from '../components/layouts/MainLayout';

const HomePage: NextPage = () => {
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

  return (
    <MainLayout
      title="睐智人力 - 专业人力资源外包服务"
      description="提供HRO岗位外包、RPO批量招聘、中高端猎头、人事代理、劳务派遣、灵活用工和员工福利服务"
    >
      <div ref={motionRoot} className="home-motion min-h-screen bg-white">
        <div>
          <Hero />
          <CompanyOverview />
          <PartnerCompanies />
          <Features />
          <CaseStudies />
          <Testimonials />
          <Careers />
        </div>

      </div>
    </MainLayout>
  );
};

export default HomePage;
