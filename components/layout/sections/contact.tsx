
"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner"; // or your preferred toast library

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters").max(255),
  lastName: z.string().min(2, "Last name must be at least 2 characters").max(255),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(2).max(255),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

type ContactInfo = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string; // Make href optional
};

const CONTACT_INFO: ContactInfo[] = [
  {
    icon: Mail,
    label: "Mail US",
    value: "dev.khalidhossain@gmail.com",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "Khalid Hossain Badhon",
    href: "https://www.linkedin.com/in/khalidhossainbadhon/",
  },
    {
    icon: GithubIcon,
    label: "GitHub",
    value: "Khalid Hossain Badhon",
    href: "https://www.github.com/badhon252/",
  },
] as const;

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        toast.error(data.message || "Failed to send message.");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="container py-24 sm:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div>
          <div className="mb-4">
            <h2 className="text-lg text-primary mb-2 tracking-wider">
              Contact
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold">Connect With Me</h2>
          </div>
          
          <p className="mb-8 text-muted-foreground lg:w-5/6">
            Frontend engineer and future solopreneur from Dhaka, Bangladesh,
            passionate about creating innovative digital experiences.
          </p>

          <div className="flex flex-col gap-4">
            {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
              <div key={label}>
                <div className="flex gap-2 mb-1">
                  <Icon className="w-5 h-5" />
                  <div className="font-bold">{label}</div>
                </div>
                <div>
                  {href ? (
                    <Link 
                      href={href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:underline hover:text-primary transition-colors"
                    >
                      {value}
                    </Link>
                  ) : (
                    value
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <Card className="bg-muted/60 dark:bg-card">
          <CardHeader className="text-primary text-2xl" />
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid w-full gap-4"
              >
                {/* Name Fields */}
                <div className="flex flex-col md:flex-row gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Khalid" 
                            disabled={isSubmitting}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Hossain" 
                            disabled={isSubmitting}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="dev.khalidhossain@gmail.com"
                          disabled={isSubmitting}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Subject Field */}
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g., Freelance Project Inquiry, Job Opportunity, Collaboration"
                          disabled={isSubmitting}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Message Field */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={5}
                          placeholder="Your message..."
                          className="resize-none"
                          disabled={isSubmitting}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
               <Button variant="default" className="mt-4 w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send message"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};