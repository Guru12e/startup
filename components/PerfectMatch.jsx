import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { IoMdSettings } from "react-icons/io";
import MatchTabs from "./MatchTabs";
import DetailsCard from "./DetailsCard";

const PerfectMatch = () => {
  const events = [
    {
      title: "Generating Leads Using Video",
      category: ["Workshop"],
      date: "Wed. Dec 3rd",
      time: "10:30 pm GMT+5:30",
    },
    {
      title: "New & Trial Members Start Here",
      category: ["Workshop", "Strategy"],
      date: "Thu. Dec 4th",
      time: "3:30 am GMT+5:30",
    },
    {
      title: "AI Advisory Office Hours",
      category: ["Workshop"],
      date: "Thu. Dec 4th",
      time: "10:30 pm GMT+5:30",
    },
  ];

  const courses = [
    {
      title: "Product MVP",
      image: "/images/course1.png",
    },
    {
      title: "Idea Validation Bootcamp",
      image: "/images/course2.png",
    },
    {
      title: "How Funding Works",
      image: "/images/course3.png",
    },
  ];

  return (
    <div className="w-full bg-linear-to-b from-[#ffffff]/15 to-transparent min-h-screen px-3 md:px-5">
      <div className="w-full flex flex-col-reverse md:flex-row gap-10 mx-auto max-w-[1400px]">
        <div className="w-full md:w-[27%] py-10 flex flex-col gap-3">
          <div className="w-full flex items-center justify-between">
            <h4 className="text-[#AFC5E8]/80 font-bold text-md">Explore</h4>
            <button className="rounded-full flex items-center text-white gap-2 border border-white px-2 py-1">
              <span className="text-xs font-medium">Customize</span>
              <IoMdSettings className="w-4 h-4" />
            </button>
          </div>
          <div className="w-full h-1.5 bg-[#5F7495]/20"></div>
          <div className="bg-[#272B35] border border-[#343C4B] p-4 flex flex-col rounded-lg">
            <h3 className="text-xl font-semibold text-white">
              Unlock Everything
            </h3>
            <p className="text-sm text-[#C6CEDA] mt-1">
              There's a TON of help for you here! Upgrade your membership to get
              access to everything.
            </p>
            <button className="border-2 mt-3 w-max border-[#5F7495]/60 text-[#C6CEDA] rounded-full px-4 py-2 font-semibold text-xs">
              Pick Your Plan
            </button>
          </div>
          <div className="bg-[#272B35] border border-[#343C4B] flex flex-col rounded-lg">
            <div className="bg-[#272B35] border border-[#1F2128] p-3">
              <div className="w-full flex items-center justify-between">
                <h4 className="text-[#AFC5E8]/80 font-bold text-sm">
                  Upcoming Events
                </h4>
                <button className="text-[#AFC5E8]/80 font-bold text-md flex items-center gap-2">
                  <span className="text-xs font-medium">View All</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="bg-[#22252D] p-4">
              <div className="flex gap-5 flex-col">
                {events.map((event, index) => (
                  <div key={index} className="w-full mb-4">
                    <div className="flex items-center gap-2">
                      {event.category.map((cat) => (
                        <span
                          key={cat}
                          className="text-[10px] font-semibold px-2 py-1 bg-[#5F7495]/50 rounded-xs text-white"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-white mt-3 font-semibold text-md">
                      {event.title}
                    </h3>

                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs font-bold text-[#AFC5E8]/60">
                        {event.date}
                      </span>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#AFC5E8]/60"></div>
                      <span className="text-xs font-bold text-[#AFC5E8]/60">
                        {event.time}
                      </span>
                    </div>

                    <button className="border-2 mt-4 w-max border-[#5F7495]/60 text-[#C6CEDA] rounded-full px-4 py-2 font-semibold text-xs">
                      Join Workshop
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-[#272B35] border border-[#343C4B] flex flex-col rounded-lg">
            <div className="bg-[#272B35] border border-[#1F2128] p-3">
              <div className="w-full flex items-center justify-between">
                <h4 className="text-[#AFC5E8]/80 font-bold text-sm">Courses</h4>
                <button className="text-[#AFC5E8]/80 font-bold text-md flex items-center gap-2">
                  <span className="text-xs font-medium">View All</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="bg-[#22252D] px-5 py-2">
              <div className="flex gap-5 flex-col">
                {courses.map((course, index) => (
                  <div key={index} className="w-full flex items-center gap-7">
                    <div className="w-[25%] aspect-9/16 relative">
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-contain absolute"
                      />
                    </div>
                    <h3 className="text-white font-semibold text-lg">
                      {course.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[73%] py-10 flex flex-col gap-3">
          <div className="w-full flex items-center justify-between">
            <h4 className="text-[#AFC5E8]/80 font-bold text-md">
              Find the Perfect Match
            </h4>
          </div>
          <div className="w-full h-1.5 bg-[#5F7495]/20"></div>
          <MatchTabs />
          <DetailsCard />
        </div>
      </div>
    </div>
  );
};

export default PerfectMatch;
