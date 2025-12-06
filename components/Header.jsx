"use client";

import { ChevronDown, ChevronRight, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { useState } from "react";
import { navItems, navItems1 } from "@/constant";

const Header = () => {
  const pathName = usePathname();

  const NavItem = ({ item, isActive, hasSubItems }) => {
    return (
      <div
        key={item.name}
        className="relative group h-16 flex flex-col justify-center"
      >
        <Link
          href={item.href}
          className={`h-full flex items-center font-bold text-xs md:text-sm ${
            isActive ? "text-[#EF901D]" : "group-hover:text-white"
          } ${item.name === "About" && "hidden md:flex"}`}
        >
          {item.name}
        </Link>

        <div
          className={`border-b-4 border-b-transparent ${
            isActive ? "border-b-[#EF901D]" : ""
          } group-hover:border-b-[#EF901D]`}
        ></div>

        {hasSubItems && (
          <div className="absolute uppercase font-bold left-[50%] p-1 top-full mt-2 min-w-[200px] bg-[#101116] rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 -translate-x-1/2 group-hover:visible transition-all duration-300 overflow-hidden">
            {item.subItems.map((sub) => (
              <Link
                href={sub.href}
                key={sub.name}
                className={`px-5 py-3 flex tex-center w-full rounded-md items-center justify-center text-xs hover:bg-white/5 hover:text-white transition-all ${
                  pathName === sub.href ? "bg-[#4A47A3] text-white" : ""
                } ${sub.name === "Home" && "hidden"}`}
              >
                {sub.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-[#1A1B20] fixed top-0 right-0 left-0 h-max w-screen px-2 flex items-center justify-between border-b border-b-black z-50">
      <div className="flex gap-2">
        <Sheet >
          <SheetTrigger asChild>
            <button className="text-white">
              <Menu />
            </button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="bg-[#1A1B20] no-scrollbar border-0 h-full overflow-y-scroll w-3/4 md:w-1/4 p-0"
          >
            <SheetHeader className="p-4">
              <Link
                href="/"
                className="bg-[#D14423] w-max text-white text-md font-semibold px-4 rounded-sm py-2 block"
              >
                startups.com
              </Link>
              <SheetTitle />
            </SheetHeader>

            <div className="flex flex-col px-4 pt-0 h-full w-full">
              {[...navItems, ...navItems1].map((item) => {
                const isActive = pathName === item.href;
                const hasSubItems = item.subItems && item.subItems.length > 0;
                const [open, setOpen] = useState(false);

                return (
                  <div key={item.name} className="border-b border-white/10">
                    {hasSubItems ? (
                      <button
                        onClick={() => setOpen(!open)}
                        className={`w-full flex justify-between rounded-md items-center p-3 text-sm font-bold ${
                          isActive
                            ? "text-white bg-[#4A47A3]"
                            : "text-[#B9B7FF]"
                        }`}
                      >
                        {item.name}
                        <ChevronDown
                          className={`transition-transform size-4 duration-300 ${
                            open ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className={`block p-3 text-sm rounded-md font-bold ${
                          isActive
                            ? "text-white bg-[#4A47A3]"
                            : "text-[#B9B7FF]"
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}

                    {hasSubItems && open && (
                      <div className="flex flex-col px-6 bg-black/10 rounded-md">
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className={`pl-4 py-2 flex justify-between border-l-2 border-white/48 hover:border-white hover:text-white group text-sm ${
                              pathName === sub.href
                                ? "text-[#EF901D]"
                                : "text-white/48"
                            }`}
                          >
                            {sub.name}
                            <ChevronRight className="opacity-0 group-hover:opacity-100 ml-2 size-4 align-middle transform group-hover:translate-x-2 delay-200 transition-transform duration-500" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              <Link
                href="/accelerator/start"
                className="bg-[#EF901D] mt-6 py-3 text-center font-semibold text-[#1A1B20] rounded-full"
              >
                Get Started
              </Link>
            </div>
          </SheetContent>
        </Sheet>
        <Link
          href="/"
          className="bg-[#D14423] text-white text-sm md:text-md font-semibold px-2 md:px-4 rounded-md py-2"
        >
          startups.com
        </Link>
      </div>
      <div className="hidden xl:flex gap-6 h-full justify-center text-[#AFC5E8]/80 flex-1 w-full items-center">
        {navItems.map((item) => {
          const hasSubItems = item.subItems && item.subItems.length > 0;
          const isActive = pathName === item.href;

          return (
            <NavItem
              key={item.name}
              item={item}
              isActive={isActive}
              hasSubItems={hasSubItems}
            />
          );
        })}
      </div>

      <div className="flex gap-2 md:gap-6 w-max items-center justify-end text-[#AFC5E8]/80">
        {navItems1.map((item) => {
          const hasSubItems = item.subItems && item.subItems.length > 0;
          const isActive = pathName === item.href;

          return (
            <NavItem
              key={item.name}
              item={item}
              isActive={isActive}
              hasSubItems={hasSubItems}
            />
          );
        })}

        <button className="px-3 py-1.5 font-semibold text-sm bg-[#EF901D] text-[#1A1B20] rounded-full">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Header;
