import { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

// Import carousel data
import { carouselSlides } from '../data/carouselData'

const HeroCarousel = (): JSX.Element => {
  const [activeSlide, setActiveSlide] = useState<number>(0)
  const swiperRef = useRef<SwiperType | null>(null)

  const handleIndicatorClick = (index: number, event: React.MouseEvent<HTMLButtonElement>): void => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index)
      // Remove focus to prevent focus ring after clicking
      event.currentTarget.blur()
    }
  }

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        fadeEffect={{
          crossFade: true
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: 'hero-carousel-bullet',
          bulletActiveClass: 'hero-carousel-bullet-active',
        }}
        navigation={{
          prevEl: '.hero-carousel-prev',
          nextEl: '.hero-carousel-next',
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
        className="hero-carousel h-full"
      >
        {carouselSlides.map((slide, _index) => (
          <SwiperSlide key={slide.id} className="relative">
            {/* Background Image */}
            <div className={`absolute inset-0 ${slide.backgroundClass}`}>
              {slide.imageUrl && (
                <img
                  src={slide.imageUrl}
                  alt={slide.imageAlt}
                  className="absolute inset-0 w-full h-full object-cover opacity-70"
                  loading="eager"
                />
              )}
              {/* Texture overlay */}
              <div className="absolute inset-0 texture-dark-marble opacity-40"></div>
              
              {/* Pattern overlay for more visual interest */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40"></div>
              
              {/* Animated background elements */}
              <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-gold-500/10 to-gold-600/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/3 left-1/5 w-80 h-80 bg-gradient-to-br from-stone-400/10 to-stone-600/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
              
              {/* Central placeholder content */}
              {/* <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white/20">
                  <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-gold-400/30 to-gold-600/30 rounded-full flex items-center justify-center">
                    <span className="text-6xl font-bold text-white/40">{slide.id}</span>
                  </div>
                  <p className="text-2xl font-medium">Zdjęcie {slide.id}</p>
                  <p className="text-lg">Będzie dodane wkrótce</p>
                </div>
              </div> */}
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center">
              <div className="container-custom px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="text-white space-y-8">
                    {/* Badge */}
                    <div className="inline-block">
                      <span className="bg-gradient-to-r from-gold-500/90 to-gold-600/90 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold tracking-wide uppercase shadow-gold border border-gold-400/20">
                        {slide.subtitle}
                      </span>
                    </div>

                    {/* Main heading */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-serif leading-tight">
                      <span className="bg-gradient-to-r from-white via-stone-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                        {slide.title}
                      </span>
                    </h1>

                    {/* Description */}
                    <p className="text-xl md:text-2xl text-stone-100 leading-relaxed max-w-2xl drop-shadow-lg">
                      {slide.description}
                    </p>

                    {/* CTA Button */}
                    <div className="pt-4">
                      <a 
                        href={slide.ctaLink}
                        className="inline-flex items-center bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-gold hover:shadow-marble transition-all duration-300 transform hover:scale-105 group backdrop-blur-sm border border-gold-400/20"
                      >
                        {slide.ctaText}
                        <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={24} />
                      </a>
                    </div>
                  </div>

                  {/* Right side - could be used for additional content or kept empty for image focus */}
                  <div className="hidden lg:block">
                    {/* Optional decorative element or statistics */}
                    <div className="text-right text-white/80 space-y-4">
                      <div className="text-6xl font-bold font-serif text-gold-400/60">
                        0{slide.id}
                      </div>
                      <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 ml-auto"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom gradient for better text readability */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent"></div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons - Hidden on mobile, visible on desktop */}
      <button className="hero-carousel-prev absolute left-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full hidden md:flex items-center justify-center text-white hover:text-gold-400 transition-all duration-300 group">
        <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
      </button>
      
      <button className="hero-carousel-next absolute right-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full hidden md:flex items-center justify-center text-white hover:text-gold-400 transition-all duration-300 group">
        <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {carouselSlides.map((_, index) => (
          <button
            key={index}
            onClick={(event) => handleIndicatorClick(index, event)}
            className="p-3 rounded-full transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:ring-offset-2 focus:ring-offset-black/20 flex items-center justify-center"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div
              className={`w-12 h-1 rounded-full transition-all duration-300 ${
                index === activeSlide 
                  ? 'bg-gradient-to-r from-gold-400 to-gold-600 shadow-gold' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          </button>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
        <div 
          className="h-full bg-gradient-to-r from-gold-400 to-gold-600 transition-all duration-300 ease-linear"
          style={{ width: `${((activeSlide + 1) / carouselSlides.length) * 100}%` }}
        />
      </div>

      <style>{`
        .hero-carousel .swiper-pagination {
          display: none;
        }
        
        .hero-carousel-bullet {
          width: 48px;
          height: 4px;
          border-radius: 2px;
          background: rgba(255, 255, 255, 0.3);
          opacity: 1;
          transition: all 0.3s ease;
        }
        
        .hero-carousel-bullet-active {
          background: linear-gradient(to right, #d4a574, #b8956b);
          box-shadow: 0 0 20px rgba(212, 165, 116, 0.5);
        }
        
        .hero-carousel .swiper-button-next,
        .hero-carousel .swiper-button-prev {
          display: none;
        }
      `}</style>
    </section>
  )
}

export default HeroCarousel
