import { Hero } from "@/components/ui/hero-1"
import { TechLogos } from "@/components/ui/tech-logos"
import { Services } from "@/components/ui/services"
import { Process } from "@/components/ui/process"
import { Contact } from "@/components/ui/contact"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { Testimonials } from "@/components/ui/testimonials"
import { Faq } from "@/components/ui/faq"

function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero
        eyebrow=""
        title="Внедряем AI в ваш бизнес"
        subtitle="n8n-автоматизации, CRM-интеграции, чат-боты и AI-ассистенты. Наше главное оружие — интеграция искусственного интеллекта во все сферы вашей работы."
        ctaLabel="Обсудить проект"
        ctaHref="#contact"
      />
      <TechLogos />
      <Services />
      <Process />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
