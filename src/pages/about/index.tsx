import { NextPage } from 'next';
import Image from 'next/image';
import MainLayout from '../../components/layouts/MainLayout';

const AboutPage: NextPage = () => {
  return (
    <MainLayout
      title="关于我们 - 睐智人力"
      description="了解睐智人力的服务资质、全国服务网络、数字化招聘交付能力与风险防控体系"
    >
      <div className="bg-white">
        <header className="relative isolate overflow-hidden bg-[#061f34] text-white">
          <Image
            src="/2.jpg"
            alt="印有睐智人力品牌标识的旗帜"
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover object-[52%_42%] opacity-60"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#031b2d] via-[#031b2d]/90 to-[#031b2d]/35" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#031b2d] via-transparent to-[#031b2d]/35" />
          <div
            className="pointer-events-none absolute -right-8 top-24 -z-10 text-[8rem] font-semibold leading-none tracking-[-0.1em] text-white/[0.07] sm:text-[14rem] 2xl:text-[20rem]"
            aria-hidden="true"
          >
            RUISE
          </div>
          <div className="relative mx-auto flex min-h-[100svh] w-full max-w-[1800px] flex-col justify-center px-6 pb-10 pt-32 sm:px-10 sm:pb-12 lg:px-16 lg:pb-14 lg:pt-36 2xl:px-24 2xl:pt-40">
            <div className="grid w-full items-end gap-12 lg:grid-cols-[minmax(0,0.54fr)_minmax(360px,0.46fr)] lg:gap-16 2xl:gap-24">
              <div className="max-w-4xl lg:pb-8">
                <p className="flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                  <span className="h-px w-10 bg-primary" aria-hidden="true" />
                  About Ruise
                </p>
                <h1 className="mt-7 text-5xl font-semibold leading-[1.08] tracking-[-0.05em] text-white sm:text-6xl 2xl:text-7xl">
                  关于我们
                </h1>
                <p className="mt-8 max-w-3xl text-3xl font-semibold leading-[1.3] tracking-[-0.04em] text-white sm:text-4xl 2xl:text-5xl">
                  让您的企业发展得更好，更快
                </p>
                <p className="mt-8 max-w-3xl text-base leading-8 text-white/70 sm:text-lg sm:leading-9">
                  睐智人力资源(上海)有限公司是一家具备人力资源服务许可资质及劳务派遣业务经营许可的专业人力资源服务机构，主营业务包括人力资源HRO岗位外包、RPO批量招聘流程外包、中高端猎头、人事代理、劳务派遣、灵活用工和员工福利。
                </p>
              </div>

              <figure className="relative mx-auto w-full max-w-[680px] lg:mx-0 lg:ml-auto">
                <div className="absolute -left-5 -top-5 h-full w-full border border-primary/50 sm:-left-7 sm:-top-7" aria-hidden="true" />
                <div className="relative aspect-[16/11] overflow-hidden bg-white/10 shadow-[0_28px_80px_rgba(0,0,0,0.28)]">
                  <Image
                    src="/1.jpg"
                    alt="睐智人力上海总部办公空间"
                    fill
                    priority
                    sizes="(min-width: 1024px) 44vw, 100vw"
                    className="object-cover object-center transition-transform duration-[1400ms] hover:scale-[1.025]"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-[#031b2d]/95 via-[#031b2d]/45 to-transparent px-5 pb-5 pt-16 sm:px-7 sm:pb-7">
                    <figcaption>
                      <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-primary">Headquarters</span>
                      <span className="mt-2 block text-lg font-semibold text-white">上海总部</span>
                    </figcaption>
                    <span className="text-sm tracking-[0.14em] text-white/55">2017 — SHANGHAI</span>
                  </div>
                </div>
              </figure>
            </div>

            <dl className="mt-10 grid grid-cols-2 border-y border-white/20 sm:mt-12 lg:grid-cols-4">
              {[
                ['300+', '服务城市'],
                ['近千家', '服务客户'],
                ['4W+', '外包员工'],
                ['200+', '招聘交付团队'],
              ].map(([value, label], index) => (
                <div
                  key={label}
                  className={`py-5 sm:py-6 lg:px-7 lg:py-7 ${index % 2 === 1 ? 'border-l border-white/20' : ''} ${index > 1 ? 'border-t border-white/20 lg:border-t-0' : ''} ${index > 0 ? 'lg:border-l lg:border-white/20' : ''}`}
                >
                  <dd className="text-3xl font-semibold tracking-[-0.05em] text-primary sm:text-4xl">{value}</dd>
                  <dt className="mt-2 text-sm tracking-[0.06em] text-white/55">{label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </header>

        <section className="relative overflow-hidden px-6 py-24 sm:px-10 sm:py-32 lg:px-16 2xl:px-24 2xl:py-40">
          <div
            className="pointer-events-none absolute -right-8 top-8 text-[9rem] font-semibold leading-none tracking-[-0.08em] text-slate-50 sm:text-[15rem] 2xl:text-[20rem]"
            aria-hidden="true"
          >
            DNA
          </div>
          <div className="relative mx-auto w-full max-w-[1600px]">
            <div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr] lg:items-end lg:gap-16 2xl:gap-24">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">01 · Company Profile</p>
                <h2 className="mt-7 text-4xl font-semibold leading-[1.14] tracking-[-0.05em] text-[#082f4f] sm:text-5xl 2xl:text-6xl">
                  服务企业的
                  <br />
                  每一个发展阶段
                </h2>
              </div>
              <p className="max-w-3xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
                从招聘交付到岗位外包，从员工管理到用工风险防控，睐智人力以持续服务帮助客户降本增效、卓越运营，提升企业的核心竞争力。
              </p>
            </div>

            <div className="mt-16 grid border-y border-slate-300 lg:mt-20 lg:grid-cols-3">
              {[
                ['01', '企业定位', '具备人力资源服务许可资质及劳务派遣业务经营许可的专业人力资源服务机构。'],
                ['02', '企业发展', '在企业的不同发展阶段提供持续的服务，帮助客户持续地降本增效、卓越运营，提升企业的核心竞争力。'],
                ['03', '企业使命', '通过睐智人力的外包等服务让您的企业发展得更好，更快。'],
              ].map(([number, title, description], index) => (
                <article
                  key={title}
                  className={`grid grid-cols-[3.5rem_1fr] gap-5 py-8 sm:grid-cols-[4.5rem_1fr] sm:py-10 lg:block lg:px-8 lg:py-12 2xl:px-12 ${index > 0 ? 'border-t border-slate-300 lg:border-l lg:border-t-0' : ''}`}
                >
                  <p className="text-sm font-semibold tracking-[0.16em] text-primary">{number}</p>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#082f4f] lg:mt-10">{title}</h3>
                    <p className="mt-5 text-base leading-8 text-slate-600">{description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative min-h-[820px] overflow-hidden bg-[#061f34] sm:min-h-[900px] 2xl:min-h-[1080px]">
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
                      <p className="text-3xl font-semibold tracking-[-0.05em] text-primary sm:text-4xl">{value}</p>
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
        </section>

        <section className="relative overflow-hidden bg-[#edecea] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 2xl:px-24 2xl:py-40">
          <div className="mx-auto grid w-full max-w-[1600px] items-center gap-16 lg:grid-cols-[0.58fr_0.42fr] 2xl:gap-24">
            <div className="relative min-h-[620px] overflow-hidden sm:min-h-[700px] lg:min-h-[620px] 2xl:min-h-[760px]">
              <Image
                src="/3.jpg"
                alt="睐智人力品牌墙"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover object-center transition-transform duration-[1400ms] hover:scale-[1.03]"
              />
              <div className="absolute bottom-0 left-0 bg-primary px-7 py-5 text-sm font-semibold tracking-[0.12em] text-white">
                DIGITAL DELIVERY
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">03 · Digital Delivery</p>
              <h2 className="mt-7 text-4xl font-semibold leading-[1.12] tracking-[-0.05em] text-[#082f4f] sm:text-5xl 2xl:text-6xl">
                数字化，
                <br />
                不是口号
              </h2>
              <p className="mt-10 text-base leading-9 text-slate-600 sm:text-lg sm:leading-10">
                我们目前拥有200多人的招聘交付团队，最全的招聘渠道（其中包含百万级自有简历库，活跃数超10万的社群运营，社交门户平台合作，多平台直播宣讲模式等）拥有完善的招聘交付系统，员工管理系统等先进数字化运营工具。公司自主研发AI智能招聘机器人，目前已投入使用，为客户提供全方位、综合性、一站式服务，以数字服务赋能客户与行业。
              </p>
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-white px-6 py-24 sm:px-10 sm:py-32 lg:px-16 2xl:px-24 2xl:py-40">
          <div className="mx-auto w-full max-w-[1600px]">
            <div className="grid gap-12 lg:grid-cols-[0.4fr_0.6fr] lg:items-end lg:gap-16 2xl:gap-24">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                  04 · Qualification &amp; Honour
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

            <div className="relative mt-20 min-h-[920px] sm:min-h-[1080px] lg:min-h-[900px]">
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

        <section className="relative isolate overflow-hidden bg-primary px-6 py-24 text-white sm:px-10 sm:py-32 lg:px-16 2xl:px-24 2xl:py-40">
          <div
            className="pointer-events-none absolute -right-10 top-1/2 -z-10 -translate-y-1/2 text-[18rem] font-semibold leading-none tracking-[-0.1em] text-white/[0.09] sm:text-[30rem]"
            aria-hidden="true"
          >
            12
          </div>
          <div className="mx-auto grid w-full max-w-[1600px] gap-12 lg:grid-cols-[0.38fr_0.62fr] lg:gap-16 2xl:gap-24">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/65">05 · Risk Control</p>
              <h2 className="mt-7 text-4xl font-semibold leading-[1.12] tracking-[-0.05em] text-white sm:text-5xl 2xl:text-6xl">
                12道风险
                <br />
                防控体系
              </h2>
            </div>
            <p className="text-lg leading-10 text-white/80 sm:text-xl sm:leading-[2.1]">
              研发创立人力资源外包领域12道风险防控体系，全面为客户防范用工风险，保障客户招聘、薪酬、用工、员工关系管理等的准确性、合规性、时效性、安全性，助力和推动客户在快速变化的市场环境中用工无忧，降本增效，获得发展优势。
            </p>
          </div>
        </section>

        <section className="relative isolate overflow-hidden bg-[#061f34] px-6 py-28 text-white sm:px-10 sm:py-36 lg:px-16 2xl:px-24 2xl:py-48">
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/25 sm:h-[50rem] sm:w-[50rem]"
            aria-hidden="true"
          />
          <div className="mx-auto max-w-[1400px] text-center">
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
