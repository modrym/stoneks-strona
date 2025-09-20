import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'

interface QuickLink {
  name: string;
  href: string;
}

const Footer = (): JSX.Element => {
  const currentYear = new Date().getFullYear()

  const quickLinks: QuickLink[] = [
    { name: 'Strona główna', href: '/' },
    { name: 'O nas', href: '/o-nas' },
    { name: 'Realizacje', href: '/realizacje' },
    { name: 'Kontakt', href: '/kontakt' },
  ]

  const services: string[] = [
    'Nagrobki i pomniki',
    'Blaty kuchenne',
    'Schody kamienne',
    'Parapety',
    'Elewacje',
    'Elementy ogrodowe'
  ]

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-granite-900 via-granite-800 to-granite-900 text-white overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 texture-dark-marble opacity-30"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold-900/10 to-transparent"></div>
      
      <div className="container-custom relative z-10">
        {/* Main footer content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 py-20">
          {/* Enhanced Company info */}
          <div className="space-y-6">
            <div className="flex items-center group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center shadow-gold">
                  <span className="text-white font-bold text-lg font-serif">S</span>
                </div>
                <div className="absolute inset-0 w-12 h-12 border-2 border-gold-400/30 rounded-xl animate-pulse"></div>
              </div>
              <div className="ml-4">
                <span className="text-xl font-bold font-serif bg-gradient-to-r from-white to-stone-100 bg-clip-text text-transparent">
                  StoneKS
                </span>
                <div className="text-xs text-stone-300 font-medium tracking-wider uppercase">
                  Mistrzowska Kamieniarka
                </div>
              </div>
            </div>
            <p className="text-stone-300 mb-6 leading-relaxed">
              Od ponad 25 lat tworzymy unikalne dzieła z kamienia naturalnego. 
              Profesjonalna kamieniarka z tradycjami rodzinnymi.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-stone-300">
                <Phone size={18} />
                <span>+48 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3 text-stone-300">
                <Mail size={18} />
                <span>kontakt@stoneks.info</span>
              </div>
              <div className="flex items-start space-x-3 text-stone-300">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>ul. Kamienna 15<br />00-001 Warszawa</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Szybkie linki</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-stone-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Nasze usługi</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-stone-300">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact hours & social */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Godziny pracy</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-stone-300">
                <Clock size={18} />
                <div>
                  <div>Pon-Pt: 8:00-16:00</div>
                  <div>Sob: 9:00-13:00</div>
                  <div>Niedz: zamknięte</div>
                </div>
              </div>
            </div>
            
            <h4 className="text-lg font-semibold mb-4">Śledź nas</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-stone-800 hover:bg-stone-700 rounded-lg flex items-center justify-center transition-colors"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-stone-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-stone-400 text-sm">
              © {currentYear} Stoneks. Wszelkie prawa zastrzeżone.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
