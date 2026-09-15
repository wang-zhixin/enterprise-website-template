import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface CountUpProps {
  value: number;
  suffix: string;
  start: boolean;
  delay: number;
}

const formatNumber = new Intl.NumberFormat('zh-CN');

const CountUp = ({ value, suffix, start, delay }: CountUpProps) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayValue(value);
      return;
    }

    let animationFrame = 0;
    let startedAt: number | null = null;
    const timeout = window.setTimeout(() => {
      const animate = (timestamp: number) => {
        startedAt ??= timestamp;
        const progress = Math.min((timestamp - startedAt) / 1400, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(Math.round(value * easedProgress));

        if (progress < 1) {
          animationFrame = window.requestAnimationFrame(animate);
        }
      };

      animationFrame = window.requestAnimationFrame(animate);
    }, delay);

    return () => {
      window.clearTimeout(timeout);
      window.cancelAnimationFrame(animationFrame);
    };
  }, [delay, start, value]);

  return (
    <>
      <span aria-hidden="true">
        {formatNumber.format(displayValue)}
        {suffix}
      </span>
      <span className="sr-only">
        {formatNumber.format(value)}
        {suffix}
      </span>
    </>
  );
};

const stats = [
  ['服务企业', 1000, '+', '覆盖不同规模与发展阶段的企业客户'],
  ['累计服务人数', 200, '万+', '持续连接人才、岗位与组织需求'],
  ['月均招聘交付', 3000, '+', '以稳定交付支持企业用工需求'],
  ['专业服务团队', 200, '+', '招聘、交付与客户服务协同'],
] as const;

const CompanyOverview = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (!('IntersectionObserver' in window)) {
      setStartCounting(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#061f34]"
      aria-labelledby="company-overview-title"
    >
      <div className="relative min-h-[860px] overflow-hidden sm:min-h-[920px] lg:min-h-[980px]">
        <Image
          src="/1.jpg"
          alt="睐智人力上海总部办公空间"
          fill
          sizes="100vw"
          className="object-cover object-center transition-transform duration-[1600ms] hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#031b2d]/95 via-[#031b2d]/58 to-[#031b2d]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#031b2d]/90 via-transparent to-transparent" />
        <div
          className="pointer-events-none absolute right-[-0.08em] top-1/2 -translate-y-1/2 text-[13rem] font-semibold leading-none tracking-[-0.1em] text-white/[0.07] sm:text-[21rem] lg:text-[31rem]"
          aria-hidden="true"
        >
          2017
        </div>

        <div className="relative mx-auto flex min-h-[860px] w-full max-w-[1800px] items-end px-6 pb-16 pt-32 text-white sm:min-h-[920px] sm:px-10 sm:pb-20 lg:min-h-[980px] lg:px-16 lg:pb-24 xl:px-24">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-14 bg-primary" aria-hidden="true" />
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                About Ruise
              </p>
            </div>
            <h2
              id="company-overview-title"
              className="mt-8 text-4xl font-semibold leading-[1.12] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl"
            >
              立足上海，
              <br />
              服务全国
            </h2>
            <p className="mt-9 max-w-3xl text-base leading-8 text-white/70 sm:text-lg sm:leading-9">
              睐智人力成立于2017年，旗下有睐智人力、职得邦两个品牌，在多座重点城市设立分公司及分支机构，服务网络遍及300多座大中城市，服务客户近千家。
            </p>
            <div className="mt-10 flex flex-wrap gap-x-12 gap-y-6 text-base text-white/65">
              <p className="m-0">
                <span className="mr-3 text-primary">01</span>
                企业发展 · 持续降本增效
              </p>
              <p className="m-0">
                <span className="mr-3 text-primary">02</span>
                企业使命 · 发展得更好、更快
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-[#f0f2f1] px-6 sm:px-10 lg:px-16 xl:px-24">
        <div
          className="absolute left-0 top-0 h-1 w-[38%] bg-primary"
          aria-hidden="true"
        />
        <dl className="mx-auto grid w-full max-w-[1800px] py-14 sm:grid-cols-2 sm:py-16 lg:grid-cols-4 lg:py-20">
          {stats.map(([label, value, suffix, description], index) => (
            <div
              key={label}
              className="relative border-b border-slate-300 py-8 first:pt-0 last:border-b-0 sm:px-8 sm:first:pl-0 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:py-0 lg:first:px-0 lg:last:border-r-0"
            >
              <dt className="flex items-center justify-between gap-4 text-sm font-semibold tracking-[0.1em] text-[#082f4f]">
                {label}
                <span className="text-xs text-slate-400">0{index + 1}</span>
              </dt>
              <dd className="mt-6 text-4xl font-semibold tracking-[-0.06em] text-primary tabular-nums sm:text-5xl xl:text-6xl">
                <CountUp value={value} suffix={suffix} start={startCounting} delay={index * 120} />
              </dd>
              <dd className="mt-5 max-w-xs text-base leading-8 text-slate-500">{description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default CompanyOverview;
