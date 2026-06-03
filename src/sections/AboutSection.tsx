import { Reveal } from "../components/common/Reveal"
import { RevealCard } from "../components/common/RevealCard"

export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[#09090B] px-6 py-32 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <Reveal>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#00F5D4]">
            About
          </p>

          <h2 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            Building software that solves real business problems.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">

          <Reveal direction="right">
            <p className="text-lg leading-9 text-zinc-400">
              I'm Erick Alvarado García, a Full Stack Developer currently
              working at Integra Connective, where I develop POS systems,
              administrative platforms, e-commerce solutions and
              cross-platform mobile applications for real clients.
            </p>

            <p className="mt-8 text-lg leading-9 text-zinc-400">
              My work ranges from designing interfaces and building
              frontend experiences to developing APIs, databases,
              integrations and scalable backend solutions.
            </p>

            <p className="mt-8 text-lg leading-9 text-zinc-400">
              Currently pursuing a Bachelor's Degree in Software
              Engineering while continuing to expand my experience in
              mobile development, cloud integrations and software
              architecture.
            </p>
          </Reveal>

          <Reveal direction="left" className="grid gap-6">
            <RevealCard className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#00F5D4]/50 to-transparent" />
              <h3 className="text-xl font-bold">Experience</h3>
              <p className="mt-4 text-zinc-400">
                1+ year building production-ready web and mobile applications.
              </p>
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#00F5D4]/60 to-transparent" />
              <div className="absolute -top-20 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-[#00F5D4]/10 blur-3xl" />
            </RevealCard>

            <RevealCard
              delay={0.08}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
            >
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#00F5D4]/50 to-transparent" />
              <h3 className="text-xl font-bold">Education</h3>
              <p className="mt-4 text-zinc-400">
                Software Engineering · Universidad Tecnológica de León.
              </p>
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#00F5D4]/60 to-transparent" />
              <div className="absolute -top-20 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-[#00F5D4]/10 blur-3xl" />
            </RevealCard>

            <RevealCard
              delay={0.16}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
            >
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#00F5D4]/50 to-transparent" />
              <h3 className="text-xl font-bold">Languages</h3>
              <p className="mt-4 text-zinc-400">
                Spanish (Native) · English (TOEFL C1)
              </p>
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#00F5D4]/60 to-transparent" />
              <div className="absolute -top-20 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-[#00F5D4]/10 blur-3xl" />
            </RevealCard>
          </Reveal>

        </div>
      </div>
    </section>
  )
}