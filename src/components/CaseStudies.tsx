import Image from 'next/image';
import Link from 'next/link';

const cases = [
  {
    number: '01',
    industry: '连锁便利零售',
    image: '/company/retail-case.jpg',
    description: '面对需求量大、夜班交通与住宿等交付难点，以网招、实习生、兼职等多种用工方式组合解决。',
    metrics: [
      { value: '500+', label: '合作门店' },
      { value: '100+', label: '月均招聘人数' },
    ],
  },
  {
    number: '02',
    industry: '连锁餐饮',
    image: '/company/restaurant-case.jpg',
    description: '为快速扩张的新店提供综合人力资源解决方案，降低用工风险与管理成本，保障新店开业运营。',
    metrics: [
      { value: '600+', label: '外包人数' },
      { value: '200+', label: '月均招聘人数' },
    ],
  },
];

const CaseStudies = () => {
  return (
    <section className="overflow-hidden bg-white py-24 sm:py-32 lg:py-40">
      <div className="px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Customer Stories
            </p>
            <h2 className="mt-7 max-w-4xl text-4xl font-semibold leading-[1.12] tracking-[-0.05em] text-[#082f4f] sm:text-5xl lg:text-6xl">
              真实现场，
              <br />
              真实交付
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="inline-flex min-h-12 w-fit items-center gap-5 border-b border-[#082f4f] px-1 text-base font-semibold tracking-[0.04em] text-[#082f4f] transition-colors hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            查看企业案例
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>

      <div className="mt-20 space-y-16 sm:mt-24 lg:space-y-24">
        {cases.map((item, index) => (
          <article
            key={item.industry}
            className={
              index === 0
                ? 'relative min-h-[620px] overflow-hidden bg-[#061f34] sm:min-h-[700px] lg:mr-[10vw] lg:min-h-[760px]'
                : 'relative min-h-[620px] overflow-hidden bg-[#061f34] sm:min-h-[700px] lg:ml-[10vw] lg:min-h-[760px]'
            }
          >
            <Image
              src={item.image}
              alt={item.industry}
              fill
              sizes="(min-width: 1024px) 90vw, 100vw"
              className="object-cover transition-transform duration-[1200ms] hover:scale-[1.025]"
            />
            <div
              className={
                index === 0
                  ? 'absolute inset-0 bg-gradient-to-r from-[#031b2d]/95 via-[#031b2d]/62 to-[#031b2d]/10'
                  : 'absolute inset-0 bg-gradient-to-l from-[#031b2d]/95 via-[#031b2d]/62 to-[#031b2d]/10'
              }
            />
            <div
              className={
                index === 0
                  ? 'relative flex min-h-[620px] items-end px-6 py-12 text-white sm:min-h-[700px] sm:px-10 sm:py-16 lg:min-h-[760px] lg:px-20 lg:py-20 xl:px-28'
                  : 'relative flex min-h-[620px] items-end px-6 py-12 text-white sm:min-h-[700px] sm:px-10 sm:py-16 lg:min-h-[760px] lg:justify-end lg:px-20 lg:py-20 xl:px-28'
              }
            >
              <div className="max-w-2xl">
                <div className="flex items-center gap-5">
                  <span className="text-sm font-semibold tracking-[0.2em] text-primary">{item.number}</span>
                  <span className="h-px w-16 bg-white/35" aria-hidden="true" />
                  <span className="text-sm font-semibold tracking-[0.12em] text-white/60">{item.industry}</span>
                </div>
                <h3 className="mt-8 text-3xl font-semibold leading-[1.2] tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                  某知名{item.industry}企业
                </h3>
                <p className="mt-7 max-w-xl text-base leading-8 text-white/65">{item.description}</p>
                <dl className="mt-10 flex gap-12 border-t border-white/25 pt-8 sm:gap-20">
                  {item.metrics.map((metric) => (
                    <div key={metric.label}>
                      <dd className="text-3xl font-semibold tracking-[-0.05em] text-primary sm:text-4xl">
                        {metric.value}
                      </dd>
                      <dt className="mt-3 text-sm tracking-[0.04em] text-white/60">{metric.label}</dt>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
