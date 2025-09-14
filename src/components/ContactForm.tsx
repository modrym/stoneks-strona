import { useState, ChangeEvent, FormEvent } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactForm = (): JSX.Element => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    // Simulate form submission
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      content: '+48 123 456 789',
      subtitle: 'Pon-Pt: 8:00-16:00'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'kontakt@stoneks.pl',
      subtitle: 'Odpowiadamy w 24h'
    },
    {
      icon: MapPin,
      title: 'Adres',
      content: 'ul. Kamienna 15\n00-001 Warszawa',
      subtitle: 'Zapraszamy do naszego showroomu'
    },
    {
      icon: Clock,
      title: 'Godziny otwarcia',
      content: 'Pon-Pt: 8:00-16:00\nSob: 9:00-13:00',
      subtitle: 'Niedziela: zamknięte'
    }
  ]

  return (
    <section id="contact" className="relative section-padding overflow-hidden">
      {/* Background with texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-stone-50"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-2/3 texture-marble opacity-20"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 texture-stone opacity-15"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-granite-600 to-granite-700 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
              Rozpocznij Rozmowę
            </span>
          </div>
          <h2 className="heading-secondary mb-6">
            Zrealizujmy Twoje
            <span className="block bg-gradient-to-r from-gold-600 to-gold-700 bg-clip-text text-transparent">
              marzenie w kamieniu
            </span>
          </h2>
          <p className="text-elegant max-w-4xl mx-auto">
            Każdy projekt to nowa historia. Opowiedz nam o swoich marzeniach, a my pomożemy 
            je wcielić w życie za pomocą mistrzowskiej obróbki najpiękniejszych kamieni naturalnych.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-stone-900 mb-8">
              Informacje kontaktowe
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-stone-100 rounded-lg flex items-center justify-center">
                    <info.icon className="text-stone-700" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-stone-900 mb-1">
                      {info.title}
                    </h4>
                    <p className="text-gray-700 whitespace-pre-line font-medium">
                      {info.content}
                    </p>
                    <p className="text-gray-500 text-sm mt-1">
                      {info.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="aspect-[16/10] bg-gradient-to-br from-stone-100 to-stone-200 rounded-xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center text-stone-600">
                  <div className="w-16 h-16 mx-auto mb-4 bg-stone-300 rounded-full flex items-center justify-center">
                    <MapPin size={32} className="text-stone-600" />
                  </div>
                  <p className="font-medium">Mapa lokalizacji</p>
                  <p className="text-sm">Będzie dodana wkrótce</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-stone-900 mb-8">
              Napisz do nas
            </h3>

            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <CheckCircle className="mx-auto text-green-600 mb-4" size={48} />
                <h4 className="text-xl font-semibold text-green-800 mb-2">
                  Dziękujemy!
                </h4>
                <p className="text-green-700">
                  Twoja wiadomość została wysłana. Skontaktujemy się z Tobą w ciągu 24 godzin.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Imię i nazwisko *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-stone-500 transition-colors"
                      placeholder="Jan Kowalski"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-stone-500 transition-colors"
                      placeholder="+48 123 456 789"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-stone-500 transition-colors"
                    placeholder="jan.kowalski@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Temat
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-stone-500 transition-colors"
                  >
                    <option value="">Wybierz temat</option>
                    <option value="nagrobek">Nagrobek / Pomnik</option>
                    <option value="blat">Blat kuchenny</option>
                    <option value="schody">Schody / Parapety</option>
                    <option value="architektura">Elementy architektoniczne</option>
                    <option value="inne">Inne</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Wiadomość *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-stone-500 transition-colors resize-vertical"
                    placeholder="Opisz swój projekt lub zadaj pytanie..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center"
                >
                  Wyślij wiadomość
                  <Send className="ml-2" size={20} />
                </button>

                <p className="text-sm text-gray-500 text-center">
                  * Pola wymagane. Twoje dane są bezpieczne i nie będą udostępniane osobom trzecim.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
