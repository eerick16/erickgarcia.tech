import { Reveal } from "../components/common/Reveal"
import { Download, Mail, MapPin, Send } from "lucide-react"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { useLanguage } from "../context/useLanguage"

export function ContactSection() {
  const { language } = useLanguage()

  const content = {
    es: {
      badge: "CONTACTO",
      title: "Construyamos algo que realmente funcione.",
      description: (
        <>
          Abierto a{" "}
          <span className="font-semibold text-white">
            oportunidades en ingeniería de software
          </span>{" "}
          donde pueda contribuir en{" "}
          <span className="font-semibold text-white">
            productos reales
          </span>
          , colaborar con{" "}
          <span className="font-semibold text-white">
            equipos de alto rendimiento
          </span>{" "}
          y continuar creciendo como{" "}
          <span className="font-semibold text-[#00F5D4]">
            Desarrollador Full Stack
          </span>
          .
        </>
      ),
      sendEmail: "Enviar correo",
      downloadCv: "Descargar CV",
      viewProjects: "Ver proyectos",
      emailLabel: "Correo electrónico",
      githubLabel: "GitHub",
      linkedinLabel: "LinkedIn",
      locationLabel: "Ubicación",
      locationValue: "Silao de la Victoria, Guanajuato, México",
      footerCopyright:
        "© 2026 Erick Alvarado García. Construido con React, TypeScript y Tailwind CSS.",
      backToTop: "Volver arriba",
    },
    en: {
      badge: "CONTACT",
      title: "Let's build something that actually works.",
      description: (
        <>
          Open to{" "}
          <span className="font-semibold text-white">
            software engineering opportunities
          </span>{" "}
          where I can contribute to{" "}
          <span className="font-semibold text-white">
            real products
          </span>
          , collaborate with{" "}
          <span className="font-semibold text-white">
            high-performing teams
          </span>{" "}
          and continue growing as a{" "}
          <span className="font-semibold text-[#00F5D4]">
            Full Stack Developer
          </span>
          .
        </>
      ),
      sendEmail: "Send Email",
      downloadCv: "Download CV",
      viewProjects: "View Projects",
      emailLabel: "Email",
      githubLabel: "GitHub",
      linkedinLabel: "LinkedIn",
      locationLabel: "Location",
      locationValue: "Silao de la Victoria, Guanajuato, Mexico",
      footerCopyright:
        "© 2026 Erick Alvarado García. Built with React, TypeScript and Tailwind CSS.",
      backToTop: "Back to top",
    },
  }

  const t = content[language]

  return (
    <section id="contact" className="bg-[#09090B] px-6 py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur md:p-14">
          <div className="absolute right-0 top-0 h-80 w-80 translate-x-1/3 -translate-y-1/3 rounded-full bg-[#00F5D4]/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-80 w-80 -translate-x-1/3 translate-y-1/3 rounded-full bg-[#8B5CF6]/10 blur-3xl" />

          <div className="relative z-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <Reveal direction="right">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#00F5D4]">
                {t.badge}
              </p>

              <h2 className="font-display max-w-4xl text-3xl font-black tracking-tight sm:text-4xl md:text-6xl">
                {t.title}
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-9 text-zinc-400">
                {t.description}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="mailto:erickgc0125@gmail.com"
                  className="rounded-full bg-white px-7 py-3 font-semibold text-black transition hover:scale-105 hover:bg-zinc-200"
                >
                  {t.sendEmail}
                </a>

                <a
                  href="/Erick-Alvarado-Garcia-CV.pdf"
                  download
                  className="flex items-center gap-2 rounded-full border border-[#00F5D4]/30 bg-[#00F5D4]/10 px-7 py-3 font-semibold text-[#00F5D4] backdrop-blur transition hover:scale-105 hover:bg-[#00F5D4]/20"
                >
                  <Download size={18} />
                  {t.downloadCv}
                </a>

                <a
                  href="#projects"
                  className="rounded-full border border-white/15 bg-white/5 px-7 py-3 font-semibold text-white backdrop-blur transition hover:scale-105 hover:bg-white/10"
                >
                  {t.viewProjects}
                </a>
              </div>
            </Reveal>

            <Reveal direction="left" className="grid gap-5">
              <a
                href="mailto:erickgc0125@gmail.com"
                className="group flex items-center gap-5 rounded-3xl border border-white/10 bg-black/30 p-5 transition hover:border-[#00F5D4]/40 hover:bg-white/[0.06]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00F5D4]/10 text-[#00F5D4]">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-zinc-500">{t.emailLabel}</p>
                  <p className="font-semibold text-zinc-200 group-hover:text-white">
                    erickgc0125@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/eerick16"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-5 rounded-3xl border border-white/10 bg-black/30 p-5 transition hover:border-[#00F5D4]/40 hover:bg-white/[0.06]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00F5D4]/10 text-[#00F5D4]">
                  <FaGithub size={24} />
                </div>
                <div>
                  <p className="text-sm text-zinc-500">{t.githubLabel}</p>
                  <p className="font-semibold text-zinc-200 group-hover:text-white">
                    github.com/eerick16
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/erick-alvarado-garcía-060678406/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-5 rounded-3xl border border-white/10 bg-black/30 p-5 transition hover:border-[#00F5D4]/40 hover:bg-white/[0.06]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00F5D4]/10 text-[#00F5D4]">
                  <FaLinkedinIn size={24} />
                </div>
                <div>
                  <p className="text-sm text-zinc-500">{t.linkedinLabel}</p>
                  <p className="font-semibold text-zinc-200 group-hover:text-white">
                    linkedin.com/in/erick-alvarado-garcía
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-5 rounded-3xl border border-white/10 bg-black/30 p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00F5D4]/10 text-[#00F5D4]">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-zinc-500">{t.locationLabel}</p>
                  <p className="font-semibold text-zinc-200">
                    {t.locationValue}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <footer className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-zinc-500 md:flex-row">
          <p>{t.footerCopyright}</p>

          <a href="#" className="flex items-center gap-2 transition hover:text-white">
            {t.backToTop} <Send size={16} />
          </a>
        </footer>
      </div>
    </section>
  )
}