"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaChevronRight } from "react-icons/fa";
import HeroCard from "@/components/HeroCard";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Hero() {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleNavClick = (index) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <>
      <div className="bg-linear-to-b pt-28 pb-12 w-full from-[#ffffff]/15 to-transparent min-h-screen">
        <div className="max-w-7xl mx-auto flex flex-col justify-center items-center px-4">
          <h3 className="font-bold text-[21px] md:text-[45px] text-transparent bg-linear-to-r from-[#D97258] to-[#9858A3] bg-clip-text text-center">
            Online Startup Accelerator
          </h3>

          <p className="text-[18px] mt-2 md:mt-0 md:text-[26px] text-[#D0ACA6] text-center font-semibold">
            How can we grow your startup today?
          </p>

          <div className="hidden lg:grid grid-cols-3 gap-10 w-full mt-14">
            <HeroCard type="fund" />
            <HeroCard type="customer" />
            <HeroCard type="product" />
          </div>

          <div className="w-full mt-14 block lg:hidden">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                  stopOnInteraction: false,
                }),
              ]}
              setApi={setApi}
              className="w-full max-w-sm mx-auto"
            >
              <CarouselContent className="w-full aspect-4/5">
                {["fund", "customer", "product"].map((item) => (
                  <CarouselItem key={item}>
                    <HeroCard type={item} />
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="top-[105%] w-[50%] relative flex items-center justify-between mx-auto">
                <CarouselPrevious />
                <div className="flex justify-center flex-1 items-center gap-3">
                  {["fund", "customer", "product"].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => handleNavClick(i)}
                      className={cn(
                        "h-3 w-3 rounded-full hover:bg-white transition",
                        current === i + 1 ? "bg-white" : "bg-white/40"
                      )}
                    />
                  ))}
                </div>
                <CarouselNext />
              </div>
            </Carousel>
          </div>

          <div className="w-full mt-20 md:mt-32 flex items-center justify-center flex-col md:flex-row gap-6">
            <button className="w-full md:w-max px-8 py-3 border-2 border-white/60 text-white font-semibold rounded-full text-lg hover:bg-white/10 transition">
              Learn More
            </button>

            <button className="w-full md:w-max px-8 py-3 bg-[#D14423] flex gap-2 justify-center items-center text-black font-semibold rounded-full text-lg hover:bg-[#ff5d39] transition">
              Get Started <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
