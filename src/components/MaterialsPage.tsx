import Header from './Header'
import Materials from './Materials'
import Footer from './Footer'
import { PageWrapper } from './ui'

const MaterialsPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <PageWrapper>
        <Materials />
      </PageWrapper>
      <Footer />
    </>
  )
}

export default MaterialsPage
