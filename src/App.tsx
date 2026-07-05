import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HeroCarousel from './components/HeroCarousel'
import Hero from './components/Hero'
import AboutPage from './components/AboutPage'
import PortfolioPage from './components/PortfolioPage'
import GalleryPage from './components/GalleryPage'
import MaterialsPage from './components/MaterialsPage'
import ContactPage from './components/ContactPage'
import NotFoundPage from './components/NotFoundPage'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { PageWrapper } from './components/ui'
import { useDocumentMeta } from './hooks/useDocumentMeta'

// Home page component
function HomePage(): JSX.Element {
  useDocumentMeta(
    'Stone KS – Kamieniarstwo Smolarek | Nagrobki, Granit, Marmur',
    'Stone KS – Kamieniarstwo Smolarek. Profesjonalne usługi kamieniarskie od 1999 roku. Nagrobki, pomniki, blaty kuchenne i schody z granitu i marmuru. Zadzwoń i zamów bezpłatną wycenę.'
  )
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
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/o-nas" element={<AboutPage />} />
          <Route path="/realizacje" element={<PortfolioPage />} />
          <Route path="/realizacje/:categoryId" element={<GalleryPage />} />
          <Route path="/materialy" element={<MaterialsPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
