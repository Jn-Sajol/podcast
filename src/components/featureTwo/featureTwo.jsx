import book from "../../assets/Rectangle 137.png";
import healthcare from "../../assets/Rectangle 142.png";
import music from "../../assets/Rectangle 144.png";
import fasion from "../../assets/Rectangle 143.png";
import comedy from "../../assets/Rectangle 141.png";
const FeatureTwo = () => {
  return (
    <section className="mt-28 ">
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
        <div className="downpart mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* <!-- First Column (Image spans two rows) --> */}
            <div className="row-span-2">
              <div className="aspect-w-4 aspect-h-8">
                <img
                  src={book}
                  alt="Education"
                  className="object-cover w-full h-[720px]"
                />
              </div>
            </div>

            {/* <!-- Second Column (60% / 40%) --> */}
            <div className="col-span-2 grid grid-cols-[60%_40%] gap-x-4">
              {/* <!-- 60% Image (Healthcare) --> */}
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={healthcare}
                  alt="Healthcare"
                  className="object-cover w-full h-full"
                />
              </div>
              {/* <!-- 40% Image (Music) --> */}
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={music}
                  alt="Music"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* <!-- Third Row (40% / 60%) --> */}
            <div className="col-span-2 grid grid-cols-[40%_60%] gap-x-4">
              {/* <!-- 40% Image (Fashion) --> */}
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={fasion}
                  alt="Fashion"
                  className="object-cover w-full h-full"
                />
              </div>
              {/* <!-- 60% Image (Comedy) --> */}
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={comedy}
                  alt="Comedy"
                  className="object-cover w-full h-full"
                />
              </div>
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
