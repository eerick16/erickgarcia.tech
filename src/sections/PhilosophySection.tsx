import { motion } from "motion/react"
import {
  Gauge,
  Users,
  Layers3,
  Workflow,
} from "lucide-react"

const principles = [
  {
    title: "Performance Matters",
    description:
      "Software should remain responsive regardless of scale. I focus on efficient queries, optimized workflows and solutions that perform well under real usage.",
    icon: Gauge,
  },
  {
    title: "User Experience First",
    description:
      "Users interact with products, not code. Every interface should be intuitive, accessible and visually coherent.",
    icon: Users,
  },
  {
    title: "Scalable Solutions",
    description:
      "Applications should be built with growth in mind. Architecture and maintainability are just as important as delivering features.",
    icon: Layers3,
  },
  {
    title: "Clean Architecture",
    description:
      "Well-structured systems are easier to maintain, improve and expand. Good organization reduces technical debt and accelerates development.",
    icon: Workflow,
  },
]

export function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="bg-[#09090B] px-6 py-32 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#00F5D4]">
            Philosophy
          </p>

          <h2 className="font-display max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            How I approach software development.
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-9 text-zinc-400">
            Technology changes constantly, but the principles behind
            building quality software remain the same. These ideas guide
            the way I design, develop and improve every project.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {principles.map((principle, index) => {
            const Icon = principle.icon

            return (
              <motion.article
                key={principle.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur transition hover:border-[#00F5D4]/40 hover:bg-white/[0.07]"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00F5D4]/10 text-[#00F5D4] transition group-hover:bg-[#00F5D4]/20">
                  <Icon size={28} />
                </div>

                <h3 className="text-2xl font-bold">
                  {principle.title}
                </h3>

                <p className="mt-4 leading-8 text-zinc-400">
                  {principle.description}
                </p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}