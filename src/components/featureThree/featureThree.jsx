import vector from "../../assets/Vector 2 (1).png";
import whitegirl from "../../assets/Rectangle 71.png";
import printgirl from "../../assets/Rectangle 71 (1).png";
import mike from "../../assets/Rectangle 71 (2).png";
import podboy from "../../assets/Rectangle 71 (3).png";
const FeatureThree = () => {
  return (
    <section className="bg-pinkish mt-32">
      <div className="room mx-32">
        <div className="uppoerPortion flex justify-between">
          <div className="titile relative">
            <h1 className="font-plus-jakarta-sans text-[42px] font-bold leading-[52px] text-left">
              Our most popular <br /> episodes
            </h1>
            <img
              className="w-[139px] h-[19px] opacity-100 absolute left-[200px] top-[40px]"
              src={vector}
              alt=""
            />
          </div>
          <div>
            <button className="w-[157px] h-[64px] rounded-[8px] bg-blue text-white mt-8">
              All Epicode
            </button>
          </div>
        </div>
        {/* lower porthion */}
        <div className="lowarPortion grid grid-cols-2 gap-5 mt-32">
          <div className="left grid grid-cols-2 gap-4">
            <div>
              <img src={whitegirl} alt="" />
            </div>
            <div>
              <h2>listen now</h2>
              <h1>Should you get outboard audio gear?</h1>
              <p>
                Is hardware really worth it when it comes to podcasting? The
                answer is...it depends.
              </p>
              <button className="bg-blue">listen now</button>
            </div>
          </div>
          <div className="left grid grid-cols-2">
            <div>
              <img src={printgirl} alt="" />
            </div>
            <div>
              <h2>listen now</h2>
              <h1>Should you get outboard audio gear?</h1>
              <p>
                Is hardware really worth it when it comes to podcasting? The
                answer is...it depends.
              </p>
              <button className="bg-blue">listen now</button>
            </div>
          </div>
          <div className="left grid grid-cols-2">
            <div>
              <h2>listen now</h2>
              <h1>Should you get outboard audio gear?</h1>
              <p>
                Is hardware really worth it when it comes to podcasting? The
                answer is...it depends.
              </p>
              <button className="bg-blue">listen now</button>
            </div>
            <div>
              <img src={mike} alt="" />
            </div>
          </div>
          <div className="left grid grid-cols-2">
            <div>
              <h2>listen now</h2>
              <h1>Should you get outboard audio gear?</h1>
              <p>
                Is hardware really worth it when it comes to podcasting? The
                answer is...it depends.
              </p>
              <button className="bg-blue">listen now</button>
            </div>
            <div>
              <img src={podboy} alt="" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
            <div className="w-16 h-8 bg-purple-500 rounded-full">next</div>
            <div className="w-16 h-8 bg-gray-300 rounded-full ml-4">next</div>
            <div className="w-16 h-8 bg-white rounded-full ml-4">next</div>
          </div>
      </div>
    </section>
  );
};

export default FeatureThree;
