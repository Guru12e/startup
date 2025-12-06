import EducationCarousel from "@/components/EducationCarousel";
import Slider from "@/components/Slider";
import { courses } from "@/constant";
import {
  Book,
  ChevronRight,
  GraduationCap,
  Podcast,
  Video,
} from "lucide-react";
import Image from "next/image";

const EducationPage = () => {
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
        <div className='flex-1 flex flex-col gap-4'>
          <div className='flex  gap-2 items-center'>
            {icon}
            <h3 className='text-sm font-bold text-[#B9B7FF]/60'>{iconTitle}</h3>
          </div>
          <h3 className='text-white mt-5 font-bold text-3xl xl:text-4xl'>
            {title}
          </h3>
          <p className='max-w-md font-normal text-white/60 text-md xl:text-xl'>
            {para}
          </p>
          <button className='mt-5 px-6 w-max py-3 text-md bg-[#EF901D] rounded-full text-black border border-white/10 font-bold flex gap-2 justify-center items-center'>
            {button} <ChevronRight size={16} />
          </button>
        </div>
        <div className='w-full hidden md:block flex-1 aspect-square relative'>
          <Image src={image} alt='courses' fill className='object-contain' />
        </div>
      </div>
    );
  };

  return (
    <div className='w-full relative min-h-screen bg-[#1F2128]'>
      <div className='p-6 md:p-10 xl:px-20'>
        <HeroComponent
          icon={<GraduationCap className='h-6 w-6 text-[#B9B7FF]/80' />}
          iconTitle='Courses'
          title='Get a PhD in Startups'
          para='Ridiculously comprehensive courses on every aspect of starting a company. From finding investors to acquiring customers to validating your idea. All at your fingertips.'
          image='/images/courses-1.png'
          button='Explore All Courses'
        />
        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-5'>
          {courses.map((course, idx) => (
            <div
              key={idx}
              className='w-full hover:scale-120 cursor-pointer leading-[1.2] px-2 hover:rounded-xl overflow-hidden transition-all aspect-3/4 relative group'
            >
              <Image
                src={course.image}
                alt={`course-card-${idx + 1}`}
                fill
                className='object-contain'
              />
              <div className='absolute bottom-0 w-full h-full top-0 left-0 right-0 backdrop-blur-3xl flex flex-col justify-center items-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <h4 className='text-white font-bold text-center text-lg'>
                  {course.name}
                </h4>
                <button
                  style={{ background: course.color }}
                  className={`mt-2 px-4 py-2 bg-[${course.color}] text-white flex gap-2 items-center justify-center rounded-full text-sm font-bold`}
                >
                  Start Course
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
        <HeroComponent
          icon={<Video className='h-6 w-6 text-[#B9B7FF]/80' />}
          iconTitle='Videos'
          title='Learn from the Experts Behind the Biggest Startups'
          para='Comprehensive, guided video series on how to validate your idea, acquire your first customers and secure funding.'
          image='/images/education1.png'
          button='Streaming now'
          reverse={true}
        />
      </div>
      <div className='w-[90%] relative mx-auto overflow-hidden'>
        <Slider />
      </div>
      <div className='relative px-6 md:px-10 xl:px-20 mx-auto py-10'>
        <EducationCarousel slides={Array(8)} title='Popular Videos' />

        <HeroComponent
          icon={<Podcast className='h-6 w-6 text-[#B9B7FF]/80' />}
          iconTitle='Podcasts'
          title='The No-BS Version of Startup Life'
          para="The Startup Therapy Podcast dives deep into the problems startup Founders face every day to unpack what's really at stake and how to actually solve them."
          image='/images/education2.png'
          button='All Episodes'
        />

        <HeroComponent
          icon={<Book className='h-6 w-6 text-[#B9B7FF]/80' />}
          iconTitle='Courses'
          title='Get Expert Advice'
          para='Hand-curated advice from startup Founders on every aspect of starting a company.'
          image='/images/education3.png'
          button='Read Articles'
          reverse={true}
        />

        <EducationCarousel slides={Array(8)} title='Featured Articles' />

        <HeroComponent
          icon={<Book className='h-6 w-6 text-[#B9B7FF]/80' />}
          iconTitle='Founder Interviews'
          title='Origin Stories of Legendary Founders'
          para='Personal, candid interviews with the most world-changing Founders of all time.'
          image='/images/education4.png'
          button='Explore Interviews'
          reverse={false}
        />
      </div>
      <div className='w-[90%] relative mx-auto overflow-hidden'>
        <Slider />
      </div>
      <div className='relative px-6 md:px-10 xl:px-20 pt-0 pb-10 mx-auto'>
        <EducationCarousel slides={Array(8)} title='Popular Videos' />
      </div>
    </div>
  );
};

export default EducationPage;
