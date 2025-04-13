/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Globe, Code, Rocket, Briefcase, Home } from "lucide-react";

export default function FutureVision() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center"
      >
        <h3 className="text-2xl font-bold mb-2">
          Who is Khalid in <span className="text-gradient">2034?</span>
        </h3>
        <p className="text-muted-foreground">
          My vision for the future and where I see myself in 10 years.
        </p>
      </motion.div>

      <Tabs defaultValue="entrepreneur" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="entrepreneur">
            <Rocket className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Entrepreneur</span>
          </TabsTrigger>
          <TabsTrigger value="developer">
            <Code className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Developer</span>
          </TabsTrigger>
          <TabsTrigger value="nomad">
            <Globe className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Digital Nomad</span>
          </TabsTrigger>
          <TabsTrigger value="business">
            <Briefcase className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Business</span>
          </TabsTrigger>
          <TabsTrigger value="lifestyle">
            <Home className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Lifestyle</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="entrepreneur">
          <Card>
            <CardHeader>
              <CardTitle>Successful Solopreneur</CardTitle>
              <CardDescription>
                Building and scaling SaaS products
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                By 2034, I've built a portfolio of successful SaaS products that
                generate significant passive income. I've achieved my goal of
                creating a billion-dollar SaaS company that solves real problems
                for businesses and individuals around the world.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="developer">
          <Card>
            <CardHeader>
              <CardTitle>Tech Innovator</CardTitle>
              <CardDescription>
                Pushing the boundaries of web technology
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                I've become known for creating innovative web experiences that
                push the boundaries of what's possible. I regularly contribute
                to open-source projects and share my knowledge through writing,
                speaking, and mentoring other developers.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="nomad">
          <Card>
            <CardHeader>
              <CardTitle>Global Citizen</CardTitle>
              <CardDescription>
                Living and working from anywhere
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                I've embraced the digital nomad lifestyle, working from
                different countries throughout the year. This freedom allows me
                to experience diverse cultures, gain new perspectives, and build
                a global network of friends and collaborators.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="business">
          <Card>
            <CardHeader>
              <CardTitle>Business Portfolio</CardTitle>
              <CardDescription>Diversified income streams</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Beyond my main SaaS business, I've diversified my income through
                strategic investments in other startups, real estate, and
                passive income streams. This portfolio approach provides
                financial security and opportunities for growth.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="lifestyle">
          <Card>
            <CardHeader>
              <CardTitle>Balanced Life</CardTitle>
              <CardDescription>
                Health, relationships, and personal growth
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                I've achieved a balanced lifestyle that prioritizes health,
                relationships, and personal growth alongside professional
                success. I make time for regular exercise, meditation, reading,
                and spending quality time with family and friends.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
