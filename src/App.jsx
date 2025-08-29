import Header from './components/Header'
import HeroCarousel from './components/HeroCarousel'
import Hero from './components/Hero'
import About from './components/About'
import ProjectsCarousel from './components/ProjectsCarousel'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroCarousel />
      <Hero />
      <About />
      <ProjectsCarousel />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
