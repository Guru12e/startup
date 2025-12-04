"use client";

import { useState, useEffect, useMemo } from "react";
import { Check, Plus, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";

const mainSkills = [
  "Marketer",
  "Sales",
  "Developer",
  "Designer",
  "Operations",
  "Finance",
];

const extraSkillsMap = {
  Marketer: [
    "Marketing",
    "Digital Marketing",
    "Brand Marketing",
    "Content Marketing",
    "Advertising",
    "Marketing Strategy",
    "B2B Marketing",
    "B2C Marketing",
    "Social Media Marketing",
    "Email Marketing",
    "Affiliate Marketing",
    "Direct Marketing",
    "Performance Marketing",
    "Product Marketing",
  ],

  Sales: [
    "B2B Sales",
    "B2C Sales",
    "Sales Strategy",
    "Account Management",
    "Lead Generation",
    "CRM",
    "Sales Operations",
    "Inside Sales",
    "Outside Sales",
    "Sales Enablement",
    "Negotiation",
  ],

  Developer: [
    "Web Development",
    "Frontend Development",
    "Backend Development",
    "Full Stack Development",
    "Mobile Development",
    "DevOps",
    "API Development",
    "Database Management",
    "Cloud Computing",
    "AI Development",
    "Blockchain",
  ],

  Designer: [
    "UI Design",
    "UX Design",
    "Graphic Design",
    "Product Design",
    "Interaction Design",
    "Wireframing",
    "Prototyping",
    "User Research",
    "Motion Design",
    "Brand Design",
  ],

  Operations: [
    "Operations Management",
    "Process Improvement",
    "Project Management",
    "Logistics",
    "Supply Chain",
    "Inventory",
    "Risk Management",
    "Compliance",
  ],

  Finance: [
    "Financial Analysis",
    "Accounting",
    "Budgeting",
    "Investments",
    "Tax Planning",
    "Auditing",
    "Payroll",
    "Cash Flow",
    "Financial Reporting",
  ],
};

export default function SkillsInput({
  selectedMain,
  selectedSkills,
  setSelectedMain,
  setSelectedSkills,
}) {
  const [query, setQuery] = useState("");

  const allExtraSkills = useMemo(() => {
    const skills = selectedMain.flatMap((main) => extraSkillsMap[main] || []);

    return Array.from(new Set(skills));
  }, [selectedMain]);

  const shuffle = (array) => {
    array = array.filter((skill) => !selectedSkills.includes(skill));
    return [...array].sort(() => Math.random() - 0.5);
  };

  const [shuffledSkills, setShuffledSkills] = useState([]);

  useEffect(() => {
    setShuffledSkills(shuffle(allExtraSkills));
  }, [allExtraSkills, selectedSkills]);

  const filteredExtraSkills = shuffledSkills.filter((skill) =>
    skill.toLowerCase().includes(query.toLowerCase())
  );

  const toggleMain = (skill) => {
    setSelectedMain((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );

    if (selectedMain.includes(skill)) {
      setSelectedSkills([]);
    }
  };

  const toggleExtra = (skill) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {mainSkills.map((skill) => {
          const isActive = selectedMain.includes(skill);

          return (
            <button
              key={skill}
              onClick={() => toggleMain(skill)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg transition-all text-sm font-medium",
                isActive
                  ? "bg-teal-500 text-white"
                  : "bg-[#3a3f70] hover:bg-[#4a4f85] text-white"
              )}
            >
              {isActive ? <Check size={16} /> : <Plus size={16} />}
              {skill}
            </button>
          );
        })}
      </div>

      {selectedMain.length > 0 && (
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300"
            size={18}
          />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`Search in ${selectedMain.join(", ")}...`}
            className="pl-10 bg-[#3a3f70] border-none placeholder:text-gray-300 text-white"
          />
        </div>
      )}

      {selectedMain.length > 0 && (
        <>
          <h3 className="text-md font-semibold mt-3 text-white">
            Who also has experience with:
          </h3>

          <div className="flex flex-wrap gap-3">
            {[
              ...selectedSkills.slice(-3),
              ...filteredExtraSkills.slice(0, 10),
            ].map((skill) => {
              const isActive = selectedSkills.includes(skill);
              return (
                <button
                  key={skill}
                  onClick={() => toggleExtra(skill)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all",
                    isActive
                      ? "bg-teal-500 text-white"
                      : "bg-[#3a3f70] hover:bg-[#4a4f85] text-white"
                  )}
                >
                  {isActive ? <Check size={14} /> : <Plus size={14} />}
                  {skill}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
