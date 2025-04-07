import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden text-white flex items-center justify-center">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/ipad.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold">ishayanPad 2024</h1>
        <p className="mt-4 text-lg md:text-xl">
          Welcome to the era of creativity. Explore what’s next.
        </p>
        <button className="mt-6 px-6 py-3 border-2 border-white rounded hover:bg-white hover:text-black transition duration-300">
          Explore iPad
        </button>
      </div>
      <h1 className="text-white">Shayan is checking</h1>
    </section>
  );
};

export default HeroSection;
