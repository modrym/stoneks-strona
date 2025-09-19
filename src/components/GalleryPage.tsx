import { useParams, Link } from 'react-router-dom'
import { Gallery } from 'react-grid-gallery'
import { getCategoryById, GalleryCategory } from '../data/galleryData'
import { ArrowLeft, Home } from 'lucide-react'
import Header from './Header'

const GalleryPage = (): JSX.Element => {
  const { categoryId } = useParams<{ categoryId: string }>()
  const category: GalleryCategory | undefined = getCategoryById(categoryId || '')

  // If category not found, show error
  if (!category) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-granite-50 to-stone-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-granite-900 mb-4">Kategoria nie znaleziona</h1>
          <p className="text-granite-600 mb-8">Wybrana kategoria nie istnieje</p>
          <Link to="/" className="btn-primary inline-flex items-center">
            <Home className="mr-2" size={20} />
            Wróć do strony głównej
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-granite-50 to-stone-100">
      {/* Header */}
      <Header />
      
      {/* Gallery Title Section */}
      <section className="pt-24 pb-8 bg-white/80 backdrop-blur-sm border-b border-stone-200">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-granite-900 mb-2">{category.title}</h1>
            <p className="text-granite-600">{category.images.length} {category.images.length === 1 ? 'realizacja' : 'realizacji'}</p>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <main className="section-padding">
        <div className="container-custom">
          {/* Category Description */}
          <div className="text-center mb-12">
            <p className="text-elegant max-w-3xl mx-auto text-lg">
              {category.description}
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-marble border border-stone-200 p-6 lg:p-8">
              <Gallery 
                images={category.images}
                enableImageSelection={false}
                rowHeight={200}
                margin={4}
              />
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
                  Skontaktuj się z nami, aby omówić Twój projekt w kategorii &ldquo;{category.name}&rdquo;. 
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
      </main>

      {/* Custom Grid Gallery Styles */}
      <style>{`
        .ReactGridGallery {
          margin: 0;
        }
        
        .ReactGridGallery_tile {
          border-radius: 0.5rem;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        
        .ReactGridGallery_tile:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
        }
        
        .ReactGridGallery_tile-viewport {
          border-radius: 0.5rem;
        }
        
        .ReactGridGallery_tile-overlay {
          background: rgba(0, 0, 0, 0.6);
          border-radius: 0.5rem;
        }
        
        .ReactGridGallery_tile-description {
          color: white;
          font-weight: 600;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
          padding: 16px;
          font-size: 16px;
        }
      `}</style>
    </div>
  )
}

export default GalleryPage
