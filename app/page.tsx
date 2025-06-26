import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero";
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  //setup ໂຄງສ້າງແບບ1 page website ສໍາລັບບໍລິສັດ ແລະ ບໍລິການ
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
