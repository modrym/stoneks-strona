import Header from './Header'
import ContactForm from './ContactForm'
import Footer from './Footer'
import { PageWrapper } from './ui'

const ContactPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <PageWrapper backgroundVariant="white">
        <ContactForm />
      </PageWrapper>
      <Footer />
    </>
  )
}

export default ContactPage
