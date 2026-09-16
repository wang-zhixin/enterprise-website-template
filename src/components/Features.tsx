import Link from 'next/link';

const services = [
  ['01', 'HRO', 'HRO岗位外包', '覆盖招聘、入职、合同、薪酬、商保与员工关系的岗位外包解决方案。'],
  ['02', 'RPO', 'RPO批量招聘', '从岗位分析到入职跟踪，以标准化流程保障门店扩张、产线增员与批量招聘交付。'],
  ['03', 'SEARCH', '中高端猎头', '围绕关键岗位建立人才画像，开展定向寻访与甄选。'],
  ['04', 'AGENCY', '人事代理', '承接人事手续与日常事务，让组织运营更轻、更稳。'],
  ['05', 'DISPATCH', '劳务派遣', '依托经营许可，为企业提供规范、合规的派遣服务。'],
  ['06', 'FLEXIBLE', '灵活用工', '匹配波动性、季节性与阶段性的多场景用工需求。'],
  ['07', 'BENEFITS', '员工福利', '完善员工保障与福利体验，增强组织连接与员工感受。'],
];

const Features = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#f1f4f3] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 2xl:px-24 2xl:py-40">
      <div
        className="pointer-events-none absolute -left-8 top-20 -z-10 text-[9rem] font-semibold leading-none tracking-[-0.08em] text-white sm:text-[16rem] 2xl:text-[23rem]"
        aria-hidden="true"
      >
        07
      </div>

      <div className="mx-auto grid w-full max-w-[1600px] gap-16 lg:grid-cols-[0.78fr_1.22fr] 2xl:gap-24">
        <div className="lg:sticky lg:top-32 lg:h-fit">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Service Portfolio
          </p>
          <h2 className="mt-7 max-w-xl text-4xl font-semibold leading-[1.12] tracking-[-0.05em] text-[#082f4f] sm:text-5xl 2xl:text-6xl">
            服务不是选项，
            <br />
            是一套协同系统
          </h2>
          <p className="mt-8 max-w-xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
            从人才获取到员工全生命周期管理，以专业团队、标准流程和数字化工具形成持续交付能力。
          </p>
          <Link
            href="/services"
            className="mt-12 inline-flex min-h-12 items-center gap-5 border-b border-[#082f4f] px-1 text-base font-semibold tracking-[0.04em] text-[#082f4f] transition-colors hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            探索完整服务体系
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <ol className="!ml-0 list-none border-t border-slate-400/60">
          {services.map(([number, code, name, description], index) => (
            <li
              key={name}
              className="group relative grid gap-5 overflow-hidden border-b border-slate-400/60 !pl-0 py-8 transition-transform duration-500 hover:translate-x-2 sm:grid-cols-[4rem_1fr] sm:items-start sm:gap-7 lg:py-10"
            >
              <span className="pt-1 text-sm font-semibold tracking-[0.14em] text-primary">{number}</span>
              <div className="relative">
                <span
                  className="pointer-events-none absolute -right-2 -top-8 text-5xl font-semibold tracking-[-0.08em] text-slate-900/[0.035] transition-colors duration-500 group-hover:text-primary/[0.08] sm:text-7xl"
                  aria-hidden="true"
                >
                  {code}
                </span>
                <div className="relative flex flex-col gap-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-[#082f4f] transition-colors duration-300 group-hover:text-primary sm:text-2xl">
                    {name}
                  </h3>
                  <span className="text-xs font-semibold tracking-[0.14em] text-slate-400">{code}</span>
                </div>
                <p
                  className={
                    index < 2
                      ? 'relative mt-5 max-w-2xl text-base leading-8 text-slate-500'
                      : 'relative mt-5 max-w-2xl text-base leading-8 text-slate-500'
                  }
                >
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Features;
