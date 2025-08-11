import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, MessageSquare, Calendar, HeadphonesIcon } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: ""
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak with our technical team",
      contact: "(555) 123-4567",
      availability: "Mon-Fri, 9am-6pm EST"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email",
      contact: "support@dentrixconnector.com",
      availability: "Response within 24 hours"
    },
    {
      icon: Calendar,
      title: "Schedule a Demo",
      description: "Book a personalized demonstration",
      contact: "Book online",
      availability: "Available daily"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6" data-testid="text-page-title">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team for support, sales inquiries, or to schedule a personalized demonstration of the Dentrix Connector.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Methods */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <div className="space-y-6">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                          <IconComponent className="text-white" size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 mb-1" data-testid={`contact-method-${index}`}>
                            {method.title}
                          </h3>
                          <p className="text-sm text-gray-600 mb-2">{method.description}</p>
                          <div className="font-medium text-primary mb-1" data-testid={`contact-info-${index}`}>
                            {method.contact}
                          </div>
                          <div className="text-xs text-gray-500">{method.availability}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Company Information */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2" size={20} />
                  Office Location
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2 text-sm text-gray-600">
                  <div data-testid="text-company-name">Dentrix Connector LLC</div>
                  <div data-testid="text-company-address">
                    123 Main Street, Suite 456<br />
                    Austin, TX 78701<br />
                    United States
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="mr-2" size={20} />
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        data-testid="input-name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        data-testid="input-company"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        data-testid="input-email"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        data-testid="input-phone"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Select onValueChange={(value) => handleInputChange('subject', value)}>
                      <SelectTrigger data-testid="select-subject">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="sales">Sales Question</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="demo">Request Demo</SelectItem>
                        <SelectItem value="integration">Integration Help</SelectItem>
                        <SelectItem value="billing">Billing Question</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us how we can help you..."
                      required
                      data-testid="textarea-message"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary text-white hover:bg-primary-dark"
                    data-testid="button-submit"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Support Hours */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="flex items-center justify-center">
              <Clock className="mr-2" size={20} />
              Support Hours
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8 text-center">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Phone Support</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>Monday - Friday: 9:00 AM - 6:00 PM EST</div>
                  <div>Saturday: 10:00 AM - 2:00 PM EST</div>
                  <div>Sunday: Closed</div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>Available 24/7</div>
                  <div>Response within 24 hours</div>
                  <div>Critical issues: Within 4 hours</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Support */}
        <Card className="bg-red-50 border-red-200">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <HeadphonesIcon className="text-red-600" size={32} />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Need Emergency Support?</h2>
            <p className="text-gray-600 mb-6">
              For critical sync failures or system outages affecting patient data, contact our emergency support line.
            </p>
            <div className="space-y-2">
              <div className="font-semibold text-gray-900">Emergency Hotline: (555) 999-SYNC</div>
              <div className="text-sm text-gray-600">Available 24/7 for critical issues</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
