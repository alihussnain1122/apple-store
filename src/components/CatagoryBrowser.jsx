import { useEffect, useRef } from "react";
import {
  FaMobileAlt,
  FaCamera,
  FaHeadphones,
  FaDesktop,
  FaGamepad,
  FaWatchmanMonitoring,
} from "react-icons/fa";
import { gsap } from "gsap";

const categories = [
  { name: "Phones", icon: <FaMobileAlt size={24} /> },
  { name: "Smart Watches", icon: <FaWatchmanMonitoring size={24} /> },
  { name: "Cameras", icon: <FaCamera size={24} /> },
  { name: "Headphones", icon: <FaHeadphones size={24} /> },
  { name: "Computers", icon: <FaDesktop size={24} /> },
  { name: "Gaming", icon: <FaGamepad size={24} /> },
];

export default function CategoryBrowser() {
  const categoryRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      categoryRef.current.children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="text-center py-10 px-4 sm:px-6 lg:px-20">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-8">Browse By Category</h2>
      <div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 sm:gap-6 justify-items-center"
        ref={categoryRef}
      >
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-100 p-4 sm:p-6 rounded-2xl shadow-md w-full sm:w-28 md:w-32 cursor-pointer hover:bg-gray-200 transition"
          >
            <div className="text-xl sm:text-2xl">{category.icon}</div>
            <span className="mt-2 text-xs sm:text-sm font-medium">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
