import { ReactNode } from 'react'
import { PageTemplate } from './PageTemplate'
import { BrandLogoLeft } from '@/components/BrandLogoLeft'
import { SocialLinks } from '@/components/SocialLinks'
import { FloatingCart } from '@/components/FloatingCart'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ShoppingCart, User, Heart } from 'lucide-react'
import { useCartUI } from '@/components/CartProvider'
import { useCart } from '@/contexts/CartContext'

/**
 * EDITABLE TEMPLATE - EcommerceTemplate
 * 
 * Template específico para la tienda de zapatos con header, footer y cart.
 */

interface EcommerceTemplateProps {
  children: ReactNode
  pageTitle?: string
  showCart?: boolean
  className?: string
  headerClassName?: string
  footerClassName?: string
  layout?: 'default' | 'full-width' | 'centered'
}

export const EcommerceTemplate = ({
  children,
  pageTitle,
  showCart = true,
  className,
  headerClassName,
  footerClassName,
  layout = 'default'
}: EcommerceTemplateProps) => {
  const { openCart } = useCartUI()
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  const header = (
    <div className={`py-4 bg-white shadow-sm border-b ${headerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <BrandLogoLeft />
            </Link>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <Link 
                to="/" 
                className="text-foreground/70 hover:text-foreground transition-colors font-medium"
              >
                Inicio
              </Link>
              <Link 
                to="/collections" 
                className="text-foreground/70 hover:text-foreground transition-colors font-medium"
              >
                Colecciones
              </Link>
              <Link 
                to="/ofertas" 
                className="text-foreground/70 hover:text-foreground transition-colors font-medium"
              >
                Ofertas
              </Link>
              <Link 
                to="/blog" 
                className="text-foreground/70 hover:text-foreground transition-colors font-medium"
              >
                Blog
              </Link>
            </nav>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:flex"
            >
              <Heart className="h-5 w-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:flex"
            >
              <User className="h-5 w-5" />
            </Button>

            {showCart && (
              <Button
                variant="ghost"
                size="icon"
                onClick={openCart}
                className="relative"
              >
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gold text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </Button>
            )}
          </div>
        </div>

        {/* Page Title */}
        {pageTitle && (
          <div className="mt-6">
            <h1 className="text-3xl font-bold text-foreground">
              {pageTitle}
            </h1>
          </div>
        )}
      </div>
    </div>
  )

  const footer = (
    <div className={`bg-gray-900 text-white py-16 ${footerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <BrandLogoLeft />
            <p className="mt-4 text-gray-300 max-w-md">
              SoleStyle es tu destino premium para el mejor calzado. 
              Ofrecemos las marcas más exclusivas con la mejor calidad y servicio.
            </p>
            <div className="mt-6">
              <SocialLinks />
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Navegación</h3>
            <div className="space-y-2">
              <Link 
                to="/" 
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Inicio
              </Link>
              <Link 
                to="/collections" 
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Colecciones
              </Link>
              <Link 
                to="/ofertas" 
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Ofertas
              </Link>
              <Link 
                to="/blog" 
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Blog
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Soporte</h3>
            <div className="space-y-2">
              <Link 
                to="/contacto" 
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Contacto
              </Link>
              <Link 
                to="/envios" 
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Envíos
              </Link>
              <Link 
                to="/devoluciones" 
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Devoluciones
              </Link>
              <Link 
                to="/tallas" 
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Guía de Tallas
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 SoleStyle. Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <PageTemplate 
        header={header}
        footer={footer}
        className={className}
        layout={layout}
      >
        {children}
      </PageTemplate>
      
      {showCart && <FloatingCart />}
    </>
  )
}