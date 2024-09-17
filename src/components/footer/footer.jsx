import sitelogo from "../../assets/Logo.png";
import facebook from "../../assets/Group 431.png";
import linkedin from "../../assets/Group 433.png";
import twiter from "../../assets/Group 432.png";
import img1 from "../../assets/image 21.png";
import img2 from "../../assets/image 22.png";
import img3 from "../../assets/image 23.png";
import img4 from "../../assets/image 24.png";
import img5 from "../../assets/image 25.png";
const Footer = () => {
  return (
    <section className="bg-footerbg">
      <div className="room mx-32 mt-32 grid grid-cols-5 gap-5 p-10">
        <div>
          <img src={sitelogo} alt="" />
          <br />
          <p>
            Copyright © 2022 UIHUT all rights <br /> reserved.
          </p>
          <div className="flex gap-4 mt-3">
            <img src={facebook} alt="" />
            <img src={linkedin} alt="" />
            <img src={twiter} alt="" />
          </div>
        </div>
        <div className="">
          <h1
            className="font-plus-jakarta-sans text-[20px] font-bold leading-[30px] text-left
"
          >
            Links
          </h1>
          <h2>Home</h2>
          <h2>episode</h2>
          <h2>Tranding</h2>
          <h2>catagery</h2>
          <h2>blog</h2>
        </div>
        <div>
          <h1
            className="font-plus-jakarta-sans text-[20px] font-bold leading-[30px] text-left
"
          >
            Feature
          </h1>
          <h2>Style guide</h2>
          <h2>Instructions</h2>
          <h2>Catelog</h2>
          <h2>Your podcast</h2>
        </div>
        <div>
          <h1
            className="font-plus-jakarta-sans text-[20px] font-bold leading-[30px] text-left
"
          >
            Company
          </h1>
          <h2>Privacy</h2>
          <h2>Terms</h2>
          <h2>security</h2>
          <h2>cookies</h2>
        </div>
        <div>
          <h1
            className="font-plus-jakarta-sans text-[20px] font-bold leading-[30px] text-left
"
          >
            Listen On
          </h1>
          <div className="flex justify-center gap-4">
            <img className="w-[36px] h-[36px]" src={img1} alt="" />
            <img className="w-[36px] h-[36px]" src={img2} alt="" />
            <img className="w-[36px] h-[36px]" src={img3} alt="" />
            <img className="w-[36px] h-[36px]" src={img4} alt="" />
            <img className="w-[36px] h-[36px]" src={img5} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
