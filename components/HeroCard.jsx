import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";

export default function HeroCard({ type }) {
  if (type === "fund") {
    return (
      <div className="relative w-full aspect-square">
        <h3 className="absolute top-2 text-center w-full text-white font-bold text-md z-10">
          Get Funded
        </h3>

        <Image
          src={"/images/hero0.png"}
          fill
          className="object-contain translate-y-5"
          alt="hero image"
        />

        <div className="w-[70%] absolute translate-y-18 left-1/2 -translate-x-1/2 mx-auto aspect-square bg-[#1F2128] rounded-full"></div>

        <div className="w-[90%] mx-auto relative aspect-square">
          <Image
            src={"/images/heroMain0.png"}
            fill
            className="object-contain translate-y-3"
            alt="hero image"
          />
        </div>

        <div className="bg-linear-to-b absolute top-[72%] left-0 from-[#115A7F] to-[#569CC0] w-full p-3 rounded-lg">
          <h3 className="text-[#C6CEDA] font-bold text-xs">Fundraise Target</h3>
          <h4 className="text-white font-bold text-md mt-1">
            Raise $1.5m Speed Round
          </h4>

          <div className="flex w-full mt-2 relative items-center">
            <div className="bg-[#60E5DC] rounded-l-full w-[75%] h-2.5"></div>

            <div className="bg-black/60 w-6 absolute left-[75%] p-1 h-6 rounded-full flex items-center justify-center">
              <FaCheckCircle fill="#00FFA3" />
            </div>

            <div className="bg-[#00FFA3] rounded-r-full w-[25%] h-2.5"></div>
          </div>

          <div className="w-full mt-1.5 flex justify-between">
            <p className="text-[#C6CEDA] text-xs font-bold">Goal: $1.5m</p>
            <p className="text-[#C6CEDA] text-xs font-bold">Total: $1.8m</p>
          </div>

          <div className="flex gap-2 items-center mt-3">
            {["Consumer", "Hardware", "Healthcare"].map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold px-2 py-1 bg-[#1F2128] rounded-full text-[#C6CEDA]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "customer") {
    return (
      <div className="relative w-full aspect-square">
        <h3 className="absolute top-2 text-center w-full text-white font-bold text-md z-10">
          Find Customers
        </h3>

        <Image
          src={"/images/hero1.png"}
          fill
          className="object-contain translate-y-10"
          alt="hero image"
        />

        <div className="w-[70%] absolute translate-y-24 left-1/2 -translate-x-1/2 mx-auto aspect-square bg-[#1F2128] rounded-full"></div>

        <div className="w-[90%] mx-auto relative aspect-square">
          <Image
            src={"/images/heroMain1.png"}
            fill
            className="object-contain translate-y-10"
            alt="hero image"
          />
        </div>

        <div
          className="absolute top-[72%] w-full mx-auto p-3 rounded-lg backdrop-blur-md"
          style={{
            background:
              "linear-gradient(to bottom, #C0553E 0%, rgba(135,35,65,0.7) 25%, rgba(135,35,65,0.4) 80%, transparent 100%)",
          }}
        >
          <div className="w-full flex items-center gap-3">
            <div className="w-full flex-1 h-0.5 bg-[#FFFFFF] opacity-10"></div>
            <h3 className="text-[#C6CEDA] font-bold text-xs">
              Fundraise Target
            </h3>
            <div className="w-full flex-1 h-0.5 bg-[#FFFFFF] opacity-10"></div>
          </div>
          <h3 className="text-[#C6CEDA] font-bold text-xs">Customer</h3>
          <div className="flex gap-2 items-center mt-3">
            {["24-30yr", "New Mother", "Major Metro"].map((tag) => (
              <span
                key={tag}
                className="text-xs font-bold px-2 py-1 bg-[#704677] rounded-full text-[#C6CEDA]"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="w-full space-y-1 mt-2 flex flex-col">
            {["Instagram", "Facebook", "Google"].map((platform) => (
              <span
                key={platform}
                className="text-xs flex gap-2 w-full font-semibold px-2 py-2 bg-[#2D1B30] rounded-md text-[#C6CEDA]"
              >
                <FaCheckCircle fill="#00FFA3" />
                {platform} Ads
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "product") {
    return (
      <div className="relative w-full aspect-square">
        <h3 className="absolute top-2 text-center w-full text-white font-bold text-md z-10">
          Build Product
        </h3>

        <Image
          src={"/images/hero2.png"}
          fill
          className="object-contain translate-y-2"
          alt="hero image"
        />

        <div className="w-[65%] absolute translate-y-20 left-1/2 -translate-x-1/2 mx-auto aspect-square bg-[#1F2128] rounded-full"></div>

        <div className="w-[90%] mx-auto relative aspect-square">
          <Image
            src={"/images/heroMain2.png"}
            fill
            className="object-contain translate-y-10"
            alt="hero image"
          />
        </div>

        <div className="bg-linear-to-b absolute top-[72%] left-0 from-[#4A47A3] to-[#7C78E0] w-full p-3 rounded-lg">
          <h3 className="text-[#C6CEDA] font-bold text-xs mb-2">
            Product Plan
          </h3>

          <div className="flex gap-3 items-center mt-2">
            <h4 className="text-[#C6CEDA] flex-1/4 font-bold text-sm">
              Budget
            </h4>
            <div className="flex flex-3/4 relative items-center">
              <div className="bg-[#90CDF4] rounded-l-full w-[75%] h-2.5"></div>
              <div className="bg-[#7571E1] w-4 absolute left-[75%] h-4 border-2 border-white rounded-full flex items-center justify-center"></div>
              <div className="bg-[#FFFFFF]/16 rounded-r-full w-[25%] h-2.5"></div>
              <span className="bg-black/16 px-2 text-[10px] py-1 font-semibold rounded-full absolute transform -translate-y-full -translate-1/4 left-[75%] text-[#C6CEDA]">
                $25k
              </span>
            </div>
          </div>
          <div className="flex gap-3 items-center mt-4">
            <h4 className="text-[#C6CEDA] flex-1/4 font-bold text-sm">
              Timeline
            </h4>
            <div className="flex flex-3/4 relative items-center">
              <div className="bg-[#90CDF4] rounded-l-full w-[35%] h-2.5"></div>
              <div className="bg-[#7571E1] w-4 absolute left-[35%] h-4 border-2 border-white rounded-full flex items-center justify-center"></div>
              <div className="bg-[#FFFFFF]/16 rounded-r-full w-[65%] h-2.5"></div>
              <span className="bg-black/16 px-2 text-[10px] py-0.5 font-semibold rounded-full absolute transform -translate-y-full -translate-1/4 left-[35%] text-[#C6CEDA]">
                7 weeks
              </span>
            </div>
          </div>
          <div className="flex mt-2 justify-between items-center bg-white/10 rounded-md px-3 py-1">
            <span className="text-[#C6CEDA] text-sm font-semibold">
              $10k/mo Revenue
            </span>
            <LuPencil className="text-white/50" />
          </div>
        </div>
      </div>
    );
  }
}
