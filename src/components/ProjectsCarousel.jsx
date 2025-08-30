import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { ExternalLink, Calendar, MapPin, ArrowRight } from 'lucide-react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const ProjectsCarousel = () => {
  const [activeProject, setActiveProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Pomnik granitowy - Cmentarz Powązkowski',
      description: 'Elegancki pomnik wykonany z czarnego granitu szwedzkiego z dodatkowymi elementami dekoracyjnymi.',
      location: 'Warszawa',
      date: '2024',
      category: 'Nagrobki',
      images: [
        'https://images.pexels.com/photos/1048411/pexels-photo-1048411.jpeg'
      ],
      imageAlt: 'Szpaler nagrobków w alei cmentarnej'
    },
    {
      id: 2,
      title: 'Blat kuchenny z granitu Kashmir White',
      description: 'Nowoczesny blat kuchenny z granitu Kashmir White z wyciętym zlewem i płytą indukcyjną.',
      location: 'Kraków',
      date: '2024',
      category: 'Blaty kuchenne',
      images: [
        'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg'
      ],
      imageAlt: 'Nowoczesna kuchnia z jasnym blatem z kamienia'
    },
    {
      id: 3,
      title: 'Schody zewnętrzne z piaskowca',
      description: 'Reprezentacyjne schody wejściowe wykonane z piaskowca Istebna z antypoślizgowymi elementami.',
      location: 'Gdańsk',
      date: '2023',
      category: 'Architektura',
      images: [
        'https://images.pexels.com/photos/2166698/pexels-photo-2166698.jpeg'
      ],
      imageAlt: 'Zewnętrzne schody z kamienia'
    },
    {
      id: 4,
      title: 'Nagrobek rodzinny z marmuru Carrara',
      description: 'Klasyczny nagrobek rodzinny wykonany z białego marmuru Carrara z rzeźbionymi elementami.',
      location: 'Wrocław',
      date: '2023',
      category: 'Nagrobki',
      images: [
        'https://images.pexels.com/photos/208495/pexels-photo-208495.jpeg'
      ],
      imageAlt: 'Marmurowy nagrobek z rzeźbą'
    },
    {
      id: 5,
      title: 'Parapety wewnętrzne z granitu',
      description: 'Eleganckie parapety wewnętrzne z granitu Rosa Beta w nowoczesnym apartamencie.',
      location: 'Poznań',
      date: '2024',
      category: 'Architektura',
      images: [
        'https://images.pexels.com/photos/271786/pexels-photo-271786.jpeg'
      ],
      imageAlt: 'Wnętrze z oknem i kamiennym parapetem'
    }
  ]

  return (
    <section id="projects" className="relative section-padding overflow-hidden">
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
            Każde dzieło to
            <span className="block bg-gradient-to-r from-gold-600 to-gold-700 bg-clip-text text-transparent">
              historia w kamieniu
            </span>
          </h2>
          <p className="text-elegant max-w-4xl mx-auto">
            Odkryj naszą galerię unikalnych realizacji. Od monumentalnych pomników po eleganckie 
            blaty kuchenne - każdy projekt to testament naszego zaangażowania w perfekcję.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="projects-swiper"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="card-marble group overflow-hidden">
                  {/* Project Image */}
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={project.images[0]}
                      alt={project.imageAlt || project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-granite-800 to-granite-900 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-stone backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute top-6 right-6 w-3 h-3 bg-gold-400 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-6 left-6 w-2 h-2 bg-gold-300 rounded-full animate-pulse delay-500"></div>
                  </div>
                  
                  {/* Enhanced Content */}
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-granite-900 mb-4 line-clamp-2 group-hover:text-granite-800 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-granite-600 mb-6 line-clamp-3 leading-relaxed group-hover:text-granite-700 transition-colors">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-granite-500 mb-6">
                      <div className="flex items-center space-x-2 group-hover:text-granite-600 transition-colors">
                        <div className="p-1 bg-gradient-to-br from-gold-100 to-gold-200 rounded-lg">
                          <MapPin size={14} className="text-granite-600" />
                        </div>
                        <span className="font-medium">{project.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 group-hover:text-granite-600 transition-colors">
                        <div className="p-1 bg-gradient-to-br from-gold-100 to-gold-200 rounded-lg">
                          <Calendar size={14} className="text-granite-600" />
                        </div>
                        <span className="font-medium">{project.date}</span>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => setActiveProject(project)}
                      className="w-full btn-primary group flex items-center justify-center"
                    >
                      Zobacz więcej
                      <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
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

      {/* Modal for project details */}
      {activeProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-stone-900">
                  {activeProject.title}
                </h3>
                <button
                  onClick={() => setActiveProject(null)}
                  className="text-gray-500 hover:text-gray-700 p-2"
                >
                  ✕
                </button>
              </div>
              
              <div className="aspect-[16/10] rounded-lg mb-6 overflow-hidden relative">
                <img
                  src={activeProject.images[0]}
                  alt={activeProject.imageAlt || activeProject.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              
              <div className="space-y-4">
                <div>
                  <span className="bg-stone-100 text-stone-800 px-3 py-1 rounded-full text-sm font-medium">
                    {activeProject.category}
                  </span>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  {activeProject.description}
                </p>
                
                <div className="flex items-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <MapPin size={16} />
                    <span>{activeProject.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar size={16} />
                    <span>{activeProject.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .projects-swiper .swiper-button-next,
        .projects-swiper .swiper-button-prev {
          color: #44403c;
        }
        
        .projects-swiper .swiper-pagination-bullet {
          background: #a8a29e;
        }
        
        .projects-swiper .swiper-pagination-bullet-active {
          background: #44403c;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}

export default ProjectsCarousel
