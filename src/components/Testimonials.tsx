const controls = [
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

const Testimonials = () => {
  const leftControls = controls.slice(0, 6);
  const rightControls = controls.slice(6);

  return (
    <section className="relative isolate overflow-hidden bg-[#061f34] px-6 py-24 text-white sm:px-10 sm:py-32 lg:px-16 2xl:px-24 2xl:py-40">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[52rem] w-[52rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/15"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-[1600px]">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Employment Risk Control
          </p>
          <h2 className="mt-7 text-4xl font-semibold leading-[1.12] tracking-[-0.05em] text-white sm:text-5xl 2xl:text-6xl">
            把风险拦在发生之前
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/60 sm:text-lg sm:leading-9">
            覆盖员工入职、履职、离职及争议高发期，形成准确、合规、及时、安全的用工防线。
          </p>
        </div>

        <div className="mt-20 grid items-center gap-10 lg:grid-cols-[1fr_0.72fr_1fr] lg:gap-12">
          <ol className="!ml-0 list-none">
            {leftControls.map((control, index) => (
              <li
                key={control}
                className="flex min-h-16 items-center justify-between gap-5 border-b border-white/15 !pl-0 lg:text-right"
              >
                <span className="text-sm tabular-nums tracking-[0.12em] text-primary">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-base font-medium tracking-[0.03em] text-white/80">{control}</span>
              </li>
            ))}
          </ol>

          <div className="brand-orbit relative mx-auto flex aspect-square w-full max-w-[360px] items-center justify-center rounded-full border border-white/25">
            <div className="absolute inset-5 rounded-full border border-primary/35" aria-hidden="true" />
            <div className="absolute inset-12 rounded-full bg-primary/10 blur-2xl" aria-hidden="true" />
            <div className="relative text-center">
              <span className="block text-7xl font-semibold leading-none tracking-[-0.08em] text-primary sm:text-8xl">
                12
              </span>
              <span className="mt-3 block text-sm font-semibold tracking-[0.18em] text-white/60">
                CONTROL SYSTEM
              </span>
            </div>
          </div>

          <ol start={7} className="!ml-0 list-none">
            {rightControls.map((control, index) => (
              <li key={control} className="flex min-h-16 items-center gap-5 border-b border-white/15 !pl-0">
                <span className="text-base font-medium tracking-[0.03em] text-white/80">{control}</span>
                <span className="ml-auto text-sm tabular-nums tracking-[0.12em] text-primary">
                  {String(index + 7).padStart(2, '0')}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
