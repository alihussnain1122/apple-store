import React, { useState } from "react";
import "../App.css";

const videos = [
  {
    src: "/iPhone.mp4",
    title: "iPhone 16 Pro",
    desc: "Pro. Beyond. Created to change everything for the better. For everyone.",
  },
  {
    src: "/iPad.mp4",
    title: "iPad 2024",
    desc: "Welcome to the era of creativity. Explore what’s next.",
  },
  {
    src: "/Watch.mp4",
    title: "Apple Watch",
    desc: "Your health. Your fitness. Right on your wrist.",
  },
  {
    src: "/Mac.mp4",
    title: "MacBook Pro",
    desc: "Supercharged for pros. Faster than ever.",
  },
  {
    src: "/AirPods.mp4",
    title: "AirPods Pro",
    desc: "Immersive sound. Adaptive Transparency. Magical experience.",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const currentVideo = videos[currentIndex];

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <video
        key={currentVideo.src}
        autoPlay
        muted
        loop
        playsInline
        onEnded={handleVideoEnd}
        className="absolute inset-0 w-full h-full object-cover z-10"
      >
        <source src={currentVideo.src} type="video/mp4" />
      </video>

      {/* Text Content */}
      <div className="relative z-30 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold stroke-outline">
          {currentVideo.title}
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-white font-light max-w-2xl mx-auto">
          {currentVideo.desc}
        </p>
        <button className="mt-6 px-8 py-3 border-2 border-white text-white rounded-md hover:bg-white hover:text-black transition duration-300">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
