import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-16 pb-2">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="relative w-8 h-8">
                <div className="absolute w-8 h-8 bg-primary rounded-md" />
                <div className="absolute w-8 h-8 flex items-center justify-center text-white font-bold text-xl">A</div>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-semibold text-lg leading-tight">Affinity Altitude</span>
                <span className="text-gray-300 text-xs leading-tight">Accumate</span>
              </div>
            </Link>
            <p className="text-sm text-gray-300 mb-4">
              We provide expert bookkeeping, accounting, and taxation services to help your business thrive. Our professional team is dedicated to delivering accurate and timely financial solutions.
            </p>
            <div className="flex space-x-3">
              <Link href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-500 hover:bg-primary transition-colors">
                <Facebook size={16} />
              </Link>
              <Link href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-500 hover:bg-primary transition-colors">
                <Twitter size={16} />
              </Link>
              <Link href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-500 hover:bg-primary transition-colors">
                <Linkedin size={16} />
              </Link>
              <Link href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-500 hover:bg-primary transition-colors">
                <Instagram size={16} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white text-sm flex items-center gap-2">
                  <span className="text-primary">›</span> Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white text-sm flex items-center gap-2">
                  <span className="text-primary">›</span> About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white text-sm flex items-center gap-2">
                  <span className="text-primary">›</span> Our Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white text-sm flex items-center gap-2">
                  <span className="text-primary">›</span> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/bookkeeping" className="text-gray-300 hover:text-white text-sm flex items-center gap-2">
                  <span className="text-primary">›</span> Bookkeeping
                </Link>
              </li>
              <li>
                <Link href="/services/taxation" className="text-gray-300 hover:text-white text-sm flex items-center gap-2">
                  <span className="text-primary">›</span> Taxation
                </Link>
              </li>
              <li>
                <Link href="/services/payroll" className="text-gray-300 hover:text-white text-sm flex items-center gap-2">
                  <span className="text-primary">›</span> Payroll Services
                </Link>
              </li>
              <li>
                <Link href="/services/accounting" className="text-gray-300 hover:text-white text-sm flex items-center gap-2">
                  <span className="text-primary">›</span> Accounting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary mt-1" size={18} />
                <span className="text-sm text-gray-300">
                  Office no. 1024, 10th floor, Sun Gravitas, near. Shyamal Cross Road, Rajmani Society, Satellite, Ahmedabad, Gujarat 380015
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary" size={18} />
                <Link href="tel:+919274320379" className="text-sm text-gray-300 hover:text-white">
                  +91 9274320379
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary" size={18} />
                <Link href="mailto:info@affinityaltitudeservices.com" className="text-sm text-gray-300 hover:text-white">
                  info@affinityaltitudeservices.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-4 pb-2 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <span>© 2025 Affinity Altitude Accumate. All rights reserved.</span>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
