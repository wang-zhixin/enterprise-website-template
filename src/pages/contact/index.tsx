import { NextPage } from 'next';
import MainLayout from '../../components/layouts/MainLayout';
import { ContactForm } from '../../components/forms/ContactForm';
import { FORMSPREE_ID } from '../../config/formspree';

const branches = ['上海', '常州', '杭州', '武汉', '长沙', '深圳', '北京', '镇江', '芜湖', '安庆'];

const ContactPage: NextPage = () => {
  return (
    <MainLayout
      title="联系我们 - 睐智人力"
      description="联系睐智人力，咨询岗位外包、批量招聘、劳务派遣与灵活用工服务"
    >
      <div className="bg-[#061f34]">
        <div className="relative isolate overflow-hidden px-6 pb-28 pt-28 sm:px-10 sm:pb-36 lg:px-16 2xl:px-24 2xl:pb-44">
          <svg
            className="pointer-events-none absolute left-0 top-0 -z-10 h-full w-full text-white/[0.06]"
            viewBox="0 0 1600 900"
            fill="none"
            aria-hidden="true"
          >
            <path d="M-80 650C210 520 320 120 665 290C990 450 1150 40 1690 230" stroke="currentColor" />
            <path d="M-120 760C250 610 420 240 770 390C1080 520 1280 180 1710 350" stroke="currentColor" />
            <circle cx="320" cy="430" r="5" fill="#CC4A40" />
            <circle cx="665" cy="290" r="5" fill="#CC4A40" />
            <circle cx="1150" cy="175" r="5" fill="#CC4A40" />
          </svg>

          <div className="mx-auto grid w-full max-w-[1600px] gap-16 xl:grid-cols-[1.24fr_0.76fr] xl:items-start xl:gap-12 2xl:gap-20">
            <section className="text-white xl:self-center" aria-labelledby="service-network-title">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Service Network</p>
              <h2
                id="service-network-title"
                className="mt-7 text-4xl font-semibold leading-[1.12] tracking-[-0.05em] text-white sm:text-5xl 2xl:text-6xl"
              >
                从上海出发，
                <br />
                响应全国
              </h2>
              <div className="mt-12 flex items-end gap-5">
                <span className="text-5xl font-semibold leading-none tracking-[-0.06em] text-primary sm:text-6xl">
                  300+
                </span>
                <span className="pb-1 text-base font-semibold tracking-[0.08em] text-white/55">座服务城市</span>
              </div>
              <p className="mt-9 max-w-xl text-base leading-8 text-white/60">
                总部位于上海，在多座重点城市设立分公司及分支机构，形成覆盖全国的服务网络。
              </p>
              <ul
                role="list"
                className="mt-10 grid !ml-0 list-none grid-cols-2 gap-x-6 sm:grid-cols-3 sm:gap-x-8 xl:grid-cols-5"
              >
                {branches.map((branch, index) => (
                  <li
                    key={branch}
                    className="grid min-h-16 grid-cols-[0.25rem_minmax(0,1fr)_2rem] items-center gap-3 border-b border-white/10 !pl-0 text-base font-medium text-white/75"
                  >
                    <span className="h-1 w-1 bg-primary" aria-hidden="true" />
                    <span>{branch}</span>
                    <span className="text-right text-xs tabular-nums text-white/30">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section
              id="business-inquiry"
              className="relative scroll-mt-24 bg-[#f7f5f2] shadow-[0_32px_90px_rgba(0,0,0,0.16)] lg:scroll-mt-28"
              aria-labelledby="contact-form-title"
            >
              <div className="border-b border-[#e5ded7] bg-[#f7f5f2]">
                <div className="px-6 py-7 sm:px-8">
                  <div className="flex items-center gap-4">
                    <span className="h-px w-10 bg-primary" aria-hidden="true" />
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Business Inquiry</p>
                  </div>
                  <h2
                    id="contact-form-title"
                    className="mt-4 text-3xl font-semibold leading-[1.15] tracking-[-0.04em] text-[#082f4f]"
                  >
                    提交合作需求
                  </h2>
                </div>
              </div>

              <div className="px-6 py-7 sm:px-8">
                <p className="max-w-2xl text-sm leading-7 text-slate-600">
                  请留下基本信息与需求说明，我们将根据您的岗位规模、服务城市与到岗时间安排专业顾问对接。
                </p>
                <div className="mt-6">
                  <ContactForm formspreeId={FORMSPREE_ID} variant="minimal" />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ContactPage;
