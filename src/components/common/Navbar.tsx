import { useState } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  function closeMenu() {
    setIsOpen(false)
  }

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 py-4 md:px-6 md:py-5">
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/30 px-5 py-3 text-sm text-zinc-300 backdrop-blur-xl lg:grid lg:grid-cols-[1fr_auto_1fr]">
        <a href="#" onClick={closeMenu} className="font-bold tracking-tight text-white lg:justify-self-start">
          Erick Alvarado García
        </a>

        <div className="hidden items-center justify-center gap-6 lg:flex">
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

        <div className="hidden justify-self-end lg:block" />

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {isOpen && (
          <div className="absolute left-0 right-0 top-[calc(100%+12px)] overflow-hidden rounded-3xl border border-white/10 bg-black/90 p-3 backdrop-blur-xl lg:hidden">
            <div className="grid gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-2xl px-4 py-3 text-zinc-300 transition hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}