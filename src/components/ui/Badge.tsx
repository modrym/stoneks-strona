import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode;
  variant?: 'gold' | 'granite' | 'custom';
  className?: string;
}

const Badge = ({ children, variant = 'gold', className = '' }: BadgeProps): JSX.Element => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'gold':
        return 'bg-gradient-to-r from-gold-500 to-gold-600'
      case 'granite':
        return 'bg-gradient-to-r from-granite-600 to-granite-700'
      default:
        return ''
    }
  }

  return (
    <div className="inline-block">
      <span 
        className={`
          ${variant !== 'custom' ? getVariantClasses() : ''} 
          text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide uppercase shadow-gold
          ${className}
        `}
      >
        {children}
      </span>
    </div>
  )
}

export default Badge
