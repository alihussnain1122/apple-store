import React, { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, ShoppingCart } from "lucide-react";

const product = {
  name: "Apple iPhone 14 Pro Max",
  price: "$1399",
  originalPrice: "$1499",
  colors: ["black", "gold", "purple", "red", "white"],
  storageOptions: ["256GB", "512GB", "1TB"],
  specs: {
    display: "6.7”",
    resolution: "2796x1290",
    refreshRate: "120 Hz",
    camera: "48+12+12 MP",
    battery: "4323 mAh",
    processor: "Apple A16 Bionic",
    cores: "6",
  },
  rating: 4.8,
  reviews: [
    {
      name: "Grace Carey",
      comment:
        "I was a bit nervous to buy a second-hand iPhone, but it’s in excellent condition. Highly recommend!",
      date: "26 January 2023",
      rating: 5,
    },
    {
      name: "Ronald Richards",
      comment:
        "The phone’s 1TB storage is so useful. Apple has outdone itself!",
      date: "29 January 2023",
      rating: 5,
    },
  ],
};

export default function ProductDetails() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedStorage, setSelectedStorage] = useState(product.storageOptions[0]);
  
  return (
    <div className="container mx-auto p-6">
      {/* Product Overview */}
      <div className="grid grid-cols-2 gap-6">
        <img
          src="/path/to/iphone.jpg"
          alt={product.name}
          className="w-full rounded-lg shadow-md"
        />
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-lg font-semibold text-red-500">{product.price} <span className="line-through text-gray-500">{product.originalPrice}</span></p>
          
          <div className="flex space-x-2 mt-2">
            {product.colors.map((color) => (
              <button
                key={color}
                className={`w-6 h-6 rounded-full border-2 ${selectedColor === color ? "border-black" : "border-gray-300"}`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              />
            ))}
          </div>

          <div className="mt-4">
            {product.storageOptions.map((storage) => (
              <button
                key={storage}
                className={`px-4 py-2 border ${selectedStorage === storage ? "border-black" : "border-gray-300"} rounded-lg mr-2`}
                onClick={() => setSelectedStorage(storage)}
              >
                {storage}
              </button>
            ))}
          </div>
          
          <div className="mt-4 flex space-x-4">
            <Button variant="outline">Add to Wishlist</Button>
            <Button className="bg-black text-white flex items-center space-x-2">
              <ShoppingCart /> <span>Add to Cart</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold">Details</h2>
        <p className="text-gray-600 mt-2">Enhanced durability and excellent performance with Apple A16 Bionic chip.</p>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="mt-4">View More</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Full Product Details</DialogTitle>
            </DialogHeader>
            <p>Screen Size: {product.specs.display}</p>
            <p>Resolution: {product.specs.resolution}</p>
            <p>Refresh Rate: {product.specs.refreshRate}</p>
            <p>Camera: {product.specs.camera}</p>
            <p>Battery: {product.specs.battery}</p>
          </DialogContent>
        </Dialog>
      </div>

      {/* Reviews */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold">Reviews ({product.reviews.length})</h2>
        <div className="mt-4">
          {product.reviews.map((review, index) => (
            <Card key={index} className="p-4 mb-4">
              <div className="flex items-center space-x-2">
                <Star className="text-yellow-400" />
                <span>{review.rating} / 5</span>
              </div>
              <p className="mt-2 text-gray-700">{review.comment}</p>
              <p className="text-gray-500 text-sm mt-1">- {review.name}, {review.date}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
