import { ReactNode } from 'react'
import Badge from './Badge'

interface SectionHeaderProps {
  badge?: string;
  badgeVariant?: 'gold' | 'granite' | 'custom';
  badgeClassName?: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

const SectionHeader = ({ 
  badge,
  badgeVariant = 'gold',
  badgeClassName,
  title, 
  description,
  className = 'text-center mb-20',
  titleClassName = 'heading-secondary mb-6',
  descriptionClassName = 'text-elegant max-w-4xl mx-auto'
}: SectionHeaderProps): JSX.Element => {
  return (
    <div className={className}>
      {badge && (
        <div className="mb-6">
          <Badge variant={badgeVariant} className={badgeClassName}>
            {badge}
          </Badge>
        </div>
      )}
      
      <h2 className={titleClassName}>
        {title}
      </h2>
      
      {description && (
        <p className={descriptionClassName}>
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeader
