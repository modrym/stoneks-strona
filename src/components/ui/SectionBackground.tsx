import { ReactNode } from 'react'

type BackgroundVariant = 
  | 'hero' 
  | 'about' 
  | 'portfolio' 
  | 'contact'
  | 'white-stone'
  | 'granite-stone'
  | 'custom'

interface TextureElement {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-0' | 'bottom-0' | 'left-0' | 'right-0';
  size: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  texture: 'marble' | 'stone' | 'dark-marble';
  opacity: 'low' | 'medium' | 'high';
  className?: string;
}

interface SectionBackgroundProps {
  variant?: BackgroundVariant;
  className?: string;
  children?: ReactNode;
  customGradient?: string;
  textureElements?: TextureElement[];
}

const SectionBackground = ({
  variant = 'custom',
  className,
  children,
  customGradient,
  textureElements = []
}: SectionBackgroundProps): JSX.Element => {
  const getVariantGradient = () => {
    switch (variant) {
      case 'hero':
        return 'bg-gradient-to-br from-granite-50 to-stone-100'
      case 'about':
        return 'bg-gradient-to-br from-stone-50 to-white'
      case 'portfolio':
        return 'bg-gradient-to-br from-granite-50 to-stone-100'
      case 'contact':
        return 'bg-gradient-to-br from-white to-stone-50'
      case 'white-stone':
        return 'bg-gradient-to-br from-white to-stone-50'
      case 'granite-stone':
        return 'bg-gradient-to-br from-granite-50 to-stone-100'
      default:
        return customGradient || 'bg-gradient-to-br from-stone-50 to-white'
    }
  }

  const getPositionClasses = (position: string) => {
    switch (position) {
      case 'top-left':
        return 'top-0 left-0'
      case 'top-right':
        return 'top-0 right-0'
      case 'bottom-left':
        return 'bottom-0 left-0'
      case 'bottom-right':
        return 'bottom-0 right-0'
      case 'top-0':
        return 'top-0'
      case 'bottom-0':
        return 'bottom-0'
      case 'left-0':
        return 'left-0'
      case 'right-0':
        return 'right-0'
      default:
        return position
    }
  }

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'sm':
        return 'w-1/4 h-1/4'
      case 'md':
        return 'w-1/3 h-1/2'
      case 'lg':
        return 'w-1/2 h-2/3'
      case 'xl':
        return 'w-2/3 h-full'
      case 'full':
        return 'w-full h-full'
      default:
        return size
    }
  }

  const getTextureClasses = (texture: string) => {
    switch (texture) {
      case 'marble':
        return 'texture-marble'
      case 'stone':
        return 'texture-stone'
      case 'dark-marble':
        return 'texture-dark-marble'
      default:
        return texture
    }
  }

  const getOpacityClasses = (opacity: string) => {
    switch (opacity) {
      case 'low':
        return 'opacity-15'
      case 'medium':
        return 'opacity-30'
      case 'high':
        return 'opacity-50'
      default:
        return opacity
    }
  }

  const getDefaultTextures = (): TextureElement[] => {
    switch (variant) {
      case 'hero':
        return [
          { position: 'top-right', size: 'md', texture: 'marble', opacity: 'medium' }
        ]
      case 'about':
        return [
          { position: 'top-right', size: 'md', texture: 'marble', opacity: 'medium' }
        ]
      case 'portfolio':
        return [
          { position: 'top-left', size: 'lg', texture: 'marble', opacity: 'low' },
          { position: 'bottom-right', size: 'md', texture: 'stone', opacity: 'medium' }
        ]
      case 'contact':
        return [
          { position: 'bottom-left', size: 'md', texture: 'marble', opacity: 'low' },
          { position: 'top-right', size: 'lg', texture: 'stone', opacity: 'low' }
        ]
      default:
        return []
    }
  }

  const texturesToRender = textureElements.length > 0 ? textureElements : getDefaultTextures()

  return (
    <div className="relative min-h-screen">
      {/* Background gradient */}
      <div className={`absolute inset-0 ${getVariantGradient()} ${className || ''}`}></div>
      
      {/* Texture elements */}
      {texturesToRender.map((texture, index) => (
        <div 
          key={index}
          className={`
            absolute 
            ${getPositionClasses(texture.position)} 
            ${getSizeClasses(texture.size)} 
            ${getTextureClasses(texture.texture)} 
            ${getOpacityClasses(texture.opacity)}
            ${texture.className || ''}
          `}
        ></div>
      ))}
      
      {children}
    </div>
  )
}

export default SectionBackground
