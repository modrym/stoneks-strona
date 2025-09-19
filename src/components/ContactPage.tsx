import Header from './Header'
import ContactForm from './ContactForm'
import Footer from './Footer'

const ContactPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <main className="pt-20">
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}

export default ContactPage
