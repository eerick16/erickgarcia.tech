import { Navbar } from "./components/common/Navbar"
import { useLenis } from "./hooks/useLenis"
import { HeroSection } from "./sections/HeroSection"
import { AboutSection } from "./sections/AboutSection"
import { ExperienceSection } from "./sections/ExperienceSection"
import { ImpactSection } from "./sections/ImpactSection"
import { ProjectsSection } from "./sections/ProjectsSection"
import { StackSection } from "./sections/StackSection"
import { PhilosophySection } from "./sections/PhilosophySection"
import { BeyondCodeSection } from "./sections/BeyondCodeSection"
import { ContactSection } from "./sections/ContactSection"

function App() {
  useLenis()

  return (
    <>
    
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ImpactSection />
        <ProjectsSection />
        <StackSection />
        <PhilosophySection />
        <BeyondCodeSection />
        <ContactSection />
      </main>
    </>
  )
}

export default App