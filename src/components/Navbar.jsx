import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="top-0 flex justify-between items-center px-8 md:px-20 lg:px-32 py-5 shadow-md h-20 z-50 bg-black text-white">
      {/* Logo */}
      <Link to="/" className="text-3xl font-extrabold text-white hover:cursor-pointer tracking-wide">
        Apple <span className="text-blue-500">Store</span>
      </Link>

      {/* Menu */}
      <div className="hidden md:flex gap-12 text-lg font-medium">
        <Link to="/" className="text-white hover:text-blue-500 transition-all duration-300">
          Home
        </Link>
        <Link to="/about" className="text-white hover:text-blue-500 transition-all duration-300">
          About
        </Link>
        <Link to="/contact" className="text-white hover:text-blue-500 transition-all duration-300">
          Contact
        </Link>
        <Link to="/products" className="text-white hover:text-blue-500 transition-all duration-300">
          Products
        </Link>
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-8 text-2xl">
        <FaHeart className="text-white cursor-pointer hover:text-red-500 transition-all duration-300" />
        <FaShoppingCart className="text-white cursor-pointer hover:text-green-500 transition-all duration-300" />
        <FaUser className="text-white cursor-pointer hover:text-blue-500 transition-all duration-300" />
      </div>
    </nav>
  );
};

export default Navbar;
