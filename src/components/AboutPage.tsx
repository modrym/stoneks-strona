import Header from './Header'
import About from './About'
import Footer from './Footer'
import { PageWrapper } from './ui'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

const AboutPage = (): JSX.Element => {
  useDocumentMeta(
    'O nas – Stone KS Kamieniarstwo Smolarek | Zakład Kamieniarski',
    'Poznaj firmę Stone KS – rodzinny zakład kamieniarski Jakuba Smolarka z wieloletnim doświadczeniem w obróbce granitu i marmuru. Tradycja rzemiosła od pokoleń, realizacje na terenie całej Polski.'
  )
  return (
    <>
      <Header />
      <PageWrapper backgroundVariant="stone">
        <About />
      </PageWrapper>
      <Footer />
    </>
  )
}

export default AboutPage
