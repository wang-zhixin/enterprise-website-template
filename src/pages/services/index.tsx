import { useScrollReveal } from '../../hooks/useScrollReveal';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '../../components/layouts/MainLayout';

const services = [
  ['HRO', 'HRO岗位外包', '将招聘交付、员工入职、合同、薪酬、保险及员工关系等环节纳入统一服务。'],
  ['RPO', 'RPO批量招聘', '针对门店扩张、产线用工与阶段性增员需求，提供规模化招聘流程外包。'],
  ['SEARCH', '中高端猎头', '围绕关键岗位建立人才画像，开展定向寻访、甄选与入职跟踪。'],
  ['AGENCY', '人事代理', '承接员工人事手续与日常事务管理，帮助企业提升管理效率。'],
  ['DISPATCH', '劳务派遣', '依托劳务派遣经营许可，提供规范、合规的派遣用工服务。'],
  ['FLEXIBLE', '灵活用工', '组合长期、短期、兼职与实习等方式，应对波动性用工需求。'],
  ['BENEFITS', '员工福利', '为企业提供员工保障与福利配套服务，提升员工体验。'],
];

const recruitmentSteps = [
  ['招聘岗位需求分析', '销售与项目经理评估岗位，准确理解需求并建立交付目标。'],
  ['渠道发布人员挖掘', '通过线上、线下及社群渠道发布岗位，并主动挖掘候选人。'],
  ['建立模型筛选简历', '根据客户要求建立筛选模型，挑选符合岗位要求的简历。'],
  ['核对信息电话初面', '核对信息、介绍岗位、沟通意愿，邀请合适候选人参加企业面试。'],
  ['跟进服务解答疑问', '持续跟踪合格候选人，及时答疑并改善求职体验。'],
  ['面试跟踪文化宣导', '跟踪面试与入职，开展企业文化宣导和岗前指导。'],
];

const channels = [
  ['自有简历库', '百万级自有简历资源，持续沉淀鲜活候选人。'],
  ['招聘网站', '覆盖主流招聘平台，统一管理岗位与简历。'],
  ['社群运营', '通过活跃微信、QQ社群触达并筛选求职人群。'],
  ['社交网站推荐', '连接知乎、脉脉、豆瓣等社交平台人才资源。'],
  ['视频直播', '通过多平台直播宣讲企业与岗位，扩大招聘触达。'],
  ['线下渠道获取', '通过招聘会、校园及本地活动补充区域人才来源。'],
];

const employeeProcesses = [
  ['劳动合同签署', '支持电子与纸质劳动合同，员工入职材料齐备后完成合同签署。'],
  ['商保缴纳', '确认入职日期、收集材料、确定增员名单并提交投保。'],
  ['核薪发薪', '接收考勤、核算薪资费用、企业确认打款后完成发薪。'],
  ['员工离职办理', '覆盖离职申请、审批、工作交接、离职证明与协议签署。'],
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

const ServicesPage: NextPage = () => {
  const motionRoot = useScrollReveal();

  return (
    <MainLayout
      title="产品服务 - 睐智人力"
      description="睐智人力提供HRO岗位外包、RPO批量招聘、劳务派遣、灵活用工及员工全生命周期服务"
    >
      <div ref={motionRoot} className="site-motion bg-white">
        <header className="relative min-h-[82vh] overflow-hidden bg-[#061f34]">
          <Image
            src="/68aed5cb7b8e7326e4f8b470af50b14.jpg"
            alt="睐智人力品牌标识"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#031b2d]/95 via-[#031b2d]/66 to-[#031b2d]/25" />
          <div
            className="pointer-events-none absolute -right-10 bottom-[-0.16em] text-[9rem] font-semibold leading-none tracking-[-0.1em] text-white/[0.08] sm:text-[16rem] 2xl:text-[24rem]"
            aria-hidden="true"
          >
            HRO
          </div>
          <div className="relative mx-auto flex min-h-[82vh] w-full max-w-[1800px] items-end px-6 pb-16 pt-32 sm:px-10 sm:pb-20 lg:px-16 lg:pb-20 2xl:px-24 2xl:pb-24">
            <div data-reveal className="max-w-5xl text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                Products &amp; Services
              </p>
              <h1 className="mt-7 max-w-5xl text-5xl font-semibold leading-[1.08] tracking-[-0.05em] text-white sm:text-6xl 2xl:text-7xl">
                把复杂用工，
                <br />
                变成稳定交付
              </h1>
              <p className="mt-9 max-w-3xl text-base leading-8 text-white/70 sm:text-lg sm:leading-9">
                用标准流程、专业团队与风险管控能力，承接从人才获取到员工管理的关键环节。
              </p>
            </div>
          </div>
        </header>

        <section className="relative overflow-hidden bg-[#f1f4f3] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 2xl:px-24 2xl:py-40">
          <div className="mx-auto grid w-full max-w-[1600px] gap-16 lg:grid-cols-[0.64fr_1.36fr] 2xl:gap-24">
            <div data-reveal className="lg:sticky lg:top-32 lg:h-fit">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Service Index</p>
              <h2 className="mt-7 text-4xl font-semibold leading-[1.12] tracking-[-0.05em] text-[#082f4f] sm:text-5xl 2xl:text-6xl">
                七项能力，
                <br />
                一套方案
              </h2>
              <p className="mt-8 max-w-md text-base leading-8 text-slate-600">
                根据企业阶段、岗位规模与用工场景灵活组合，而不是把标准产品生硬套给客户。
              </p>
            </div>

            <ol className="!ml-0 list-none border-t border-slate-400/60">
              {services.map(([code, name, description], index) => (
                <li
                  data-reveal="right"
                  key={name}
                  className="group grid gap-5 border-b border-slate-400/60 !pl-0 py-9 sm:grid-cols-[4rem_1fr_auto] sm:items-start sm:gap-7 lg:py-11"
                >
                  <span className="pt-1 text-sm font-semibold tracking-[0.14em] text-primary">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-[#082f4f] transition-colors group-hover:text-primary sm:text-2xl">
                      {name}
                    </h3>
                    <p className="mt-5 max-w-2xl text-base leading-8 text-slate-500">
                      {description}
                    </p>
                  </div>
                  <span className="pt-1 text-xs font-semibold tracking-[0.14em] text-slate-400">{code}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="relative isolate overflow-hidden bg-[#f1f4f3] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 2xl:px-24 2xl:py-40">
          <div
            className="pointer-events-none absolute -bottom-10 -left-8 -z-10 text-[10rem] font-semibold leading-none tracking-[-0.08em] text-white sm:text-[18rem] 2xl:text-[24rem]"
            aria-hidden="true"
          >
            FLOW
          </div>

          <div className="mx-auto grid w-full max-w-[1600px] gap-16 lg:grid-cols-[0.66fr_1.34fr] 2xl:gap-24">
            <div data-reveal className="lg:sticky lg:top-32 lg:h-fit">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Recruitment Flow</p>
              <h2 className="mt-7 max-w-xl text-4xl font-semibold leading-[1.12] tracking-[-0.05em] text-[#082f4f] sm:text-5xl 2xl:text-6xl">
                每一步，
                <br />
                都对应交付责任
              </h2>
              <p className="mt-8 max-w-md text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
                从理解岗位到跟进入职，将交付目标拆成清晰节点，让每一步都有责任、有反馈、有结果。
              </p>
            </div>

            <ol className="relative !ml-0 list-none border-l border-slate-300">
              {recruitmentSteps.map(([name, description], index) => (
                <li
                  data-reveal="right"
                  key={name}
                  className="group relative grid gap-5 border-b border-slate-300 !pl-8 py-9 sm:grid-cols-[4rem_0.82fr_1.18fr] sm:items-start sm:gap-8 sm:!pl-10 lg:py-11"
                >
                  <span
                    className="absolute -left-[0.43rem] top-[2.75rem] h-3 w-3 bg-primary ring-8 ring-[#f1f4f3]"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-semibold tabular-nums tracking-[0.14em] text-primary">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-xl font-semibold leading-8 tracking-[-0.03em] text-[#082f4f] transition-colors duration-300 group-hover:text-primary sm:text-2xl">
                    {name}
                  </h3>
                  <p className="max-w-xl text-base leading-8 text-slate-500">{description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="relative isolate overflow-hidden bg-[#061f34] px-6 py-24 text-white sm:px-10 sm:py-32 lg:px-16 2xl:px-24 2xl:py-40">
          <div
            className="pointer-events-none absolute -right-10 top-1/2 -z-10 -translate-y-1/2 text-[11rem] font-semibold leading-none tracking-[-0.1em] text-white/[0.025] sm:text-[20rem]"
            aria-hidden="true"
          >
            REACH
          </div>
          <div className="mx-auto grid w-full max-w-[1600px] gap-16 lg:grid-cols-[0.72fr_1.28fr] lg:items-center 2xl:gap-24">
            <div data-reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Talent Channels</p>
              <h2 className="mt-7 text-4xl font-semibold leading-[1.12] tracking-[-0.05em] text-white sm:text-5xl 2xl:text-6xl">
                让人才触达，
                <br />
                不止一条路径
              </h2>
              <p className="mt-8 max-w-xl text-base leading-8 text-white/60 sm:text-lg sm:leading-9">
                自有资源、招聘平台、社群运营、社交门户、直播宣讲与线下渠道协同。
              </p>
            </div>

            <div className="grid gap-x-12 sm:grid-cols-2">
              {channels.map(([name, description], index) => (
                <article
                  data-reveal
                  key={name}
                  className="group border-b border-white/15 py-8 sm:min-h-[190px] sm:py-9"
                >
                  <div className="flex items-center justify-between gap-5">
                    <span className="text-sm font-semibold tracking-[0.12em] text-primary">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="h-px w-10 bg-white/20 transition-all duration-500 group-hover:w-20 group-hover:bg-primary" />
                  </div>
                  <h3 className="mt-7 text-xl font-semibold text-white">{name}</h3>
                  <p className="mt-4 text-base leading-8 text-white/55">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#edecea] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 2xl:px-24 2xl:py-40">
          <div className="mx-auto w-full max-w-[1600px]">
            <div data-reveal className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Employee Lifecycle</p>
              <h2 className="mt-7 text-4xl font-semibold leading-[1.12] tracking-[-0.05em] text-[#082f4f] sm:text-5xl 2xl:text-6xl">
                从入职到离职，
                <br />
                管理始终在线
              </h2>
            </div>
            <ol className="relative mt-20 grid !ml-0 list-none gap-12 lg:grid-cols-4 lg:gap-0">
              <div className="absolute left-0 right-0 top-7 hidden h-px bg-slate-400 lg:block" aria-hidden="true" />
              {employeeProcesses.map(([name, description], index) => (
                <li data-reveal key={name} className="relative !pl-0 lg:px-8 lg:first:pl-0 lg:last:pr-0">
                  <span className="relative z-10 inline-flex h-14 w-14 items-center justify-center bg-[#edecea] text-sm font-semibold text-primary ring-1 ring-slate-400">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-9 text-xl font-semibold tracking-[-0.03em] text-[#082f4f]">{name}</h3>
                  <p className="mt-5 text-base leading-8 text-slate-500">{description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="relative overflow-hidden bg-white px-6 py-24 sm:px-10 sm:py-32 lg:px-16 2xl:px-24 2xl:py-40">
          <div data-reveal className="mx-auto grid w-full max-w-[1600px] items-center gap-16 lg:grid-cols-[0.8fr_1.2fr] 2xl:gap-28">
            <div className="brand-orbit relative mx-auto flex aspect-square w-full max-w-[520px] items-center justify-center rounded-full border border-slate-300">
              <div className="absolute inset-10 rounded-full border border-primary/30" aria-hidden="true" />
              <div className="text-center">
                <span className="block text-7xl font-semibold leading-none tracking-[-0.08em] text-primary sm:text-8xl">12</span>
                <span className="text-sm font-semibold tracking-[0.18em] text-[#082f4f]">RISK CONTROL</span>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Risk Control</p>
              <h2 className="mt-7 text-4xl font-semibold leading-[1.12] tracking-[-0.05em] text-[#082f4f] sm:text-5xl 2xl:text-6xl">
                一套贯穿全周期的风险防线
              </h2>
              <ol className="mt-12 grid !ml-0 list-none gap-x-12 sm:grid-cols-2">
                {riskControls.map((item, index) => (
                  <li key={item} className="flex min-h-14 items-center gap-4 border-b border-slate-300 !pl-0">
                    <span className="text-xs font-semibold text-primary">{String(index + 1).padStart(2, '0')}</span>
                    <span className="text-base font-medium text-[#082f4f]">{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden bg-[#061f34] px-6 py-24 text-white sm:px-10 sm:py-32 lg:px-16 lg:py-32 2xl:px-24 2xl:py-36">
          <div
            className="pointer-events-none absolute -right-8 bottom-[-0.25em] -z-10 text-[10rem] font-semibold leading-none tracking-[-0.1em] text-white/[0.035] sm:text-[18rem]"
            aria-hidden="true"
          >
            START
          </div>
          <div data-reveal className="mx-auto flex w-full max-w-[1600px] flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Start a Project</p>
              <h2 className="mt-7 max-w-5xl text-4xl font-semibold leading-[1.12] tracking-[-0.05em] text-white sm:text-5xl 2xl:text-6xl">
                从一个岗位需求，
                <br />
                开始设计整套方案
              </h2>
            </div>
            <Link
              href="/contact#business-inquiry"
              className="inline-flex min-h-14 w-fit items-center gap-6 bg-primary px-8 text-base font-semibold tracking-[0.04em] text-white transition-colors hover:bg-white hover:text-[#082f4f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              联系专业顾问
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default ServicesPage;
