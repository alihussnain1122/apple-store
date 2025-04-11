import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaUser, FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed top-0 w-full flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-20 py-4 shadow-md h-20 z-50 bg-black text-white">
        {/* Logo */}
        <Link to="/" className="text-2xl sm:text-3xl font-extrabold text-white hover:cursor-pointer tracking-wide">
          Apple <span className="text-blue-500">Store</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 lg:gap-12 text-base lg:text-lg font-medium">
          <Link to="/" className="text-white hover:text-blue-500 transition-all duration-300 py-2">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-blue-500 transition-all duration-300 py-2">
            About
          </Link>
          <Link to="/contact" className="text-white hover:text-blue-500 transition-all duration-300 py-2">
            Contact
          </Link>
          <Link to="/products" className="text-white hover:text-blue-500 transition-all duration-300 py-2">
            Products
          </Link>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4 sm:space-x-6 md:space-x-8 text-xl sm:text-2xl">
          <FaHeart className="text-white cursor-pointer hover:text-red-500 transition-all duration-300" />
          <FaShoppingCart className="text-white cursor-pointer hover:text-green-500 transition-all duration-300" />
          <FaUser className="text-white cursor-pointer hover:text-blue-500 transition-all duration-300" />
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed top-20 left-0 w-full bg-gray-900 z-40 transition-all duration-300 ease-in-out transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden`}>
        <div className="flex flex-col items-center py-4 space-y-4">
          <Link 
            to="/" 
            className="w-full text-center text-white hover:bg-gray-800 py-3 px-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="w-full text-center text-white hover:bg-gray-800 py-3 px-4"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className="w-full text-center text-white hover:bg-gray-800 py-3 px-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link 
            to="/products" 
            className="w-full text-center text-white hover:bg-gray-800 py-3 px-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Products
          </Link>
        </div>
      </div>

      {/* Spacer to prevent content from being hidden under fixed navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;