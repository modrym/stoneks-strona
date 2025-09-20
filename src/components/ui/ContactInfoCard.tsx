import { LucideIcon } from 'lucide-react'

interface ContactInfoCardProps {
  icon: LucideIcon;
  title: string;
  content: string;
  subtitle?: string;
  className?: string;
  iconClassName?: string;
  iconSize?: number;
}

const ContactInfoCard = ({
  icon: Icon,
  title,
  content,
  subtitle,
  className = 'flex items-start space-x-4',
  iconClassName = 'flex-shrink-0 w-12 h-12 bg-stone-100 rounded-lg flex items-center justify-center',
  iconSize = 24
}: ContactInfoCardProps): JSX.Element => {
  return (
    <div className={className}>
      <div className={iconClassName}>
        <Icon className="text-stone-700" size={iconSize} />
      </div>
      <div>
        <h4 className="text-lg font-semibold text-stone-900 mb-1">
          {title}
        </h4>
        <p className="text-gray-700 whitespace-pre-line font-medium">
          {content}
        </p>
        {subtitle && (
          <p className="text-gray-500 text-sm mt-1">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}

export default ContactInfoCard
