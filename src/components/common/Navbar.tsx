const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Impact", href: "#impact"},
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Beyond", href: "#beyond-code" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full px-6 py-5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/30 px-5 py-3 text-sm text-zinc-300 backdrop-blur-xl">
        <a href="#" className="font-bold tracking-tight text-white">
          Erick Alvarado García
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div
          className="px-4 py-2"
        >
        </div>
      </nav>
    </header>
  )
}