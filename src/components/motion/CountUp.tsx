import { useEffect, useRef, useState } from 'react';

const formatNumber = new Intl.NumberFormat('zh-CN');

const CountUp = ({ value, suffix = '' }: { value: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    const element = ref.current;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!element || !('IntersectionObserver' in window)) return;

    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      if (preference.matches) return;

      let startedAt: number | undefined;
      setDisplayValue(0);
      const animate = (now: number) => {
        startedAt ??= now;
        const progress = Math.min((now - startedAt) / 1100, 1);
        setDisplayValue(Math.round(value * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) frame = requestAnimationFrame(animate);
      };
      frame = requestAnimationFrame(animate);
    }, { threshold: 0.5 });

    const finish = () => {
      if (!preference.matches) return;
      cancelAnimationFrame(frame);
      observer.disconnect();
      setDisplayValue(value);
    };
    observer.observe(element);
    preference.addEventListener('change', finish);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      preference.removeEventListener('change', finish);
    };
  }, [value]);

  const finalValue = `${formatNumber.format(value)}${suffix}`;
  return (
    <span ref={ref} className="inline-grid tabular-nums">
      <span className="invisible col-start-1 row-start-1" aria-hidden="true">{finalValue}</span>
      <span className="col-start-1 row-start-1" aria-hidden="true">{formatNumber.format(displayValue)}{suffix}</span>
      <span className="sr-only">{finalValue}</span>
    </span>
  );
};

export default CountUp;
