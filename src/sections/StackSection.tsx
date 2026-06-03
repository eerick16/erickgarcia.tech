import { motion } from "motion/react"
import { FaFigma } from "react-icons/fa"
import {
  Code2,
  Database,
  Globe2,
  Layers3,
  MonitorSmartphone,
  Server,
  Wrench,
} from "lucide-react"

const stackGroups = [
  {
    title: "Frontend",
    icon: Code2,
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Vite",
      "Tailwind CSS",
      "Bootstrap",
      "jQuery",
      "AJAX",
      "JSON",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["PHP", "Node.js", "C#", "Java", "Flask", "Python"],
  },
  {
    title: "Mobile",
    icon: MonitorSmartphone,
    items: [
      ".NET MAUI",
      "XAML",
      "Android Studio",
      "Kotlin",
      "Xcode",
      "TestFlight",
      "App Store",
      "Play Store",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    items: ["MySQL", "SQL Server", "MongoDB", "CouchDB", "Stored Procedures"],
  },
  {
    title: "Cloud & APIs",
    icon: Globe2,
    items: [
      "AWS",
      "Google Cloud Console",
      "Stripe",
      "Google OAuth",
      "Apple Sign-In",
      "Estafeta API",
      "FacturaPorTi",
      "OneSignal",
    ],
  },
  {
    title: "Design",
    icon: FaFigma,
    items: ["Figma", "Photoshop", "Illustrator", "UI/UX", "Low-Fidelity Prototypes"],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: [
      "GitHub",
      "Postman",
      "Visual Studio",
      "VS Code",
      "NetBeans",
      "MySQL Workbench",
      "WEKA",
    ],
  },
  {
    title: "Used in this Portfolio",
    icon: Layers3,
    items: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Motion",
      "Three.js",
      "React Three Fiber",
      "Vercel",
    ],
  },
]

export function StackSection() {
  return (
    <section id="stack" className="bg-[#09090B] px-6 py-32 text-white">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#00F5D4]">
              Tech Stack
            </p>

            <h2 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
              Technologies I use to design, build and ship software.
            </h2>
          </div>

          <p className="max-w-md text-zinc-400 md:text-right">
            From interface design to backend logic, mobile publishing,
            databases, cloud tools and third-party integrations.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stackGroups.map((group, index) => {
            const Icon = group.icon

            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition hover:-translate-y-1 hover:border-[#00F5D4]/40 hover:bg-white/[0.07]"
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00F5D4]/10 text-[#00F5D4] transition group-hover:bg-[#00F5D4]/20">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-xl font-bold">
                    {group.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-sm text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}