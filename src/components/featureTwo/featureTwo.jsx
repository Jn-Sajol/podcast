import book from "../../assets/Rectangle 137.png";
import healthcare from "../../assets/Rectangle 142.png";
import music from "../../assets/Rectangle 144.png";
import fasion from "../../assets/Rectangle 143.png";
import comedy from "../../assets/Rectangle 141.png";
const FeatureTwo = () => {
  return (
    <section className="mt-28">
      <div className="mx-32">
        <div className="upperpar">
          <h1 className="font-plus-jakarta-sans text-[42px] font-bold leading-[52px] text-center">
            Listen by category
          </h1>
          <p className="text-center">
            Listen all kind of podcasts you like by exploring categories. Make
            your day even better
          </p>
        </div>
        <div className="downpart">
          <div className="grid grid-cols-3 gap-4">
            <div className="row-span-2 w-[370px] h-[600px]rounded-tl-[8px]">
              <img src={book} alt="" />
            </div>
            <div className="w-[470px] h-[285px] gap-0 rounded-tl-[8px] border-t-[1px">
              <img src={healthcare} alt="" />
            </div>
            <div className="w-[270px] h-[285px] rounded-tl-[8px]">
              <img src={music} alt="" />
            </div>
            <div className="">
              <img
                className="w-[270px] h-[285px] gap-0 rounded-tl-[8px]"
                src={fasion}
                alt=""
              />
            </div>
            <div className="">
              <img
                className="w-[470px] h-[285px]rounded-tl-[8px]"
                src={comedy}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="text-center">
          <button className="w-[157px] h-[64px] rounded-[8px] bg-blue text-white mt-8">
            All Category
          </button>
          </div>
      </div>
    </section>
  );
};

export default FeatureTwo;
