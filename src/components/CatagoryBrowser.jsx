import { useEffect, useRef } from "react";
import { FaMobileAlt, FaCamera, FaHeadphones, FaDesktop, FaGamepad, FaWatchmanMonitoring } from "react-icons/fa";
import { gsap } from "gsap";

const categories = [
  { name: "Phones", icon: <FaMobileAlt size={30} /> },
  { name: "Smart Watches", icon: <FaWatchmanMonitoring size={30} /> },
  { name: "Cameras", icon: <FaCamera size={30} /> },
  { name: "Headphones", icon: <FaHeadphones size={30} /> },
  { name: "Computers", icon: <FaDesktop size={30} /> },
  { name: "Gaming", icon: <FaGamepad size={30} /> },
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
    <div className="text-center py-10">
      <h2 className="text-2xl font-semibold mb-6">Browse By Category</h2>
      <div className="flex justify-center gap-6 overflow-hidden" ref={categoryRef}>
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-100 p-6 rounded-2xl shadow-md w-32 cursor-pointer hover:bg-gray-200 transition"
          >
            {category.icon}
            <span className="mt-2 text-sm font-medium">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
