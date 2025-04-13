"use client";

import { motion } from "framer-motion";
import { timelineData } from "@/data/timeline";

export default function TimelineSection() {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:translate-x-px"></div>

      {/* Timeline items */}
      <div className="space-y-12">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`relative flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-primary transform -translate-x-1/2 md:-translate-x-3 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-background teleport-orb"></div>
            </div>

            {/* Content */}
            <div
              className={`md:w-1/2 ${
                index % 2 === 0 ? "md:pr-12" : "md:pl-12"
              }`}
            >
              <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <div className="text-sm text-primary font-medium mb-2">
                  {item.date}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
