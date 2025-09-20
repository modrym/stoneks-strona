import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { PageWrapper } from './ui'

const NotFoundPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <PageWrapper backgroundVariant="stone" className="flex flex-col items-center justify-center">
        <div className="text-center px-4 max-w-md mx-auto">
          {/* Large 404 */}
          <div className="text-8xl md:text-9xl font-bold text-stone-300 mb-4">
            404
          </div>
          
          {/* Main message */}
          <h1 className="text-2xl md:text-3xl font-bold text-stone-800 mb-4">
            Strona nie została znaleziona
          </h1>
          
          {/* Subtitle */}
          <p className="text-stone-600 mb-8">
            Przepraszamy, ale strona której szukasz nie istnieje lub została przeniesiona.
          </p>
          
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-block bg-stone-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-stone-700 transition-colors duration-300"
            >
              Powrót do strony głównej
            </Link>
            
            <Link
              to="/kontakt"
              className="inline-block border-2 border-stone-800 text-stone-800 px-8 py-3 rounded-lg font-semibold hover:bg-stone-800 hover:text-white transition-all duration-300"
            >
              Skontaktuj się z nami
            </Link>
          </div>
        </div>
      </PageWrapper>
      <Footer />
    </>
  )
}

export default NotFoundPage
