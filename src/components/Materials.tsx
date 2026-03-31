import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { materials, materialCategories, getMaterialsByCategory, MaterialCategory } from '../data/materialsData'
import { SectionHeader, SectionBackground, Badge } from './ui'

const Materials = (): JSX.Element => {
  const [activeCategory, setActiveCategory] = useState<MaterialCategory | 'all'>('all')

  const filteredMaterials = activeCategory === 'all'
    ? materials
    : getMaterialsByCategory(activeCategory)

  return (
    <section className="section-padding-reduced overflow-hidden">
      <SectionBackground variant="portfolio">
        <div className="container-custom relative z-10">
          <SectionHeader
            badge="Materiały kamieniarskie"
            title={
              <>
                Pracujemy z najlepszymi
                <span className="block bg-gradient-to-r from-gold-600 to-gold-700 bg-clip-text text-transparent">
                  materiałami naturalnymi
                </span>
              </>
            }
            description="Oferujemy szeroki wybór kamieni naturalnych najwyższej jakości. Każdy materiał dobieramy indywidualnie do potrzeb projektu, zapewniając trwałość i piękno na lata."
          />

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-r from-granite-800 to-granite-900 text-white shadow-lg'
                  : 'bg-white/80 text-granite-700 hover:bg-white hover:shadow-md border border-stone-200'
              }`}
            >
              Wszystkie
            </button>
            {materialCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-granite-800 to-granite-900 text-white shadow-lg'
                    : 'bg-white/80 text-granite-700 hover:bg-white hover:shadow-md border border-stone-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Category Description */}
          {activeCategory !== 'all' && (
            <div className="text-center mb-12">
              <p className="text-elegant max-w-2xl mx-auto">
                {materialCategories.find(c => c.id === activeCategory)?.description}
              </p>
            </div>
          )}

          {/* Materials Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {filteredMaterials.map((material) => (
              <div
                key={material.id}
                className="group card-marble overflow-hidden hover:shadow-granite-lg transform hover:-translate-y-2 transition-all duration-500"
              >
                {/* Material Image */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={material.image}
                    alt={material.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <Badge variant="granite">
                      {materialCategories.find(c => c.id === material.category)?.name}
                    </Badge>
                  </div>
                </div>

                {/* Material Info */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-granite-900 mb-2 group-hover:text-granite-800 transition-colors">
                    {material.name}
                  </h3>
                  <p className="text-granite-600 text-sm leading-relaxed mb-4">
                    {material.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {material.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs px-2.5 py-1 rounded-full bg-stone-100 text-granite-600 font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-20">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-gold-400/20 to-gold-600/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-marble border border-stone-100">
                <h3 className="text-2xl font-bold text-granite-900 mb-4">
                  Potrzebujesz pomocy w wyborze materiału?
                </h3>
                <p className="text-elegant mb-6">
                  Skontaktuj się z nami — doradzimy najlepszy kamień do Twojego projektu.
                  Oferujemy bezpłatną konsultację i próbki materiałów.
                </p>
                <Link to="/kontakt" className="btn-primary group inline-flex items-center">
                  Skontaktuj się z nami
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SectionBackground>
    </section>
  )
}

export default Materials
