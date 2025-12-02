"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { recommendations } from "@/data/recommendations";
import AutoScroll from "embla-carousel-auto-scroll";
import { Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

export const TestimonialSection = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section id="recommendations" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Recommendations
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          What People Say
        </h2>
      </div>

      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          AutoScroll({
            speed: 1,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {recommendations.map((recommendation) => (
            <CarouselItem
              key={recommendation.id}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card h-full flex flex-col justify-between transform-gpu">
                <CardHeader>
                  <div className="flex flex-row items-start gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        src={recommendation.author.image}
                        alt={recommendation.author.name}
                      />
                      <AvatarFallback>
                        {recommendation.author.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">
                        {recommendation.author.name}
                      </CardTitle>
                      <CardDescription className="text-sm font-medium text-foreground/80">
                        {recommendation.author.title}
                      </CardDescription>
                      <p className="text-xs text-muted-foreground mt-1">
                        {recommendation.date} · {recommendation.relationship}
                      </p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pb-6 flex-grow">
                  <p className="text-muted-foreground leading-relaxed text-sm line-clamp-6">
                    &quot;{recommendation.content}&quot;
                  </p>
                  {recommendation.content.length > 300 && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="link"
                          className="p-0 h-auto font-normal text-primary mt-2"
                        >
                          Read more
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <div className="flex flex-row items-start gap-4 mb-4">
                            <Avatar className="h-12 w-12">
                              <AvatarImage
                                src={recommendation.author.image}
                                alt={recommendation.author.name}
                              />
                              <AvatarFallback>
                                {recommendation.author.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>

                            <div className="flex flex-col text-left">
                              <DialogTitle className="text-lg">
                                {recommendation.author.name}
                              </DialogTitle>
                              <DialogDescription className="text-sm font-medium text-foreground/80">
                                {recommendation.author.title}
                              </DialogDescription>
                              <p className="text-xs text-muted-foreground mt-1">
                                {recommendation.date} ·{" "}
                                {recommendation.relationship}
                              </p>
                            </div>
                          </div>
                        </DialogHeader>
                        <div className="text-muted-foreground leading-relaxed text-sm whitespace-pre-wrap">
                          &quot;{recommendation.content}&quot;
                        </div>
                      </DialogContent>
                    </Dialog>
                  )}
                </CardContent>

                <div className="px-6 pb-6 pt-0">
                  <Link
                    href={recommendation.author.linkedinUrl}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span>View on LinkedIn</span>
                  </Link>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />

        <div className="py-2 text-center text-sm text-muted-foreground mt-4 flex justify-center gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                index + 1 === current ? "bg-primary" : "bg-muted-foreground/30"
              }`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
};
