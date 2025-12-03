import Hero from "@/components/Hero";
import PerfectMatch from "@/components/PerfectMatch";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col bg-black">
      <Hero />
      <PerfectMatch />
    </div>
  );
};

export default Home;
