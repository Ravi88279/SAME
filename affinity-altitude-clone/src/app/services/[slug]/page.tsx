import Link from 'next/link'
import MainLayout from '@/components/layout/MainLayout'
import { Button } from '@/components/ui/button'

// Define service data for each type
const serviceDetails = {
  'bookkeeping': {
    title: 'Bookkeeping Services',
    description: 'Accurate and timely recording of financial transactions to keep your books in order.',
    content: `
      <p>Our comprehensive bookkeeping services offer a solid foundation for your business's financial management. We meticulously record and organize financial transactions, ensuring your books remain accurate and up-to-date.</p>

      <h3>Our Bookkeeping Services Include:</h3>
      <ul>
        <li>Recording daily transactions and reconciliations</li>
        <li>Accounts payable and receivable management</li>
        <li>Bank and credit card reconciliations</li>
        <li>General ledger maintenance</li>
        <li>Financial statement preparation</li>
        <li>Custom reporting based on your business needs</li>
      </ul>

      <p>With our bookkeeping services, you'll have the clarity and confidence to make informed business decisions based on accurate financial data.</p>
    `
  },
  'accounting': {
    title: 'Accounting Services',
    description: 'Comprehensive accounting services to track, analyze, and report your financial information.',
    content: `
      <p>Our accounting services go beyond basic bookkeeping to provide deeper insights into your financial performance. We deliver comprehensive accounting solutions designed to give you a complete picture of your business's financial health.</p>

      <h3>Our Accounting Services Include:</h3>
      <ul>
        <li>Financial statement preparation and analysis</li>
        <li>Budgeting and forecasting</li>
        <li>Cash flow management and analysis</li>
        <li>Cost accounting and management</li>
        <li>Fixed asset accounting</li>
        <li>Financial reporting for management decisions</li>
      </ul>

      <p>Let our experienced team handle your accounting needs so you can focus on running and growing your business.</p>
    `
  },
  'taxation': {
    title: 'Taxation Services',
    description: 'Expert tax preparation and planning services to optimize your tax position.',
    content: `
      <p>Our taxation services help you navigate complex tax regulations while ensuring compliance and optimizing your tax position. We work proactively to identify tax-saving opportunities and minimize your tax liability.</p>

      <h3>Our Taxation Services Include:</h3>
      <ul>
        <li>Tax return preparation for individuals and businesses</li>
        <li>Tax planning and strategy development</li>
        <li>GST/HST compliance and reporting</li>
        <li>Corporate tax planning and compliance</li>
        <li>Tax audit support and representation</li>
        <li>International tax planning</li>
      </ul>

      <p>Stay compliant and minimize your tax burden with our expert taxation services.</p>
    `
  },
  'payroll-services': {
    title: 'Payroll Services',
    description: 'Efficient payroll processing to ensure your employees are paid accurately and on time.',
    content: `
      <p>Our comprehensive payroll services ensure that your employees are paid accurately and on time, while keeping your business compliant with all relevant regulations. We handle all aspects of payroll processing so you can focus on your core business activities.</p>

      <h3>Our Payroll Services Include:</h3>
      <ul>
        <li>Complete payroll processing and administration</li>
        <li>Direct deposit and check services</li>
        <li>Tax withholding and remittance</li>
        <li>Payroll tax filing and compliance</li>
        <li>Year-end reporting and document preparation</li>
        <li>Employee self-service options</li>
      </ul>

      <p>Trust our experts to manage your payroll with precision and efficiency, ensuring compliance and employee satisfaction.</p>
    `
  },
  'financial-reporting': {
    title: 'Financial Reporting',
    description: 'Detailed financial reports to help you understand your business performance.',
    content: `
      <p>Our financial reporting services provide you with clear, comprehensive reports that give you valuable insights into your business's financial performance. We translate complex financial data into understandable information you can use to make informed decisions.</p>

      <h3>Our Financial Reporting Services Include:</h3>
      <ul>
        <li>Preparation of financial statements (income statements, balance sheets, cash flow statements)</li>
        <li>Customized management reports</li>
        <li>Financial ratio analysis and interpretation</li>
        <li>Variance analysis and performance metrics</li>
        <li>Industry benchmarking and comparisons</li>
        <li>Board and investor presentation preparation</li>
      </ul>

      <p>Get the financial clarity you need to make strategic decisions with our expert financial reporting services.</p>
    `
  },
  'business-advisory': {
    title: 'Business Advisory',
    description: 'Strategic advice to help your business grow and succeed in a competitive market.',
    content: `
      <p>Our business advisory services provide strategic guidance to help your business grow and succeed in today's competitive market. We work as your trusted partner, offering insights and solutions to address your most pressing business challenges.</p>

      <h3>Our Business Advisory Services Include:</h3>
      <ul>
        <li>Business performance analysis and improvement strategies</li>
        <li>Strategic planning and implementation</li>
        <li>Growth and expansion planning</li>
        <li>Profit improvement strategies</li>
        <li>Business risk assessment and management</li>
        <li>Succession planning and exit strategies</li>
      </ul>

      <p>Partner with our experienced advisors to unlock your business's full potential and achieve your long-term goals.</p>
    `
  }
};

// Fallback data for services that aren't explicitly defined
const defaultService = {
  title: 'Professional Financial Services',
  description: 'Expert financial services tailored to your business needs.',
  content: `
    <p>At Affinity Altitude Accumate, we provide expert financial services designed to help your business thrive. Our team of professionals is dedicated to delivering accurate, timely, and valuable financial solutions.</p>

    <p>Please contact us to learn more about how we can assist you with your specific needs.</p>
  `
};

// Generate static params for static export
export function generateStaticParams() {
  return Object.keys(serviceDetails).map(slug => ({
    slug
  }));
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  // Get the service details or use the default if not found
  const service = serviceDetails[params.slug as keyof typeof serviceDetails] || {
    ...defaultService,
    title: `${params.slug.charAt(0).toUpperCase() + params.slug.slice(1).replace('-', ' ')} Services`
  };

  return (
    <MainLayout>
      {/* Hero section */}
      <section className="bg-secondary text-white py-16">
        <div className="container text-center">
          <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {service.description}
          </p>
        </div>
      </section>

      {/* Service Detail Content */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: service.content }}
            />

            <div className="mt-12 pt-6 border-t border-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-secondary">Ready to get started?</h3>
              <p className="text-gray-600 mb-6">
                Contact us today to discuss how our {service.title.toLowerCase()} can be tailored to meet your specific needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/services">View All Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
