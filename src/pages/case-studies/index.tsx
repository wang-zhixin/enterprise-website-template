import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '../../components/layouts/MainLayout';

const cases = [
  {
    number: '01',
    category: '连锁便利零售',
    title: '某知名连锁便利店企业',
    image: '/company/retail-case.jpg',
    challenge: '招聘需求量大，包含夜班岗位；企业不提供住宿，夜班下班后交通不便。',
    solution: '采用网招、实习生、兼职等多种用工方式组合，协同解决住宿问题，并通过持续跟进保障人员到岗。',
    result: '建立稳定批量招聘交付节奏，月均入职100+人。',
    metrics: [
      ['500+', '合作门店'],
      ['100+', '月均招聘人数'],
    ],
  },
  {
    number: '02',
    category: '连锁餐饮',
    title: '某知名连锁餐饮企业',
    image: '/company/restaurant-case.jpg',
    challenge: '客户快速扩张新店，人员规模上千人，用工风险高；大量新店开业需要服务员、传菜员、后厨等一线岗位。',
    solution: '提供综合人力资源解决方案，降低用工风险和企业管理成本，并协助客户完成门店数字化升级。',
    result: '月招聘200+人，保障新店正常开业和运营。',
    metrics: [
      ['23+', '合作门店'],
      ['600+', '外包人数'],
      ['5+', '合作岗位'],
      ['200+', '月均招聘人数'],
    ],
  },
];

const CaseStudiesPage: NextPage = () => {
  return (
    <MainLayout
      title="企业案例 - 睐智人力"
      description="睐智人力在连锁便利零售与连锁餐饮行业的批量招聘和岗位外包案例"
    >
      <div className="bg-white">
        <header className="relative min-h-[82vh] overflow-hidden bg-[#061f34]">
          <Image
            src="/company/retail-case.jpg"
            alt="连锁零售客户案例场景"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#031b2d]/95 via-[#031b2d]/62 to-[#031b2d]/15" />
          <div
            className="pointer-events-none absolute -right-10 bottom-[-0.18em] text-[10rem] font-semibold leading-none tracking-[-0.1em] text-white/[0.08] sm:text-[18rem] lg:text-[26rem]"
            aria-hidden="true"
          >
            CASE
          </div>
          <div className="relative mx-auto flex min-h-[82vh] w-full max-w-[1800px] items-end px-6 pb-16 pt-32 sm:px-10 sm:pb-20 lg:px-16 lg:pb-24 xl:px-24">
            <div className="max-w-5xl text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                Customer Stories
              </p>
              <h1 className="mt-7 text-5xl font-semibold leading-[1.08] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                企业案例
              </h1>
              <p className="mt-9 max-w-3xl text-base leading-8 text-white/70 sm:text-lg sm:leading-9">
                面对真实的规模化招聘与用工挑战，以组合方案和持续交付帮助客户稳定运营。
              </p>
            </div>
          </div>
        </header>

        <section className="px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40 xl:px-24">
          <div className="mx-auto grid w-full max-w-[1600px] gap-12 lg:grid-cols-[0.38fr_0.62fr] lg:gap-24">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Selected Cases</p>
              <p className="mt-6 text-base leading-8 text-slate-500">从现场问题出发，而不是从标准答案出发。</p>
            </div>
            <h2 className="text-3xl font-semibold leading-[1.4] tracking-[-0.04em] text-[#082f4f] sm:text-4xl lg:text-5xl">
              招聘不是简单补位，
              <br />
              是对业务节奏的持续响应。
            </h2>
          </div>
        </section>

        {cases.map((item, index) => (
          <article
            key={item.title}
            className={
              index === 0
                ? 'relative overflow-hidden bg-[#eef1f0] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40 xl:px-24'
                : 'relative overflow-hidden bg-[#061f34] px-6 py-24 text-white sm:px-10 sm:py-32 lg:px-16 lg:py-40 xl:px-24'
            }
          >
            <span
              className={
                index === 0
                  ? 'pointer-events-none absolute -right-8 top-6 text-[14rem] font-semibold leading-none tracking-[-0.1em] text-white sm:text-[24rem]'
                  : 'pointer-events-none absolute -right-8 top-6 text-[14rem] font-semibold leading-none tracking-[-0.1em] text-white/[0.035] sm:text-[24rem]'
              }
              aria-hidden="true"
            >
              {item.number}
            </span>

            <div className="relative mx-auto grid w-full max-w-[1600px] gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:gap-20">
              <div className={index === 0 ? 'lg:sticky lg:top-24' : 'lg:order-2 lg:sticky lg:top-24'}>
                <div className="relative aspect-[16/11] overflow-hidden bg-slate-300">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 54vw, 100vw"
                    className="object-cover transition-transform duration-[1400ms] hover:scale-[1.03]"
                  />
                </div>
                <div
                  className={
                    index === 0
                      ? 'flex items-center justify-between border-b border-slate-400/60 py-5 text-sm tracking-[0.1em] text-slate-500'
                      : 'flex items-center justify-between border-b border-white/20 py-5 text-sm tracking-[0.1em] text-white/50'
                  }
                >
                  <span>PROJECT {item.number}</span>
                  <span>{item.category}</span>
                </div>
              </div>

              <div className="lg:py-10">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Case File · {item.number}
                </p>
                <h2
                  className={
                    index === 0
                      ? 'mt-7 text-3xl font-semibold leading-[1.2] tracking-[-0.04em] text-[#082f4f] sm:text-4xl lg:text-5xl'
                      : 'mt-7 text-3xl font-semibold leading-[1.2] tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl'
                  }
                >
                  {item.title}
                </h2>

                <dl className="mt-14">
                  {[
                    ['项目难点', item.challenge],
                    ['解决方案', item.solution],
                    ['交付结果', item.result],
                  ].map(([label, content], detailIndex) => (
                    <div
                      key={label}
                      className={
                        index === 0
                          ? 'grid gap-4 border-t border-slate-400/60 py-7 sm:grid-cols-[6rem_1fr]'
                          : 'grid gap-4 border-t border-white/20 py-7 sm:grid-cols-[6rem_1fr]'
                      }
                    >
                      <dt className="text-sm font-semibold tracking-[0.08em] text-primary">
                        0{detailIndex + 1} · {label}
                      </dt>
                      <dd className={index === 0 ? 'text-base leading-8 text-slate-600' : 'text-base leading-8 text-white/65'}>
                        {content}
                      </dd>
                    </div>
                  ))}
                </dl>

                <dl className="mt-12 flex flex-wrap gap-x-12 gap-y-8">
                  {item.metrics.map(([value, label]) => (
                    <div key={label}>
                      <dd className="text-3xl font-semibold tracking-[-0.05em] text-primary sm:text-4xl">{value}</dd>
                      <dt className={index === 0 ? 'mt-3 text-sm text-slate-500' : 'mt-3 text-sm text-white/50'}>{label}</dt>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </article>
        ))}

        <section className="relative isolate overflow-hidden bg-primary px-6 py-24 text-white sm:px-10 sm:py-32 lg:px-16 xl:px-24">
          <div
            className="pointer-events-none absolute -right-6 bottom-[-0.18em] -z-10 text-[10rem] font-semibold leading-none tracking-[-0.1em] text-white/[0.08] sm:text-[18rem]"
            aria-hidden="true"
          >
            NEXT
          </div>
          <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">Your Project</p>
              <h2 className="mt-7 max-w-5xl text-4xl font-semibold leading-[1.12] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                下一个被解决的现场，
                <br />
                可以从这里开始
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex min-h-14 w-fit items-center gap-6 bg-white px-8 text-base font-semibold tracking-[0.04em] text-[#082f4f] transition-colors hover:bg-[#061f34] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              咨询合作方案
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default CaseStudiesPage;
