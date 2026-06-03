import { motion } from "motion/react"
import { Building2, GraduationCap, Code2 } from "lucide-react"

const experiences = [
  {
    year: "2025 — Present",
    title: "Full Stack Developer",
    place: "Integra Connective",
    icon: Building2,
    description:
      "Development of POS systems, e-commerce platforms, administrative dashboards and cross-platform mobile applications for real clients.",
    tags: ["POS", "E-commerce", "php", "JQuery", "Ajax", ".NET MAUI", "C#", "MySQL", "APIs"],
  },
  {
    year: "2023 — 2025",
    title: "TSU in Software Development",
    place: "Universidad Tecnológica de León",
    icon: GraduationCap,
    description:
      "Associate Degree focused on multiplatform software development, databases, web technologies and mobile applications.",
    tags: ["Software Development", "Databases", "Web", "Mobile"],
  },
  {
    year: "2025 — 2027",
    title: "B.S. in Software Engineering",
    place: "Universidad Tecnológica de León",
    icon: Code2,
    description:
      "Currently pursuing a Bachelor's Degree in Software Engineering, focused on software architecture, development management and scalable systems.",
    tags: ["Engineering", "Architecture", "Software Management"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-[#09090B] px-6 py-32 text-white">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#00F5D4]">
            Experience
          </p>

          <h2 className="font-display max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            From academic foundations to production-ready systems.
          </h2>
        </motion.div>

        <div className="relative mt-20">
          <div className="absolute left-6 top-0 h-full w-px bg-white/10 md:left-1/2" />

          <div className="space-y-12">
            {experiences.map((item, index) => {
              const Icon = item.icon
              const isLeft = index % 2 === 0

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className={`relative grid gap-8 md:grid-cols-2 ${
                    isLeft ? "" : "md:[&>div:first-child]:col-start-2"
                  }`}
                >
                  <div
                    className={`ml-16 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:border-[#00F5D4]/40 hover:bg-white/[0.07] md:ml-0 ${
                      isLeft ? "md:mr-12" : "md:ml-12"
                    }`}
                  >
                    <div className="mb-6 flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00F5D4]/10 text-[#00F5D4]">
                        <Icon size={24} />
                      </div>

                      <div>
                        <p className="text-sm text-zinc-500">{item.year}</p>
                        <h3 className="text-2xl font-bold">{item.title}</h3>
                        <p className="text-zinc-400">{item.place}</p>
                      </div>
                    </div>

                    <p className="leading-8 text-zinc-400">
                      {item.description}
                    </p>

                    <div className="mt-6 flex flex-wrap justify-center gap-3">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-zinc-300 justify-content: center;"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="absolute left-6 top-8 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-[#00F5D4] shadow-[0_0_24px_rgba(0,245,212,0.8)] md:left-1/2" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}