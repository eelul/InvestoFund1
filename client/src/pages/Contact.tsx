import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { INQUIRY_TYPES } from "@/lib/constants";
import BrandSuccess from "@/components/BrandSuccess";

const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  inquiryType: z.string().min(1, "Please select an inquiry type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      inquiryType: "",
      message: "",
    },
  });

  const createInquiryMutation = useMutation({
    mutationFn: async (inquiryData: FormData) => {
      const response = await apiRequest("POST", "/api/contact-inquiries", inquiryData);
      return response.json();
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      await createInquiryMutation.mutateAsync(data);
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll respond within 24 hours.",
      });

      setIsSubmitted(true);
      form.reset();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-brand-dark mb-6">Get in Touch</h1>
            <p className="text-xl text-brand-gray mb-12">
              Have questions? We're here to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-brand-dark">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <BrandSuccess 
                        title="Thank You!"
                        message="Your message has been sent successfully. We'll get back to you within 24 hours."
                        size="lg"
                        className="mb-6"
                      />
                      <Button 
                        onClick={() => setIsSubmitted(false)}
                        className="bg-brand-blue hover:bg-blue-600"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>First Name</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Last Name</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input type="email" {...field} />
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
                              <FormLabel>Phone (Optional)</FormLabel>
                              <FormControl>
                                <Input type="tel" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="inquiryType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>I'm interested in...</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select an option" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {INQUIRY_TYPES.map((type) => (
                                    <SelectItem key={type} value={type}>
                                      {type}
                                    </SelectItem>
                                  ))}
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
                              <FormLabel>Message</FormLabel>
                              <FormControl>
                                <Textarea 
                                  rows={4} 
                                  placeholder="Tell us more about your inquiry..."
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button 
                          type="submit" 
                          className="w-full bg-brand-blue hover:bg-blue-600"
                          disabled={createInquiryMutation.isPending}
                        >
                          {createInquiryMutation.isPending ? "Sending..." : "Send Message"}
                        </Button>
                      </form>
                    </Form>
                  )}
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Contact Details */}
                <Card className="brand-gradient text-white">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <Phone className="w-6 h-6 mt-1" />
                        <div>
                          <div className="font-medium">Phone</div>
                          <div className="opacity-90">(555) 123-4567</div>
                          <div className="text-sm opacity-75">Available during business hours</div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <Mail className="w-6 h-6 mt-1" />
                        <div>
                          <div className="font-medium">Email</div>
                          <div className="opacity-90">info@investofund.com</div>
                          <div className="text-sm opacity-75">We respond within 24 hours</div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <MapPin className="w-6 h-6 mt-1" />
                        <div>
                          <div className="font-medium">Office</div>
                          <div className="opacity-90">
                            123 Business Center<br />
                            New York, NY 10001
                          </div>
                          <div className="text-sm opacity-75">By appointment only</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Office Hours */}
                <Card className="bg-white shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-brand-dark flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      Office Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-brand-gray">Monday - Friday</span>
                        <span className="text-brand-dark font-medium">9:00 AM - 6:00 PM EST</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-brand-gray">Saturday</span>
                        <span className="text-brand-dark font-medium">10:00 AM - 2:00 PM EST</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-brand-gray">Sunday</span>
                        <span className="text-brand-dark font-medium">Closed</span>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                      <p className="text-sm text-brand-gray">
                        <strong>Note:</strong> For urgent matters outside business hours, 
                        please send an email and we'll respond as soon as possible.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="bg-white shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-brand-dark">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-3">
                      <Button 
                        variant="outline" 
                        className="justify-start border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-medium"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Schedule a Call
                      </Button>
                      <Button 
                        variant="outline" 
                        className="justify-start border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Request Information
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">
              Common Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-brand-dark mb-2">How quickly will you respond?</h3>
                  <p className="text-brand-gray text-sm">
                    We respond to all inquiries within 24 hours during business days. 
                    Urgent matters are typically addressed within 4 hours.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-brand-dark mb-2">Can I schedule a consultation?</h3>
                  <p className="text-brand-gray text-sm">
                    Yes! We offer free consultations for investors and business owners. 
                    Contact us to schedule a convenient time.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-brand-dark mb-2">Do you offer investment advice?</h3>
                  <p className="text-brand-gray text-sm">
                    We provide information about our investment opportunities but do not 
                    offer personalized investment advice. Consult your financial advisor.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-brand-dark mb-2">What documents will I need?</h3>
                  <p className="text-brand-gray text-sm">
                    Document requirements vary by service. We'll provide a complete list 
                    during your consultation or application process.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
