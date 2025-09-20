import { ReactNode } from 'react'

interface PageWrapperProps {
  children: ReactNode;
  backgroundVariant?: 'default' | 'stone' | 'white';
  className?: string;
}

const PageWrapper = ({ 
  children, 
  backgroundVariant = 'default', 
  className = '' 
}: PageWrapperProps): JSX.Element => {
  const getBackgroundClasses = () => {
    switch (backgroundVariant) {
      case 'stone':
        return 'bg-gradient-to-br from-stone-50 to-white'
      case 'white':
        return 'bg-white'
      default:
        return 'bg-gradient-to-br from-granite-50 to-stone-100'
    }
  }

  return (
    <main className={`pt-20 min-h-screen ${getBackgroundClasses()} ${className}`}>
      {children}
    </main>
  )
}

export default PageWrapper
