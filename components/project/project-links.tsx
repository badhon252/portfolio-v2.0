"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Twitter, Linkedin, Mail, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SocialLinks() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com",
      icon: Github,
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: Twitter,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: Linkedin,
    },
    {
      name: "Email",
      url: "mailto:hello@example.com",
      icon: Mail,
    },
    {
      name: "Website",
      url: "https://example.com",
      icon: Globe,
    },
  ]

  return (
    <div className="flex flex-wrap gap-3">
      {socialLinks.map((link, index) => (
        <motion.div
          key={link.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <Button variant="outline" size="icon" asChild>
            <Link href={link.url} target="_blank" rel="noopener noreferrer">
              <link.icon className="h-5 w-5" />
              <span className="sr-only">{link.name}</span>
            </Link>
          </Button>
        </motion.div>
      ))}
    </div>
  )
}
