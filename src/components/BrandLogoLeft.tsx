import { useSettings } from '@/contexts/SettingsContext'
import { getLogoUrl } from '@/lib/logo-utils'

export const BrandLogoLeft = () => {
  const { logos } = useSettings()

  if (!logos) {
    return (
      <div className="flex items-center space-x-2 ml-2">
        <div className="w-8 h-8 bg-gradient-to-br from-gold to-amber-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">S</span>
        </div>
        <h1 className="text-xl font-bold text-foreground">SoleStyle</h1>
      </div>
    )
  }

  const mainLogoUrl = getLogoUrl(logos, 'main_logo')

  if (!mainLogoUrl) {
    return (
      <div className="flex items-center space-x-2 ml-2">
        <div className="w-8 h-8 bg-gradient-to-br from-gold to-amber-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">S</span>
        </div>
        <h1 className="text-xl font-bold text-foreground">SoleStyle</h1>
      </div>
    )
  }

  return (
    <a href="/" aria-label="Home" className="ml-2">
      <img 
        src={mainLogoUrl} 
        alt="SoleStyle logo"
        className="h-8 w-auto object-contain" 
      />
    </a>
  )
}