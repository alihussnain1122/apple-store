import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const sections = sectionRef.current.querySelectorAll(".fade-up");

    sections.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
            // Add markers: true for debugging (remove in production)
          },
        }
      );
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-black text-white px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20 space-y-12 md:space-y-16 lg:space-y-20">
      {/* Intro */}
      <div className="fade-up text-center max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
          About Apple Store
        </h1>
        <p className="text-base sm:text-lg text-gray-300">
          Crafting technology experiences that inspire. We're reimagining the future—one product at a time.
        </p>
      </div>

      {/* Company Mission */}
      <div className="fade-up max-w-5xl mx-auto text-center space-y-4 md:space-y-6">
        <h2 className="text-2xl sm:text-3xl font-semibold">Our Mission</h2>
        <p className="text-sm sm:text-base text-gray-400">
          To deliver powerful, beautiful, and seamless technology experiences to every user. From iPhones to MacBooks, we bring innovation to your fingertips.
        </p>
        <img 
          src="/about-1.jpg" 
          alt="Mission" 
          className="mx-auto rounded-xl shadow-lg w-full max-w-4xl h-auto max-h-[300px] sm:max-h-[350px] md:max-h-[400px] object-cover mt-4" 
        />
      </div>

      {/* Innovation Section */}
      <div className="fade-up max-w-5xl mx-auto text-center space-y-4 md:space-y-6">
        <h2 className="text-2xl sm:text-3xl font-semibold">Driven by Innovation</h2>
        <p className="text-sm sm:text-base text-gray-400">
          We're constantly evolving—pushing boundaries in design, performance, and sustainability. Our devices are crafted to elevate your everyday experiences.
        </p>
        <img 
          src="/about-2.jpg" 
          alt="Innovation" 
          className="mx-auto rounded-xl shadow-lg w-full max-w-4xl h-auto max-h-[300px] sm:max-h-[350px] md:max-h-[400px] object-cover mt-4" 
        />
      </div>

      {/* Product Focus */}
      <div className="fade-up max-w-5xl mx-auto text-center space-y-4 md:space-y-6">
        <h2 className="text-2xl sm:text-3xl font-semibold">Our Products</h2>
        <p className="text-sm sm:text-base text-gray-400">
          Explore a curated range of Apple devices including the latest iPhones, iPads, Watches, MacBooks, and AirPods—designed with precision and purpose.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-6">
          <div className="overflow-hidden rounded-xl shadow hover:scale-105 transition-transform duration-300">
            <img src="/iphone.png" className="w-full h-full object-cover" alt="iPhone" />
          </div>
          <div className="overflow-hidden rounded-xl shadow hover:scale-105 transition-transform duration-300">
            <img src="/ipad.jpg" className="w-full h-full object-cover" alt="iPad" />
          </div>
          <div className="overflow-hidden rounded-xl shadow hover:scale-105 transition-transform duration-300">
            <img src="/watch.png" className="w-full h-full object-cover" alt="Watch" />
          </div>
          <div className="overflow-hidden rounded-xl shadow hover:scale-105 transition-transform duration-300">
            <img src="/macbook.png" className="w-full h-full object-cover" alt="Mac" />
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="fade-up text-center mt-12 md:mt-20">
        <h3 className="text-xl sm:text-2xl font-bold">Ready to experience the future?</h3>
        <button className="mt-6 px-6 sm:px-8 py-2 sm:py-3 border-2 border-white rounded-lg hover:bg-white hover:text-black transition duration-300 text-sm sm:text-base">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default About;