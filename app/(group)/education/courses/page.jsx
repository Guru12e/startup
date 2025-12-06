import { courses } from "@/constant";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const CoursesPage = () => {
  return (
    <div className='w-full relative min-h-screen p-6 md:p-10 xl:px-20 bg-[#1F2128]'>
      <div className='flex flex-col gap-5'>
        {courses.map((course, index) => (
          <div
            key={index}
            className={`${
              index % 2 === 0 ? "bg-gradient-to-br" : "bg-gradient-to-bl"
            } from-black/10 via-black/15 ${
              course.gradient
            } text-white p-20 rounded-xl w-full aspect-video flex gap-4`}
          >
            <div className='flex-1 flex flex-col justify-center gap-4'>
              <h3 className='text-5xl font-bold max-w-[400px]'>
                {course.name}
              </h3>
              {course.para && (
                <p className='opacity-60 max-w-md'>{course.para}</p>
              )}
              <div className='flex gap-5'>
                <button className='mt-5 px-6 w-max py-3 text-md rounded-full text-white border border-white/80 font-bold flex gap-2 justify-center items-center'>
                  Overview <ChevronRight />
                </button>
                <button
                  className='mt-5 px-6 w-max py-3 text-md rounded-full text-white border border-white/10 font-bold flex gap-2 justify-center items-center'
                  style={{ background: course.color }}
                >
                  Begin Course <ChevronRight />
                </button>
              </div>
            </div>
            <div className='hidden md:flex flex-1 justify-center items-center overflow-hidden'>
              <div className='w-[70%] aspect-3/4 relative '>
                <Image
                  src={course.image}
                  alt={course.name}
                  fill
                  className='object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
