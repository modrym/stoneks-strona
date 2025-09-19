import Header from './Header'
import About from './About'
import Footer from './Footer'

const AboutPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <main className="pt-20">
        <About />
      </main>
      <Footer />
    </>
  )
}

export default AboutPage
