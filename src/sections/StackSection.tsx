import { Reveal } from "../components/common/Reveal"
import { RevealCard } from "../components/common/RevealCard"
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
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
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
        </Reveal>

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stackGroups.map((group, index) => {
            const Icon = group.icon

            return (
              <RevealCard
                key={group.title}
                delay={index * 0.05}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur"
              >
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#00F5D4]/50 to-transparent" />
                <div className="absolute -top-16 right-8 h-28 w-28 rounded-full bg-[#00F5D4]/10 blur-3xl" />

                <div className="relative mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00F5D4]/10 text-[#00F5D4]">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-xl font-bold">
                    {group.title}
                  </h3>
                </div>

                <div className="relative flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-sm text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#00F5D4]/60 to-transparent" />
                <div className="absolute -top-20 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-[#00F5D4]/10 blur-3xl" />
              </RevealCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}