import { ArrowRight, Award, Users, Clock } from 'lucide-react'

// images
import kamieniarz from '../assets/images/kamieniarz.jpg';

const Hero = () => {
  const stats = [
    { icon: Award, label: 'Lat doświadczenia', value: '25+' },
    { icon: Users, label: 'Zadowolonych klientów', value: '1000+' },
    { icon: Clock, label: 'Realizacji rocznie', value: '300+' },
  ]

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with texture and overlay */}
      <div className="absolute inset-0 texture-marble"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-stone-50/80"></div>
      
      {/* Decorative geometric elements */}
      <div className="absolute top-20 right-10 w-96 h-96 texture-stone rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 texture-dark-marble rounded-full opacity-10 blur-2xl"></div>
      
      <div className="container-custom section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase shadow-gold">
                  Tradycja od 1999 roku
                </span>
              </div>
              
              <h1 className="heading-primary">
                Sztuka w
                <span className="block bg-gradient-to-r from-gold-600 via-gold-500 to-gold-700 bg-clip-text text-transparent">
                  Kamieniu
                </span>
              </h1>
              
              <p className="text-elegant max-w-xl">
                Tworzymy ponadczasowe dzieła z kamienia naturalnego, łącząc wieloletnią tradycję 
                z nowoczesną precyzją. Każda realizacja to unikalne połączenie sztuki, 
                rzemiosła i najwyższej jakości materiałów.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href="#contact" 
                className="btn-primary inline-flex items-center justify-center group"
              >
                Rozpocznij projekt
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a 
                href="#projects" 
                className="btn-secondary inline-flex items-center justify-center"
              >
                Galeria realizacji
              </a>
            </div>

            {/* Stats - Enhanced */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="group text-center">
                  <div className="relative mb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-granite-100 to-stone-100 rounded-2xl shadow-stone group-hover:shadow-marble transition-all duration-300 transform group-hover:scale-110">
                      <stat.icon className="text-granite-700" size={28} />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-400/20 to-gold-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-granite-900 to-granite-700 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-granite-600 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Image Section */
          }
          <div className="relative">
            {/* Main image container */}
            <div className="relative group">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-marble border-4 border-white/50 backdrop-blur-sm relative">
                <img
                  src={kamieniarz}
                  alt="Kamieniarz pracujący dłutem przy obróbce kamienia"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-gold-400/30 to-gold-600/30 rounded-full blur-xl group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-granite-800/20 to-granite-900/20 rounded-full blur-2xl group-hover:scale-90 transition-transform duration-700"></div>
            </div>
            
            {/* Decorative accent elements */}
            <div className="absolute top-12 left-12 w-3 h-3 bg-gold-500 rounded-full animate-pulse"></div>
            <div className="absolute bottom-16 right-16 w-2 h-2 bg-granite-700 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-32 right-8 w-1 h-1 bg-gold-400 rounded-full animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
