import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

const videos = [
  {
    src: "/iPad.mp4",
    title: "iPad 2024",
    desc: "Welcome to the era of creativity. Explore what’s next.",
  },
  {
    src: "/Mac.mp4",
    title: "MacBook Pro",
    desc: "Supercharged for pros. Faster than ever.",
  },
  {
    src: "/Airpods.mp4",
    title: "AirPods Pro",
    desc: "Immersive sound. Magical experience. Next-level audio.",
  },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const videoRef = useRef(null);
  const textRef = useRef(null);

  const handleVideoEnd = () => {
    gsap.to(textRef.current, { opacity: 0, duration: 0.6, onComplete: () => {
      setIndex((prev) => (prev + 1) % videos.length);
    }});
  };

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
    );
  }, [index]);

  return (
    <section className="relative w-full h-screen overflow-hidden text-white flex items-center justify-center">
      {/* Background Video */}
      <video
        key={videos[index].src}
        ref={videoRef}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        className="absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-500"
      >
        <source src={videos[index].src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-30 z-20"></div> */}

      {/* Text Content */}
      <div
        ref={textRef}
        className="relative z-30 text-center px-6 max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-md">{videos[index].title}</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200">{videos[index].desc}</p>
        <button className="mt-6 px-8 py-3 border-2 border-white text-white text-lg rounded hover:bg-white hover:text-black transition duration-300">
          Explore Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
