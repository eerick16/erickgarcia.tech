import { BookOpen, Dumbbell, Gamepad2, Music2, Rocket } from "lucide-react"
import { Reveal } from "../components/common/Reveal"
import { RevealCard } from "../components/common/RevealCard"

const interests = [
  {
    title: "Books",
    icon: BookOpen,
    description:
      "I enjoy dystopian fiction, social criticism and stories that question systems, power and human behavior.",
    items: ["1984", "Animal Farm", "Fahrenheit 451", "Brave New World", "The Man In The High Castle", "The Handmaid’s Tale"],
  },
  {
    title: "Fitness",
    icon: Dumbbell,
    description:
      "Training keeps me disciplined, focused and consistent beyond software development.",
    items: ["Gym", "Running", "Discipline", "Consistency"],
  },
  {
    title: "Music",
    icon: Music2,
    description:
      "Rap and rock are part of my daily rhythm, whether I’m working, training or thinking through ideas.",
    items: ["Rap", "Rock", "English", "Spanish"],
  },
  {
    title: "Gaming",
    icon: Gamepad2,
    description:
      "I like games as interactive systems: mechanics, progression, feedback and experience design.",
    items: ["Story", "Systems", "Strategy", "Immersion"],
  },
]

export function BeyondCodeSection() {
  return (
    <section id="beyond-code" className="bg-[#09090B] px-6 py-32 text-white">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#00F5D4]">
              Beyond Code
            </p>

            <h2 className="font-display max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
              The things that shape how I think, build and create.
            </h2>
          </div>

          <p className="max-w-md text-zinc-400 md:text-right">
            Software is technical, but creativity also comes from the books I
            read, the music I listen to, the systems I study and the habits I
            build outside the screen.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {interests.map((interest, index) => {
            const Icon = interest.icon

            return (
              <RevealCard
                key={interest.title}
                delay={index * 0.08}
                className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur"
              >
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#00F5D4]/50 to-transparent" />
                <div className="absolute -top-16 right-8 h-28 w-28 rounded-full bg-[#00F5D4]/10 blur-3xl" />

                <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00F5D4]/10 text-[#00F5D4]">
                  <Icon size={28} />
                </div>

                <h3 className="relative text-2xl font-bold">
                  {interest.title}
                </h3>

                <p className="relative mt-4 min-h-[112px] leading-7 text-zinc-400">
                  {interest.description}
                </p>

                <div className="relative mt-6 flex flex-wrap gap-2">
                  {interest.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-sm text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </RevealCard>
            )
          })}
        </div>

        <Reveal
          delay={0.2}
          className="mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur md:p-10"
        >
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8B5CF6]/10 text-[#8B5CF6]">
                <Rocket size={28} />
              </div>

              <h3 className="font-display text-3xl font-bold">
                Creative thinking, technical execution.
              </h3>

              <p className="mt-4 max-w-3xl leading-8 text-zinc-400">
                I like building things that are not only functional, but also
                thoughtful, polished and memorable. For me, software is where
                logic, design and creativity meet.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-5 text-sm text-zinc-400">
              <p className="text-[#00F5D4]">Current mindset</p>
              <p className="mt-2 text-lg font-semibold text-white">
                Keep learning. Build better. Stay curious.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}