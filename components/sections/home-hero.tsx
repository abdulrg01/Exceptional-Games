"use client";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";
import { slides } from "@/constant/page";

export default function HomeHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: any) => setCurrentIndex(index);

  return (
    <div className="relative w-full h-[700px] overflow-hidden">
      <div
        className="w-full h-full flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            <div
              style={{ backgroundImage: `url(${slide.image})` }}
              className={`w-full h-full bg-cover bg-center`}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4 text-white">
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                {slide.title}
              </h1>
              <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                {slide.subtitle}
              </p>
              <div className="flex justify-center md:flex-row flex-col gap-4">
                <Button size="lg">
                  Explore Our Published Games
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-gray border-white hover:bg-white/10"
                >
                  Learn About Our Studio
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full p-2"
        onClick={() =>
          goToSlide((currentIndex - 1 + slides.length) % slides.length)
        }
      >
        ◀
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full p-2"
        onClick={() => goToSlide((currentIndex + 1) % slides.length)}
      >
        ▶
      </button>
    </div>
  );
}
