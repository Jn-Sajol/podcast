import img1 from "../../assets/image 21.png";
import img2 from "../../assets/image 22@2x.png";
import img3 from "../../assets/image 23.png";
import img4 from "../../assets/image 24.png";
import img5 from "../../assets/image 25.png";
import vector from "../../assets/Vector 2 (1).png";
// import bg from "../../assets/Ellipse 19.png";
const FeatureOne = () => {
  return (
    <section className="">
      <div className="mx-32 p-5 grid grid-cols-2 gap-6">
        <div className="left relative">
          <h2 className="font-plus-jakarta-sans text-[42px] font-bold leading-[52px] text-left">
            We are in the top <br /> padcast directories
          </h2>
          <img
            className="w-[236px] h-[30px] absolute top-[80px] left-[155px] gap-0 opacity-90"
            src={vector}
            alt=""
          />
          <p className="font-plus-jakarta-sans text-[16px] font-normal leading-[28px] text-left mt-2">
            Rebuilt for simplicity and speed, so you can spend more time
            discovering and listening to great podcasts. We are <br />{" "}
            everywhere on the internet.
          </p>
          <button className="w-[157px] h-[64px] rounded-[8px] bg-purple-700 text-white mt-8">
            Listen Now
          </button>
        </div>
        <div className="right ">
          <div className="relative">
            <img
              src={img1}
              alt="Spotify"
              className="absolute w-32 h-32 top-[200px] left-[180px]"
            />
            <img
              src={img2}
              alt="Podcast"
              className="absolute w-32 h-32 top-[180px] left-[380px]"
            />
            <img
              src={img3}
              alt="Castbox"
              className="absolute w-[148px] h-[148px] top-[px] left-[200px]"
            />
            <img
              src={img4}
              alt="Google Podcasts"
              className="absolute w-24 h-24 top-[100px] left-[0px]"
            />
            <img
              src={img5}
              alt="SoundCloud"
              className="absolute w-24 h-24 top-[50px] left-[450px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureOne;
