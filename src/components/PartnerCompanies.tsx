import Image from 'next/image';
import CountUp from './motion/CountUp';
import { partnerLogos } from '@/config/partners';

const logoRows = [
  partnerLogos.slice(0, 19),
  partnerLogos.slice(19, 38),
  partnerLogos.slice(38),
];

const PartnerCompanies = () => {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#061f34] px-6 py-24 text-white sm:px-10 sm:py-32 lg:px-16 2xl:px-24 2xl:py-40"
      aria-labelledby="partner-companies-title"
    >
      <div
        className="pointer-events-none absolute -right-12 top-1/2 -z-10 -translate-y-1/2 text-[10rem] font-semibold leading-none tracking-[-0.1em] text-white/[0.025] sm:text-[18rem] 2xl:text-[25rem]"
        aria-hidden="true"
      >
        PARTNERS
      </div>
      <div
        className="pointer-events-none absolute left-[12%] top-0 -z-10 h-full w-px rotate-[18deg] bg-gradient-to-b from-transparent via-primary/50 to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-[1600px]">
        <div data-reveal className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:gap-16 2xl:gap-24">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-14 bg-primary" aria-hidden="true" />
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                Trusted Network
              </p>
            </div>
            <h2
              id="partner-companies-title"
              className="mt-8 max-w-2xl text-4xl font-semibold leading-[1.12] tracking-[-0.05em] text-white sm:text-5xl 2xl:text-6xl"
            >
              与优秀企业
              <br />
              长期同行
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-2xl text-base leading-8 text-white/60 sm:text-lg sm:leading-9">
              以稳定交付、合规管理与持续服务，陪伴制造、零售、互联网、物流及现代服务企业稳健成长。
            </p>
            <div className="mt-9 flex items-end gap-5">
              <span className="text-5xl font-semibold leading-none tracking-[-0.06em] text-primary sm:text-6xl">
                <CountUp value={5000} suffix="+" />
              </span>
              <span className="pb-1 text-base font-semibold leading-7 tracking-[0.08em] text-white/60">
                企业客户
                <br />
                持续选择
              </span>
            </div>
          </div>
        </div>

        <div data-reveal className="relative mt-20 sm:mt-24">
          <div
            className="absolute -left-6 top-0 h-full w-1 bg-primary sm:-left-10 lg:-left-16 xl:-left-24"
            aria-hidden="true"
          />
          <div className="brand-signal border-y border-white/15" aria-label="合作企业标识展示区">
            {logoRows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="partner-logo-row overflow-x-auto border-b border-white/15 last:border-b-0"
              >
                <div
                  className={
                    rowIndex === 1
                      ? 'partner-logo-track partner-logo-track-reverse flex w-max'
                      : 'partner-logo-track flex w-max'
                  }
                >
                  {[...row, ...row].map((logo, logoIndex) => (
                    <div
                      key={`${logo}-${logoIndex}`}
                      className="flex h-28 w-44 shrink-0 items-center justify-center border-r border-slate-200 bg-white px-5 sm:h-32 sm:w-56 sm:px-8"
                      aria-hidden={logoIndex >= row.length}
                    >
                      <div className="relative h-14 w-32 sm:h-16 sm:w-40">
                        <Image
                          src={logo}
                          alt=""
                          fill
                          sizes="160px"
                          className="object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-right text-sm tracking-[0.1em] text-white/40">
            仅展示部分合作企业
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnerCompanies;
