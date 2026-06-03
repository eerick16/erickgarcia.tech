import { Mail } from "lucide-react"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { motion } from "motion/react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#09090B] px-6 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,245,212,0.16),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.18),_transparent_35%)]" />

      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#00F5D4]/10 blur-[140px]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-2 pb-24 pt-36 text-center md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-5 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs text-zinc-300 backdrop-blur sm:text-sm"
        >
          Full Stack Developer · Mobile Developer · UI/UX Focused
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-2"
        >
            <h1 className="font-display text-5xl font-black tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
                Erick Alvarado
            </h1>

            <h1 className="font-display bg-gradient-to-r from-[#00F5D4] via-white to-[#8B5CF6] bg-clip-text text-5xl font-black tracking-tight text-transparent sm:text-7xl md:text-8xl lg:text-9xl">
                García
            </h1>
        </motion.div>

        <motion.h2
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-display mt-8 max-w-5xl text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl md:text-5xl"
        >
            Building digital products that{" "}
            <span className="text-[#00F5D4]">
                work beautifully.
            </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400 md:text-xl"
        >
          I design and develop POS systems, e-commerce platforms,
          administrative dashboards and cross-platform mobile apps with
          clean interfaces, scalable logic and real business impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="rounded-full bg-white px-7 py-3 font-semibold text-black transition hover:scale-105 hover:bg-zinc-200"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-full border border-white/15 bg-white/5 px-7 py-3 font-semibold text-white backdrop-blur transition hover:scale-105 hover:bg-white/10"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-10 flex items-center gap-5 text-zinc-400"
        >
          <a href="mailto:erickgc0125@gmail.com" className="transition hover:text-white">
            <Mail size={22} />
          </a>
          <a href="#" className="transition hover:text-white">
            <FaGithub size={22} />
          </a>
          <a href="#" className="transition hover:text-white">
            <FaLinkedinIn size={22} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}