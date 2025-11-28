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
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { SectionHeader } from "../section-header";
import { motion } from "framer-motion";

const formSchema = z.object({
  firstName: z.string().min(2).max(255),
  lastName: z.string().min(2).max(255),
  email: z.string().email(),
  subject: z.string().min(2).max(255),
  message: z.string().min(10),
});

type FormValues = z.infer<typeof formSchema>;

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Mail Us",
    value: "dev.khalidhossain@gmail.com",
    href: "mailto:dev.khalidhossain@gmail.com",
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
    href: "https://github.com/badhon252/",
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

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (res.ok && data.success) {
        toast.success("Message sent!");
        form.reset();
      } else {
        toast.error(data.message || "Failed to send");
      }
    } catch {
      toast.error("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="container py-24 sm:py-32">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Contact Info */}
        <div>
          <SectionHeader
            title="Connect With Me"
            description="Frontend engineer and future solopreneur from Dhaka, Bangladesh, passionate about creating innovative digital experiences."
            alignment="left"
            className="mb-8"
          />

          <div className="flex flex-col gap-4">
            {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
              <div key={label}>
                <div className="flex gap-2 mb-1">
                  <Icon className="w-5 h-5" />
                  <div className="font-bold">{label}</div>
                </div>

                {href ? (
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-primary"
                  >
                    {value}
                  </Link>
                ) : (
                  value
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <Card className="bg-muted/60 dark:bg-card">
            <CardHeader className="text-primary text-2xl" />
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="grid gap-4"
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

                  {/* Email */}
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

                  {/* Subject */}
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Freelance Project Inquiry"
                            disabled={isSubmitting}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Message */}
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
                            disabled={isSubmitting}
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button className="w-full mt-4" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  );
};
