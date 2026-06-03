import { useEffect } from "react"
import { X } from "lucide-react"
import { motion } from "motion/react"

type ProjectModalProps = {
  project: {
    title: string
    type: string
    description: string
    impact: string
    technologies: string[]
  } | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {

  useEffect(() => {
    if (!project) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [project, onClose])

  if (!project) return null

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
        exit={{ opacity: 0, y: 40, scale: 0.96 }}
        transition={{ duration: 0.3 }}
        className="relative max-h-[85vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] border border-white/10 bg-[#09090B] p-8 text-white shadow-2xl md:p-10"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-6 top-6 rounded-full border border-white/10 bg-white/5 p-2 text-zinc-400 transition hover:bg-white/10 hover:text-white"
        >
          <X size={22} />
        </button>

        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#00F5D4]">
          {project.type}
        </p>

        <h3 className="max-w-3xl text-4xl font-black tracking-tight md:text-6xl">
          {project.title}
        </h3>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#00F5D4]">
              Overview
            </p>
            <p className="leading-8 text-zinc-400">
              {project.description}
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#00F5D4]">
              Impact
            </p>
            <p className="leading-8 text-zinc-400">
              {project.impact}
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#00F5D4]">
            Technologies
          </p>

          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}