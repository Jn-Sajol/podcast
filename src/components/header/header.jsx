
import Hero from "./Hero";
import Navbar from "./navbar";
const Header = () => {
  return (
    //nav
    <header className="bg-[#FFF8F3]">
      <div className="mx-32">
      <Navbar/>
      <Hero/>
    </div>
    </header>
  );
};

export default Header;
