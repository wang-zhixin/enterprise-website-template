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
    <section className="relative isolate min-h-[780px] overflow-hidden bg-[#061f34] text-white 2xl:min-h-[900px]">
      <Image
        src="/3.jpg"
        alt="睐智人力品牌墙"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 z-10 bg-[#031b2d]/70" />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#031b2d]/25 via-transparent to-[#031b2d]/85" />

      <div className="relative z-20 mx-auto flex min-h-[780px] w-full max-w-[1600px] flex-col justify-center px-6 py-24 sm:px-10 sm:py-28 lg:px-16 2xl:min-h-[900px] 2xl:px-24 2xl:py-36">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm uppercase tracking-[0.24em] text-primary">Professional Qualification</p>
          <p className="text-xs uppercase tracking-[0.2em] text-white/45 sm:text-sm">Licensed · Trusted · Nationwide</p>
        </div>

        <h2 className="mt-8 text-4xl font-semibold leading-[1.12] tracking-[-0.05em] text-white sm:text-5xl lg:whitespace-nowrap lg:text-6xl 2xl:text-7xl">
          专业合规，才能长期托付
        </h2>

        <div className="mt-14 grid grid-cols-1 border-y border-white/20 sm:grid-cols-2 lg:grid-cols-4">
          {qualifications.map((item, index) => (
            <div
              key={item}
              className={`flex items-baseline gap-4 py-5 sm:px-6 sm:py-7 ${index > 0 ? 'border-t border-white/15 sm:border-t-0' : ''} ${index % 2 === 1 ? 'sm:border-l sm:border-white/15' : ''} ${index > 0 ? 'lg:border-l lg:border-white/15' : ''}`}
            >
              <span className="text-xs tabular-nums tracking-[0.2em] text-primary">{String(index + 1).padStart(2, '0')}</span>
              <span className="text-base font-medium text-white/85 sm:text-lg">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16">
          <div>
            <p className="text-2xl font-medium leading-10 tracking-[-0.025em] text-white sm:text-3xl sm:leading-[1.45]">
              让用工更稳，让交付更快，让管理更安心。
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/60 sm:text-lg sm:leading-9">
              告诉我们您的岗位规模、到岗时间与服务城市，专业团队将为您梳理适合的服务方案。
            </p>
          </div>
          <Link
            href="/contact#business-inquiry"
            className="inline-flex min-h-14 w-fit items-center gap-6 bg-primary px-8 text-base font-semibold tracking-[0.04em] text-white transition-colors hover:bg-white hover:text-[#082f4f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            开始合作
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Careers;
