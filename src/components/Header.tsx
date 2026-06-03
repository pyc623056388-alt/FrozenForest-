const navItems = [
  { label: '我们的故事', href: '#stories' },
  { label: '猫咪用品', href: '#supplies' },
  { label: '关于猫舍', href: '#about' },
]

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-amber-warm/20 bg-cream/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="group flex items-center gap-2">
          <span className="text-2xl transition-transform group-hover:scale-110" aria-hidden>
            🐾
          </span>
          <span className="font-display text-xl font-semibold tracking-wide text-ink">
            暖窝猫舍
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="主导航">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-muted transition-colors hover:text-amber-deep"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#stories"
          className="rounded-full bg-amber-deep px-5 py-2 text-sm font-medium text-cream shadow-md transition-all hover:bg-amber-warm hover:shadow-lg"
        >
          开始探索
        </a>
      </div>
    </header>
  )
}
