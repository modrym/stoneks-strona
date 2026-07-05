import Header from './Header'
import Portfolio from './Portfolio'
import Footer from './Footer'
import { PageWrapper } from './ui'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

const PortfolioPage = (): JSX.Element => {
  useDocumentMeta(
    'Realizacje – Stone KS Kamieniarstwo Smolarek | Galeria Nagrobków',
    'Zobacz realizacje Stone KS – Kamieniarstwo Smolarek. Nagrobki, pomniki i wyroby kamieniarskie z granitu i marmuru. Efekt precyzji i wieloletniej pasji do rzemiosła.'
  )
  return (
    <>
      <Header />
      <PageWrapper>
        <Portfolio />
      </PageWrapper>
      <Footer />
    </>
  )
}

export default PortfolioPage
