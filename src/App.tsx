import { Navbar } from "./components/common/Navbar"
import { useLenis } from "./hooks/useLenis"
import { HeroSection } from "./sections/HeroSection"
import { AboutSection } from "./sections/AboutSection"
import { ExperienceSection } from "./sections/ExperienceSection"
import { ProjectsSection } from "./sections/ProjectsSection"
import { StackSection } from "./sections/StackSection"
import { ContactSection } from "./sections/ContactSection"

function App() {
  useLenis()

  return (
    <>
    
      <Navbar />

      <main>
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <StackSection />
        <AboutSection />
        <ContactSection />
      </main>
    </>
  )
}

export default App