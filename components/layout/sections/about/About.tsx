"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TimelineSection from "./timeline-section";
import ValueGrid from "./value-grid";
// import JourneyMap from "./journey-map";
import FutureVision from "./future-vision";
import PageTransition from "../../page-transition";

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="container max-w-5xl py-12" id="">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Frontend engineer and future solopreneur from Barishal, Bangladesh,
            passionate about creating innovative digital experiences.
          </p>
        </motion.div>

        <Tabs defaultValue="journey" className="mb-16">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="journey">My Journey</TabsTrigger>
            <TabsTrigger value="values">Values</TabsTrigger>
            {/* <TabsTrigger value="map">Journey Map</TabsTrigger> */}
            <TabsTrigger value="vision">Future Vision</TabsTrigger>
          </TabsList>
          <TabsContent value="journey" className="mt-0">
            <TimelineSection />
          </TabsContent>
          <TabsContent value="values" className="mt-0">
            <ValueGrid />
          </TabsContent>
          {/* <TabsContent value="map" className="mt-0">
            <JourneyMap />
          </TabsContent> */}
          <TabsContent value="vision" className="mt-0">
            <FutureVision />
          </TabsContent>
        </Tabs>
      </div>
    </PageTransition>
  );
}
