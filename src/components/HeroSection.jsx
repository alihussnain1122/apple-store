import React, { useState } from "react";

const videos = [
  {
    src: "/iphone.mp4",
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
    src: "/Airpods.mp4",
    title: "AirPods Pro",
    desc: "Immersive sound. Adaptive Transparency. Magical experience.",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length); // Loop to next video
  };

  const currentVideo = videos[currentIndex];

  return (
    <section className="relative w-full h-screen overflow-hidden text-white flex items-center justify-center">
      {/* Background Video */}
      <video
        key={currentVideo.src}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        className="absolute inset-0 w-full h-full object-cover z-10"
      >
        <source src={currentVideo.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

     

      {/* Content */}
      <div className="relative z-30 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-md">{currentVideo.title}</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-white drop-shadow-md bg-transparent">
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
