import MainLayout from '@/components/layout/MainLayout'
import ContactForm from '@/components/sections/ContactForm'
import FaqSection from '@/components/sections/FaqSection'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
  return (
    <MainLayout>
      {/* Hero section */}
      <section className="bg-secondary text-white py-16">
        <div className="container text-center">
          <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We're here to answer your questions and provide the financial support your business needs.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-semibold mb-6 text-secondary">Contact Information</h2>
              <p className="text-gray-600 mb-8">
                Whether you're looking for information about our services or ready to start working with us, we're here to help.
                Reach out using the contact details below.
              </p>

              <div className="space-y-6">
                {/* Office Address */}
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-md text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-secondary mb-1">Our Office</h3>
                    <p className="text-gray-600 text-sm">
                      Office no. 1024, 10th floor, Sun Gravitas, near. Shyamal Cross Road, Rajmani Society, Satellite, Ahmedabad, Gujarat 380015
                    </p>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-md text-primary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-secondary mb-1">Phone Number</h3>
                    <Link href="tel:+919274320379" className="text-gray-600 text-sm hover:text-primary">
                      +91 9274320379
                    </Link>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-md text-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-secondary mb-1">Email Address</h3>
                    <Link href="mailto:info@affinityaltitudeservices.com" className="text-gray-600 text-sm hover:text-primary">
                      info@affinityaltitudeservices.com
                    </Link>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-md text-primary">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-secondary mb-1">Business Hours</h3>
                    <ul className="text-gray-600 text-sm">
                      <li className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span>9:00 AM - 5:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Saturday</span>
                        <span>10:00 AM - 2:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Sunday</span>
                        <span>Closed</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-6 bg-gray-50">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-6 text-secondary">Location Map</h2>
          <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gray-500">Google Maps integration would be here in a production environment.</p>
            </div>
          </div>
          <div className="mt-4">
            <Link
              href="https://www.google.com/maps/search/?api=1&query=Office%20no.%201024%2C%2010th%20floor%2C%20Sun%20Gravitas%2C%20near.%20Shyamal%20Cross%20Road%2C%20Rajmani%20Society%2C%20Satellite%2C%20Ahmedabad%2C%20Gujarat%20380015"
              target="_blank"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <MapPin size={16} /> View on Google Maps
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection />
    </MainLayout>
  )
}
