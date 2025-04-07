import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const HeroSection = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="https://www.apple.com/105/media/us/ipad/2024/45762adb-901a-4726-8b0c-1f3ee092b09a/anim/welcome-hero/xlarge.mp4#t=0"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Centered content */}
      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6"
      >
        <h2 className="text-lg md:text-xl text-gray-300 mb-2">
          Say hello to the new iPad.
        </h2>
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
          iPad 2024
        </h1>
        <p className="text-md md:text-lg text-gray-200 mt-4 max-w-xl">
          A powerful way to work, play, and create — now more intuitive than ever.
        </p>
        <button className="mt-8 px-6 py-3 border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
