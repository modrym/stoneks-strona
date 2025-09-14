import { Link } from 'react-router-dom'
import { galleryCategories } from '../data/galleryData'
import { ArrowRight } from 'lucide-react'

const Portfolio = (): JSX.Element => {
  return (
    <section id="portfolio" className="relative section-padding overflow-hidden">
      {/* Background with texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-granite-50 to-stone-100"></div>
      <div className="absolute top-0 left-0 w-1/2 h-full texture-marble opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-2/3 texture-stone opacity-30"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide uppercase shadow-gold">
              Portfolio Mistrzowskich Dzieł
            </span>
          </div>
          <h2 className="heading-secondary mb-6">
            Odkryj nasze
            <span className="block bg-gradient-to-r from-gold-600 to-gold-700 bg-clip-text text-transparent">
              kategorie realizacji
            </span>
          </h2>
          <p className="text-elegant max-w-4xl mx-auto">
            Wybierz kategorię, aby poznać nasze mistrzowskie dzieła. Od eleganckich nagrobków 
            po nowoczesne realizacje - każdy projekt to testament naszego zaangażowania w perfekcję.
          </p>
        </div>

        {/* Portfolio Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {galleryCategories.map((category) => (
            <Link 
              key={category.id}
              to={`/portfolio/${category.id}`}
              className="group block"
            >
              <div className="card-marble group overflow-hidden hover:shadow-granite-lg transform hover:-translate-y-2 transition-all duration-500">
                {/* Category Image */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={category.buttonImage}
                    alt={category.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-colors duration-500"></div>
                  
                  {/* Category Name Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-3xl lg:text-4xl font-bold text-center px-4 transform group-hover:scale-105 transition-transform duration-500">
                      {category.name}
                    </h3>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-6 right-6 w-3 h-3 bg-gold-400 rounded-full animate-pulse opacity-80"></div>
                  <div className="absolute bottom-6 left-6 w-2 h-2 bg-gold-300 rounded-full animate-pulse delay-500 opacity-80"></div>
                </div>
                
                {/* Category Description */}
                <div className="p-8">
                  <h4 className="text-xl font-bold text-granite-900 mb-4 group-hover:text-granite-800 transition-colors">
                    {category.title}
                  </h4>
                  <p className="text-granite-600 mb-6 leading-relaxed group-hover:text-granite-700 transition-colors">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-granite-500 font-medium group-hover:text-granite-600 transition-colors">
                      {category.images.length} {category.images.length === 1 ? 'realizacja' : 'realizacji'}
                    </span>
                    <div className="flex items-center text-gold-600 group-hover:text-gold-700 transition-colors">
                      <span className="text-sm font-semibold mr-2">Zobacz galerię</span>
                      <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Enhanced Call to action */}
        <div className="text-center mt-20">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-gold-400/20 to-gold-600/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-marble border border-stone-100">
              <h3 className="text-2xl font-bold text-granite-900 mb-4">
                Marzysz o własnym dziele z kamienia?
              </h3>
              <p className="text-elegant mb-6">
                Skontaktuj się z nami, aby omówić Twój projekt. Oferujemy bezpłatną konsultację 
                i wycenę dostosowaną do Twoich potrzeb.
              </p>
              <a href="#contact" className="btn-primary group inline-flex items-center">
                Rozpocznij współpracę
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
