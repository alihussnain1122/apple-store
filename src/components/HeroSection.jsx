import React, { useState } from "react";

const videos = [
  { src: "/iphone.mp4", title: "iPhone 16 Pro", desc: "Pro. Beyond. Created to change everything for the better." },
  { src: "/Mac.mp4", title: "MacBook Pro", desc: "Supercharged for pros. Faster than ever." },
  { src: "/Airpods.mp4", title: "AirPods Pro", desc: "Immersive sound. Adaptive Transparency. Magical experience." },
  { src: "/visionpro.mp4", title: "Apple Vision Pro", desc: "Welcome to the era of spatial computing." },
  { src: "/Watch.mp4", title: "Apple Watch", desc: "Your health. Your fitness. Right on your wrist." }
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length); // Move to next video in loop
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full rounded-lg overflow-hidden border-2 border-gray-800 border-opacity-50">
        <video
          key={videos[currentIndex].src}
          autoPlay
          muted
          onEnded={handleVideoEnd} // Move to next video when current video ends
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videos[currentIndex].src} type="video/mp4" />
        </video>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-5">
        <h4 className="text-gray-300 text-lg md:text-xl font-medium">{videos[currentIndex].desc}</h4>
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide">{videos[currentIndex].title}</h1>
        <button className="mt-6 px-8 py-3 border-2 border-gray-400 text-white text-lg rounded-md hover:bg-opacity-10 hover:border-white transition duration-300 cursor-pointer">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
