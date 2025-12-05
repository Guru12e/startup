"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function EducationCarousel({ slides, title }) {
  const [api, setApi] = useState();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="w-full relative">
      <Carousel setApi={setApi}>
        <CarouselContent>
          {Array.from({ length: 8 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <div className="w-full bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center h-48">
                  <span className="text-3xl font-semibold text-white">
                    {index + 1}
                  </span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="w-full flex items-center gap-3 absolute -top-10 right-0 justify-between">
          <h3 className="font-semibold uppercase text-lg text-white">
            {title}
          </h3>
          <div className="flex items-center gap-4 justify-center relative w-max">
            <CarouselPrevious className="relative left-0 top-0 translate-y-0 hover:bg-transparent text-[#B9B7FF] hover:text-[#B9B7FF] border-none bg-transparent" />

            <div className="bg-white rounded-xl relative h-1.5 w-[120px] overflow-hidden">
              <div
                className="bg-blue-200 shadow-xl h-1.5 rounded-xl transition-all duration-300"
                style={{
                  width: slides.length
                    ? `${((currentSlide + 1) / slides.length) * 100}%`
                    : "0%",
                }}
              />
            </div>

            <CarouselNext className="relative right-0 top-0 translate-y-0 hover:bg-transparent text-[#B9B7FF] hover:text-[#B9B7FF] border-none bg-transparent" />
          </div>
        </div>
      </Carousel>
    </div>
  );
}
