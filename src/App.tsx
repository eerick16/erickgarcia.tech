import { Navbar } from "./components/common/Navbar"
import { HeroSection } from "./sections/HeroSection"
import { AboutSection } from "./sections/AboutSection"
import { ExperienceSection } from "./sections/ExperienceSection"
import { ProjectsSection } from "./sections/ProjectsSection"
import { StackSection } from "./sections/StackSection"
import { PhilosophySection } from "./sections/PhilosophySection"
import { ContactSection } from "./sections/ContactSection"

function App() {
  return (
    <>
    
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <StackSection />
        <PhilosophySection />
        <ContactSection />
      </main>
    </>
  )
}

export default App