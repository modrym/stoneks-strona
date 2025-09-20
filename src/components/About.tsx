import { CheckCircle, Hammer, Palette, Shield, LucideIcon } from 'lucide-react'
import { SectionHeader, ServiceCard, SectionBackground } from './ui'

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const About = (): JSX.Element => {
  const services: Service[] = [
    {
      icon: Hammer,
      title: 'Nagrobki i pomniki',
      description: 'Projektujemy i wykonujemy nagrobki z granitu, marmuru i piaskowca. Każda realizacja jest dopasowana do indywidualnych potrzeb klienta.'
    },
    {
      icon: Palette,
      title: 'Blaty kuchenne',
      description: 'Eleganckie blaty z kamienia naturalnego i konglomeratu. Odporne na zarysowania i wysokie temperatury.'
    },
    {
      icon: Shield,
      title: 'Elementy architektoniczne',
      description: 'Schody, parapety, elewacje i inne elementy architektoniczne z wysokiej jakości kamienia naturalnego.'
    }
  ]

  const features = [
    'Używamy tylko najwyższej jakości materiałów',
    'Indywidualne projekty dopasowane do potrzeb',
    'Profesjonalny montaż przez doświadczonych specjalistów',
    'Gwarancja na wszystkie wykonane prace',
    'Bezpłatna wycena i konsultacja',
    'Szybka realizacja zamówień'
  ]

  return (
    <section id="about" className="section-padding-reduced overflow-hidden">
      <SectionBackground variant="about">
        <div className="container-custom relative z-10">
          <SectionHeader
            badge="Poznaj nas bliżej"
            badgeVariant="granite"
            title={
              <>
                Tradycja w każdym
                <span className="block bg-gradient-to-r from-gold-600 to-gold-700 bg-clip-text text-transparent">
                  dłucie kamienia
                </span>
              </>
            }
            description="Jesteśmy rodziną rzemieślników, która od pokoleń przekazuje sztukę obróbki kamienia. 
            Łączymy wieloletnią tradycję z najnowocześniejszymi technologiami, tworząc 
            dzieła, które przetrwają wieki."
          />

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-granite-900 to-granite-700 bg-clip-text text-transparent mb-8">
                Dlaczego wybierają nas mistrzowie branży?
              </h3>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white/80 hover:shadow-stone transition-all duration-300">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="text-white" size={16} />
                    </div>
                    <span className="text-granite-700 font-medium leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Image */}
          <div className="relative">
            <div className="relative group">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-marble border-4 border-white/70 relative">
                <img
                  src="https://images.pexels.com/photos/208567/pexels-photo-208567.jpeg"
                  alt="Warsztat kamieniarski z narzędziami i elementami z kamienia"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-gold-400/40 to-gold-600/40 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500"></div>
              <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-gradient-to-br from-granite-700/30 to-granite-900/30 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>

          {/* Services */}
          <div>
            <SectionHeader
              title={
                <>
                  Nasze
                  <span className="block bg-gradient-to-r from-gold-600 to-gold-700 bg-clip-text text-transparent py-2">
                    Specjalizacje
                  </span>
                </>
              }
              description="Każda domena wymaga unikalnego podejścia i mistrzowskiego wykonania"
              titleClassName="heading-secondary mb-4"
              descriptionClassName="text-elegant max-w-2xl mx-auto"
              className="text-center mb-16"
            />
            
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </div>
      </SectionBackground>
    </section>
  )
}

export default About
