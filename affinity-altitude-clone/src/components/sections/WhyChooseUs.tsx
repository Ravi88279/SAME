import { Check } from 'lucide-react'

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              src="https://ext.same-assets.com/4143339816/1622825995.jpeg"
              alt="Team collaborating on financial solutions"
              className="rounded-lg shadow-lg w-full h-[450px] object-cover"
            />
          </div>

          <div className="order-1 lg:order-2">
            <div className="mb-2 text-sm text-primary font-medium">Why Choose Us</div>
            <h2 className="text-3xl font-bold mb-6 text-secondary">The Affinity Altitude Advantage</h2>
            <p className="text-gray-600 mb-8">
              As a new firm in the Australian market, Affinity Altitude Accumate brings a fresh perspective
              to accounting and bookkeeping services, combining innovative approaches with solid industry expertise.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
                  <Check className="text-primary h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-secondary">Personalized Approach</h3>
                  <p className="text-gray-600 text-sm">
                    We take the time to understand your unique business needs and tailor our services accordingly.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
                  <Check className="text-primary h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-secondary">Experienced Team</h3>
                  <p className="text-gray-600 text-sm">
                    Our professionals bring years of industry expertise and specialized knowledge to every client engagement.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
                  <Check className="text-primary h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-secondary">Timely Delivery</h3>
                  <p className="text-gray-600 text-sm">
                    We understand the importance of meeting deadlines and consistently deliver our services on time.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
                  <Check className="text-primary h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-secondary">Transparent Pricing</h3>
                  <p className="text-gray-600 text-sm">
                    Our fee structure is clear and straightforward, with no hidden costs or unexpected charges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
