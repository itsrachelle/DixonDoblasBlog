import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Twitter, Linkedin } from "lucide-react";
import { insertContactSchema, insertSubscriberSchema } from "@shared/schema";
import type { InsertContact, InsertSubscriber } from "@shared/schema";
import { submitContact, subscribeNewsletter } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export default function Contact() {
  const { toast } = useToast();

  // Contact form
  const contactForm = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: submitContact,
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      contactForm.reset();
    },
    onError: () => {
      toast({
        title: "Failed to send message",
        description: "Please try again later.",
        variant: "destructive",
      });
    },
  });

  // Newsletter form
  const newsletterForm = useForm<InsertSubscriber>({
    resolver: zodResolver(insertSubscriberSchema),
    defaultValues: {
      email: "",
    },
  });

  const newsletterMutation = useMutation({
    mutationFn: subscribeNewsletter,
    onSuccess: () => {
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive new stories and insights in your inbox.",
      });
      newsletterForm.reset();
    },
    onError: (error: any) => {
      const message = error?.message || "Failed to subscribe. Please try again.";
      toast({
        title: "Subscription failed",
        description: message,
        variant: "destructive",
      });
    },
  });

  const onContactSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  const onNewsletterSubmit = (data: InsertSubscriber) => {
    newsletterMutation.mutate(data);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative mountain-gradient py-20">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Let's Connect</h1>
          <p className="text-xl text-white/80">
            I'd love to hear your story or answer any questions you might have
          </p>
        </div>
      </div>
      
      {/* Contact Form Section */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-gray-800 mb-6">Send me a message</h2>
              <Form {...contactForm}>
                <form onSubmit={contactForm.handleSubmit(onContactSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={contactForm.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={contactForm.control}
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
                  </div>
                  
                  <FormField
                    control={contactForm.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input {...field} value={field.value || ""} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={contactForm.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            rows={6}
                            placeholder="Tell me your story, ask a question, or just say hello..."
                            className="resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-coral hover:bg-coral/90"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
            
            {/* Additional Info */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-gray-800 mb-6">Other ways to connect</h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-coral" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">dixon@dixondoblas.com</p>
                    <p className="text-sm text-gray-500">I usually respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Twitter className="w-6 h-6 text-coral" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">Twitter</h3>
                    <p className="text-gray-600">@dixondoblas</p>
                    <p className="text-sm text-gray-500">Follow for writing updates and thoughts</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Linkedin className="w-6 h-6 text-coral" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">LinkedIn</h3>
                    <p className="text-gray-600">dixon-doblas</p>
                    <p className="text-sm text-gray-500">Professional updates and writing insights</p>
                  </div>
                </div>
              </div>
              
              {/* Newsletter Signup */}
              <div className="mountain-gradient rounded-2xl p-8 text-white">
                <h3 className="font-serif text-xl font-bold mb-4">Stay in the loop</h3>
                <p className="mb-6 text-white/90">
                  Get new stories and writing insights delivered to your inbox. No spam, just honest words when I have something worth sharing.
                </p>
                <Form {...newsletterForm}>
                  <form onSubmit={newsletterForm.handleSubmit(onNewsletterSubmit)} className="space-y-4">
                    <FormField
                      control={newsletterForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input 
                              {...field}
                              type="email"
                              placeholder="Your email address"
                              className="text-gray-800"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button 
                      type="submit" 
                      className="w-full bg-white text-gray-800 hover:bg-gray-100"
                      disabled={newsletterMutation.isPending}
                    >
                      {newsletterMutation.isPending ? "Subscribing..." : "Subscribe to Newsletter"}
                    </Button>
                  </form>
                </Form>
                <p className="text-xs text-white/70 mt-3">
                  Unsubscribe anytime. I respect your privacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
