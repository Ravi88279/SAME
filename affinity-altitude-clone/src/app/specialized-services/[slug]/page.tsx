import Link from 'next/link'
import MainLayout from '@/components/layout/MainLayout'
import { Button } from '@/components/ui/button'

// Define specialized service data
const specializedServiceDetails = {
  'financial-analysis': {
    title: 'Financial Analysis',
    description: 'In-depth analysis of financial data to identify trends, opportunities, and areas for improvement in your business operations.',
    content: `
      <p>Our financial analysis services provide you with in-depth insights into your business's financial performance, helping you identify trends, opportunities, and areas for improvement. We go beyond basic reporting to deliver actionable intelligence.</p>

      <h3>Our Financial Analysis Services Include:</h3>
      <ul>
        <li>Comprehensive financial performance analysis</li>
        <li>Trend identification and forecasting</li>
        <li>Profitability and margin analysis</li>
        <li>Cost structure optimization</li>
        <li>Operational efficiency assessment</li>
        <li>Key performance indicator (KPI) development and tracking</li>
      </ul>

      <p>Gain the financial insights you need to make strategic decisions and improve your business performance.</p>
    `
  },
  'business-structure': {
    title: 'Business Structure Setup',
    description: 'Guidance on choosing and establishing the optimal business structure for your needs, including company formation, partnerships, and trusts.',
    content: `
      <p>Selecting the right business structure is crucial for tax efficiency, legal protection, and operational success. Our business structure setup services provide expert guidance to help you choose and implement the optimal structure for your specific needs.</p>

      <h3>Our Business Structure Services Include:</h3>
      <ul>
        <li>Business structure assessment and recommendations</li>
        <li>Company formation and registration</li>
        <li>Partnership agreement development</li>
        <li>Trust establishment and administration</li>
        <li>Tax structure optimization</li>
        <li>Business restructuring for established entities</li>
      </ul>

      <p>Ensure your business has the right foundation with our professional business structure services.</p>
    `
  },
  'cash-flow': {
    title: 'Cash Flow Management',
    description: 'Strategies and tools to monitor, analyze, and improve cash flow, ensuring your business maintains adequate liquidity for operations and growth.',
    content: `
      <p>Effective cash flow management is essential for business survival and growth. Our cash flow management services help you optimize your cash position, ensuring you have adequate liquidity to meet obligations and pursue opportunities.</p>

      <h3>Our Cash Flow Management Services Include:</h3>
      <ul>
        <li>Cash flow forecasting and planning</li>
        <li>Working capital optimization</li>
        <li>Accounts receivable and payable management</li>
        <li>Cash flow improvement strategies</li>
        <li>Cash conversion cycle analysis</li>
        <li>Liquidity management</li>
      </ul>

      <p>Take control of your business's financial health with our comprehensive cash flow management services.</p>
    `
  },
  'smsf': {
    title: 'SMSF Accounting',
    description: 'Specialized accounting and compliance services for Self-Managed Super Funds, helping you navigate complex regulatory requirements.',
    content: `
      <p>Managing a Self-Managed Super Fund (SMSF) comes with complex responsibilities and regulatory requirements. Our SMSF accounting services provide expert guidance and support to help you maximize your retirement benefits while maintaining compliance.</p>

      <h3>Our SMSF Accounting Services Include:</h3>
      <ul>
        <li>SMSF establishment and administration</li>
        <li>Investment strategy development and implementation</li>
        <li>Financial statement preparation</li>
        <li>Audit preparation and support</li>
        <li>Regulatory compliance management</li>
        <li>Pension and benefit payment administration</li>
      </ul>

      <p>Trust our experts to help you navigate the complexities of SMSF management and achieve your retirement goals.</p>
    `
  },
  'audit-protection': {
    title: 'Audit Protection',
    description: 'Proactive measures to ensure your financial records are audit-ready, with support and representation in case of regulatory audits.',
    content: `
      <p>Tax audits can be stressful and time-consuming. Our audit protection services help you prepare for audits proactively and provide expert representation if you're selected for an audit, minimizing disruption to your business.</p>

      <h3>Our Audit Protection Services Include:</h3>
      <ul>
        <li>Audit risk assessment and minimization</li>
        <li>Documentation and record-keeping systems</li>
        <li>Pre-audit financial review and preparation</li>
        <li>Audit representation and correspondence management</li>
        <li>Negotiation with tax authorities</li>
        <li>Post-audit implementation of recommendations</li>
      </ul>

      <p>Gain peace of mind knowing you're prepared for audits and have expert support when you need it.</p>
    `
  },
  'budgeting': {
    title: 'Budgeting & Forecasting',
    description: 'Development of realistic budgets and financial forecasts to guide business planning, resource allocation, and performance evaluation.',
    content: `
      <p>Effective budgeting and forecasting are essential for strategic planning and business success. Our budgeting and forecasting services help you develop realistic financial plans that align with your business goals and provide a framework for decision-making.</p>

      <h3>Our Budgeting & Forecasting Services Include:</h3>
      <ul>
        <li>Comprehensive budget development and management</li>
        <li>Financial forecasting and scenario planning</li>
        <li>Capital expenditure budgeting</li>
        <li>Cash flow projections</li>
        <li>Budget variance analysis and reporting</li>
        <li>Rolling forecasts and budget updates</li>
      </ul>

      <p>Transform your financial planning process with our expert budgeting and forecasting services.</p>
    `
  }
};

// Fallback data for services that aren't explicitly defined
const defaultSpecializedService = {
  title: 'Specialized Financial Services',
  description: 'Expert specialized financial services tailored to your unique business needs.',
  content: `
    <p>At Affinity Altitude Accumate, we provide specialized financial services designed to address specific challenges and opportunities in your business. Our team of experts is ready to deliver tailored solutions that help you achieve your goals.</p>

    <p>Please contact us to learn more about how our specialized services can benefit your business.</p>
  `
};

// Generate static params for static export
export function generateStaticParams() {
  return Object.keys(specializedServiceDetails).map(slug => ({
    slug
  }));
}

export default function SpecializedServiceDetailPage({ params }: { params: { slug: string } }) {
  // Get the service details or use the default if not found
  const service = specializedServiceDetails[params.slug as keyof typeof specializedServiceDetails] || {
    ...defaultSpecializedService,
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
                Contact us today to discuss how our specialized {service.title.toLowerCase()} services can benefit your business.
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
