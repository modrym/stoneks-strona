import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HeroCarousel from './components/HeroCarousel'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import GalleryPage from './components/GalleryPage'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

// Home page component
function HomePage(): JSX.Element {
  return (
    <>
      <Header />
      <HeroCarousel />
      <Hero />
      <About />
      <Portfolio />
      <ContactForm />
      <Footer />
    </>
  )
}

function App(): JSX.Element {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio/:categoryId" element={<GalleryPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
