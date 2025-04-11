import { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import gsap from "gsap";

const allProducts = {
  "New Arrival": [
    { id: 1, name: "Apple iPhone 16 Pro Max 128GB", price: "$900", image: "iphone.png" },
    { id: 2, name: "Blackmagic Pocket Cinema Camera 6K", price: "$2535", image: "camera.png" },
    { id: 3, name: "Apple Watch Series 9 GPS 41mm", price: "$399", image: "watch.png" },
    { id: 4, name: "AirPods Max Silver", price: "$549", image: "airpods.png" },
    { id: 9, name: "Macbook M5", price: "$1549", image: "macbook.png" },
    { id: 10, name: "Apple iPhone 16 Pro Max 128GB", price: "$900", image: "iphone.png" },
    { id: 11, name: "Blackmagic Pocket Cinema Camera 6K", price: "$2535", image: "camera.png" },
    { id: 12, name: "Apple Watch Series 9 GPS 41mm", price: "$399", image: "watch.png" },
  ],
  Bestseller: [
    { id: 5, name: "Samsung Galaxy Watch6 Classic 47mm", price: "$369", image: "/watch.png" },
    { id: 6, name: "Galaxy Z Fold5 Unlocked | 256GB", price: "$1799", image: "/ipad.jpg" },
  ],
  "Featured Products": [
    { id: 7, name: "Galaxy Buds FE Graphite", price: "$99.99", image: "/airpods.png" },
    { id: 8, name: "Apple iPad 9 10.2'' 64GB Wi-Fi", price: "$398", image: "/ipad.jpg" },
  ],
};

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("New Arrival");
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    gsap.fromTo(
      ".product-card",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 0.5 }
    );
  }, [activeCategory]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  return (
    <div className="text-center py-10 px-4 sm:px-6 lg:px-20">
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 border-b pb-4">
        {Object.keys(allProducts).map((category) => (
          <span
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`cursor-pointer text-sm sm:text-base font-semibold pb-2 transition-all ${
              activeCategory === category
                ? "border-b-2 border-black text-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {category}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allProducts[activeCategory].map((product) => (
          <div
            key={product.id}
            className="product-card bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md relative transition hover:shadow-lg"
          >
            <button
              onClick={() => toggleFavorite(product.id)}
              className="absolute top-3 right-3 text-gray-400 hover:text-red-500"
            >
              <FaHeart
                className={`text-lg ${
                  favorites.includes(product.id) ? "text-red-500" : "text-gray-400"
                }`}
              />
            </button>
            <img
              src={product.image}
              alt={product.name}
              className="mx-auto h-28 sm:h-32 object-contain mb-4"
            />
            <h3 className="text-sm sm:text-base font-semibold mb-2">{product.name}</h3>
            <p className="text-base sm:text-lg font-bold">{product.price}</p>
            <button className="bg-black text-white py-2 px-4 rounded-md mt-4 w-full hover:opacity-90 transition">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
