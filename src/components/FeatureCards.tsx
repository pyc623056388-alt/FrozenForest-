const features = [
  {
    id: 'stories',
    icon: '📖',
    title: '我们的故事',
    description:
      '从初遇到相伴，用照片与文字记录每一只小猫的成长轨迹。那些撒娇、打盹、探险的瞬间，都是最珍贵的回忆。',
    cta: '即将开启故事篇章',
    gradient: 'from-amber-warm/20 to-rose-soft/30',
  },
  {
    id: 'supplies',
    icon: '🛒',
    title: '猫咪用品',
    description:
      '精心挑选猫粮、玩具、窝垫与护理用品。每一件商品都经过实测，只为给毛孩子更舒适、更健康的生活。',
    cta: '用品展示即将上线',
    gradient: 'from-sage/20 to-cream-dark',
  },
  {
    id: 'about',
    icon: '🏡',
    title: '关于猫舍',
    description:
      '暖窝猫舍是一个充满爱与耐心的小天地。我们相信，用心陪伴与科学养护，能让每一只小猫都绽放最灵动的光芒。',
    cta: '了解更多',
    gradient: 'from-rose-soft/30 to-amber-warm/20',
  },
]

export function FeatureCards() {
  return (
    <section className="bg-cream-dark/50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            探索暖窝猫舍
          </h2>
          <p className="mt-4 text-ink-muted">
            故事、用品、陪伴 —— 一切关于爱与毛茸茸的美好
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.id}
              id={feature.id}
              className="group relative overflow-hidden rounded-3xl border border-amber-warm/15 bg-cream p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 transition-opacity group-hover:opacity-100`}
                aria-hidden
              />
              <div className="relative">
                <span className="text-4xl" role="img" aria-hidden>
                  {feature.icon}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                  {feature.title}
                </h3>
                <p className="mt-3 leading-relaxed text-ink-muted">
                  {feature.description}
                </p>
                <p className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-amber-deep">
                  {feature.cta}
                  <span className="transition-transform group-hover:translate-x-1" aria-hidden>
                    →
                  </span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
