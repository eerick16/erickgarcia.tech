import { useEffect } from "react"
import { X } from "lucide-react"
import { motion } from "motion/react"

const certifications = [
  {
    title: "User Experience Design Fundamentals",
    image: "/images/certifications/ux-fundamentals.jpg",
  },
  {
    title: "Empathize, Define and Ideate",
    image: "/images/certifications/ux-process.jpg",
  },
  {
    title: "Wireframes and Low-Fidelity Prototypes",
    image: "/images/certifications/ux-wireframes.jpg",
  },
]

type CertificationsModalProps = {
  isOpen: boolean
  onClose: () => void
}

export function CertificationsModal({ isOpen, onClose }: CertificationsModalProps) {
  useEffect(() => {
    if (!isOpen) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose()
    }

    document.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-6 backdrop-blur-md"
    >
      <motion.div
        onClick={(event) => event.stopPropagation()}
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="max-h-[85vh] w-full max-w-6xl overflow-y-auto rounded-[2rem] border border-white/10 bg-[#09090B] p-8 text-white shadow-2xl md:p-10"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-6 top-6 rounded-full border border-white/10 bg-white/5 p-2 text-zinc-400 transition hover:bg-white/10 hover:text-white"
        >
          <X size={22} />
        </button>

        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#00F5D4]">
          Certifications
        </p>

        <h3 className="font-display text-4xl font-black tracking-tight md:text-6xl">
          UX Design Certifications
        </h3>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {certifications.map((cert) => (
            <article
              key={cert.title}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="h-auto w-full object-cover"
              />

              <div className="p-5">
                <h4 className="font-semibold text-white">{cert.title}</h4>
              </div>
            </article>
          ))}
        </div>
      </motion.div>
    </div>
  )
}