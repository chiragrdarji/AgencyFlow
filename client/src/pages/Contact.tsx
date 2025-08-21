import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { contactFormSchema, type ContactFormData } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { MapPin, Phone, Mail, Clock, MessageSquare, Calendar, HeadphonesIcon, Loader2 } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to send message");
      }

      return response.json();
    },
    onSuccess: (data: any) => {
      toast({
        title: "Message Sent!",
        description: data.message || "We'll get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: (error: any) => {
      console.error("Contact form error:", error);
      toast({
        title: "Error",
        description: error.message || "Sorry, there was an error sending your message. Please try again.",
        variant: "destructive"
      });
    }
  });

  const handleSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak with our technical team",
      contact: "+1 630 861 8263",
      availability: "",
      // availability: "Mon-Fri, 9am-6pm EST",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email",
      contact: "support@smartsync.one",
      availability: "Response within 24 hours",
    },
    {
      icon: Calendar,
      title: "Schedule a Demo",
      description: "Book a personalized demonstration",
      contact: "Book online",
      availability: "Available daily",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            data-testid="text-page-title"
          >
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team for support, sales inquiries, or to
            schedule a personalized demonstration of the Smart Sync One.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Methods */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h2>
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
                          <h3
                            className="font-bold text-gray-900 mb-1"
                            data-testid={`contact-method-${index}`}
                          >
                            {method.title}
                          </h3>
                          <p className="text-sm text-gray-600 mb-2">
                            {method.description}
                          </p>
                          {method.title === "Schedule a Demo" ? (
                            <a
                              href="https://calendly.com/dental-support-varianceinfotech/book-a-demo?month=2025-08"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-1 text-sm font-medium text-blue-600 hover:underline"
                            >
                              {method.contact}
                            </a>
                          ) : method.title === "Phone Support" ? (
                            <a
                              href={`tel:${method.contact.replace(/\s+/g, "")}`}
                              className="font-medium text-primary mb-1"
                              data-testid={`contact-info-${index}`}
                            >
                              {method.contact}
                            </a>
                          ) : method.title === "Email Support" ? (
                            <a
                              href={`mailto:${method.contact}`}
                              className="font-medium text-primary mb-1"
                              data-testid={`contact-info-${index}`}
                            >
                              {method.contact}
                            </a>
                          ) : (
                            <div
                              className="font-medium text-primary mb-1"
                              data-testid={`contact-info-${index}`}
                            >
                              {method.contact}
                            </div>
                          )}

                          <div className="text-xs text-gray-500">
                            {method.availability}
                          </div>
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
                  <div data-testid="text-company-name">
                    Smart Sync One
                  </div>
                  <div data-testid="text-company-address">
                    30 N Gould St. Sheridan,
                    <br />
                    WY 82801
                    <br />
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
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name *</FormLabel>
                            <FormControl>
                              <Input {...field} data-testid="input-name" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company *</FormLabel>
                            <FormControl>
                              <Input {...field} data-testid="input-company" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input
                                type="text"
                                {...field}
                                data-testid="input-email"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone *</FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                {...field}
                                data-testid="input-phone"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject *</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger data-testid="select-subject">
                                <SelectValue placeholder="Select a subject" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="General Inquiry">
                                General Inquiry
                              </SelectItem>
                              <SelectItem value="Sales Question">
                                Sales Question
                              </SelectItem>
                              <SelectItem value="Technical Support">
                                Technical Support
                              </SelectItem>
                              <SelectItem value="Request Demo">
                                Request Demo
                              </SelectItem>
                              <SelectItem value="Integration Help">
                                Integration Help
                              </SelectItem>
                              <SelectItem value="Billing Question">
                                Billing Question
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message *</FormLabel>
                          <FormControl>
                            <Textarea
                              rows={6}
                              placeholder="Tell us how we can help you..."
                              {...field}
                              data-testid="textarea-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary text-white hover:bg-primary-dark"
                      disabled={contactMutation.isPending}
                      data-testid="button-submit"
                    >
                      {contactMutation.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Support Hours */}
        {/* <Card className="mb-16">
          <CardHeader>
            <CardTitle className="flex items-center justify-center">
              <Clock className="mr-2" size={20} />
              Support Hours
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8 text-center">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Phone Support
                </h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>Monday - Friday: 9:00 AM - 6:00 PM EST</div>
                  <div>Saturday: 10:00 AM - 2:00 PM EST</div>
                  <div>Sunday: Closed</div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Email Support
                </h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>Available 24/7</div>
                  <div>Response within 24 hours</div>
                  <div>Critical issues: Within 4 hours</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card> */}

        {/* Emergency Support */}
        <Card className="bg-red-50 border-red-200">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <HeadphonesIcon className="text-red-600" size={32} />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Need Emergency Support?
            </h2>
            <p className="text-gray-600 mb-6">
              For critical sync failures or system outages affecting patient
              data, contact our emergency support line.
            </p>
            <div className="space-y-2">
              <div className="font-semibold text-gray-900">
                <a href="tel:+16308618263" data-testid="text-phone">
                  Emergency Hotline: +1 630 861 8263
                </a>
              </div>
              <div className="text-sm text-gray-600">
                Available 24/7 for critical issues
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
