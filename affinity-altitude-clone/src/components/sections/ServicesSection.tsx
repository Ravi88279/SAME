import Link from 'next/link'
import { BookOpen, Calculator, FileText, DollarSign, BarChart2, TrendingUp } from 'lucide-react'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  link: string
}

const ServiceCard = ({ icon, title, description, link }: ServiceCardProps) => {
  return (
    <Link
      href={link}
      className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all group"
    >
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-secondary group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </Link>
  )
}

const ServicesSection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of accounting and bookkeeping services tailored to
            meet the needs of your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<BookOpen size={28} />}
            title="Bookkeeping"
            description="Accurate and timely recording of financial transactions to keep your books in order."
            link="/services/bookkeeping"
          />

          <ServiceCard
            icon={<Calculator size={28} />}
            title="Accounting"
            description="Comprehensive accounting services to track, analyze, and report your financial information."
            link="/services/accounting"
          />

          <ServiceCard
            icon={<FileText size={28} />}
            title="Taxation"
            description="Expert tax preparation and planning services to optimize your tax position."
            link="/services/taxation"
          />

          <ServiceCard
            icon={<DollarSign size={28} />}
            title="Payroll Services"
            description="Efficient payroll processing to ensure your employees are paid accurately and on time."
            link="/services/payroll-services"
          />

          <ServiceCard
            icon={<BarChart2 size={28} />}
            title="Financial Reporting"
            description="Detailed financial reports to help you understand your business performance."
            link="/services/financial-reporting"
          />

          <ServiceCard
            icon={<TrendingUp size={28} />}
            title="Business Advisory"
            description="Strategic advice to help your business grow and succeed in a competitive market."
            link="/services/business-advisory"
          />
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-block bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
