import Header from './Header'
import Portfolio from './Portfolio'
import Footer from './Footer'

const PortfolioPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Portfolio />
      </main>
      <Footer />
    </>
  )
}

export default PortfolioPage
