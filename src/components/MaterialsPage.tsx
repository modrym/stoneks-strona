import Header from './Header'
import Materials from './Materials'
import Footer from './Footer'
import { PageWrapper } from './ui'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

const MaterialsPage = (): JSX.Element => {
  useDocumentMeta(
    'Materiały – Stone KS Smolarek | Granit, Marmur, Kamień Naturalny',
    'Odkryj materiały kamieniarskie w Stone KS – Kamieniarstwo Smolarek. Granit, marmur i inne kamienie naturalne najwyższej jakości – idealne na nagrobki, blaty kuchenne i schody.'
  )
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
