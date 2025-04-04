import React, { useState } from "react";

const categories = ["Apple Mobiles", "MacBook", "Watches", "Vision Pro", "TV", "Headphones", "Cameras"];
const allProducts = {
    "Apple Mobiles": [
      { id: 1, name: "Apple iPhone 14 Pro 512GB Gold", price: 1437, image: "iphone.png" },
      { id: 2, name: "Apple iPhone 11 128GB White", price: 510, image: "iphone.png" },
      { id: 3, name: "Apple iPhone 13 Pro Max 256GB", price: 1199, image: "iphone.png" },
      { id: 4, name: "Apple iPhone SE 2022 128GB", price: 429, image: "iphone.png" },
      { id: 5, name: "Apple iPhone XR 128GB Black", price: 379, image: "iphone.png" },
      { id: 6, name: "Apple iPhone 12 Mini 128GB", price: 699, image: "iphone.png" },
      { id: 7, name: "Apple iPhone 14 256GB Purple", price: 899, image: "iphone.png" },
      { id: 8, name: "Apple iPhone 15 Pro Max 1TB", price: 1599, image: "iphone.png" },
      { id: 9, name: "Apple iPhone X 64GB Silver", price: 299, image: "iphone.png" },
      { id: 10, name: "Apple iPhone 12 Pro 256GB Blue", price: 1099, image: "iphone.png" },
      { id: 11, name: "Apple iPhone 13 Mini 128GB Green", price: 729, image: "iphone.png" },
      { id: 12, name: "Apple iPhone 14 Plus 512GB Red", price: 1199, image: "iphone.png" },
      { id: 13, name: "Apple iPhone 15 256GB Yellow", price: 999, image: "iphone.png" },
      { id: 14, name: "Apple iPhone 11 Pro 256GB", price: 849, image: "iphone.png" },
      { id: 15, name: "Apple iPhone 15 Pro 512GB Titanium", price: 1499, image: "iphone.png" },
    ],
    "MacBook": [
      { id: 16, name: "MacBook Pro 16 M2", price: 2399, image: "macbook.png" },
      { id: 17, name: "MacBook Air 13 M1", price: 999, image: "macbook.png" },
      { id: 18, name: "MacBook Pro 14 M3", price: 2499, image: "macbook.png" },
      { id: 19, name: "MacBook Air 15 M2", price: 1299, image: "macbook.png" },
      { id: 20, name: "MacBook Pro 13 M1", price: 1499, image: "macbook.png" },
      { id: 21, name: "MacBook Pro 16 M1", price: 2299, image: "macbook.png" },
      { id: 22, name: "MacBook Air 13 Intel", price: 899, image: "macbook.png" },
      { id: 23, name: "MacBook Air 15 M3", price: 1399, image: "macbook.png" },
      { id: 24, name: "MacBook Pro 15 Intel i9", price: 2099, image: "macbook.png" },
      { id: 25, name: "MacBook Pro 16 M3 Max", price: 3299, image: "macbook.png" },
      { id: 26, name: "MacBook Pro 14 M3 Pro", price: 2799, image: "macbook.png" },
      { id: 27, name: "MacBook Air 11", price: 499, image: "macbook.png" },
      { id: 28, name: "MacBook Pro 13 Intel i7", price: 1299, image: "macbook.png" },
      { id: 29, name: "MacBook Air 12 Retina", price: 1099, image: "macbook.png" },
      { id: 30, name: "MacBook Pro 16 M3 Ultra", price: 3999, image: "macbook.png" },
    ],
    "Watches": [
      { id: 31, name: "Apple Watch Series 8", price: 399, image: "watch.png" },
      { id: 32, name: "Apple Watch SE", price: 249, image: "watch.png" },
      { id: 33, name: "Apple Watch Ultra", price: 799, image: "watch.png" },
      { id: 34, name: "Apple Watch Series 7", price: 349, image: "watch.png" },
      { id: 35, name: "Apple Watch Series 6", price: 299, image: "watch.png" },
      { id: 36, name: "Apple Watch Nike Edition", price: 429, image: "watch.png" },
      { id: 37, name: "Apple Watch Hermes", price: 1199, image: "watch.png" },
      { id: 38, name: "Apple Watch Series 5", price: 249, image: "watch.png" },
      { id: 39, name: "Apple Watch SE 2nd Gen", price: 299, image: "watch.png" },
      { id: 40, name: "Apple Watch Series 4", price: 199, image: "watch.png" },
      { id: 41, name: "Apple Watch Ultra 2", price: 849, image: "watch.png" },
      { id: 42, name: "Apple Watch Stainless Steel", price: 699, image: "watch.png" },
      { id: 43, name: "Apple Watch Edition", price: 799, image: "watch.png" },
      { id: 44, name: "Apple Watch Series 3", price: 179, image: "watch.png" },
      { id: 45, name: "Apple Watch Series 2", price: 149, image: "watch.png" },
    ],
    "Headphones": [
      { id: 46, name: "AirPods Max", price: 549, image: "airpods.png" },
      { id: 47, name: "AirPods Pro 2nd Gen", price: 249, image: "airpods.png" },
      { id: 48, name: "AirPods Pro 1st Gen", price: 199, image: "airpods.png" },
      { id: 49, name: "AirPods 3rd Gen", price: 179, image: "airpods.png" },
      { id: 50, name: "AirPods 2nd Gen", price: 129, image: "airpods.png" },
      { id: 51, name: "Beats Studio 3", price: 299, image: "airpods.png" },
      { id: 52, name: "Beats Fit Pro", price: 199, image: "airpods.png" },
      { id: 53, name: "PowerBeats Pro", price: 249, image: "airpods.png" },
      { id: 54, name: "Beats Solo Pro", price: 229, image: "airpods.png" },
      { id: 55, name: "AirPods Lightning Charging", price: 99, image: "airpods.png" },
      { id: 56, name: "Sony WH-1000XM5", price: 399, image: "airpods.png" },
      { id: 57, name: "Bose QuietComfort 45", price: 329, image: "airpods.png" },
      { id: 58, name: "Jabra Elite 85t", price: 179, image: "airpods.png" },
      { id: 59, name: "AirPods Wireless Charging", price: 159, image: "airpods.png" },
      { id: 60, name: "Bose Sport Earbuds", price: 129, image: "airpods.png" },
    ],
    "Cameras": [
        { id: 61, name: "Sony Alpha A7 III", price: 1999, image: "camera.png" },
        { id: 62, name: "Canon EOS R5", price: 3899, image: "camera.png" },
        { id: 63, name: "Nikon Z9", price: 5499, image: "camera.png" },
        { id: 64, name: "Fujifilm X-T5", price: 1699, image: "camera.png" },
        { id: 65, name: "Panasonic Lumix GH6", price: 2199, image: "camera.png" },
        { id: 66, name: "Canon EOS R6", price: 2499, image: "camera.png" },
        { id: 67, name: "Nikon D850", price: 2999, image: "camera.png" },
        { id: 68, name: "Sony Alpha A6400", price: 999, image: "camera.png" },
        { id: 69, name: "Canon EOS 90D", price: 1199, image: "camera.png" },
        { id: 70, name: "Olympus OM-D E-M1 Mark III", price: 1799, image: "camera.png" },
        { id: 71, name: "Sony ZV-1", price: 749, image: "camera.png" },
        { id: 72, name: "GoPro Hero 11", price: 399, image: "camera.png" },
        { id: 73, name: "DJI Pocket 2", price: 349, image: "camera.png" },
        { id: 74, name: "Canon EOS Rebel T7", price: 549, image: "camera.png" },
        { id: 75, name: "Nikon Z50", price: 999, image: "camera.png" },
      ],
      "TV": [
        { id: 76, name: "Apple TV 4K 32GB", price: 179, image: "appletv4k.png" },
        { id: 77, name: "Samsung QLED 65-inch 4K", price: 1299, image: "appletv4k.png" },
        { id: 78, name: "LG OLED C2 55-inch", price: 1599, image: "appletv4k.png" },
        { id: 79, name: "Sony Bravia XR 77-inch", price: 3499, image: "appletv4k.png" },
        { id: 80, name: "TCL 6-Series 55-inch QLED", price: 699, image: "appletv4k.png" },
        { id: 81, name: "Vizio 75-inch P-Series", price: 1199, image: "appletv4k.png" },
        { id: 82, name: "Hisense U8H 65-inch", price: 999, image: "appletv4k.png" },
        { id: 83, name: "Philips Ambilight 55-inch", price: 899, image: "appletv4k.png" },
        { id: 84, name: "Samsung The Frame 50-inch", price: 1099, image: "appletv4k.png" },
        { id: 85, name: "Toshiba Fire TV 43-inch", price: 349, image: "appletv4k.png" },
        { id: 86, name: "Roku 50-inch 4K Smart TV", price: 499, image: "appletv4k.png" },
        { id: 87, name: "Sony OLED A90J 83-inch", price: 4499, image: "appletv4k.png" },
        { id: 88, name: "LG NanoCell 75-inch", price: 1499, image: "appletv4k.png" },
        { id: 89, name: "Samsung Neo QLED 85-inch", price: 5499, image: "appletv4k.png" },
        { id: 90, name: "Insignia 55-inch Fire TV", price: 379, image: "appletv4k.png" },
      ],
      "Vision Pro": [
        { id: 91, name: "Apple Vision Pro 256GB", price: 3499, image: "visionpro.png" },
        { id: 92, name: "Apple Vision Pro 512GB", price: 3999, image: "visionpro.png" },
        { id: 93, name: "Apple Vision Pro 1TB", price: 4499, image: "visionpro.png" },
        { id: 94, name: "Apple Vision Pro with Extra Battery", price: 3799, image: "visionpro.png" },
        { id: 95, name: "Apple Vision Pro Developer Kit", price: 4999, image: "visionpro.png" },
        { id: 96, name: "Apple Vision Pro Custom Fit", price: 3599, image: "visionpro.png" },
        { id: 97, name: "Apple Vision Pro Travel Pack", price: 3749, image: "visionpro.png" },
        { id: 98, name: "Apple Vision Pro Gaming Edition", price: 3899, image: "visionpro.png" },
        { id: 99, name: "Apple Vision Pro Limited Edition", price: 4699, image: "visionpro.png" },
        { id: 100, name: "Apple Vision Pro ProMotion 120Hz", price: 4299, image: "visionpro.png" },
        { id: 101, name: "Apple Vision Pro Studio Edition", price: 4799, image: "visionpro.png" },
        { id: 102, name: "Apple Vision Pro Business Pack", price: 5099, image: "visionpro.png" },
        { id: 103, name: "Apple Vision Pro Mixed Reality Set", price: 5399, image: "visionpro.png" },
        { id: 104, name: "Apple Vision Pro for Enterprise", price: 5999, image: "visionpro.png" },
        { id: 105, name: "Apple Vision Pro with AppleCare+", price: 3999, image: "visionpro.png" },
      ],
  };
export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("Apple Mobiles");
  const [sortOption, setSortOption] = useState("");
  const products = allProducts[selectedCategory] || [];
  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === "Price: Low to High") return a.price - b.price;
    if (sortOption === "Price: High to Low") return b.price - a.price;
    return 0; // Default: No sorting
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex gap-6">
        {/* Category Sidebar */}
        <aside className="w-1/4 bg-white shadow-lg p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Category</h2>
          <ul>
            {categories.map((category) => (
              <li
                key={category}
                className={`p-2 cursor-pointer rounded-lg transition ${
                  selectedCategory === category ? "bg-black text-white" : "hover:bg-gray-200"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </aside>

        {/* Products Grid */}
        <div className="w-3/4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">{selectedCategory}</h2>
            <select
              className="p-2 border rounded-lg"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="">Default</option>
              <option value="Price: Low to High">Price: Low to High</option>
              <option value="Price: High to Low">Price: High to Low</option>
            </select>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {sortedProducts.map((product) => (
              <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg relative">
                <img src={product.image} alt={product.name} className="w-full h-40 object-contain mb-4" />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-xl font-bold text-gray-800">${product.price}</p>
                <button className="w-full bg-black text-white p-2 rounded-lg mt-3 hover:bg-gray-800">
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
