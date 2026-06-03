export function Footer() {
  return (
    <footer className="border-t border-amber-warm/20 bg-ink py-12 text-cream">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="text-2xl" aria-hidden>
              🐾
            </span>
            <span className="font-display text-lg font-semibold">暖窝猫舍</span>
          </div>
          <p className="text-center text-sm text-cream/70">
            用爱与耐心，记录每一个温暖瞬间 · © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
