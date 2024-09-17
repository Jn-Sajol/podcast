import vector from "../../assets/Vector 2 (1).png";
const NewsLatter = () => {
  return (
    <section className="mx-32 mt-32 p-10 bg-blue rounded-xl">
      <div className="relative flex justify-evenly items-center ">
      <h1 className="text-white font-plus-jakarta-sans text-[42px] font-bold leading-[52px] text-left">
          Subscribe and get <br /> update regularly
        </h1>
        <img
          className="w-[139px] h-[19px] opacity-100 absolute left-[100px] top-[90px]"
          src={vector}
          alt=""
        />
        <img src="" alt="" />
      

      <p className="text-white">
        Rebuilt for simplicity and speed, so you can spend more time <br /> discovering
        and listening to great podcasts. Get all the <br /> updates of latest podcasts.
      </p>
      </div>

      <div className="lowerpart flex justify-evenly mt-20">
        <input className="w-[370px] h-[64px] top-[4697px] left-[235px] gap-0 rounded-[8px] opacity-10" type="text" />
        <input className="w-[370px] h-[64px] top-[4697px] left-[235px] gap-0 rounded-[8px] opacity-10" type="text" /> 
        <button className="w-[157px] h-[64px] top-[4697px] left-[1035px] gap-0 rounded-[8px] opacity-100 bg-newslatterbutton
">subscribe</button>
      </div>
    </section>
  );
};

export default NewsLatter;
