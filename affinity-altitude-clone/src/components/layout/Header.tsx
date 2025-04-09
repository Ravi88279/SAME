import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Phone, Mail } from 'lucide-react'

const Header = () => {
  return (
    <header className="w-full">
      {/* Top bar with contact info */}
      <div className="bg-primary text-white py-1">
        <div className="container flex justify-end items-center space-x-4 text-sm">
          <Link href="tel:+919274320379" className="flex items-center gap-1 hover:text-gray-200">
            <Phone size={14} />
            <span>+91 9274320379</span>
          </Link>
          <Link href="mailto:info@affinityaltitudeservices.com" className="flex items-center gap-1 hover:text-gray-200">
            <Mail size={14} />
            <span>info@affinityaltitudeservices.com</span>
          </Link>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-10 h-10">
              <div className="absolute w-10 h-10 bg-primary rounded-md" />
              <div className="absolute w-10 h-10 flex items-center justify-center text-white font-bold text-2xl">A</div>
            </div>
            <div className="flex flex-col">
              <span className="text-primary font-semibold text-lg leading-tight">Affinity Altitude</span>
              <span className="text-gray-600 text-sm leading-tight">Accumate</span>
            </div>
          </Link>

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Call to Action Button */}
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
