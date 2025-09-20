import Header from './Header'
import About from './About'
import Footer from './Footer'
import { PageWrapper } from './ui'

const AboutPage = (): JSX.Element => {
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
