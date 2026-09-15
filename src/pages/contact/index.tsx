import { NextPage } from 'next';
import Image from 'next/image';
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
        <header className="relative min-h-[76vh] overflow-hidden bg-[#061f34]">
          <Image
            src="/2.jpg"
            alt="睐智人力品牌旗帜"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#031b2d]/92 via-[#031b2d]/48 to-[#031b2d]/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061f34] via-transparent to-transparent" />
          <div
            className="pointer-events-none absolute -right-8 bottom-[-0.18em] text-[10rem] font-semibold leading-none tracking-[-0.1em] text-white/[0.08] sm:text-[18rem] lg:text-[26rem]"
            aria-hidden="true"
          >
            HELLO
          </div>
          <div className="relative mx-auto flex min-h-[76vh] w-full max-w-[1800px] items-end px-6 pb-20 pt-32 sm:px-10 sm:pb-24 lg:px-16 lg:pb-32 xl:px-24">
            <div className="max-w-5xl text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                Contact Us
              </p>
              <h1 className="mt-7 text-5xl font-semibold leading-[1.08] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                开始一次
                <br />
                有效沟通
              </h1>
            </div>
          </div>
        </header>

        <div className="relative isolate overflow-hidden px-6 pb-28 sm:px-10 sm:pb-36 lg:px-16 lg:pb-44 xl:px-24">
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

          <div className="mx-auto grid w-full max-w-[1600px] gap-16 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-24">
            <section className="pt-12 text-white sm:pt-16 lg:sticky lg:top-28 lg:pt-24" aria-labelledby="service-network-title">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Service Network</p>
              <h2
                id="service-network-title"
                className="mt-7 text-4xl font-semibold leading-[1.12] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl"
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
                className="mt-10 grid !ml-0 list-none grid-cols-2 gap-x-6 sm:grid-cols-3 sm:gap-x-8 lg:grid-cols-5"
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
              className="relative bg-[#f7f5f2] shadow-[0_32px_90px_rgba(0,0,0,0.16)]"
              aria-labelledby="contact-form-title"
            >
              <div className="border-b border-[#e5ded7] bg-[#f7f5f2]">
                <div className="px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
                  <div className="flex items-center gap-4">
                    <span className="h-px w-10 bg-primary" aria-hidden="true" />
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Business Inquiry</p>
                  </div>
                  <h2
                    id="contact-form-title"
                    className="mt-5 text-3xl font-semibold leading-[1.15] tracking-[-0.04em] text-[#082f4f] sm:text-4xl"
                  >
                    提交合作需求
                  </h2>
                </div>
              </div>

              <div className="px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
                <p className="max-w-2xl text-base leading-8 text-slate-600">
                  请留下基本信息与需求说明，我们将根据您的岗位规模、服务城市与到岗时间安排专业顾问对接。
                </p>
                <div className="mt-9">
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
