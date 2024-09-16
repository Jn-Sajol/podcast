import logo from '../../assets/Logo.png'
const Navbar = () => {
  return (
    <nav className="bg-[#FFF8F3] flex justify-between items-center py-4 px-9 container">
      {/* Left side - Logo */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo"  />
      </div>

      {/* Center - Navigation Links */}
      <div className="flex space-x-9">
        <a href="#" className="text-gray-500 hover:text-gray-700 font-sans">Episodes</a>
        <a href="#" className="text-gray-500 hover:text-gray-700">Trending</a>
        <a href="#" className="text-gray-500 hover:text-gray-700 flex items-center">Category <span className="ml-1">&#x25BC;</span></a>
        <a href="#" className="text-gray-500 hover:text-gray-700">Blog</a>
      </div>

      {/* Right side - Buttons */}
      <div className="flex items-center space-x-4">
        <a href="#" className="text-gray-600 hover:text-gray-800">Log in</a>
        <button className="bg-[#2e233f] text-white py-2 px-4 rounded-lg">Sign up</button>
      </div>
    </nav>
  );
};

export default Navbar;
