"use client";

import { useEffect, useRef, useState } from "react";
import { FaDollarSign } from "react-icons/fa";
import { Textarea } from "./ui/textarea";
import { Command, CommandInput } from "./ui/command";
import { CommandList } from "cmdk";
import SkillsInput from "./SkillsInput";

const MatchTabs = () => {
  const [index, setIndex] = useState(0);
  const [amount, setAmount] = useState("");
  const [explain, setExplain] = useState("");

  const [industry, setIndustry] = useState("");
  const [open, setOpen] = useState(false);
  const optionRef = useRef(null);
  const [position, setPosition] = useState("bottom");

  const tabs = ["Investors", "Advisors", "Talent", "Co-Founders"];

  const options = [
    "Robotics and Drones",
    "Artificial Intelligence",
    "Healthcare Tech",
    "Fintech",
    "SaaS",
    "E-commerce",
    "Edtech",
    "Blockchain",
  ];

  useEffect(() => {
    if (open && optionRef.current) {
      const rect = optionRef.current.getBoundingClientRect();
      if (rect.bottom > window.innerHeight) {
        setPosition("top");
      } else {
        setPosition("bottom");
      }
    }
  }, [open]);

  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex flex-col gap-5 w-full max-w-5xl">
        <div className="w-full grid grid-cols-4 gap-3">
          {tabs.map((tab, idx) => (
            <button
              key={tab}
              onClick={() => setIndex(idx)}
              className={`text-[10px] md:text-xs xl:text-lg text-center font-semibold 
              border-2 rounded-md px-3 py-3 border-[#4A47A3]
              ${
                index === idx
                  ? "text-white bg-[#4A47A3]/70 border-[#B9B7FF]"
                  : "text-[#B9B7FF] hover:bg-[#4A47A3]/30"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="bg-[#4A47A3]/40 p-3 md:p-6 rounded-lg flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/2 flex flex-col gap-5">
            <h3
              className={`font-bold text-md ${
                index === 0 ? "text-white" : "text-[#C6CEDA]"
              }`}
            >
              {index === 0
                ? "Start a New Investor Search"
                : index === 2
                ? "I'm looking to hire:"
                : `Need a ${
                    index === 1 ? "Advisor" : "Co-Founder"
                  } with these Skills:`}
            </h3>

            {index === 0 && (
              <>
                <div className="bg-[#61F2D8]/25 p-3 md:p-4 rounded-md border border-[#61F2D8]">
                  <h3 className="font-bold text-md text-white mb-2">
                    How much do you need to raise?
                  </h3>

                  <div className="mt-1 flex">
                    <span className="text-md text-[#C6CEDA] rounded-l-md px-3 py-2 bg-[#000000]/64 font-bold flex items-center">
                      USD <FaDollarSign className="ml-1" />
                    </span>

                    <input
                      type="text"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="50000"
                      className="flex-1 bg-[#000000]/48 w-full text-[#C6CEDA] rounded-r-md px-3 py-2 outline-none font-bold"
                    />
                  </div>
                </div>

                <div className="w-full flex flex-col">
                  <p className="text-[#B9B7FF] text-sm font-semibold mb-1">
                    Briefly explain your startup:
                  </p>

                  <Textarea
                    className="bg-[#000000]/48 text-sm text-[#C6CEDA] placeholder:text-[#C6CEDA]/80 rounded-md px-3 py-3 outline-none font-bold min-h-[120px] no-scrollbar"
                    placeholder="Enter your elevator pitch..."
                    value={explain}
                    onChange={(e) => setExplain(e.target.value)}
                  />
                </div>

                <div className="w-full flex flex-col relative">
                  <p className="text-[#B9B7FF] text-sm font-semibold mb-1">
                    Industries / Verticals:
                  </p>

                  <Command
                    className="bg-[#000000]/48 text-[#C6CEDA] border-none outline-none rounded-md relative overflow-visible"
                    onFocus={() => setOpen(true)}
                  >
                    <CommandInput
                      value={industry}
                      onValueChange={setIndustry}
                      onFocus={() => setOpen(true)}
                      onBlur={() => setOpen(false)}
                      placeholder="Search industries..."
                      className="bg-transparent text-sm border-none placeholder:text-[#C6CEDA]/70 rounded-md px-3 py-3 outline-none font-bold"
                    />

                    {open && (
                      <div
                        ref={optionRef}
                        className={`absolute z-50 ${
                          position === "bottom" ? "top-full" : "bottom-full"
                        } left-0 w-full bg-black border border-[#4A47A3]/40 rounded-b-md max-h-60 overflow-y-auto`}
                      >
                        <CommandList className="">
                          {industry === ""
                            ? options.map((option) => (
                                <div
                                  key={option}
                                  onClick={() => {
                                    setIndustry(option);
                                    setOpen(false);
                                  }}
                                  className="px-3 py-2 hover:bg-[#4A47A3]/50 cursor-pointer text-sm"
                                >
                                  {option}
                                </div>
                              ))
                            : options
                                .filter((item) =>
                                  item
                                    .toLowerCase()
                                    .includes(industry.toLowerCase())
                                )
                                .map((option) => (
                                  <div
                                    key={option}
                                    onClick={() => {
                                      setIndustry(option);
                                      setOpen(false);
                                    }}
                                    className="px-3 py-2 hover:bg-[#4A47A3]/50 cursor-pointer text-sm"
                                  >
                                    {option}
                                  </div>
                                ))}
                        </CommandList>
                      </div>
                    )}
                  </Command>
                </div>
              </>
            )}
            {index !== 0 && <SkillsInput />}
          </div>

          <div className="flex flex-col w-full max-md:aspect-square py-5 md:w-1/2 bg-[#4A47A3] px-3 rounded-lg items-center justify-center">
            <h3 className="text-transparent text-center bg-linear-to-r from-[#D97258] to-[#9858A3] bg-clip-text text-3xl font-extrabold">
              {index === 0
                ? "Raise Capital 10x Faster"
                : index === 2
                ? "Build your Startup Dream Team"
                : `Find the Perfect Advisor ${
                    index === 1 ? "Advisor" : "Co-Founder"
                  }`}
            </h3>
            <p className="text-lg mt-2 font-semibold text-[#FECFC7]/90 text-center">
              {index === 0
                ? "Directly Pitch perfectly matched Investors"
                : "Find Startup-Obsessed Co-Founders, Experts, Peers, and Talent"}
            </p>
            <button className="mt-5 w-max px-6 py-3 text-sm bg-[#EF901D] rounded-full text-black border border-white/10 font-bold">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchTabs;
