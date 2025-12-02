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

export default function Home() {
  return (
    <div className="bg-linear-to-t pt-28 pb-12 w-full from-[#000000]/80 to-[#000000]/0 min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center px-4">
        <h3 className="font-bold text-[32px] md:text-[45px] text-transparent bg-linear-to-r from-[#D97258] to-[#9858A3] bg-clip-text text-center">
          Online Startup Accelerator
        </h3>

        <p className="text-[18px] md:text-[26px] text-[#D0ACA6] text-center font-semibold">
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
            className="w-full max-w-sm mx-auto"
          >
            <CarouselContent className="w-full aspect-4/5">
              {["fund", "customer", "product"].map((item) => (
                <CarouselItem key={item}>
                  <HeroCard type={item} />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="top-[105%] left-[10%]" />
            <CarouselNext className="top-[105%] right-[10%]" />
          </Carousel>
        </div>

        <div className="w-full mt-20 md:mt-32 flex items-center justify-center flex-col md:flex-row gap-6">
          <button className="px-8 py-3 border-2 border-white/60 text-white font-semibold rounded-full text-lg hover:bg-white/10 transition">
            Learn More
          </button>

          <button className="px-8 py-3 bg-[#D14423] flex gap-2 items-center text-black font-semibold rounded-full text-lg hover:bg-[#ff5d39] transition">
            Get Started <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
