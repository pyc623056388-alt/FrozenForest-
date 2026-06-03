export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24">
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-rose-soft/40 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-sage/20 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-16 px-6 py-20 lg:flex-row lg:py-32">
        <div className="flex-1 text-center lg:text-left">
          <p className="animate-fade-up mb-4 inline-flex items-center gap-2 rounded-full border border-amber-warm/30 bg-cream-dark/60 px-4 py-1.5 text-sm text-ink-muted">
            <span aria-hidden>✨</span>
            每一只小猫，都是独一无二的故事
          </p>

          <h1 className="animate-fade-up-delay-1 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">
            欢迎来到
            <br />
            <span className="bg-gradient-to-r from-amber-deep to-amber-warm bg-clip-text text-transparent">
              暖窝猫舍
            </span>
          </h1>

          <p className="animate-fade-up-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-ink-muted lg:mx-0 mx-auto">
            这里记录着我与毛孩子们相遇、相伴的每一个温暖瞬间。
            从第一声喵喵到慵懒的午后阳光，故事正在继续——
            同时也为你精心挑选了高品质的猫咪用品。
          </p>

          <div className="animate-fade-up-delay-3 mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href="#stories"
              className="inline-flex items-center gap-2 rounded-full bg-amber-deep px-8 py-3.5 font-medium text-cream shadow-lg transition-all hover:-translate-y-0.5 hover:bg-amber-warm hover:shadow-xl"
            >
              阅读我们的故事
              <span aria-hidden>→</span>
            </a>
            <a
              href="#supplies"
              className="inline-flex items-center gap-2 rounded-full border-2 border-amber-warm/50 bg-cream px-8 py-3.5 font-medium text-ink transition-all hover:border-amber-deep hover:bg-cream-dark"
            >
              浏览猫咪用品
            </a>
          </div>

          <dl className="animate-fade-up-delay-3 mt-14 grid grid-cols-3 gap-6 border-t border-amber-warm/20 pt-8">
            {[
              { value: '∞', label: '温暖瞬间' },
              { value: '100%', label: '用心照料' },
              { value: '精选', label: '品质用品' },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-2xl font-bold text-amber-deep sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-sm text-ink-muted">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative flex flex-1 justify-center">
          <div className="animate-float relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-amber-warm/30 to-rose-soft/40 blur-xl" />
            <div className="relative flex h-80 w-80 items-center justify-center rounded-[2rem] bg-gradient-to-br from-cream-dark to-rose-soft/30 shadow-2xl sm:h-96 sm:w-96">
              <div className="text-center">
                <span className="text-8xl sm:text-9xl" role="img" aria-label="可爱的小猫">
                  🐱
                </span>
                <p className="mt-4 font-display text-lg font-medium text-ink-muted">
                  毛茸茸的伙伴们
                  <br />
                  等你来认识
                </p>
              </div>
            </div>

            <div className="absolute -right-4 top-8 rounded-2xl bg-cream px-4 py-3 shadow-lg">
              <p className="text-xs text-ink-muted">今日心情</p>
              <p className="font-medium text-ink">超级开心喵~</p>
            </div>

            <div className="absolute -left-6 bottom-12 rounded-2xl bg-amber-deep px-4 py-3 text-cream shadow-lg">
              <p className="text-xs opacity-80">新故事</p>
              <p className="font-medium">即将更新 ✨</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden>
        <div className="h-8 w-5 rounded-full border-2 border-amber-warm/50">
          <div className="mx-auto mt-1.5 h-2 w-1 rounded-full bg-amber-deep" />
        </div>
      </div>
    </section>
  )
}
