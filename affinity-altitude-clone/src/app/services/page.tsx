import MainLayout from '@/components/layout/MainLayout'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { BookOpen, Calculator, FileText, DollarSign, BarChart2, TrendingUp, LineChart, Building2, PiggyBank, Database, ShieldCheck, BarChart } from 'lucide-react'

const ServiceCard = ({ icon, title, description, link }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}) => {
  return (
    <Link
      href={link}
      className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all group"
    >
      <div className="text-primary mb-4 w-12 h-12 flex items-center justify-center bg-purple-100 rounded-lg">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-secondary group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </Link>
  )
}

export default function ServicesPage() {
  return (
    <MainLayout>
      {/* Hero section */}
      <section className="bg-secondary text-white py-16">
        <div className="container text-center">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Comprehensive financial solutions tailored to meet the unique needs of your business.
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-10">
            <div className="text-primary font-medium mb-2">Core Services</div>
            <h2 className="text-3xl font-bold text-secondary mb-4">Essential Financial Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our core services form the foundation of effective financial management for your
              business, ensuring accuracy, compliance, and strategic insight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <ServiceCard
              icon={<BookOpen size={24} />}
              title="Bookkeeping"
              description="Accurate and timely recording of financial transactions to keep your books in order."
              link="/services/bookkeeping"
            />

            <ServiceCard
              icon={<Calculator size={24} />}
              title="Accounting"
              description="Comprehensive accounting services to track, analyze, and report your financial information."
              link="/services/accounting"
            />

            <ServiceCard
              icon={<FileText size={24} />}
              title="Taxation"
              description="Expert tax preparation and planning services to optimize your tax position."
              link="/services/taxation"
            />

            <ServiceCard
              icon={<DollarSign size={24} />}
              title="Payroll Services"
              description="Efficient payroll processing to ensure your employees are paid accurately and on time."
              link="/services/payroll-services"
            />

            <ServiceCard
              icon={<BarChart2 size={24} />}
              title="Financial Reporting"
              description="Detailed financial reports to help you understand your business performance."
              link="/services/financial-reporting"
            />

            <ServiceCard
              icon={<TrendingUp size={24} />}
              title="Business Advisory"
              description="Strategic advice to help your business grow and succeed in a competitive market."
              link="/services/business-advisory"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="text-primary font-medium mb-2">Why Choose Us</div>
              <h2 className="text-3xl font-bold text-secondary mb-6">The Affinity Altitude Advantage</h2>
              <p className="text-gray-600 mb-8">
                As a new firm in the market, Affinity Altitude Accumate brings a fresh perspective to accounting
                and bookkeeping services, combining innovative approaches with solid industry expertise.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary">Personalized Approach</h3>
                    <p className="text-gray-600 text-sm">
                      We take the time to understand your unique business needs and tailor our services accordingly.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary">Experienced Team</h3>
                    <p className="text-gray-600 text-sm">
                      Our professionals bring years of industry expertise and specialized knowledge to every client engagement.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary">Timely Delivery</h3>
                    <p className="text-gray-600 text-sm">
                      We understand the importance of meeting deadlines and consistently deliver our services on time.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary">Transparent Pricing</h3>
                    <p className="text-gray-600 text-sm">
                      Our fee structure is clear and straightforward, with no hidden costs or unexpected charges.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="https://ext.same-assets.com/4143339816/1622825995.jpeg"
                  alt="Team members collaborating"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-10">
            <div className="text-primary font-medium mb-2">Specialized Services</div>
            <h2 className="text-3xl font-bold text-secondary mb-4">Advanced Financial Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Beyond our core offerings, we provide specialized services to address specific financial
              challenges and opportunities in your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <ServiceCard
              icon={<LineChart size={24} />}
              title="Financial Analysis"
              description="In-depth analysis of financial data to identify trends, opportunities, and areas for improvement in your business operations."
              link="/specialized-services/financial-analysis"
            />

            <ServiceCard
              icon={<Building2 size={24} />}
              title="Business Structure Setup"
              description="Guidance on choosing and establishing the optimal business structure for your needs, including company formation, partnerships, and trusts."
              link="/specialized-services/business-structure"
            />

            <ServiceCard
              icon={<PiggyBank size={24} />}
              title="Cash Flow Management"
              description="Strategies and tools to monitor, analyze, and improve cash flow, ensuring your business maintains adequate liquidity for operations and growth."
              link="/specialized-services/cash-flow"
            />

            <ServiceCard
              icon={<Database size={24} />}
              title="SMSF Accounting"
              description="Specialized accounting and compliance services for Self-Managed Super Funds, helping you navigate complex regulatory requirements."
              link="/specialized-services/smsf"
            />

            <ServiceCard
              icon={<ShieldCheck size={24} />}
              title="Audit Protection"
              description="Proactive measures to ensure your financial records are audit-ready, with support and representation in case of regulatory audits."
              link="/specialized-services/audit-protection"
            />

            <ServiceCard
              icon={<BarChart size={24} />}
              title="Budgeting & Forecasting"
              description="Development of realistic budgets and financial forecasts to guide business planning, resource allocation, and performance evaluation."
              link="/specialized-services/budgeting"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-secondary mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Contact us today to discuss how our services can be tailored to meet the unique needs of your business.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  )
}
