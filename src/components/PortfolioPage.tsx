import Header from './Header'
import Portfolio from './Portfolio'
import Footer from './Footer'
import { PageWrapper } from './ui'

const PortfolioPage = (): JSX.Element => {
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
