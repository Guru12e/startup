"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";

const Header = () => {
  const navItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Education",
      href: "/education",
    },
    {
      name: "Events",
      href: "/events",
    },
    {
      name: "Funding",
      href: "/funding",
    },
    {
      name: "Answers",
      href: "/answers",
    },
    {
      name: "Members",
      href: "/members",
    },
    {
      name: "Perks",
      href: "/perks",
    },
  ];

  const navItems1 = [
    {
      name: "Tour",
      href: "/tour",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Login",
      href: "/login",
    },
  ];

  const pathName = usePathname();

  return (
    <div className="bg-[#1A1B20] fixed top-0 right-0 left-0 h-max w-screen px-2 flex items-center justify-between border-b border-b-black z-50">
      <div className="flex gap-2">
        <Sheet>
          <SheetTrigger asChild>
            <button className="text-white">
              <Menu />
            </button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="bg-[#1A1B20] border-0 h-full overflow-y-scroll w-3/4 md:w-1/4 p-0"
          >
            <SheetHeader>
              <Link
                href="/"
                className="bg-[#D14423] w-max text-white text-md font-semibold px-4 rounded-md py-2"
              >
                startups.com
              </Link>
            </SheetHeader>
            <div className="flex flex-col gap-4 p-6 h-full w-full">
              {[...navItems, ...navItems1].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm flex group-hover:text-white items-center font-bold justify-start ${
                    pathName === item.href ? "text-[#EF901D]" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
        <Link
          href="/"
          className="bg-[#D14423] text-white text-md font-semibold px-4 rounded-md py-2"
        >
          startups.com
        </Link>
      </div>
      <div className="hidden xl:flex gap-6 h-full justify-center text-[#AFC5E8]/80 flex-1 w-full items-center">
        {navItems.map((item) => (
          <div key={item.name} className="flex group flex-col w-max h-16">
            <Link
              href={item.href}
              className={`h-full flex-1 text-sm flex group-hover:text-white items-center font-bold justify-center ${
                pathName === item.href ? "text-[#EF901D]" : ""
              }`}
            >
              {item.name}
            </Link>
            <div
              className={`border-b-4 border-b-transparent ${
                pathName === item.href ? "border-b-[#EF901D]" : ""
              } group-hover:border-b-[#EF901D]`}
            ></div>
          </div>
        ))}
      </div>
      <div className="flex gap-2 md:gap-6 w-max items-center justify-end text-[#AFC5E8]/80">
        {navItems1.map((item) => (
          <div key={item.name} className="flex group flex-col w-max h-16">
            <Link
              href={item.href}
              className={`h-full flex-1 text-sm flex group-hover:text-white items-center font-bold justify-center ${
                pathName === item.href ? "text-[#EF901D]" : ""
              } ${item.name === "About" && "hidden md:flex"}`}
            >
              {item.name}
            </Link>
            <div
              className={`border-b-4 border-b-transparent ${
                pathName === item.href ? "border-b-[#EF901D]" : ""
              } group-hover:border-b-[#EF901D]`}
            ></div>
          </div>
        ))}
        <button className="px-3 py-1.5 font-semibold text-sm bg-[#EF901D] text-[#1A1B20] rounded-full">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Header;
