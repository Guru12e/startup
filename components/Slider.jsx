import Marquee from "react-fast-marquee";
import Image from "next/image";

const Slider = () => {
  return (
    <div>
      <Marquee
        className=""
        speed={30}
        direction="left"
        style={{
          position: "relative",
          zIndex: 1,
          overflow: "hidden",
        }}
      >
        {[...Array(9)].map((_, index) => (
          <div className="flex flex-row items-center justify-center gap-4 h-36 mx-4">
            <Image
              src={`/images/company.svg`}
              alt="Partner 1"
              width={200}
              height={200}
              className="md:mr-6 mr-0 w-28 md:w-32 mx-4 mb-3 object-fit grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Slider;
