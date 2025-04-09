import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="bg-slate-50 py-16">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-block px-4 py-1 bg-purple-100 text-primary rounded-full text-sm font-medium">
            Professional Accounting & Bookkeeping Services
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-secondary">
            Financial Solutions <span className="text-primary">for Your Business</span>
          </h1>
          <p className="text-gray-600 text-lg">
            We provide expert bookkeeping, accounting, and taxation services to help your business thrive.
            Our professional team is dedicated to delivering accurate and timely financial solutions.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-gray-300">
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-6 pt-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <span className="text-gray-700 text-sm">Expert Team</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <span className="text-gray-700 text-sm">Personalized Services</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <span className="text-gray-700 text-sm">Affordable Plans</span>
            </div>
          </div>
        </div>
        <div className="relative h-[400px] lg:h-[450px]">
          <img
            src="https://ext.same-assets.com/983722502/1413609632.jpeg"
            alt="Business professionals reviewing financial documents"
            className="w-full h-full object-cover rounded-lg shadow-xl"
          />
          <div className="absolute -bottom-6 -left-6 bg-primary text-white p-4 rounded-lg shadow-lg">
            <div className="text-xl font-bold">Financial Excellence</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
