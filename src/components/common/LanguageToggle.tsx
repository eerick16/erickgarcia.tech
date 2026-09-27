import { useLanguage } from "../../context/useLanguage"
import { Globe } from "lucide-react"

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-zinc-300 backdrop-blur transition hover:border-[#00F5D4]/40 hover:bg-[#00F5D4]/10 hover:text-[#00F5D4]"
      aria-label="Toggle language"
    >
      <Globe size={14} className="text-[#00F5D4]" />
      <span className={language === "es" ? "text-[#00F5D4]" : "text-zinc-400"}>ES</span>
      <span className="text-zinc-600">/</span>
      <span className={language === "en" ? "text-[#00F5D4]" : "text-zinc-400"}>EN</span>
    </button>
  )
}