import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Menu, X, Phone, Mail } from 'lucide-react'
import stoneksLogo from '../assets/images/stoneks-logo.jpg'

interface NavigationItem {
  name: string;
  href: string;
}

const Header = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigation: NavigationItem[] = [
    { name: 'Strona główna', href: '/' },
    { name: 'O nas', href: '/o-nas' },
    { name: 'Realizacje', href: '/realizacje' },
    { name: 'Kontakt', href: '/kontakt' },
  ]

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-stone fixed w-full top-0 z-50 border-b border-stone-100/50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center group">
            <div className="relative">
              <img 
                src={stoneksLogo} 
                alt="Stoneks Logo" 
                className="w-14 h-14 rounded-xl shadow-stone group-hover:shadow-marble transition-all duration-300 transform group-hover:scale-105 object-contain bg-white"
              />
              {/* Decorative ring */}
              <div className="absolute inset-0 w-14 h-14 border-2 border-gold-400/20 rounded-xl animate-pulse group-hover:border-gold-500/40 transition-colors duration-300"></div>
            </div>
            <div className="ml-4">
              <Link to="/" className="block">
                <span className="text-2xl font-bold bg-gradient-to-r from-granite-900 to-granite-700 bg-clip-text text-transparent font-serif">
                  StoneKS
                </span>
                <div className="text-xs text-granite-500 font-medium tracking-wider uppercase">
                  Mistrzowska Kamieniarka
                </div>
              </Link>
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative font-semibold transition-all duration-300 group ${
                  location.pathname === item.href 
                    ? 'text-granite-900' 
                    : 'text-granite-700 hover:text-granite-900'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-gold-500 to-gold-600 transition-all duration-300 ${
                  location.pathname === item.href 
                    ? 'w-full' 
                    : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* Enhanced Contact Info */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-granite-600 hover:text-granite-800 transition-colors group">
              <div className="p-1 rounded-lg bg-gradient-to-br from-gold-100 to-gold-200 group-hover:from-gold-200 group-hover:to-gold-300 transition-all duration-300">
                <Phone size={16} className="text-granite-700" />
              </div>
              <span className="font-semibold">+48 123 456 789</span>
            </div>
            <div className="flex items-center space-x-2 text-granite-600 hover:text-granite-800 transition-colors group">
              <div className="p-1 rounded-lg bg-gradient-to-br from-gold-100 to-gold-200 group-hover:from-gold-200 group-hover:to-gold-300 transition-all duration-300">
                <Mail size={16} className="text-granite-700" />
              </div>
              <span className="font-semibold">kontakt@stoneks.pl</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-stone-800 hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="py-4 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block font-medium ${
                    location.pathname === item.href 
                      ? 'text-stone-800' 
                      : 'text-gray-700 hover:text-stone-800'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <div className="flex items-center space-x-2 text-stone-600">
                  <Phone size={18} />
                  <span>+48 123 456 789</span>
                </div>
                <div className="flex items-center space-x-2 text-stone-600">
                  <Mail size={18} />
                  <span>kontakt@stoneks.info</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
