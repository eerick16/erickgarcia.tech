import { Reveal } from "../components/common/Reveal"

const experiences = [
  {
    year: "2025 — Present",
    title: "Full Stack Developer",
    place: "Integra Connective",
    logo: "/images/integra-logo.png",
    description:
      "Development of POS systems, e-commerce platforms, administrative dashboards and cross-platform mobile applications for real clients.",
    tags: ["POS", "E-commerce", "PHP", "jQuery", "AJAX", ".NET MAUI", "C#", "MySQL", "APIs"],
  },
  {
    year: "2023 — 2025",
    title: "TSU in Software Development",
    place: "Universidad Tecnológica de León",
    logo: "/images/utl-logo.png",
    description:
      "Associate Degree focused on multiplatform software development, databases, web technologies and mobile applications.",
    tags: ["Software Development", "Databases", "Web", "Mobile"],
  },
  {
    year: "2025 — 2027",
    title: "B.S. in Software Engineering",
    place: "Universidad Tecnológica de León",
    logo: "/images/utl-logo.png",
    description:
      "Currently pursuing a Bachelor's Degree in Software Engineering, focused on software architecture, development management and scalable systems.",
    tags: ["Engineering", "Architecture", "Software Management"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-[#09090B] px-6 py-24 text-white md:py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#00F5D4]">
            Experience
          </p>

          <h2 className="font-display max-w-4xl text-3xl font-black tracking-tight sm:text-4xl md:text-6xl">
            From academic foundations to production-ready systems.
          </h2>
        </Reveal>

        <div className="relative mt-14 md:mt-20">
          <div className="absolute left-6 top-0 h-full w-px bg-white/10 md:left-1/2" />

          <div className="space-y-12">
            {experiences.map((item, index) => {
              const isLeft = index % 2 === 0

              return (
                <Reveal
                  key={item.title}
                  delay={index * 0.1}
                  className={`relative grid gap-8 md:grid-cols-2 ${
                    isLeft ? "" : "md:[&>div:first-child]:col-start-2"
                  }`}
                >
                  <div
                    className={`relative ml-16 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur md:ml-0 ${
                      isLeft ? "md:mr-12" : "md:ml-12"
                    }`}
                  >
                    <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#00F5D4]/50 to-transparent" />
                    <div className="absolute -top-16 right-8 h-28 w-28 rounded-full bg-[#00F5D4]/10 blur-3xl" />

                    <div className="mb-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                      
                      <div>
                        <p className="text-sm text-zinc-500"><span className="font-semibold text-white">{item.year}</span></p>
                        <h3 className="text-2xl font-bold">{item.title}</h3>
                        <p className="text-zinc-400">{item.place}</p>
                      </div>

                      <div className="flex h-20 w-full items-center justify-center rounded-2xl border border-white/10 bg-black/30 px-5 sm:w-60">
                        <img
                          src={item.logo}
                          alt={`${item.place} logo`}
                          className="max-h-12 max-w-[220px] object-contain"
                        />
                      </div>

                    </div>

                    <p className="leading-8 text-zinc-400">
                      {item.description}
                    </p>

                    <div className="mt-6 flex flex-wrap justify-center gap-3">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#00F5D4]/50 to-transparent" />
                  <div className="absolute -top-16 right-8 h-28 w-28 rounded-full bg-[#00F5D4]/10 blur-3xl" />

                  <div className="absolute left-6 top-8 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-[#00F5D4] shadow-[0_0_24px_rgba(0,245,212,0.8)] md:left-1/2" />
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}