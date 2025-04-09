import MainLayout from '@/components/layout/MainLayout'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

export default function AboutPage() {
  return (
    <MainLayout>
      {/* Hero section */}
      <section className="bg-secondary text-white py-16">
        <div className="container text-center">
          <h1 className="text-4xl font-bold mb-4">About Our Company</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We're a team of dedicated professionals committed to providing exceptional financial services to businesses of all sizes.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-purple-100 text-primary rounded-full text-sm font-medium mb-4">
                Our Story
              </div>
              <h2 className="text-3xl font-bold mb-6 text-secondary">
                A New Vision for Financial Services
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Affinity Altitude Accumate was founded with a simple mission: to provide small and medium-sized businesses with expert financial services that are accessible, personalized, and of the highest quality.
                </p>
                <p>
                  As a new firm in the market, we bring fresh perspectives and innovative approaches to traditional accounting practices. While we may be new, our team combines years of professional experience with enthusiasm and dedication to deliver exceptional service.
                </p>
                <p>
                  We believe in building strong relationships with our clients from day one, taking the time to understand your unique needs and challenges. Our commitment is to grow alongside our clients, providing the financial clarity and support needed for success in the business landscape.
                </p>
                <p>
                  Based in Ahmedabad, we serve clients throughout the region, bringing a local understanding combined with broad expertise in taxation and business regulations.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://ext.same-assets.com/3372300120/2507335125.jpeg"
                alt="Affinity Altitude Accumate office"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
              <div className="flex items-center justify-around mt-8">
                <div className="text-center">
                  <div className="text-primary font-bold text-xl">New Firm</div>
                </div>
                <div className="text-center">
                  <div className="text-primary font-bold text-xl">Fresh Approach</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-10">
            <div className="text-primary font-medium mb-2">Our Journey</div>
            <h2 className="text-3xl font-bold text-secondary">The Affinity Altitude Accumate Story</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Every great company has a beginning. Here's how our journey is unfolding.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Timeline Item 1 */}
            <div className="grid grid-cols-12 mb-8">
              <div className="col-span-12 md:col-span-4 mb-4 md:mb-0">
                <div className="bg-white p-6 rounded-lg shadow-md h-full">
                  <div className="text-primary font-medium mb-2">Our Foundation</div>
                  <h3 className="text-xl font-semibold mb-4 text-secondary">A New Beginning</h3>
                  <p className="text-gray-600 text-sm">
                    Affinity Altitude Accumate was founded with a vision to provide fresh perspectives in financial services. While we're new to the market, our team brings years of combined experience and a passion for innovation.
                  </p>
                </div>
              </div>
              <div className="hidden md:flex col-span-1 justify-center">
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-dashed border-primary" />
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                </div>
              </div>
              <div className="col-span-0 md:col-span-7" />
            </div>

            {/* Timeline Item 2 */}
            <div className="grid grid-cols-12 mb-8">
              <div className="col-span-0 md:col-span-7" />
              <div className="hidden md:flex col-span-1 justify-center">
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-dashed border-primary" />
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-4">
                <div className="bg-white p-6 rounded-lg shadow-md h-full">
                  <div className="text-primary font-medium mb-2">Our Approach</div>
                  <h3 className="text-xl font-semibold mb-4 text-secondary">Client-Centered Innovation</h3>
                  <p className="text-gray-600 text-sm">
                    We combine traditional accounting expertise with modern technology and innovative approaches, creating a unique service model that addresses the evolving needs of businesses.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="grid grid-cols-12">
              <div className="col-span-12 md:col-span-4 mb-4 md:mb-0">
                <div className="bg-white p-6 rounded-lg shadow-md h-full">
                  <div className="text-primary font-medium mb-2">Our Commitment</div>
                  <h3 className="text-xl font-semibold mb-4 text-secondary">Building for the Future</h3>
                  <p className="text-gray-600 text-sm">
                    As we grow alongside our clients, we remain committed to maintaining personalized service while expanding our capabilities to meet the changing landscape of financial services.
                  </p>
                </div>
              </div>
              <div className="hidden md:flex col-span-1 justify-center">
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 h-1/2 border-l-2 border-dashed border-primary" />
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
                </div>
              </div>
              <div className="col-span-0 md:col-span-7" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <div className="text-primary font-medium mb-2">Our Values</div>
            <h2 className="text-3xl font-bold text-secondary">The Principles That Guide Us</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Our core values shape how we work with clients and each other, driving our commitment to excellence in everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Integrity */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                <Check className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-secondary">Integrity</h3>
              <p className="text-gray-600 text-sm">
                We adhere to the highest ethical standards and are committed to honesty and transparency in all our dealings.
              </p>
            </div>

            {/* Client Focus */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-secondary">Client Focus</h3>
              <p className="text-gray-600 text-sm">
                We prioritize understanding our clients' needs and delivering personalized solutions that drive their success.
              </p>
            </div>

            {/* Excellence */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-secondary">Excellence</h3>
              <p className="text-gray-600 text-sm">
                We strive for excellence in all aspects of our work, continuously improving our skills and processes.
              </p>
            </div>

            {/* Reliability */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-secondary">Reliability</h3>
              <p className="text-gray-600 text-sm">
                Our clients can count on us to deliver accurate, timely services they can depend on for critical decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-secondary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Get In Touch With Our Team</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Have questions or ready to get started? Reach out to us today.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  )
}
