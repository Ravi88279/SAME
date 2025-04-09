import MainLayout from '@/components/layout/MainLayout'
import Hero from '@/components/sections/Hero'
import ServicesSection from '@/components/sections/ServicesSection'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import FaqSection from '@/components/sections/FaqSection'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <MainLayout>
      <Hero />

      <ServicesSection />

      <WhyChooseUs />

      <section className="py-20 bg-secondary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Contact us today to discuss how our services can be tailored to meet the unique needs of your business.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </section>

      <FaqSection />
    </MainLayout>
  )
}
