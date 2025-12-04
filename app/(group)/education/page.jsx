import Slider from "@/components/Slider";
import { ChevronRight, GraduationCap, Video } from "lucide-react";
import Image from "next/image";

const page = () => {
  const HeroComponent = ({
    icon,
    iconTitle,
    title,
    para,
    image,
    button,
    reverse = false,
  }) => {
    return (
      <div
        className={`flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } gap-5 items-center`}
      >
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex  gap-2 items-center">
            {icon}
            <h3 className="text-sm font-bold text-[#B9B7FF]/60">{iconTitle}</h3>
          </div>
          <h3 className="text-white mt-5 font-bold text-3xl xl:text-4xl">
            {title}
          </h3>
          <p className="max-w-md font-normal text-white/60 text-md xl:text-xl">
            {para}
          </p>
          <button className="mt-5 px-6 w-max py-3 text-md bg-[#EF901D] rounded-full text-black border border-white/10 font-bold flex gap-2 justify-center items-center">
            {button} <ChevronRight size={16} />
          </button>
        </div>
        <div className="w-full hidden md:block flex-1 aspect-square relative">
          <Image src={image} alt="courses" fill className="object-contain" />
        </div>
      </div>
    );
  };

  return (
    <div className="w-full relative min-h-screen bg-[#1F2128] p-6 md:p-10 xl:px-20">
      <HeroComponent
        icon={<GraduationCap className="h-6 w-6 text-[#B9B7FF]/80" />}
        iconTitle="Courses"
        title="Get a PhD in Startups"
        para="Ridiculously comprehensive courses on every aspect of starting a company. From finding investors to acquiring customers to validating your idea. All at your fingertips."
        image="/images/courses-1.png"
        button="Explore All Courses"
      />
      <div className="grid grid-cols-2 xl:grid-cols-3 gap-5">
        {[...Array(6)].map((_, idx) => (
          <div key={idx} className="w-full aspect-3/4 relative group">
            <Image
              src={`/images/book.png`}
              alt={`course-card-${idx + 1}`}
              fill
              className="object-contain"
            />
            <div className="absolute bottom-0 w-full h-full top-0 left-0 right-0 backdrop-blur-3xl flex flex-col justify-center items-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h4 className="text-white font-bold text-lg">Course Title</h4>
              <p className="text-white/70 text-sm mt-2 text-center">
                A brief description of the course content goes here.
              </p>
            </div>
          </div>
        ))}
      </div>
      <HeroComponent
        icon={<Video className="h-6 w-6 text-[#B9B7FF]/80" />}
        iconTitle="Videos"
        title="Learn from the Experts Behind the Biggest Startups"
        para="Comprehensive, guided video series on how to validate your idea, acquire your first customers and secure funding."
        image="/images/courses-1.png"
        button="Streaming now"
        reverse={true}
      />
      <div className="w-[90%] mx-auto max-w-xl">
        <Slider />
      </div>
    </div>
  );
};

export default page;
