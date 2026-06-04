import { Reveal } from "../components/common/Reveal"
import { ArrowUpRight, Smartphone, ShoppingBag, Database } from "lucide-react"
import { useState } from "react"
import { ProjectModal } from "../components/projects/ProjectModal"

const projects = [
  {
    title: "DentIQ App",
    type: "Mobile App",
    description:
      "Cross-platform mobile app rebuilt from Xamarin to .NET MAUI, redesigned with a modern interface and expanded with social features such as friends, duels, rankings, messaging and notifications.",
    impact:
      "Transformed an exam-focused dental app into a more interactive and social learning experience.",
    technologies: [".NET MAUI", "XAML", "OAuth", "Push Notifications", "Mobile"],
    icon: Smartphone,
    featured: true,
  },
  {
    title: "Bella Sofía E-commerce",
    type: "E-commerce Platform",
    description:
      "Online store connected to commercial processes, including product catalog, shopping flow, backend services and payment integration.",
    impact:
      "Built a functional sales channel connected to real business operations.",
    technologies: ["PHP", "JavaScript", "jQuery", "MySQL", "Stripe"],
    icon: ShoppingBag,
    featured: true,
  },
  {
    title: "Professional POS Systems",
    type: "Business Systems",
    description:
      "Development and optimization of POS systems and administrative dashboards for commercial clients, including sales loading, inventory workflows, database logic and backend services.",
    impact:
      "Improved performance and usability for systems handling large operational datasets.",
    technologies: ["PHP", "JavaScript", "MySQL", "Stored Procedures", "APIs"],
    icon: Database,
    featured: false,
  },
]

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null)
  return (
    <section id="projects" className="bg-[#09090B] px-6 py-24 md:py-32 text-white">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#00F5D4]">
              Projects
            </p>

            <h2 className="font-display max-w-4xl text-3xl font-black tracking-tight sm:text-4xl md:text-6xl">
              Selected work built for real users and real business needs.
            </h2>
          </div>

          <p className="max-w-md text-zinc-400 md:text-right">
            A mix of{" "}
            <span className="font-semibold text-white">
              professional work
            </span>
            , mobile development and business systems where{" "}
            <span className="font-semibold text-white">
              design
            </span>
            ,{" "}
            <span className="font-semibold text-white">
              logic
            </span>
            {" "}and{" "}
            <span className="font-semibold text-white">
              performance
            </span>
            {" "}matter equally.
          </p>
        </Reveal>

        <div className="mt-14 md:mt-20 grid gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon

            return (
              <Reveal
                key={project.title}
                delay={index * 0.1}
                onClick={() => setSelectedProject(project)}
                className={`group relative cursor-pointer overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur transition hover:-translate-y-2 hover:border-[#00F5D4]/40 hover:bg-white/[0.07] md:p-10 ${
                  project.featured ? "min-h-[420px]" : ""
                }`}
              >
                <div className="absolute right-0 top-0 h-72 w-72 translate-x-1/3 -translate-y-1/3 rounded-full bg-[#00F5D4]/10 blur-3xl transition group-hover:bg-[#8B5CF6]/20" />

                <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                  <div>
                    <div className="mb-8 flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00F5D4]/10 text-[#00F5D4]">
                        <Icon size={28} />
                      </div>

                      <div>
                        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                          {project.type}
                        </p>
                        <h3 className="text-3xl font-black tracking-tight md:text-5xl">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <p className="max-w-3xl text-lg leading-9 text-zinc-400">
                      {project.description}
                    </p>

                    <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-5">
                      <p className="text-sm uppercase tracking-[0.2em] text-[#00F5D4]">
                        Impact
                      </p>
                      <p className="mt-3 leading-7 text-zinc-300">
                        {project.impact}
                      </p>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
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

                  <div className="relative min-h-[260px] rounded-[1.5rem] border border-white/10 bg-black/40 p-6">
                    <div className="absolute inset-0 rounded-[1.5rem] bg-[radial-gradient(circle_at_top_left,_rgba(0,245,212,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.18),_transparent_35%)]" />

                    <div className="relative z-10 flex h-full min-h-[220px] flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
                          View Case Study
                        </span>

                        <ArrowUpRight className="text-zinc-400 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white" />
                      </div>

                      <div>
                        <p className="text-sm text-zinc-500">
                          Click to explore
                        </p>
                        <p className="mt-2 text-2xl font-bold">
                          {project.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}