import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HeroCarousel from './components/HeroCarousel'
import Hero from './components/Hero'
import AboutPage from './components/AboutPage'
import PortfolioPage from './components/PortfolioPage'
import GalleryPage from './components/GalleryPage'
import ContactPage from './components/ContactPage'
import NotFoundPage from './components/NotFoundPage'
import Footer from './components/Footer'
import { PageWrapper } from './components/ui'

// Home page component
function HomePage(): JSX.Element {
  return (
    <>
      <Header />
      <PageWrapper className="!pt-0">
        <HeroCarousel />
        <Hero />
      </PageWrapper>
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
          <Route path="/o-nas" element={<AboutPage />} />
          <Route path="/realizacje" element={<PortfolioPage />} />
          <Route path="/realizacje/:categoryId" element={<GalleryPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
