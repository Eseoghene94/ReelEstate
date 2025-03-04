"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ArrowLeft, ArrowRight, Quote } from "lucide-react";

// Mock data for testimonials
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Home Buyer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    rating: 5,
    text: "Working with Anny-Realty Global was an absolute pleasure. Their team guided me through every step of the home buying process with expertise and patience. I couldn't be happier with my new home!",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Property Investor",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    rating: 5,
    text: "As a real estate investor, I value market insights and efficiency. Anny-Realty Global delivered both. Their market analysis was spot-on, and they helped me secure properties with excellent ROI potential.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Home Seller",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
    rating: 4,
    text: "Selling my family home was an emotional process, but the team at Anny-Realty Global handled everything with compassion and professionalism. They got me a great price and made the transition smooth.",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Commercial Client",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    rating: 5,
    text: "Finding the right commercial space for our business was crucial. Anny-Realty Global understood our needs perfectly and found us a location that has helped our business thrive. Highly recommended!",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (autoplay) {
      interval = setInterval(() => {
        nextTestimonial();
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [autoplay, currentIndex]);

  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  return (
    <div
      className="relative max-w-4xl mx-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Card className="border-none shadow-sm bg-card">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="relative w-full md:w-1/3 aspect-square md:aspect-[3/4]">
              <div className="absolute -top-4 -left-4 text-primary">
                <Quote className="h-12 w-12 rotate-180 opacity-20" />
              </div>
              <div className="relative h-full w-full rounded-lg overflow-hidden">
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonials[currentIndex].rating
                        ? "text-yellow-500 fill-yellow-500"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>

              <blockquote className="text-lg italic mb-6">
                &ldquo;{testimonials[currentIndex].text}&rdquo;
              </blockquote>

              <div>
                <h4 className="font-semibold text-xl">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-muted-foreground">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center mt-6 gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={prevTestimonial}
          aria-label="Previous testimonial"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>

        <div className="flex items-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all ${
                currentIndex === index ? "w-6 bg-primary" : "w-2 bg-muted"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={nextTestimonial}
          aria-label="Next testimonial"
        >
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
