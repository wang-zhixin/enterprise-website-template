import Link from 'next/link';
import { Logo } from './ui/Logo';
import { siteConfig } from '@/config/navigation';

const serviceLinks = [
  'HRO岗位外包',
  'RPO批量招聘流程外包',
  '中高端猎头',
  '人事代理',
  '劳务派遣',
  '灵活用工',
  '员工福利',
];

const qualifications = ['人力资源服务许可', '劳务派遣经营许可', 'AAA企业信用等级'];

const Footer = () => {
  return (
    <footer className="relative isolate overflow-hidden bg-[#031827] text-white" aria-labelledby="footer-heading">
      <div
        className="pointer-events-none absolute -bottom-16 -right-10 -z-10 text-[10rem] font-semibold leading-none tracking-[-0.1em] text-white/[0.025] sm:text-[18rem] lg:text-[26rem]"
        aria-hidden="true"
      >
        RUISE
      </div>

      <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-16 2xl:px-24">
        {/* <div className="grid gap-12 border-b border-white/15 py-20 sm:py-24 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Business Cooperation
            </p>
            <h2
              id="footer-heading"
              className="mt-7 max-w-5xl text-4xl font-semibold leading-[1.12] tracking-[-0.05em] text-white sm:text-5xl 2xl:text-6xl"
            >
              让用工更稳，
              <br />
              让交付更快
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex min-h-14 w-fit items-center gap-6 bg-primary px-8 text-base font-semibold tracking-[0.04em] text-white transition-colors hover:bg-white hover:text-[#082f4f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            提交合作需求
            <span aria-hidden="true">↗</span>
          </Link>
        </div> */}

        <div className="grid gap-12 py-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16 2xl:gap-24">
          <div>
            <Logo text={siteConfig.name} variant="white" />
            <p className="mt-7 max-w-md text-base leading-8 text-white/55">
              具备人力资源服务许可及劳务派遣业务经营许可，为企业提供全方位、综合性、一站式人力资源服务。
            </p>
            <p className="mt-7 text-sm font-semibold tracking-[0.12em] text-primary">
              Rise your business through HRO
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-[0.14em] text-white/45">CORE SERVICES</p>
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-4">
              {serviceLinks.map((item) => (
                <Link
                  key={item}
                  href="/services"
                  className="text-base text-white/55 transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  {item}
                </Link>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-7">
              {qualifications.map((item) => (
                <span key={item} className="inline-flex items-center gap-3 text-sm text-white/50">
                  <span className="h-1 w-1 bg-primary" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-8 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} 睐智人力资源（上海）有限公司</p>
          <p>旗下品牌：睐智人力 · 职得邦</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
