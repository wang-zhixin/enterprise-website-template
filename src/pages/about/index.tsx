import CountUp from '../../components/motion/CountUp';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { NextPage } from 'next';
import Image from 'next/image';
import MainLayout from '../../components/layouts/MainLayout';

const serviceCities = ['上海总部', '常州', '杭州', '武汉', '长沙', '深圳', '北京', '镇江', '芜湖', '安庆'];

const deliverySignals = [
  ['01', '200+', '招聘交付团队'],
  ['02', '百万级', '自有简历库'],
  ['03', '10万+', '活跃社群'],
  ['04', 'AI', '智能招聘机器人'],
];

const riskControls = [
  '招聘入职管控',
  '试用期管控',
  '劳动关系管控',
  '社会保险管控',
  '考勤管理管控',
  '调岗降薪管控',
  '工伤处理管控',
  '劳动争议管控',
  '奖惩制度管控',
  '工资管理管控',
  '职业健康管控',
  '离职管理管控',
];

const AboutPage: NextPage = () => {
  const motionRoot = useScrollReveal();

  return (
    <MainLayout
      title="关于我们 - 睐智人力"
      description="了解睐智人力的服务资质、全国服务网络、数字化招聘交付能力与风险防控体系"
    >
      <div ref={motionRoot} className="site-motion bg-white">
        <header className="relative flex min-h-screen overflow-hidden bg-transparent text-white lg:h-screen lg:min-h-[680px]">
          <Image
            src="/1.jpg"
            alt="睐智人力上海总部办公空间"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 z-10 bg-[#082f4f]/[0.25]" />
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#031b2d]/[0.18] via-transparent to-[#031b2d]/[0.32]" />

          <div data-reveal className="absolute inset-x-0 top-1/2 z-20 -translate-y-1/2 px-6 text-center sm:px-10">
            <h1 className="mx-auto whitespace-nowrap text-[clamp(1.4rem,7vw,4.6rem)] font-semibold leading-[1.15] tracking-[-0.055em] text-white drop-shadow-[0_3px_14px_rgba(8,47,79,0.42)] 2xl:text-[5.5rem]">
              人力资源服务机构百强企业
            </h1>
            <p className="mx-auto mt-8 max-w-5xl text-sm leading-7 text-white/85 sm:text-base sm:leading-8 lg:text-lg lg:leading-9">
              睐智人力资源(上海)有限公司是一家具备人力资源服务许可资质及劳务派遣业务经营许可的专业人力资源服务机构，主营业务包括人力资源HRO岗位外包、RPO批量招聘流程外包、中高端猎头、人事代理、劳务派遣、灵活用工和员工福利。
            </p>
            <p className="mt-7 text-xs uppercase tracking-[0.25em] text-white/75 sm:text-sm sm:tracking-[0.32em]">
              Rise your business through HRO
            </p>
          </div>
        </header>

        <section
          className="relative isolate overflow-hidden bg-[#f3f0eb] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 2xl:px-24 2xl:py-40"
          aria-labelledby="company-profile-title"
        >
          <div
            className="pointer-events-none absolute -right-[0.08em] top-8 -z-10 text-[12rem] font-semibold leading-none tracking-[-0.1em] text-[#082f4f]/[0.035] sm:text-[20rem] lg:text-[28rem]"
            aria-hidden="true"
          >
            2017
          </div>

          <div className="mx-auto w-full max-w-[1600px]">
            <div data-reveal className="grid gap-10 border-b border-[#082f4f]/20 pb-12 lg:grid-cols-[0.34fr_0.66fr] lg:items-end lg:gap-20 lg:pb-16 2xl:gap-28">
              <div className="flex items-center gap-5">
                <span className="text-xs tabular-nums tracking-[0.22em] text-primary">01</span>
                <span className="h-px w-14 bg-primary" aria-hidden="true" />
                <p className="text-sm uppercase tracking-[0.22em] text-primary">Company Profile</p>
              </div>
              <h2
                id="company-profile-title"
                className="max-w-5xl text-4xl font-semibold leading-[1.12] tracking-[-0.05em] text-[#082f4f] sm:text-5xl lg:text-6xl 2xl:text-7xl"
              >
                从2017出发，
                <br />
                走向全国服务网络
              </h2>
            </div>

            <div data-reveal className="relative mt-14 lg:min-h-[720px] lg:mt-20 2xl:min-h-[820px]">
              <figure className="relative h-[360px] overflow-hidden sm:h-[500px] lg:absolute lg:inset-y-0 lg:left-0 lg:h-auto lg:w-[62%]">
                <Image
                  src="/3.jpg"
                  alt="睐智人力品牌墙"
                  fill
                  sizes="(min-width: 1024px) 62vw, 100vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-[#031b2d]/20" />
                <figcaption className="absolute bottom-0 left-0 bg-[#082f4f] px-6 py-4 text-xs uppercase tracking-[0.2em] text-white/75 sm:px-8">
                  Shanghai · Since 2017
                </figcaption>
              </figure>

              <article className="relative z-10 -mt-10 bg-white px-6 py-9 shadow-[0_28px_80px_rgba(8,47,79,0.12)] sm:mx-8 sm:px-10 sm:py-12 lg:ml-[48%] lg:mr-0 lg:mt-0 lg:px-14 lg:py-14 2xl:px-16 2xl:py-16">
                <div className="flex items-end justify-between gap-8 border-b border-[#082f4f]/15 pb-8">
                  <div>
                    <p className="text-[4.5rem] font-semibold leading-none tracking-[-0.08em] text-primary sm:text-[6rem]">2017</p>
                    <p className="mt-3 text-sm tracking-[0.08em] text-slate-500">睐智人力成立</p>
                  </div>
                  <p className="pb-2 text-right text-sm uppercase leading-7 tracking-[0.16em] text-[#082f4f]/45">
                    Two Brands
                    <br />
                    One Network
                  </p>
                </div>

                <p className="mt-8 text-base leading-8 text-slate-600 sm:text-lg sm:leading-10">
                  睐智人力成立于2017,经过多年睐智人力伙伴的努力奋斗，旗下有睐智人力、职得邦两个品牌,总部位于上海,在常州、杭州、武汉、长沙、深圳、北京、镇江、芜湖、安庆等城市设立分公司及分支机构，服务网络遍及300多座大中城市，服务客户近千家，外包员工4W多人，人力资源服务机构百强企业。
                </p>

                <div className="mt-10 border-t border-[#082f4f]/15 pt-7">
                  <p className="text-xs uppercase tracking-[0.22em] text-primary">Service Footprint</p>
                  <ul role="list" className="mt-5 grid !ml-0 list-none grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-5 lg:grid-cols-2 xl:grid-cols-5">
                    {serviceCities.map((city, index) => (
                      <li key={city} className="flex items-center gap-2 !pl-0 text-sm text-[#082f4f]">
                        <span className="h-1 w-1 shrink-0 bg-primary" aria-hidden="true" />
                        <span>{city}</span>
                        <span className="ml-auto text-[0.65rem] tabular-nums text-[#082f4f]/30">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* <section className="relative min-h-[820px] overflow-hidden bg-[#061f34] sm:min-h-[900px] 2xl:min-h-[1080px]">
          <Image
            src="/1.jpg"
            alt="睐智人力上海总部办公空间"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#031b2d] via-[#031b2d]/52 to-transparent" />
          <div className="relative mx-auto flex min-h-[820px] w-full max-w-[1800px] items-end px-6 pb-16 pt-32 sm:min-h-[900px] sm:px-10 sm:pb-20 lg:px-16 2xl:min-h-[1080px] 2xl:px-24 2xl:pb-24 2xl:pt-40">
            <div className="grid w-full gap-12 text-white lg:grid-cols-[0.42fr_0.58fr] lg:items-end lg:gap-16 2xl:gap-24">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">02 · National Network</p>
                <h2 className="mt-7 text-4xl font-semibold leading-[1.12] tracking-[-0.05em] text-white sm:text-5xl 2xl:text-6xl">
                  立足上海，
                  <br />
                  服务全国
                </h2>
                <div className="mt-10 flex flex-wrap gap-x-10 gap-y-7">
                  {[
                    ['300+', '服务城市'],
                    ['近千家', '服务客户'],
                    ['4W+', '外包员工'],
                  ].map(([value, label]) => (
                    <div key={label}>
                      <p className="text-3xl font-semibold tracking-[-0.05em] text-primary sm:text-4xl">{value === '200+' ? <CountUp value={200} suffix="+" /> : value === '10万+' ? <CountUp value={10} suffix="万+" /> : value}</p>
                      <p className="mt-2 text-sm tracking-[0.04em] text-white/55">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <p className="border-l border-white/25 pl-7 text-base leading-9 text-white/70 sm:text-lg sm:leading-10 lg:pl-10">
                睐智人力成立于2017,经过多年睐智人力伙伴的努力奋斗，旗下有睐智人力、职得邦两个品牌,总部位于上海,在常州、杭州、武汉、长沙、深圳、北京、镇江、芜湖、安庆等城市设立分公司及分支机构，服务网络遍及300多座大中城市，服务客户近千家，外包员工4W多人，人力资源服务机构百强企业。
              </p>
            </div>
          </div>
        </section> */}

        <section className="relative overflow-hidden bg-[#e9eff1] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 2xl:px-24 2xl:py-40">
          <div className="mx-auto w-full max-w-[1600px]">
            <div data-reveal className="flex items-center gap-5">
              <span className="text-xs tabular-nums tracking-[0.22em] text-primary">02</span>
              <span className="h-px w-14 bg-primary" aria-hidden="true" />
              <p className="text-sm uppercase tracking-[0.22em] text-primary">Digital Delivery</p>
            </div>

            <div className="relative mt-12 overflow-hidden bg-[#dce7eb] lg:min-h-[840px] 2xl:min-h-[920px]">
              <div className="relative h-[360px] sm:h-[500px] lg:absolute lg:inset-0 lg:h-auto">
                <Image
                  src="/about/company.png"
                  alt="数字化招聘交付团队协作场景"
                  fill
                  sizes="(min-width: 1024px) 100vw, 100vw"
                  className="object-cover object-center lg:object-[62%_center]"
                />
                <div className="absolute inset-0 bg-[#082f4f]/10" />
              </div>

              <div className="relative z-10 flex flex-col lg:min-h-[840px] lg:justify-between 2xl:min-h-[920px]">
                <article data-reveal className="bg-[#edf2f3] px-6 py-10 sm:px-10 sm:py-14 lg:w-[52%] lg:px-14 lg:py-16 xl:w-[48%] 2xl:px-16 2xl:py-20">
                  <p className="text-sm uppercase tracking-[0.18em] text-[#082f4f]/50">Recruitment Operating System</p>
                  <h2 className="mt-6 text-4xl font-semibold leading-[1.12] tracking-[-0.05em] text-[#082f4f] sm:text-5xl lg:text-6xl 2xl:text-7xl">
                    把招聘交付，
                    <br />
                    做成数字能力
                  </h2>
                  <p className="mt-8 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-10">
                    我们目前拥有200多人的招聘交付团队，最全的招聘渠道（其中包含百万级自有简历库，活跃数超10万的社群运营，社交门户平台合作，多平台直播宣讲模式等）拥有完善的招聘交付系统，员工管理系统等先进数字化运营工具。公司自主研发AI智能招聘机器人，目前已投入使用，为客户提供全方位、综合性、一站式服务，以数字服务赋能客户与行业。
                  </p>
                </article>

                <div className="grid bg-[#061f34] text-white sm:grid-cols-2 lg:grid-cols-4">
                  {deliverySignals.map(([number, value, label], index) => (
                    <div
                      data-reveal
                      key={label}
                      className={`relative px-6 py-7 sm:px-8 sm:py-8 ${index > 0 ? 'border-t border-white/15 sm:border-t-0' : ''} ${index % 2 === 1 ? 'sm:border-l sm:border-white/15' : ''} ${index > 0 ? 'lg:border-l lg:border-white/15' : ''}`}
                    >
                      <span className="absolute right-5 top-5 text-xs tabular-nums tracking-[0.18em] text-white/30">{number}</span>
                      <p className="text-3xl font-semibold tracking-[-0.05em] text-primary sm:text-4xl">{value === '200+' ? <CountUp value={200} suffix="+" /> : value === '10万+' ? <CountUp value={10} suffix="万+" /> : value}</p>
                      <p className="mt-3 text-sm tracking-[0.06em] text-white/65">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-white px-6 py-24 sm:px-10 sm:py-32 lg:px-16 2xl:px-24 2xl:py-40">
          <div className="mx-auto w-full max-w-[1600px]">
            <div data-reveal className="grid gap-12 lg:grid-cols-[0.4fr_0.6fr] lg:items-end lg:gap-16 2xl:gap-24">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                  03 · Qualification &amp; Honour
                </p>
                <h2 className="mt-7 text-4xl font-semibold leading-[1.12] tracking-[-0.05em] text-[#082f4f] sm:text-5xl 2xl:text-6xl">
                  资质，是可以
                  <br />
                  被看见的底线
                </h2>
              </div>
              <p className="max-w-3xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
                已获得人力资源服务及劳务派遣许可、AAA级企业信用等级，并入选2024第一资源HRO排行榜民营TOP50。
              </p>
            </div>

            <div data-reveal className="relative mt-20 min-h-[920px] sm:min-h-[1080px] lg:min-h-[900px]">
              <figure className="absolute left-0 top-0 w-[78%] bg-[#f1f3f2] p-6 sm:w-[62%] sm:p-10 lg:w-[48%]">
                <Image
                  src="/company/qualification-credit.jpg"
                  alt="AAA级企业信用等级证书"
                  width={720}
                  height={1000}
                  className="mx-auto max-h-[680px] w-auto object-contain"
                />
                <figcaption className="mt-6 border-t border-slate-300 pt-5 text-base font-semibold text-[#082f4f]">
                  AAA级企业信用等级
                </figcaption>
              </figure>

              <figure className="absolute right-0 top-32 w-[58%] bg-[#061f34] p-5 text-white sm:w-[46%] sm:p-8 lg:right-[5%] lg:top-16 lg:w-[34%]">
                <Image
                  src="/company/award-5.jpg"
                  alt="2024第一资源HRO排行榜民营TOP50"
                  width={360}
                  height={480}
                  className="mx-auto max-h-[430px] w-auto object-contain"
                />
                <figcaption className="mt-6 border-t border-white/20 pt-5 text-base font-semibold text-white">
                  2024第一资源HRO排行榜民营TOP50
                </figcaption>
              </figure>

              <figure className="absolute bottom-0 right-[5%] w-[62%] bg-primary p-5 text-white sm:w-[48%] sm:p-8 lg:right-[18%] lg:w-[30%]">
                <Image
                  src="/company/award-2.jpg"
                  alt="2024年度最佳合作伙伴奖"
                  width={360}
                  height={480}
                  className="mx-auto max-h-[360px] w-auto object-contain"
                />
                <figcaption className="mt-6 border-t border-white/25 pt-5 text-base font-semibold text-white">
                  2024年度最佳合作伙伴奖
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section aria-labelledby="risk-control-title" className="risk-system relative overflow-hidden bg-primary px-6 py-20 text-white sm:px-10 sm:py-24 lg:px-16 2xl:px-24 2xl:py-28">
          <div data-reveal className="mx-auto grid w-full max-w-[1600px] gap-x-10 gap-y-12 lg:grid-cols-[0.38fr_0.62fr] lg:gap-x-16 lg:gap-y-16 2xl:gap-x-24">
            <div className="risk-heading">
              <svg className="risk-shield" viewBox="0 0 260 290" fill="none" aria-hidden="true">
                <path d="M130 24 224 60v79c0 62-42 103-94 127-52-24-94-65-94-127V60l94-36Z" stroke="currentColor" strokeWidth="0.8" />
                <path d="M130 40 210 70v69c0 53-35 91-80 114" stroke="currentColor" strokeOpacity="0.45" strokeWidth="0.8" />
                <path d="m102 139 20 20 40-46" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="relative text-xs font-medium uppercase tracking-[0.24em] text-white/80">04 · Risk Control</p>
              <h2 id="risk-control-title" className="relative mt-6 scroll-mt-28 text-4xl font-semibold leading-[1.15] tracking-[-0.05em] text-white sm:text-5xl 2xl:text-6xl">
                12道风险<br />防控体系
              </h2>
            </div>
            <div className="relative min-w-0 lg:pt-10">
              <p className="text-base leading-8 text-white/90 sm:text-lg sm:leading-9">
                研发创立人力资源外包领域12道风险防控体系，全面为客户防范用工风险，保障客户招聘、薪酬、用工、员工关系管理等的准确性、合规性、时效性、安全性，助力和推动客户在快速变化的市场环境中用工无忧，降本增效，获得发展优势。
              </p>
            </div>
            <ol className="risk-lines" aria-label="12道风险防控内容">
                {riskControls.map((control, index) => (
                  <li key={control} className="risk-line">
                    <span className="risk-line-number">{String(index + 1).padStart(2, '0')}</span>
                    <span className="risk-line-name">{control}</span>
                  </li>
                ))}
            </ol>
          </div>
          <style jsx>{`
            .risk-heading { position: relative; isolation: isolate; }
            .risk-shield {
              position: absolute;
              z-index: -1;
              pointer-events: none;
              width: 180px;
              max-width: none;
              top: -60px;
              left: 110px;
              color: rgba(255,255,255,0.16);
            }
            .risk-lines {
              display: grid;
              grid-column: 1 / -1;
              grid-template-columns: repeat(6, minmax(0, 1fr));
              column-gap: 28px;
              margin: 0 !important;
              padding: 0;
              list-style: none;
            }
            .risk-line {
              display: flex;
              align-items: baseline;
              gap: 12px;
              min-width: 0;
              margin: 0 !important;
              padding: 22px 0 !important;
              border-top: 1px solid rgba(255,255,255,0.22);
              color: #fff;
            }
            .risk-line-number {
              flex-shrink: 0;
              font-size: 11px;
              font-variant-numeric: tabular-nums;
              letter-spacing: 0.06em;
              color: rgba(255,255,255,0.8);
            }
            .risk-line-name { font-size: 16px; line-height: 1.6; font-weight: 400; }
            @media (min-width: 1536px) {
              .risk-shield { width: 200px; top: -70px; left: 145px; }
              .risk-line-name { font-size: 18px; }
              .risk-lines { column-gap: 32px; }
            }
            @media (min-width: 1024px) and (max-width: 1199px) {
              .risk-lines { column-gap: 18px; }
              .risk-line { gap: 8px; }
              .risk-line-name { font-size: 14px; }
            }
            @media (max-width: 1023px) {
              .risk-shield { width: 160px; top: -45px; left: 110px; }
              .risk-lines { grid-template-columns: repeat(3, minmax(0, 1fr)); }
            }
            @media (max-width: 639px) {
              .risk-lines { grid-template-columns: repeat(2, minmax(0, 1fr)); column-gap: 20px; }
              .risk-line { gap: 8px; padding: 18px 0 !important; }
              .risk-line-name { font-size: 14px; }
              .risk-shield { width: 120px; top: -20px; left: 75px; }
            }
          `}</style>
        </section>

        <section className="relative isolate overflow-hidden bg-[#061f34] px-6 py-28 text-white sm:px-10 sm:py-36 lg:px-16 2xl:px-24 2xl:py-48">
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/25 sm:h-[50rem] sm:w-[50rem]"
            aria-hidden="true"
          />
          <div data-reveal className="mx-auto max-w-[1400px] text-center">
            <p className="mx-auto max-w-5xl text-xl font-medium leading-[1.9] text-white/70 sm:text-2xl sm:leading-[1.9]">
              在企业的不同发展阶段提供持续的服务，帮助客户持续地降本增效,卓越运营，提升企业的核心竞争力。我们的使命是通过睐智人力的外包等服务让您的企业发展的更好，更快
            </p>
            <div className="mx-auto mt-12 h-1 w-16 bg-primary" aria-hidden="true" />
            <p className="mt-12 text-3xl font-semibold leading-[1.18] tracking-[-0.04em] text-white sm:text-4xl 2xl:text-5xl">
              Rise your business
              <br />
              through HRO
            </p>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default AboutPage;
