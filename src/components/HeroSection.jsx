import React, { useState } from "react";
import {AnimatePresence } from "framer-motion";

const videos = [
  {
    src: "/iphone.mp4",
    title: "iPhone 16 Pro",
    desc: "Pro. Beyond. Created to change everything for the better.",
    bg: "bg-white/10 backdrop-blur-md text-white",
  },
  {
    src: "/iPad.mp4",
    title: "iPad 2024",
    desc: "Welcome to the era of creativity. Explore what’s next.",
    bg: "bg-blue-100/30 text-black backdrop-blur-md",
  },
  {
    src: "/Watch.mp4",
    title: "Apple Watch",
    desc: "Your health. Your fitness. Right on your wrist.",
    bg: "bg-black/60 text-white backdrop-blur-md",
  },
  {
    src: "/Mac.mp4",
    title: "MacBook Pro",
    desc: "Supercharged for pros. Faster than ever.",
    bg: "bg-gray-800/70 text-white backdrop-blur-md",
  },
  {
    src: "/Airpods.mp4",
    title: "AirPods Pro",
    desc: "Immersive sound. Adaptive Transparency. Magical experience.",
    bg: "bg-white/70 text-black backdrop-blur-md",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const currentVideo = videos[currentIndex];

  return (
    <section className="relative w-full h-screen overflow-hidden text-white flex items-center justify-center">
      {/* Background Video */}
      <video
        key={currentVideo.src}
        autoPlay
        muted
        onEnded={handleVideoEnd}
        className="absolute inset-0 w-full h-full object-cover z-10"
      >
        <source src={currentVideo.src} type="video/mp4" />
      </video>

      {/* Content Overlay */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className={`relative z-20 px-6 py-8 rounded-xl text-center shadow-xl max-w-2xl ${currentVideo.bg}`}
        >
          <h1 className="text-4xl md:text-6xl font-bold">{currentVideo.title}</h1>
          <p className="mt-4 text-lg md:text-xl">{currentVideo.desc}</p>
          <button className="mt-6 px-6 py-3 border-2 border-current rounded hover:bg-white hover:text-black transition duration-300">
            Explore
          </button>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
