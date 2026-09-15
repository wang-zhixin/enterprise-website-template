import Image from 'next/image';
import Link from 'next/link';

const qualifications = [
  '人力资源服务许可证',
  '劳务派遣经营许可证',
  'AAA级企业信用等级',
  '人力资源外包民营TOP50',
];

const Careers = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#edecea]">
      <div className="grid min-h-[820px] lg:grid-cols-[1.08fr_0.92fr]">
        <div className="relative min-h-[520px] overflow-hidden lg:min-h-full">
          <Image
            src="/3.jpg"
            alt="睐智人力品牌墙"
            fill
            sizes="(min-width: 1024px) 54vw, 100vw"
            className="object-cover transition-transform duration-[1400ms] hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#031b2d]/75 via-transparent to-transparent" />
          <p className="absolute bottom-10 left-6 text-sm font-semibold uppercase tracking-[0.2em] text-white/70 sm:left-10 lg:bottom-16 lg:left-16 xl:left-24">
            Licensed · Trusted · Nationwide
          </p>
        </div>

        <div className="relative flex items-center overflow-hidden px-6 py-20 sm:px-10 sm:py-28 lg:px-14 xl:px-20 2xl:px-24">
          <div
            className="pointer-events-none absolute -right-12 top-4 text-[16rem] font-semibold leading-none tracking-[-0.1em] text-white/70"
            aria-hidden="true"
          >
            R
          </div>
          <div className="relative max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Professional Qualification
            </p>
            <h2 className="mt-7 text-4xl font-semibold leading-[1.12] tracking-[-0.05em] text-[#082f4f] sm:text-5xl lg:text-6xl">
              专业合规，
              <br />
              才能长期托付
            </h2>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
              {qualifications.map((item, index) => (
                <span key={item} className="inline-flex items-center gap-3 text-base font-semibold text-[#082f4f]">
                  <span className="text-sm text-primary">{String(index + 1).padStart(2, '0')}</span>
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-12 max-w-xl text-xl font-medium leading-9 text-slate-700 sm:text-2xl sm:leading-10">
              让用工更稳，让交付更快，让管理更安心。
            </p>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-500">
              告诉我们您的岗位规模、到岗时间与服务城市，专业团队将为您梳理适合的服务方案。
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex min-h-14 items-center gap-6 bg-primary px-8 text-base font-semibold tracking-[0.04em] text-white transition-colors hover:bg-[#082f4f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              开始合作
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
