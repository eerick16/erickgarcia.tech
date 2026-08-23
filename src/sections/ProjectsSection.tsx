import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Clock,
  Cpu,
  Database,
  ExternalLink,
  Globe,
  Layout,
  Lock,
  PackageCheck,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
} from "lucide-react"

import { 
  FaGithub
} from "react-icons/fa"

import {
  type PointerEvent as ReactPointerEvent,
  useEffect,
  useRef,
  useState,
} from "react"

import { Reveal } from "../components/common/Reveal"

const projects = [
  {
    title: "DentIQ App",
    type: "Mobile App",
    overview:
      "Cross-platform mobile app rebuilt from Xamarin to .NET MAUI, redesigned with a modern interface and expanded with social features such as friends, duels, rankings, messaging and notifications.",
    impact:
      "Transformed an exam-focused dental app into an interactive and social learning experience.",
    technologies: [
      ".NET MAUI",
      "XAML",
      "OAuth 2.0",
      "Push Notifications",
      "Mobile",
    ],
    icon: Smartphone,
    images: [
      "/images/projects/dentiq/1.jpg",
      "/images/projects/dentiq/2.jpg",
      "/images/projects/dentiq/3.jpg",
      "/images/projects/dentiq/4.jpg",
      "/images/projects/dentiq/5.jpg",
      "/images/projects/dentiq/6.jpg",
      "/images/projects/dentiq/7.jpg",
    ],
    links: {
      playStore: "", // En proceso
      appStore: "",
      github: "",
    },
  },
  {
    title: "Bella Sofía Mobile E-commerce",
    type: "Mobile E-commerce",
    overview:
      "Production-ready mobile e-commerce application published on the Play Store, featuring product catalog navigation, secure checkout flows, and payment gateway integrations.",
    impact:
      "Delivered a mobile-first commercial sales channel for end customers.",
    technologies: [".NET MAUI", "C#", "Stripe API", "Google Play"],
    icon: ShoppingCart,
    images: [
      "/images/projects/bellasofia-mobile/1.jpg",
      "/images/projects/bellasofia-mobile/2.jpg",
      "/images/projects/bellasofia-mobile/3.jpg",
      "/images/projects/bellasofia-mobile/4.jpg",
      "/images/projects/bellasofia-mobile/5.jpg",
    ],
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.integra.bellaSofia&hl=es_MX",
      github: "",
    },
  },
  {
    title: "Bella Sofía Web E-commerce",
    type: "E-commerce Platform",
    overview:
      "Online store connected to commercial processes, including product catalogue, shopping flow, backend services and payment integration.",
    impact:
      "Built a functional sales channel connected to real business operations.",
    technologies: ["PHP", "JavaScript", "jQuery", "MySQL", "Stripe"],
    icon: ShoppingBag,
    images: [
      "/images/projects/bellasofia-web/1.jpg",
      "/images/projects/bellasofia-web/2.jpg",
      "/images/projects/bellasofia-web/3.jpg",
    ],
    links: {
      website: "https://bellasofia.integradesarrollo.com/index.php",
      github: "",
    },
  },
  {
    title: "Custom Enterprise POS Suite",
    type: "Business Systems",
    overview:
      "Development and optimisation of POS systems and administrative dashboards for commercial clients (Cilo, Cohoba, BellaSofía, Eurocycle, Funmex), including sales loading, inventory workflows, database logic and backend services.",
    impact:
      "Improved performance and usability for custom business operations handling large datasets.",
    technologies: [
      "PHP",
      "JavaScript",
      "MySQL",
      "Stored Procedures",
      "APIs",
      "Figma",
    ],
    icon: Database,
    images: ["/default.jpg", "/default.jpg", "/default.jpg"],
    confidential: true,
    links: {
      figma: "",
    },
  },
  {
    title: "Field Operations & Logistics Apps",
    type: "Enterprise Mobile Apps",
    overview:
      "Suite of specialized mobile apps for field teams: Funmex (sales contracts & collections), Eurocycle (hazardous waste route collection), and Costa Rica (offline-first order delivery tracking).",
    impact:
      "Streamlined logistics and collection workflows with offline database sync capabilities.",
    technologies: [
      ".NET MAUI",
      "SQLite",
      "Offline Sync",
      "REST APIs",
      "Figma",
    ],
    icon: PackageCheck,
    images: ["/default.jpg", "/default.jpg", "/default.jpg"],
    confidential: true,
    links: {
      figma: "",
    },
  },
  {
    title: "Leather Goods E-commerce & Business ERP",
    type: "Full Stack Web System",
    overview:
      "University web ecosystem combining a leather product online store with an internal business management system for sales tracking, raw material management, quotes, suppliers, and customer databases.",
    impact:
      "Integrated front-facing sales with back-office supply chain and resource management.",
    technologies: ["PHP", "JavaScript", "MySQL", "HTML/CSS", "Bootstrap"],
    icon: Globe,
    images: ["/default.jpg", "/default.jpg", "/default.jpg"],
    links: {
      github: "",
    },
  },
  {
    title: "Volts — IoT Companion & Web Platform",
    type: "IoT + Mobile + Web",
    overview:
      "Integrative system featuring a physical eco-friendly companion robot made from reused materials, a mobile app to interact with and control the robot via Firebase, and an e-commerce web platform for institutional packages.",
    impact:
      "Combined hardware interaction, gamified social responsibility messages, and an e-commerce platform.",
    technologies: [
      "IoT",
      "Firebase",
      "Mobile App",
      "Web E-commerce",
      "PHP/MySQL",
    ],
    icon: Cpu,
    images: ["/default.jpg", "/default.jpg", "/default.jpg"],
    links: {
      github: "",
    },
  },
  {
    title: "AI Predictive Model & System",
    type: "Machine Learning / R&D",
    overview:
      "Ongoing development project exploring machine learning / AI model training and implementation for automated data prediction and decision-making.",
    impact:
      "Active research and development project focused on AI integration.",
    technologies: ["Python", "Machine Learning", "UML Modeling", "AI"],
    icon: Layout,
    images: ["/default.jpg", "/default.jpg"],
    links: {
      github: "",
    },
  },
]

type Project = (typeof projects)[number]

export function ProjectsSection() {
  const [projectIndex, setProjectIndex] = useState(0)
  const [imageIndex, setImageIndex] = useState(0)
  const [isImageHovered, setIsImageHovered] = useState(false)
  const [isChangingProject, setIsChangingProject] = useState(false)

  const pointerStartX = useRef<number | null>(null)

  const project: Project = projects[projectIndex]
  const Icon = project.icon

  const normaliseIndex = (index: number, length: number) =>
    ((index % length) + length) % length

  const changeProject = (direction: "previous" | "next") => {
    if (isChangingProject) return

    setIsChangingProject(true)

    window.setTimeout(() => {
      setProjectIndex((currentIndex) => {
        const movement = direction === "next" ? 1 : -1

        return normaliseIndex(currentIndex + movement, projects.length)
      })

      setImageIndex(0)

      window.setTimeout(() => {
        setIsChangingProject(false)
      }, 50)
    }, 180)
  }

  const changeImage = (direction: "previous" | "next") => {
    if (project.images.length <= 1) return

    setImageIndex((currentIndex) => {
      const movement = direction === "next" ? 1 : -1

      return normaliseIndex(
        currentIndex + movement,
        project.images.length,
      )
    })
  }

  const selectImage = (index: number) => {
    setImageIndex(index)
  }

  const handlePointerDown = (
    event: ReactPointerEvent<HTMLDivElement>,
  ) => {
    pointerStartX.current = event.clientX
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const handlePointerUp = (
    event: ReactPointerEvent<HTMLDivElement>,
  ) => {
    if (pointerStartX.current === null) return

    const travelledDistance =
      event.clientX - pointerStartX.current

    const dragThreshold = 45

    if (travelledDistance > dragThreshold) {
      changeImage("previous")
    }

    if (travelledDistance < -dragThreshold) {
      changeImage("next")
    }

    pointerStartX.current = null

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
  }

  const handlePointerCancel = () => {
    pointerStartX.current = null
  }

  useEffect(() => {
    if (isImageHovered || project.images.length <= 1) return

    const interval = window.setInterval(() => {
      setImageIndex((currentIndex) =>
        normaliseIndex(
          currentIndex + 1,
          project.images.length,
        ),
      )
    }, 4500)

    return () => window.clearInterval(interval)
  }, [isImageHovered, project.images.length, projectIndex])

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#09090B] px-6 py-24 text-white md:py-32"
    >
      {/* Background lights */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#00F5D4]/5 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#8B5CF6]/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
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
            </span>{" "}
            and{" "}
            <span className="font-semibold text-white">
              performance
            </span>{" "}
            matter equally.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 md:mt-20">
          <div className="relative">
            {/* Previous project */}
            <button
              type="button"
              aria-label="Previous project"
              onClick={() => changeProject("previous")}
              className="absolute left-0 top-1/2 z-30 hidden h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#111114]/95 text-zinc-300 shadow-2xl backdrop-blur transition duration-300 hover:scale-110 hover:border-[#00F5D4]/40 hover:bg-[#00F5D4]/10 hover:text-[#00F5D4] xl:flex"
            >
              <ArrowLeft size={22} />
            </button>

            {/* Next project */}
            <button
              type="button"
              aria-label="Next project"
              onClick={() => changeProject("next")}
              className="absolute right-0 top-1/2 z-30 hidden h-14 w-14 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#111114]/95 text-zinc-300 shadow-2xl backdrop-blur transition duration-300 hover:scale-110 hover:border-[#00F5D4]/40 hover:bg-[#00F5D4]/10 hover:text-[#00F5D4] xl:flex"
            >
              <ArrowRight size={22} />
            </button>

            {/* Main project card */}
            <article
              className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur transition duration-300 ${
                isChangingProject
                  ? "translate-y-2 opacity-0"
                  : "translate-y-0 opacity-100"
              }`}
            >
              <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 -translate-x-1/3 -translate-y-1/3 rounded-full bg-[#00F5D4]/10 blur-3xl" />

              <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 translate-x-1/3 translate-y-1/3 rounded-full bg-[#8B5CF6]/10 blur-3xl" />

              <div className="relative z-10 grid lg:min-h-[650px] lg:grid-cols-[0.95fr_1.05fr]">
                {/* Project information */}
                <div className="flex flex-col justify-center border-b border-white/10 p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-12 xl:p-14">
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#00F5D4]/20 bg-[#00F5D4]/10 text-[#00F5D4]">
                        <Icon size={27} />
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                          {project.type}
                        </p>

                        <h3 className="mt-1 text-3xl font-black tracking-tight sm:text-4xl">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    {project.confidential && (
                      <span className="hidden rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1.5 text-xs font-medium text-purple-300 sm:block">
                        Confidential
                      </span>
                    )}
                  </div>

                  <div className="mt-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00F5D4]">
                      Overview
                    </p>

                    <p className="mt-4 text-base leading-8 text-zinc-400 sm:text-lg">
                      {project.overview}
                    </p>
                  </div>

                  <div className="mt-9 border-l-2 border-[#8B5CF6]/70 pl-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8B5CF6]">
                      Impact
                    </p>

                    <p className="mt-3 leading-7 text-zinc-300">
                      {project.impact}
                    </p>
                  </div>

                  <div className="mt-9">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
                      Technologies
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2.5">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-zinc-300"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Acciones & Status Badges */}
                  <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-white/10 pt-7">
                    {"github" in project.links && project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:scale-105 hover:border-[#00F5D4]/50 hover:bg-[#00F5D4]/10 hover:text-[#00F5D4]"
                      >
                        <FaGithub size={18} />
                        GitHub Repo
                      </a>
                    )}

                    {"playStore" in project.links && project.links.playStore && (
                      <a
                        href={project.links.playStore}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-[#00F5D4] bg-[#00F5D4] px-6 py-3 text-sm font-bold text-black shadow-[0_0_20px_rgba(0,245,212,0.35)] transition hover:scale-105 hover:bg-[#00F5D4]/90"
                      >
                        <ExternalLink size={18} />
                        Get on Play Store
                      </a>
                    )}

                    {"website" in project.links && project.links.website && (
                      <a
                        href={project.links.website}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-[#00F5D4] bg-[#00F5D4] px-6 py-3 text-sm font-bold text-black shadow-[0_0_20px_rgba(0,245,212,0.35)] transition hover:scale-105 hover:bg-[#00F5D4]/90"
                      >
                        <ExternalLink size={18} />
                        Visit Live Website
                      </a>
                    )}

                    {"figma" in project.links && project.links.figma && (
                      <a
                        href={project.links.figma}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-purple-500/40 bg-purple-500/10 px-5 py-3 text-sm font-semibold text-purple-300 transition hover:scale-105 hover:bg-purple-500/20"
                      >
                        <ExternalLink size={18} />
                        Interactive Figma Prototype
                      </a>
                    )}

                    {/* Banner En Proceso */}
                    {"playStore" in project.links &&
                      project.links.playStore === "" &&
                      !project.confidential && (
                        <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2.5 text-xs font-semibold text-amber-400 backdrop-blur-md">
                          <Clock size={15} />
                          Play Store Review in Progress
                        </div>
                      )}

                    {/* Banner Confidencial / NDA */}
                    {project.confidential && (
                      <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2.5 text-xs font-semibold text-purple-300 backdrop-blur-md">
                        <Lock size={15} />
                        Protected under NDA (Recreated UI)
                      </div>
                    )}
                  </div>
                </div>

                {/* Image carousel ajustado con object-contain */}
                <div className="flex min-h-[430px] items-center justify-center p-5 sm:p-8 lg:min-h-full lg:p-10">
                  <div
                    className="group/carousel relative flex h-[460px] w-full cursor-grab touch-pan-y select-none items-center justify-center overflow-hidden rounded-[1.6rem] border border-white/10 bg-black/60 p-4 active:cursor-grabbing sm:h-[520px] lg:h-[580px]"
                    onMouseEnter={() => setIsImageHovered(true)}
                    onMouseLeave={() => setIsImageHovered(false)}
                    onPointerDown={handlePointerDown}
                    onPointerUp={handlePointerUp}
                    onPointerCancel={handlePointerCancel}
                  >
                    <img
                      key={`${project.title}-${imageIndex}`}
                      src={project.images[imageIndex]}
                      alt={`${project.title} preview ${imageIndex + 1}`}
                      draggable={false}
                      className="h-full w-full animate-[fadeIn_0.45s_ease-out] object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#09090B]/60 via-transparent to-transparent" />
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,245,212,0.05),_transparent_70%)]" />

                    {project.confidential && (
                      <div className="absolute left-5 top-5 rounded-full border border-purple-500/30 bg-black/70 px-4 py-1.5 text-xs text-purple-300 backdrop-blur-md">
                        Figma Concept UI
                      </div>
                    )}

                    {project.images.length > 1 && (
                      <>
                        <button
                          type="button"
                          aria-label="Previous image"
                          onPointerDown={(event) =>
                            event.stopPropagation()
                          }
                          onPointerUp={(event) =>
                            event.stopPropagation()
                          }
                          onClick={(event) => {
                            event.stopPropagation()
                            changeImage("previous")
                          }}
                          className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/45 text-white opacity-100 backdrop-blur-md transition hover:border-[#00F5D4]/40 hover:bg-[#00F5D4]/15 md:opacity-0 md:group-hover/carousel:opacity-100"
                        >
                          <ChevronLeft size={22} />
                        </button>

                        <button
                          type="button"
                          aria-label="Next image"
                          onPointerDown={(event) =>
                            event.stopPropagation()
                          }
                          onPointerUp={(event) =>
                            event.stopPropagation()
                          }
                          onClick={(event) => {
                            event.stopPropagation()
                            changeImage("next")
                          }}
                          className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/45 text-white opacity-100 backdrop-blur-md transition hover:border-[#00F5D4]/40 hover:bg-[#00F5D4]/15 md:opacity-0 md:group-hover/carousel:opacity-100"
                        >
                          <ChevronRight size={22} />
                        </button>
                      </>
                    )}

                    <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-black/45 px-4 py-3 backdrop-blur-md">
                      {project.images.map((_, index) => (
                        <button
                          key={index}
                          type="button"
                          aria-label={`Show image ${index + 1}`}
                          onPointerDown={(event) =>
                            event.stopPropagation()
                          }
                          onPointerUp={(event) =>
                            event.stopPropagation()
                          }
                          onClick={(event) => {
                            event.stopPropagation()
                            selectImage(index)
                          }}
                          className={`rounded-full transition-all duration-300 ${
                            imageIndex === index
                              ? "h-2.5 w-7 bg-white"
                              : "h-2.5 w-2.5 bg-zinc-600 hover:bg-zinc-400"
                          }`}
                        />
                      ))}
                    </div>

                    <div className="absolute bottom-5 right-5 hidden rounded-full border border-white/10 bg-black/45 px-3 py-2 text-xs text-zinc-300 backdrop-blur-md sm:block">
                      {String(imageIndex + 1).padStart(2, "0")} /{" "}
                      {String(project.images.length).padStart(2, "0")}
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Mobile project navigation */}
            <div className="mt-6 flex items-center justify-between xl:hidden">
              <button
                type="button"
                onClick={() => changeProject("previous")}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-zinc-300 transition hover:border-[#00F5D4]/40 hover:text-[#00F5D4]"
              >
                <ArrowLeft size={18} />
                Previous
              </button>

              <p className="text-sm text-zinc-500">
                {projectIndex + 1} / {projects.length}
              </p>

              <button
                type="button"
                onClick={() => changeProject("next")}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-zinc-300 transition hover:border-[#00F5D4]/40 hover:text-[#00F5D4]"
              >
                Next
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Project indicators */}
            <div className="mt-8 flex justify-center gap-2">
              {projects.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  aria-label={`Show project ${item.title}`}
                  onClick={() => {
                    setProjectIndex(index)
                    setImageIndex(0)
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    projectIndex === index
                      ? "w-9 bg-[#00F5D4]"
                      : "w-3 bg-zinc-700 hover:bg-zinc-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}