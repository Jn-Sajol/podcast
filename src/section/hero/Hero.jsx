import femaleheadphone from "../../assets/Group 14.png";
import sarahimage from "../../assets/Group 13.png";
import ellips1 from "../../assets/Ellipse 2.png";
import ellips2 from "../../assets/Ellipse 3.png";
import ellips3 from "../../assets/Ellipse 6.png";
import ellips4 from "../../assets/Group 3.png";
import fivek from "../../assets/Group 8.png";
import spotify from "../../assets/image 21.png";
import gang from "../../assets/image 22.png";
import pinpoint from "../../assets/image 23.png";
import vector1 from "../../assets/Vector 3.png";
import vector2 from "../../assets/Vector 4.png";
import vector3 from "../../assets/Vector 2.png";
const Hero = () => {
  return (
    <div className="mx-32 my-32 flex gap-24 justify-center items-center">
      <div className="flex gap-4">
        <div className="">
          <img src={femaleheadphone} alt="" className="block w-full" />
          <div className="mt-[-32px]">
            <h2 className="text-sm font-semibold leading-none">
              Podcast listener
            </h2>
          </div>

          <div className="flex items-center mt-2">
            <div className="relative">
              <img src={ellips1} alt="" className="z-10 w-8 h-8 rounded-full" />
            </div>
            <div className="relative -ml-3">
              <img src={ellips2} alt="" className="z-20 w-8 h-8 rounded-full" />
            </div>
            <div className="relative -ml-3">
              <img src={ellips3} alt="" className="z-30 w-8 h-8 rounded-full" />
            </div>
            <div className="relative -ml-3">
              <img src={ellips4} alt="" className="z-40 w-8 h-8 rounded-full" />
            </div>
          </div>
        </div>

        <div className="rightportion">
          <div className="flex justify-center gap-4">
            <img src={vector1} alt="" />
            <img className="w-[50px] h-[50px]" src={fivek} alt="" />
          </div>
          <div className="flex mt-4 gap-6 ">
            <img src={spotify} alt="" />
            <img src={gang} alt="" />
            <img src={pinpoint} alt="" />
            <img src={vector2} alt="" />
          </div>
          <div className=" mt-5">
            <div>
              <img src={sarahimage} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <h1 className="font-plus-jakarta-sans text-7xl font-bold leading-[80px] text-left">
          A new era of podcasting <br /> for you
        </h1>
        <br />
        <p className="font-plus-jakarta-sans text-base font-normal leading-[30px] text-left">
          Rebuilt for simplicity and speed, so you can spend more <br /> time
          discovering and listening to great podcasts.
        </p>
        <img className="w-[328px] h-[30px] border-t-[8px] border-transparent opacity-220 absolute top-[337px] left-[728px]" src={vector3} alt="" />
        <div className="flex gap-5  items-center">
          <div>
          <button
            className="w-[157px] h-[64px] rounded-[8px] bg-purple-700"
          >
            Get Started
          </button>
          </div>
         <div>
         <button>Listen Now</button>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
