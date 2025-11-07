import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import type { InsertContact } from "@shared/schema";

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    submitMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Elegance Avenue, Beauty District, NY 10001",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "(555) 123-4567",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@glamoursalon.com",
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Mon-Sat: 9AM-7PM, Sun: 10AM-5PM",
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1
            className="font-serif text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent"
            data-testid="text-contact-title"
          >
            Get in Touch
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-pink-400 mx-auto mb-6 rounded-full glow-primary-sm" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-contact-description">
            Book your appointment or reach out with any questions. We're here to help you look and feel amazing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="glass-strong p-8" data-testid="card-contact-form">
              <h2 className="font-serif text-2xl font-semibold mb-6" data-testid="text-form-heading">
                Book an Appointment
              </h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Your full name"
                            data-testid="input-name"
                            className="glass"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              placeholder="your.email@example.com"
                              data-testid="input-email"
                              className="glass"
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
                          <FormLabel>Phone (Optional)</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="tel"
                              placeholder="(555) 123-4567"
                              data-testid="input-phone"
                              className="glass"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Interested In</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger
                              data-testid="select-service"
                              className="glass"
                            >
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="hair-styling">Hair Styling</SelectItem>
                            <SelectItem value="makeup">Makeup Artistry</SelectItem>
                            <SelectItem value="spa">Spa & Wellness</SelectItem>
                            <SelectItem value="consultation">General Consultation</SelectItem>
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
                            {...field}
                            placeholder="Tell us about your desired appointment or ask any questions..."
                            rows={5}
                            data-testid="input-message"
                            className="glass resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full glow-primary-sm"
                    disabled={submitMutation.isPending}
                    data-testid="button-submit"
                  >
                    {submitMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="glass p-6 hover:shadow-lg hover:shadow-primary/20 transition-smooth"
                data-testid={`card-info-${index}`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" data-testid={`text-info-title-${index}`}>{info.title}</h3>
                    <p className="text-sm text-muted-foreground" data-testid={`text-info-content-${index}`}>{info.content}</p>
                  </div>
                </div>
              </Card>
            ))}

            <Card className="glass-strong p-6">
              <h3 className="font-serif text-lg font-semibold mb-3" data-testid="text-social-heading">
                Follow Us
              </h3>
              <p className="text-sm text-muted-foreground mb-4" data-testid="text-social-description">
                Stay updated with our latest styles and special offers
              </p>
              <div className="flex gap-3">
                {["Instagram", "Facebook", "Pinterest"].map((social) => (
                  <button
                    key={social}
                    className="px-4 py-2 rounded-md bg-accent hover-elevate text-sm transition-smooth"
                    data-testid={`button-social-${social.toLowerCase()}`}
                  >
                    {social}
                  </button>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
