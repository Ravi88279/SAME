import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Send } from 'lucide-react'

const ContactForm = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
      <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              Your Name<span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Email Address<span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Phone Field */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium">
              Phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+91 9274320379"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>

          {/* Business Name Field */}
          <div className="space-y-2">
            <Label htmlFor="business" className="text-sm font-medium">
              Your Business Name
            </Label>
            <Input
              id="business"
              type="text"
              placeholder="Your Business Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>

        {/* Service of Interest */}
        <div className="space-y-2">
          <Label htmlFor="service" className="text-sm font-medium">
            Service of Interest
          </Label>
          <select
            id="service"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
          >
            <option value="">Select a service</option>
            <option value="bookkeeping">Bookkeeping</option>
            <option value="accounting">Accounting</option>
            <option value="taxation">Taxation</option>
            <option value="payroll">Payroll Services</option>
            <option value="financial-reporting">Financial Reporting</option>
            <option value="business-advisory">Business Advisory</option>
          </select>
        </div>

        {/* Message Field */}
        <div className="space-y-2">
          <Label htmlFor="message" className="text-sm font-medium">
            Your Message<span className="text-red-500">*</span>
          </Label>
          <Textarea
            id="message"
            placeholder="How can we help you?"
            required
            rows={5}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>

        {/* Submit Button */}
        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
          <Send className="mr-2 h-4 w-4" /> Send Message
        </Button>
      </form>
    </div>
  )
}

export default ContactForm
