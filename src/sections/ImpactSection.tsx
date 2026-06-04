import { Reveal } from "../components/common/Reveal"
import { RevealCard } from "../components/common/RevealCard"

const stats = [
  {
    value: "1+",
    label: "Years Building Production Software",
  },
  {
    value: "10+",
    label: "Business Systems Delivered",
  },
  {
    value: "+4",
    label: "Android & iOS Published Applications",
  },
  {
    value: "Full Stack",
    label: "Frontend, Backend, Web & Mobile",
  },
]

export function ImpactSection() {
  return (
    <section
      id="impact"
      className="bg-[#09090B] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#00F5D4]">
                Impact
            </p>

            <h2 className="mx-auto max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
                Building software that creates measurable value.
            </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <RevealCard
                key={stat.label}
                delay={index * 0.1}
                className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur"
            >
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#00F5D4]/60 to-transparent" />
                <div className="absolute -top-20 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-[#00F5D4]/10 blur-3xl" />

                <div className="relative bg-gradient-to-r from-[#00F5D4] to-[#8B5CF6] bg-clip-text text-5xl font-black text-transparent">
                    {stat.value}
                </div>

                <p className="relative mt-4 text-zinc-400">
                    {stat.label}
                </p>

                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#00F5D4]/60 to-transparent" />
                <div className="absolute -top-20 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-[#00F5D4]/10 blur-3xl" />
            </RevealCard>
          ))}
        </div>
      </div>
    </section>
  )
}