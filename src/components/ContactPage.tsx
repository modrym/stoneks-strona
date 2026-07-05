import Header from './Header'
import ContactForm from './ContactForm'
import Footer from './Footer'
import { PageWrapper } from './ui'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

const ContactPage = (): JSX.Element => {
  useDocumentMeta(
    'Kontakt – Stone KS Kamieniarstwo Smolarek | Zelów',
    'Skontaktuj się z Jakubem Smolarkiem – Stone KS, zakład kamieniarski w Zelowie. Zadzwoń lub napisz, aby uzyskać bezpłatną wycenę nagrobka, blatu lub schodów z granitu.'
  )
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
