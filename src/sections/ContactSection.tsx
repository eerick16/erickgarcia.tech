import { motion } from "motion/react"
import { Mail, MapPin, Send } from "lucide-react"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"

export function ContactSection() {
  return (
    <section id="contact" className="bg-[#09090B] px-6 py-32 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur md:p-14">
          <div className="absolute right-0 top-0 h-80 w-80 translate-x-1/3 -translate-y-1/3 rounded-full bg-[#00F5D4]/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-80 w-80 -translate-x-1/3 translate-y-1/3 rounded-full bg-[#8B5CF6]/10 blur-3xl" />

          <div className="relative z-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#00F5D4]">
                Contact
              </p>

              <h2 className="max-w-3xl text-4xl font-black tracking-tight md:text-6xl">
                Let&apos;s build something that actually works.
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-9 text-zinc-400">
                Open to software development opportunities, freelance projects,
                collaborations and systems that need both strong logic and a clean
                user experience.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="mailto:erickgc0125@gmail.com"
                  className="rounded-full bg-white px-7 py-3 font-semibold text-black transition hover:scale-105 hover:bg-zinc-200"
                >
                  Send Email
                </a>

                <a
                  href="#projects"
                  className="rounded-full border border-white/15 bg-white/5 px-7 py-3 font-semibold text-white backdrop-blur transition hover:scale-105 hover:bg-white/10"
                >
                  View Projects
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid gap-5"
            >
              <a
                href="mailto:erickgc0125@gmail.com"
                className="group flex items-center gap-5 rounded-3xl border border-white/10 bg-black/30 p-5 transition hover:border-[#00F5D4]/40 hover:bg-white/[0.06]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00F5D4]/10 text-[#00F5D4]">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Email</p>
                  <p className="font-semibold text-zinc-200 group-hover:text-white">
                    erickgc0125@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="#"
                className="group flex items-center gap-5 rounded-3xl border border-white/10 bg-black/30 p-5 transition hover:border-[#00F5D4]/40 hover:bg-white/[0.06]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00F5D4]/10 text-[#00F5D4]">
                  <FaGithub size={24} />
                </div>
                <div>
                  <p className="text-sm text-zinc-500">GitHub</p>
                  <p className="font-semibold text-zinc-200 group-hover:text-white">
                    github.com/IDGS-801-23001571
                  </p>
                </div>
              </a>

              <a
                href="#"
                className="group flex items-center gap-5 rounded-3xl border border-white/10 bg-black/30 p-5 transition hover:border-[#00F5D4]/40 hover:bg-white/[0.06]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00F5D4]/10 text-[#00F5D4]">
                  <FaLinkedinIn size={24} />
                </div>
                <div>
                  <p className="text-sm text-zinc-500">LinkedIn</p>
                  <p className="font-semibold text-zinc-200 group-hover:text-white">
                    Add LinkedIn profile URL
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-5 rounded-3xl border border-white/10 bg-black/30 p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00F5D4]/10 text-[#00F5D4]">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Location</p>
                  <p className="font-semibold text-zinc-200">
                    Silao de la Victoria, Guanajuato, Mexico
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <footer className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-zinc-500 md:flex-row">
          <p>
            © 2026 Erick Alvarado García. Built with React, TypeScript and Tailwind CSS.
          </p>

          <a href="#" className="flex items-center gap-2 transition hover:text-white">
            Back to top <Send size={16} />
          </a>
        </footer>
      </div>
    </section>
  )
}