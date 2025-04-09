import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FaqSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services and how we can help your business.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-gray-200 rounded-md overflow-hidden shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left">
                What services do you offer?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-600">
                We offer a comprehensive range of financial services including bookkeeping, accounting, taxation,
                payroll processing, financial reporting, and business advisory services. Each service is tailored to
                meet the specific needs of your business.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-gray-200 rounded-md overflow-hidden shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left">
                How much do your services cost?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-600">
                Our pricing is based on the specific services you require and the complexity of your business needs.
                We offer transparent, fixed-fee structures so you know exactly what you're paying for.
                Contact us for a personalized quote.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-gray-200 rounded-md overflow-hidden shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left">
                How often will we meet to discuss my finances?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-600">
                This depends on your needs and preferences. We typically schedule quarterly reviews for most clients,
                but we can arrange more frequent meetings if your business requires closer financial monitoring.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-gray-200 rounded-md overflow-hidden shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left">
                Can you help with tax planning and minimization?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-600">
                Yes, our tax specialists are experienced in developing strategies to legally minimize your tax
                obligations while ensuring full compliance with tax laws and regulations.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-gray-200 rounded-md overflow-hidden shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left">
                Do you work with businesses in specific industries?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-600">
                We serve clients across a wide range of industries. Our team has particular expertise in retail,
                professional services, construction, healthcare, and hospitality, but we welcome businesses from all sectors.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default FaqSection
