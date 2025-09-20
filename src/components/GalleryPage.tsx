import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getCategoryById, GalleryCategory } from '../data/galleryData'
import { ArrowLeft, Home, X, ChevronLeft, ChevronRight } from 'lucide-react'
import Header from './Header'
import Footer from './Footer'

const GalleryPage = (): JSX.Element => {
  const { categoryId } = useParams<{ categoryId: string }>()
  const category: GalleryCategory | undefined = getCategoryById(categoryId || '')
  
  // Lightbox state management
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Lightbox handlers
  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const goToNext = () => {
    if (category && currentImageIndex < category.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1)
    }
  }

  const goToPrevious = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1)
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!lightboxOpen) return

      switch (event.key) {
        case 'Escape':
          closeLightbox()
          break
        case 'ArrowLeft':
          goToPrevious()
          break
        case 'ArrowRight':
          goToNext()
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [lightboxOpen, currentImageIndex])

  // Images for custom uniform grid
  const galleryImages = category?.images || []

  // If category not found, show error
  if (!category) {
    return (
      <>
        <Header />
        <main className="pt-20">
          <div className="min-h-screen bg-gradient-to-br from-granite-50 to-stone-100 flex items-center justify-center">
            <div className="text-center">
              <h1 className="heading-secondary mb-4">Kategoria nie znaleziona</h1>
              <p className="text-granite-600 mb-8">Wybrana kategoria nie istnieje</p>
              <Link to="/" className="btn-primary inline-flex items-center">
                <Home className="mr-2" size={20} />
                Wróć do strony głównej
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Gallery Section */}
        <section className="pt-12 pb-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-granite-50 to-stone-100">
          {/* Gallery Title */}
          <div className="container-custom">
            <div className="text-center mb-8">
              <div className="inline-block mb-6">
                <span className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide uppercase shadow-gold">
                  Galeria realizacji
                </span>
              </div>
              <h1 className="heading-secondary mb-6">{category.title}</h1>
              <p className="text-elegant max-w-4xl mx-auto">
                {category.description}
              </p>
              <div className="mt-4">
                <p className="text-granite-600">{category.images.length} {category.images.length === 1 ? 'realizacja' : 'realizacji'}</p>
              </div>
            </div>
          </div>

          {/* Gallery Content */}
          <div className="container-custom">

          {/* Gallery Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-marble border border-stone-200 p-6 lg:p-8">
              {/* Custom Uniform Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className="group relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                    onClick={() => openLightbox(index)}
                  >
                    {/* Thumbnail Image */}
                    <img
                      src={image.thumbnail || image.src}
                      alt={image.title || image.caption || `Image ${index + 1}`}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300">
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="text-white text-center p-3">
                          <p className="text-sm font-medium truncate">
                            {image.title || image.caption}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Image Number Badge */}
                    <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {String(index + 1).padStart(3, '0')}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Call to action */}
          <div className="text-center mt-16">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-gold-400/20 to-gold-600/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-marble border border-stone-100">
                <h3 className="text-2xl font-bold text-granite-900 mb-4">
                  Podobają Ci się nasze realizacje?
                </h3>
                <p className="text-elegant mb-6">
                  Skontaktuj się z nami, aby omówić Twój projekt. 
                  Oferujemy bezpłatną konsultację i wycenę.
                </p>
                <Link to="/kontakt" className="btn-primary group inline-flex items-center">
                  Skontaktuj się z nami
                  <ArrowLeft className="ml-2 rotate-180 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </div>
            </div>
          </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Lightbox Modal */}
      {lightboxOpen && category && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-60 p-2"
            aria-label="Zamknij galerię"
          >
            <X size={32} />
          </button>

          {/* Previous button */}
          {currentImageIndex > 0 && (
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-60 p-2"
              aria-label="Poprzednie zdjęcie"
            >
              <ChevronLeft size={48} />
            </button>
          )}

          {/* Next button */}
          {currentImageIndex < category.images.length - 1 && (
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-60 p-2"
              aria-label="Następne zdjęcie"
            >
              <ChevronRight size={48} />
            </button>
          )}

          {/* Image container */}
          <div className="relative max-w-[90vw] max-h-[90vh] flex flex-col items-center">
            <img
              src={category.images[currentImageIndex].src}
              alt={category.images[currentImageIndex].title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            
            {/* Image info */}
            <div className="bg-black/50 backdrop-blur-sm text-white p-4 rounded-lg mt-4 max-w-md text-center">
              <h3 className="text-lg font-semibold mb-2">
                {category.images[currentImageIndex].title}
              </h3>
              <p className="text-sm text-gray-200">
                {category.images[currentImageIndex].description}
              </p>
              <p className="text-xs text-gray-400 mt-2">
                {currentImageIndex + 1} z {category.images.length}
              </p>
            </div>
          </div>

          {/* Background click to close */}
          <div 
            className="absolute inset-0 -z-10" 
            onClick={closeLightbox}
            aria-label="Zamknij galerię"
          />
        </div>
      )}

    </>
  )
}

export default GalleryPage
