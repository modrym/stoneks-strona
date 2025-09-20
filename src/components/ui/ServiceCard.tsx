import { ReactNode } from 'react'
import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  iconClassName?: string;
  iconSize?: number;
  children?: ReactNode;
}

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description,
  className = 'card-marble group text-center p-8 hover:bg-gradient-to-br hover:from-white hover:to-stone-50',
  iconClassName = 'inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-granite-800 to-granite-900 rounded-2xl shadow-stone group-hover:shadow-marble transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3',
  iconSize = 36,
  children
}: ServiceCardProps): JSX.Element => {
  return (
    <div className={className}>
      <div className="relative mb-6">
        <div className={iconClassName}>
          <Icon className="text-white" size={iconSize} />
        </div>
      </div>
      
      <h4 className="text-xl font-bold text-granite-900 mb-4 group-hover:text-granite-800 transition-colors">
        {title}
      </h4>
      
      <p className="text-granite-600 leading-relaxed group-hover:text-granite-700 transition-colors">
        {description}
      </p>
      
      {children}
      
      {/* Hover effect indicator */}
      <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-12 h-1 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full mx-auto"></div>
      </div>
    </div>
  )
}

export default ServiceCard
