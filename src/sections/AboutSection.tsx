import {
  BookOpen,
  Dumbbell,
  Gamepad2,
  Gauge,
  Layers3,
  Music2,
  Users,
  Workflow,
  Award,
} from "lucide-react"
import { Reveal } from "../components/common/Reveal"
import { useState } from "react"
import { CertificationsModal } from "../components/certifications/CertificationsModal"
import { useLanguage } from "../context/useLanguage"

export function AboutSection() {
  const { language } = useLanguage()
  const [isCertificationsOpen, setIsCertificationsOpen] = useState(false)

  const content = {
    es: {
      badge: "SOBRE MÍ",
      title: "El desarrollador detrás de los sistemas.",
      subtitle:
        "Desarrollador full stack enfocado en crear software limpio, de alto rendimiento y enfocado en resolver problemas operacionales reales.",
      bioP1: (
        <>
          Soy{" "}
          <span className="font-semibold text-white">
            Erick Alvarado García
          </span>
          , desarrollador{" "}
          <span className="font-semibold text-white">
            Full Stack
          </span>{" "}
          actualmente laborando en{" "}
          <span className="font-semibold text-white">
            Integra Connective
          </span>
          , donde creo{" "}
          <span className="font-semibold text-white">
            sistemas POS
          </span>
          ,{" "}
          <span className="font-semibold text-white">
            plataformas administrativas
          </span>
          ,{" "}
          <span className="font-semibold text-white">
            soluciones e-commerce
          </span>{" "}
          y{" "}
          <span className="font-semibold text-white">
            aplicaciones móviles multiplataforma
          </span>{" "}
          para{" "}
          <span className="font-semibold text-white">
            clientes reales
          </span>
          .
        </>
      ),
      bioP2: (
        <>
          Mi trabajo abarca desde el{" "}
          <span className="font-semibold text-white">
            diseño de interfaces
          </span>{" "}
          y la creación de{" "}
          <span className="font-semibold text-white">
            experiencias frontend
          </span>{" "}
          hasta el desarrollo de{" "}
          <span className="font-semibold text-white">
            APIs
          </span>
          ,{" "}
          <span className="font-semibold text-white">
            bases de datos
          </span>
          ,{" "}
          <span className="font-semibold text-white">
            integraciones
          </span>{" "}
          y{" "}
          <span className="font-semibold text-white">
            soluciones backend escalables
          </span>
          .
        </>
      ),
      bioP3: (
        <>
          Actualmente cursando la{" "}
          <span className="font-semibold text-[#00F5D4]">
            Ingeniería en Desarrollo y Gestión de Software
          </span>{" "}
          mientras expando mi experiencia en{" "}
          <span className="font-semibold text-white">
            desarrollo móvil
          </span>
          ,{" "}
          <span className="font-semibold text-white">
            integraciones cloud
          </span>{" "}
          y{" "}
          <span className="font-semibold text-white">
            arquitectura de software
          </span>
          .
        </>
      ),
      certTitle: "Certificaciones UX",
      certDesc:
        "Certificaciones de Coursera enfocadas en fundamentos de UX, proceso de diseño, wireframes y prototipos de baja fidelidad.",
      certBtn: "Ver certificados →",
      principlesTitle: "Cómo construyo",
      principles: [
        { title: "Rendimiento", icon: Gauge },
        { title: "Experiencia de Usuario", icon: Users },
        { title: "Escalabilidad", icon: Layers3 },
        { title: "Arquitectura Limpia", icon: Workflow },
      ],
      interestsTitle: "Más allá del código",
      interests: [
        { title: "Libros", icon: BookOpen, items: ["1984", "Rebelión en la granja", "Fahrenheit 451"] },
        { title: "Fitness", icon: Dumbbell, items: ["Gimnasio", "Running"] },
        { title: "Música", icon: Music2, items: ["Rap", "Rock"] },
        { title: "Gaming", icon: Gamepad2, items: ["Sistemas", "Historia"] },
      ],
    },
    en: {
      badge: "ABOUT",
      title: "The developer behind the systems.",
      subtitle:
        "Full stack developer focused on building software that feels clean, performs well and solves real operational problems.",
      bioP1: (
        <>
          I'm{" "}
          <span className="font-semibold text-white">
            Erick Alvarado García
          </span>
          , a{" "}
          <span className="font-semibold text-white">
            Full Stack Developer
          </span>{" "}
          currently working at{" "}
          <span className="font-semibold text-white">
            Integra Connective
          </span>
          , where I develop{" "}
          <span className="font-semibold text-white">
            POS systems
          </span>
          ,{" "}
          <span className="font-semibold text-white">
            administrative platforms
          </span>
          ,{" "}
          <span className="font-semibold text-white">
            e-commerce solutions
          </span>{" "}
          and{" "}
          <span className="font-semibold text-white">
            cross-platform mobile applications
          </span>{" "}
          for{" "}
          <span className="font-semibold text-white">
            real clients
          </span>
          .
        </>
      ),
      bioP2: (
        <>
          My work ranges from{" "}
          <span className="font-semibold text-white">
            designing interfaces
          </span>{" "}
          and building{" "}
          <span className="font-semibold text-white">
            frontend experiences
          </span>{" "}
          to developing{" "}
          <span className="font-semibold text-white">
            APIs
          </span>
          ,{" "}
          <span className="font-semibold text-white">
            databases
          </span>
          ,{" "}
          <span className="font-semibold text-white">
            integrations
          </span>{" "}
          and{" "}
          <span className="font-semibold text-white">
            scalable backend solutions
          </span>
          .
        </>
      ),
      bioP3: (
        <>
          Currently pursuing a{" "}
          <span className="font-semibold text-[#00F5D4]">
            Bachelor's Degree in Software Engineering
          </span>{" "}
          while expanding my experience in{" "}
          <span className="font-semibold text-white">
            mobile development
          </span>
          ,{" "}
          <span className="font-semibold text-white">
            cloud integrations
          </span>{" "}
          and{" "}
          <span className="font-semibold text-white">
            software architecture
          </span>
          .
        </>
      ),
      certTitle: "UX Certifications",
      certDesc:
        "Coursera certifications focused on UX foundations, design process, wireframes and low-fidelity prototypes.",
      certBtn: "View certificates →",
      principlesTitle: "How I build",
      principles: [
        { title: "Performance", icon: Gauge },
        { title: "User Experience", icon: Users },
        { title: "Scalability", icon: Layers3 },
        { title: "Clean Architecture", icon: Workflow },
      ],
      interestsTitle: "Beyond code",
      interests: [
        { title: "Books", icon: BookOpen, items: ["1984", "Animal Farm", "Fahrenheit 451"] },
        { title: "Fitness", icon: Dumbbell, items: ["Gym", "Running"] },
        { title: "Music", icon: Music2, items: ["Rap", "Rock"] },
        { title: "Gaming", icon: Gamepad2, items: ["Systems", "Story"] },
      ],
    },
  }

  const t = content[language]

  return (
    <section id="about" className="bg-[#09090B] px-6 py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#00F5D4]">
              {t.badge}
            </p>

            <h2 className="font-display max-w-4xl text-3xl font-black tracking-tight sm:text-4xl md:text-6xl">
              {t.title}
            </h2>
          </div>

          <p className="max-w-md text-zinc-400 md:text-right">
            {t.subtitle}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] md:mt-20">
          <Reveal direction="right" className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur md:p-10">
            <p className="text-lg leading-9 text-zinc-400">
              {t.bioP1}
            </p>

            <p className="mt-6 text-lg leading-9 text-zinc-400">
              {t.bioP2}
            </p>

            <p className="mt-6 text-lg leading-9 text-zinc-400">
              {t.bioP3}
            </p>

            <button
              type="button"
              onClick={() => setIsCertificationsOpen(true)}
              className="group mt-8 w-full rounded-[2rem] border border-white/10 bg-black/30 p-6 text-left backdrop-blur transition hover:-translate-y-1 hover:border-[#00F5D4]/40 hover:bg-white/[0.07]"
            >
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#00F5D4]/10 text-[#00F5D4]">
                  <Award size={28} />
                </div>

                <div>
                  <h3 className="font-display text-2xl font-bold">
                    {t.certTitle}
                  </h3>

                  <p className="mt-3 leading-7 text-zinc-400">
                    {t.certDesc}
                  </p>

                  <p className="mt-4 text-sm font-semibold text-[#00F5D4]">
                    {t.certBtn}
                  </p>
                </div>
              </div>
            </button>
          </Reveal>

          <Reveal direction="left" className="grid gap-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur">
              <h3 className="font-display text-2xl font-bold">
                {t.principlesTitle}
              </h3>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {t.principles.map((principle) => {
                  const Icon = principle.icon

                  return (
                    <div
                      key={principle.title}
                      className="rounded-2xl border border-white/10 bg-black/30 p-4"
                    >
                      <Icon className="mb-3 text-[#00F5D4]" size={22} />
                      <p className="text-sm font-semibold text-zinc-200">
                        {principle.title}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur">
              <h3 className="font-display text-2xl font-bold">
                {t.interestsTitle}
              </h3>

              <div className="mt-6 grid gap-3">
                {t.interests.map((interest) => {
                  const Icon = interest.icon

                  return (
                    <div
                      key={interest.title}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/30 p-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00F5D4]/10 text-[#00F5D4]">
                        <Icon size={20} />
                      </div>

                      <div>
                        <p className="font-semibold text-zinc-200">
                          {interest.title}
                        </p>
                        <p className="text-sm text-zinc-500">
                          {interest.items.join(" · ")}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <CertificationsModal
        isOpen={isCertificationsOpen}
        onClose={() => setIsCertificationsOpen(false)}
      />
    </section>
  )
}