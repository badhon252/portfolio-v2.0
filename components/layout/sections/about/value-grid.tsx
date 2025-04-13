/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import { valuesData } from "@/data/values";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ValueGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {valuesData.map((value, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Card className="h-full transition-all duration-300 hover:shadow-md hover:border-primary/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <value.icon className="h-5 w-5 text-primary" />
                {value.title}
              </CardTitle>
              <CardDescription>{value.subtitle}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{value.description}</p>
              {value.quote && (
                <blockquote className="mt-4 border-l-2 border-primary pl-4 italic text-muted-foreground">
                  "{value.quote}"
                </blockquote>
              )}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
