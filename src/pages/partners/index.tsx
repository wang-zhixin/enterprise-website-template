import { useScrollReveal } from '../../hooks/useScrollReveal';
import { NextPage } from 'next';
import Image from 'next/image';
import MainLayout from '../../components/layouts/MainLayout';
import { partnerLogos } from '@/config/partners';

const PartnersPage: NextPage = () => {
  const motionRoot = useScrollReveal();

  return (
    <MainLayout
      title="合作伙伴 - 睐智人力"
      description="睐智人力与制造、零售、互联网、物流及现代服务企业建立长期合作关系"
    >
      <div ref={motionRoot} className="site-motion bg-white">
        <header className="relative isolate min-h-[66svh] overflow-hidden bg-[#061f34] text-white sm:min-h-[70svh]">
          <Image
            src="/2.jpg"
            alt="蓝天下的睐智人力品牌旗帜"
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover object-[center_48%]"
          />
          <div className="absolute inset-0 -z-10 bg-[#031b2d]/68" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#031b2d]/75 via-transparent to-[#031b2d]/30" />

          <div className="mx-auto flex min-h-[66svh] w-full max-w-[1800px] items-center justify-center px-6 pb-14 pt-28 sm:min-h-[70svh] sm:px-10 sm:pb-16 sm:pt-32 lg:px-16 2xl:px-24">
            <div data-reveal className="relative w-full max-w-4xl px-7 py-12 text-center sm:px-16 sm:py-16">
              <span className="absolute left-0 top-0 h-px w-[28%] bg-white/70" aria-hidden="true" />
              <span className="absolute left-0 top-0 h-16 w-px bg-white/70" aria-hidden="true" />
              <span className="absolute right-0 top-0 h-px w-[28%] bg-white/70" aria-hidden="true" />
              <span className="absolute right-0 top-0 h-16 w-px bg-white/70" aria-hidden="true" />
              <span className="absolute bottom-0 left-0 h-px w-[28%] bg-white/70" aria-hidden="true" />
              <span className="absolute bottom-0 left-0 h-16 w-px bg-white/70" aria-hidden="true" />
              <span className="absolute bottom-0 right-0 h-px w-[28%] bg-white/70" aria-hidden="true" />
              <span className="absolute bottom-0 right-0 h-16 w-px bg-white/70" aria-hidden="true" />

              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Partner Network</p>
              <h1 className="mt-6 text-5xl font-semibold leading-[1.08] tracking-[-0.05em] text-white sm:text-6xl 2xl:text-7xl">
                合作伙伴
              </h1>
              <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg sm:leading-9">
                以稳定交付、合规管理与持续服务，与优秀企业建立长期合作关系。
              </p>
            </div>
          </div>
        </header>

        <main className="relative overflow-hidden px-6 py-24 sm:px-10 sm:py-32 lg:px-16 2xl:px-24 2xl:py-40">
          <div
            className="pointer-events-none absolute -right-10 top-16 text-[9rem] font-semibold leading-none tracking-[-0.1em] text-slate-50 sm:text-[16rem] 2xl:text-[22rem]"
            aria-hidden="true"
          >
            PARTNERS
          </div>

          <section className="relative mx-auto w-full max-w-[1500px]" aria-labelledby="partner-list-title">
            <div data-reveal className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end lg:gap-16 2xl:gap-24">
              <div>
                <p className="flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                  <span className="h-px w-12 bg-primary" aria-hidden="true" />
                  Trusted Companies
                </p>
                <h2
                  id="partner-list-title"
                  className="mt-7 text-4xl font-semibold leading-[1.12] tracking-[-0.05em] text-[#082f4f] sm:text-5xl 2xl:text-6xl"
                >
                  合作企业
                </h2>
              </div>
              <div className="lg:pb-2">
                <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
                  服务覆盖制造、零售、互联网、物流及现代服务等行业，以专业能力响应不同发展阶段的人力资源需求。
                </p>
                <p className="mt-4 text-sm tracking-[0.08em] text-slate-400">仅展示部分合作企业</p>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-px border border-slate-200 bg-slate-200 sm:mt-20 md:grid-cols-3 lg:grid-cols-4">
              {partnerLogos.map((logo, index) => (
                <figure
                  data-reveal
                  key={logo}
                  className="flex h-28 items-center justify-center bg-white px-5 py-6 sm:h-32 sm:px-8 lg:h-36 2xl:h-40"
                  aria-label={`合作企业标识 ${String(index + 1).padStart(2, '0')}`}
                >
                  <div className="relative h-14 w-full max-w-[180px] sm:h-16 lg:h-[4.5rem]">
                    <Image
                      src={logo}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 180px, (min-width: 640px) 160px, 120px"
                      className="object-contain"
                    />
                  </div>
                </figure>
              ))}
            </div>
          </section>
        </main>
      </div>
    </MainLayout>
  );
};

export default PartnersPage;
