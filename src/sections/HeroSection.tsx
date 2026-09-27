import { Download, Mail } from "lucide-react"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { Reveal } from "../components/common/Reveal"
import { useLanguage } from "../context/useLanguage"

export function HeroSection() {
  const { language } = useLanguage()

  const content = {
    es: {
      roleTag: "Desarrollador Full Stack · Desarrollador Móvil · Enfoque UI/UX",
      taglineMain: "Construyendo productos digitales que ",
      taglineHighlight: "funcionan e impactan.",
      description: (
        <>
          Diseño y desarrollo{" "}
          <span className="font-semibold text-white">sistemas POS</span>,{" "}
          <span className="font-semibold text-white">plataformas e-commerce</span>,{" "}
          <span className="font-semibold text-white">dashboards administrativos</span>{" "}
          y{" "}
          <span className="font-semibold text-white">aplicaciones móviles multiplataforma</span>{" "}
          con interfaces limpias, lógica escalable y un{" "}
          <span className="font-semibold text-white">impacto real en los negocios</span>.
        </>
      ),
      viewProjects: "Ver Proyectos",
      downloadCv: "Descargar CV",
      contactMe: "Contáctame",
      stats: [
        { value: "1+", label: "Años creando software en producción" },
        { value: "10+", label: "Sistemas empresariales entregados" },
        { value: "+4", label: "Apps publicadas en Android e iOS" },
        { value: "Full Stack", label: "Web, Backend y Móvil" },
      ],
    },
    en: {
      roleTag: "Full Stack Developer · Mobile Developer · UI/UX Focused",
      taglineMain: "Building digital products that ",
      taglineHighlight: "work beautifully.",
      description: (
        <>
          I design and develop{" "}
          <span className="font-semibold text-white">POS systems</span>,{" "}
          <span className="font-semibold text-white">e-commerce platforms</span>,{" "}
          <span className="font-semibold text-white">administrative dashboards</span>{" "}
          and{" "}
          <span className="font-semibold text-white">cross-platform mobile apps</span>{" "}
          with clean interfaces, scalable logic and{" "}
          <span className="font-semibold text-white">real business impact</span>.
        </>
      ),
      viewProjects: "View Projects",
      downloadCv: "Download CV",
      contactMe: "Contact Me",
      stats: [
        { value: "1+", label: "Years Building Production Software" },
        { value: "10+", label: "Business Systems Delivered" },
        { value: "+4", label: "Android & iOS Published Apps" },
        { value: "Full Stack", label: "Web, Backend & Mobile" },
      ],
    },
  }

  const t = content[language]

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#09090B] px-6 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,245,212,0.16),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.18),_transparent_35%)]" />
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#00F5D4]/10 blur-[140px]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-2 pb-16 pt-32 text-center sm:pb-20 md:pt-28 lg:pb-24">
        <Reveal delay={0} className="mb-5 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs text-zinc-300 backdrop-blur sm:text-sm">
          {t.roleTag}
        </Reveal>

        <Reveal delay={0.05} className="mb-6">
          <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full border border-white/10 bg-white/[0.04] p-1 shadow-[0_0_60px_rgba(0,245,212,0.18)] backdrop-blur sm:h-32 sm:w-32 md:h-36 md:w-36">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00F5D4]/30 via-transparent to-[#8B5CF6]/30" />
            <img
              src="/images/erick-profile.png"
              alt="Erick Alvarado García"
              className="relative h-full w-full rounded-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-2">
          <h1 className="font-display text-4xl font-black tracking-tight sm:text-6xl md:text-8xl lg:text-9xl">
            Erick Alvarado
          </h1>
          <h1 className="font-display bg-gradient-to-r from-[#00F5D4] via-white to-[#8B5CF6] bg-clip-text text-4xl font-black tracking-tight text-transparent sm:text-6xl md:text-8xl lg:text-9xl">
            García
          </h1>
        </Reveal>

        <Reveal className="font-display mt-6 max-w-5xl text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl md:mt-8 md:text-5xl">
          {t.taglineMain}
          <span className="text-[#00F5D4]">
            {t.taglineHighlight}
          </span>
        </Reveal>

        <Reveal className="mt-6 max-w-3xl text-base leading-7 text-zinc-400 sm:text-lg md:mt-8 md:text-xl md:leading-8">
          {t.description}
        </Reveal>

        <Reveal delay={0.4} className="mt-8 flex w-full max-w-sm flex-col gap-4 sm:max-w-none sm:flex-row sm:justify-center md:mt-10">
          <a
            href="#projects"
            className="w-full rounded-full bg-white px-7 py-3 font-semibold text-black transition hover:scale-105 hover:bg-zinc-200 sm:w-auto"
          >
            {t.viewProjects}
          </a>

          <a
            href="/Erick-Alvarado-Garcia-CV.pdf"
            download
            className="flex w-full items-center justify-center gap-2 rounded-full border border-[#00F5D4]/30 bg-[#00F5D4]/10 px-7 py-3 font-semibold text-[#00F5D4] backdrop-blur transition hover:scale-105 hover:bg-[#00F5D4]/20 sm:w-auto"
          >
            <Download size={18} />
            {t.downloadCv}
          </a>

          <a
            href="#contact"
            className="w-full rounded-full border border-white/15 bg-white/5 px-7 py-3 font-semibold text-white backdrop-blur transition hover:scale-105 hover:bg-white/10 sm:w-auto"
          >
            {t.contactMe}
          </a>
        </Reveal>

        <Reveal
          delay={0.5}
          className="mt-10 grid w-full max-w-4xl grid-cols-2 gap-3 md:grid-cols-4"
        >
          {t.stats.map((stat, index) => (
            <div
              key={stat.label}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 backdrop-blur"
              style={{
                animation: `floatCard 4s ease-in-out ${index * 0.35}s infinite`,
              }}
            >
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#00F5D4]/60 to-transparent" />
              <div className="absolute -top-14 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-[#00F5D4]/10 blur-2xl" />

              <p className="relative bg-gradient-to-r from-[#00F5D4] to-[#8B5CF6] bg-clip-text text-2xl font-black text-transparent md:text-3xl">
                {stat.value}
              </p>

              <p className="relative mt-1 text-xs leading-5 text-zinc-400 md:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-8 flex items-center gap-5 text-zinc-400">
          <a href="mailto:erickgc0125@gmail.com" className="transition hover:text-white">
            <Mail size={22} />
          </a>
          <a href="https://github.com/eerick16" className="transition hover:text-white" target="_blank" rel="noreferrer">
            <FaGithub size={22} />
          </a>
          <a href="https://www.linkedin.com/in/erick-alvarado-garcía-060678406/" className="transition hover:text-white" target="_blank" rel="noreferrer">
            <FaLinkedinIn size={22} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}