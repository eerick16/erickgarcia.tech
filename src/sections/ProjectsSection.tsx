import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Database,
  Smartphone,
  ShoppingBag,
} from "lucide-react"
import { useRef, useState } from "react"

import { Reveal } from "../components/common/Reveal"
import { ProjectModal } from "../components/projects/ProjectModal"

const projects = [
  {
    title: "DentIQ App",
    type: "Mobile App",
    shortDescription:
      "A modern cross-platform dental learning app with competitive and social features.",
    description:
      "Cross-platform mobile app rebuilt from Xamarin to .NET MAUI, redesigned with a modern interface and expanded with social features such as friends, duels, rankings, messaging and notifications.",
    impact:
      "Transformed an exam-focused dental app into a more interactive and social learning experience.",
    technologies: [
      ".NET MAUI",
      "XAML",
      "OAuth",
      "Push Notifications",
      "Mobile",
    ],
    icon: Smartphone,
    featured: true,
    image: "/projects/dentiq-cover.jpg",
    images: [
      "/projects/dentiq-01.jpg",
      "/projects/dentiq-02.jpg",
      "/projects/dentiq-03.jpg",
    ],
  },
  {
    title: "Bella Sofía E-commerce",
    type: "E-commerce Platform",
    shortDescription:
      "An online store connected to real sales, catalogue and payment processes.",
    description:
      "Online store connected to commercial processes, including product catalogue, shopping flow, backend services and payment integration.",
    impact:
      "Built a functional sales channel connected to real business operations.",
    technologies: ["PHP", "JavaScript", "jQuery", "MySQL", "Stripe"],
    icon: ShoppingBag,
    featured: true,
    image: "/projects/bella-sofia-cover.jpg",
    images: [
      "/projects/bella-sofia-01.jpg",
      "/projects/bella-sofia-02.jpg",
      "/projects/bella-sofia-03.jpg",
    ],
  },
  {
    title: "Professional POS Systems",
    type: "Business Systems",
    shortDescription:
      "Administrative and point-of-sale tools designed for demanding business operations.",
    description:
      "Development and optimisation of POS systems and administrative dashboards for commercial clients, including sales loading, inventory workflows, database logic and backend services.",
    impact:
      "Improved performance and usability for systems handling large operational datasets.",
    technologies: [
      "PHP",
      "JavaScript",
      "MySQL",
      "Stored Procedures",
      "APIs",
    ],
    icon: Database,
    featured: false,
    image: "/projects/pos-cover.jpg",
    images: [
      "/projects/pos-01.jpg",
      "/projects/pos-02.jpg",
      "/projects/pos-03.jpg",
    ],
    confidential: true,
  },
]

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[number] | null
  >(null)

  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollCarousel = (direction: "left" | "right") => {
    if (!carouselRef.current) return

    const container = carouselRef.current
    const firstCard = container.firstElementChild as HTMLElement | null
    const cardWidth = firstCard?.offsetWidth ?? 420
    const gap = 24

    container.scrollBy({
      left: direction === "right" ? cardWidth + gap : -(cardWidth + gap),
      behavior: "smooth",
    })
  }

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#09090B] px-6 py-24 text-white md:py-32"
    >
      {/* Background illumination */}
      <div className="pointer-events-none absolute left-[-12rem] top-20 h-96 w-96 rounded-full bg-[#00F5D4]/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-[-10rem] h-96 w-96 rounded-full bg-[#8B5CF6]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#00F5D4]">
              Projects
            </p>

            <h2 className="font-display max-w-4xl text-3xl font-black tracking-tight sm:text-4xl md:text-6xl">
              Selected work built for real users and real business needs.
            </h2>
          </div>

          <div className="flex flex-col gap-6 lg:items-end">
            <p className="max-w-md text-zinc-400 lg:text-right">
              A mix of{" "}
              <span className="font-semibold text-white">
                professional work
              </span>
              , mobile development and business systems where{" "}
              <span className="font-semibold text-white">design</span>,{" "}
              <span className="font-semibold text-white">logic</span> and{" "}
              <span className="font-semibold text-white">performance</span>{" "}
              matter equally.
            </p>

            {/* Desktop navigation */}
            <div className="hidden items-center gap-3 md:flex">
              <button
                type="button"
                aria-label="Previous project"
                onClick={() => scrollCarousel("left")}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-300 transition hover:border-[#00F5D4]/40 hover:bg-[#00F5D4]/10 hover:text-[#00F5D4]"
              >
                <ArrowLeft size={20} />
              </button>

              <button
                type="button"
                aria-label="Next project"
                onClick={() => scrollCarousel("right")}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-300 transition hover:border-[#00F5D4]/40 hover:bg-[#00F5D4]/10 hover:text-[#00F5D4]"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="relative mt-14 md:mt-20">
          {/* Carousel */}
          <div
            ref={carouselRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {projects.map((project) => {
              const Icon = project.icon

              return (
                <article
                  key={project.title}
                  tabIndex={0}
                  role="button"
                  aria-label={`Open ${project.title} case study`}
                  onClick={() => setSelectedProject(project)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault()
                      setSelectedProject(project)
                    }
                  }}
                  className="group relative min-w-[88%] cursor-pointer snap-start overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] transition duration-500 hover:-translate-y-2 hover:border-[#00F5D4]/40 hover:bg-white/[0.055] focus:outline-none focus:ring-2 focus:ring-[#00F5D4]/60 sm:min-w-[70%] lg:min-w-[calc((100%-1.5rem)/2)]"
                >
                  {/* Project image */}
                  <div className="relative h-56 overflow-hidden border-b border-white/10 sm:h-64">
                    <img
                      src={project.image}
                      alt={`${project.title} project preview`}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/20 to-transparent" />

                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,245,212,0.14),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.16),_transparent_45%)]" />

                    <div className="absolute left-5 top-5 flex items-center gap-2">
                      {project.featured && (
                        <span className="rounded-full border border-[#00F5D4]/30 bg-[#00F5D4]/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#00F5D4] backdrop-blur-md">
                          Featured
                        </span>
                      )}

                      {project.confidential && (
                        <span className="rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-xs font-medium text-zinc-300 backdrop-blur-md">
                          Confidential
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-5 left-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#00F5D4]/20 bg-[#00F5D4]/10 text-[#00F5D4] backdrop-blur-md">
                        <Icon size={24} />
                      </div>
                    </div>
                  </div>

                  {/* Card information */}
                  <div className="relative p-6 sm:p-8">
                    <div className="absolute right-0 top-0 h-40 w-40 translate-x-1/3 -translate-y-1/3 rounded-full bg-[#8B5CF6]/10 blur-3xl transition duration-500 group-hover:bg-[#00F5D4]/10" />

                    <div className="relative z-10">
                      <div className="flex items-start justify-between gap-5">
                        <div>
                          <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                            {project.type}
                          </p>

                          <h3 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
                            {project.title}
                          </h3>
                        </div>

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/30 text-zinc-400 transition duration-300 group-hover:border-[#00F5D4]/30 group-hover:bg-[#00F5D4]/10 group-hover:text-[#00F5D4]">
                          <ArrowUpRight
                            size={19}
                            className="transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                        </div>
                      </div>

                      <p className="mt-5 min-h-[84px] leading-7 text-zinc-400">
                        {project.shortDescription}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs text-zinc-300"
                          >
                            {technology}
                          </span>
                        ))}

                        {project.technologies.length > 4 && (
                          <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs text-zinc-500">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>

                      <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                        <span className="text-sm font-medium text-zinc-300 transition group-hover:text-white">
                          View case study
                        </span>

                        <span className="text-xs text-zinc-600">
                          Click to explore
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>

          {/* Mobile arrows */}
          <div className="mt-2 flex items-center justify-between md:hidden">
            <p className="text-sm text-zinc-500">
              Swipe or use the arrows
            </p>

            <div className="flex gap-3">
              <button
                type="button"
                aria-label="Previous project"
                onClick={() => scrollCarousel("left")}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-300 transition active:scale-95"
              >
                <ArrowLeft size={19} />
              </button>

              <button
                type="button"
                aria-label="Next project"
                onClick={() => scrollCarousel("right")}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-300 transition active:scale-95"
              >
                <ArrowRight size={19} />
              </button>
            </div>
          </div>
        </Reveal>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}