"use client";

import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const DetailsCard = () => {
  const contents = [
    {
      title: "Investors",
      description:
        "Connect directly to Top Tier Angel and Venture Capital Investors",
      eg: [
        {
          name: "Esther Dyson",
          role: "Angel (individual) | New York, NY",
          skills: ["AI", "E-Commerce", "Software"],
          reason:
            "Backed Facebook, Square, Evernote; sold startups to Google & Apple - Esther Dyson brings unmatched social proof, insight, and a killer global network.",
        },
        {
          name: "Richard Wolpert",
          role: "Angel (individual) | San Francisco, CA",
          skills: ["Mobile Apps", "E-Commerce", "SaaS"],
          reason:
            "Former Disney Online President, early Apple exec, and investor in GameFly, LookOut & Jukin - Wolpert blends tech expertise with big exits and deep media roots.",
        },
        {
          name: "Caitlin Strandberg",
          role: "Angel (individual) | New York, NY",
          skills: ["Cannabis"],
          reason:
            "Caitlin's backed by Flybridge, ex-FirstMark, helped build LearnVest and Behance - strong early-stage focus in media, consumer tech, and startup growth.",
        },
      ],
    },
    {
      title: "Advisors",
      description:
        "Expand your Network, Get Industry Insights, and Answer Tough Questions",
      eg: [
        {
          name: "Greg Welch",
          role: "Entrepreneurial and Visionary CEO | San Francisco, CA",
          skills: ["Startup Founder", "Raised Funding", "Crisis Management"],
          reason:
            "Advisor with 15 startups and 6 exits, billions in deals, and deep Fortune 500 tech experience. Expert in growth, product, and strategic partnerships.",
        },
        {
          name: "Rebecca Brown",
          role: "Startup Advisor | St. Petersburg, FL",
          skills: ["Consumer Products", "Entrepreneurship", "Mentorship"],
          reason:
            "Shark Tank alum, ex-Goldman Sachs, founder of Solemates and Core Satellite Partners—brings top-tier CPG, finance, and startup growth experience.",
        },
        {
          name: "Matthew Webster",
          role: "Chief Risk Officer | New York, NY",
          skills: ["Risk Management", "Information Security", "Compliance"],
          reason:
            "Matthew is a cybersecurity expert and Chief Risk Officer with deep experience in risk quantification, board governance, and regulatory compliance. Great for startups needing security leadership.",
        },
      ],
    },
    {
      title: "Talent",
      description: "Startup Experts in Development, Design, Marketing and Ops",
      eg: [
        {
          name: "Kyle Courtright",
          role: "Founder @ Etch | Columbus, OH",
          skills: ["Founder", "Design", "Services"],
          reason:
            "Kyle's a top-tier brand designer behind work for PayPal, Chipotle, and Toyota - founder of Etch, he brings elite design talent to startups, fast.",
        },
        {
          name: "Kristi Broom",
          role: "Startup Advisor",
          skills: ["Customer Management", "Strategy", "Leadership"],
          reason:
            "Seasoned SaaS exec and Fractional COO/CCO with $100M ARR growth, team-building wins, and ops expertise - ideal for scaling early-stage startups.",
        },
        {
          name: "Jay Miller",
          role: "Fractional CRO | San Francisco, CA",
          skills: ["Sales", "Travel", "Entrepreneurship"],
          reason:
            "Fractional CRO with 17 years in B2B sales, focused on scaling Seed–Series A startups - proven leader, Air Force vet, global perspective from 69 countries.",
        },
      ],
    },
    {
      title: "Co-Founders",
      description: "Find a Proven Startup Founder to help you Grow Faster",
      eg: [
        {
          name: "Andrew Crefeld",
          role: "Founded HouseLens | Nashville, TN",
          skills: ["Founder", "Startup Development", "Acquisition"],
          reason:
            "Founder of HouseLens (acquired in 2020) - proven operator in real estate tech with strong sales, ops, and growth experience.",
        },
        {
          name: "Elena S",
          role: "Ex Co-founder Honorlock Inc. | Boca Raton, FL",
          skills: ["Financial Leadership", "Operations", "Sales"],
          reason:
            "Experienced co-founder with a strong background in financial leadership, operations, and sales, bringing valuable expertise to early-stage startups.",
        },
        {
          name: "Alejandro Zakzuk",
          role: "Founder & CEO @ Soluntech",
          skills: ["MVP Development", "Product-Market Fit", "Launch Strategy"],
          reason:
            "Founder of Soluntech and advisor to AI startup Clara. Expert in MVPs, product-market fit, and launch strategy with a strong focus on tech-driven growth.",
        },
      ],
    },
  ];

  return (
    <>
      {contents.map((section, index) => {
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
          <div
            key={index}
            className="bg-[#393851]/50 border border-[#B9B7FF]/20 rounded-md p-6"
          >
            <h2 className="text-white font-bold text-2xl mb-2">
              Featured {section.title}
            </h2>

            <p className="text-[#C6CEDA] font-medium text-lg mb-6">
              {section.description}
            </p>

            <div className="hidden lg:grid grid-cols-3 gap-3">
              {section.eg.map((person, idx) => (
                <Card key={idx} person={person} index={index} />
              ))}
            </div>

            <div className="lg:hidden">
              <Carousel
                setApi={setApi}
                opts={{
                  align: "start",
                  loop: false,
                }}
                className="w-full h-max"
              >
                <CarouselContent>
                  {section.eg.map((person, idx) => (
                    <CarouselItem key={idx}>
                      <Card person={person} index={index} />
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <div className="mt-5 w-max relative flex items-center justify-between mx-auto">
                  <CarouselPrevious className="border-0 bg-transparent hover:bg-transparent hover:text-white" />
                  <div className="flex justify-center flex-1 items-center gap-3">
                    {["fund", "customer", "product"].map((_, i) => (
                      <button
                        key={i}
                        onClick={() => handleNavClick(i)}
                        className={cn(
                          "h-1.5 w-1.5 rounded-full hover:bg-white transition",
                          current === i + 1 ? "bg-white" : "bg-white/40"
                        )}
                      />
                    ))}
                  </div>
                  <CarouselNext className="border-0 bg-transparent hover:bg-transparent hover:text-white" />
                </div>
              </Carousel>
            </div>
          </div>
        );
      })}
    </>
  );
};

const Card = ({ person, index }) => {
  return (
    <div className="bg-[#393851] hover:bg-[#3B3A70] p-4 rounded-xl border border-[#B9B7FF]/20 h-full flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="h-15 w-15 rounded-full bg-[#5F7495]/40 relative">
          <Check className="w-4 h-4 text-white bg-[#38908A] rounded-full p-1 absolute bottom-1 right-0" />
        </div>
        <div>
          <h3 className="text-white text-lg font-semibold">{person.name}</h3>
          <p className="text-[#B9B7FF] font-semibold text-sm">{person.role}</p>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-[#B9B7FF] font-semibold text-[13px]">
          {index === 0 ? "Preferred Industries:" : "Experience & Skills:"}
        </p>
        <div className="flex flex-wrap gap-1">
          {person.skills &&
            person.skills.map((skill) => (
              <span
                key={skill}
                className="text-[10px] uppercase font-bold px-2 py-1 bg-[#000000]/48 rounded-xs text-[#D6BCFA]"
              >
                {skill}
              </span>
            ))}
        </div>
      </div>

      <div className="w-full bg-[#B9B7FF]/30 h-px"></div>

      <div className="flex flex-col gap-1">
        <p className="text-[#B9B7FF] font-semibold text-[13px]">
          Why you should match:
        </p>

        <p className="text-[#C6CEDA] text-sm leading-relaxed">
          {person.reason}
        </p>
      </div>
    </div>
  );
};

export default DetailsCard;
