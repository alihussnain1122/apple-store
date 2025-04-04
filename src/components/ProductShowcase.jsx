import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProductShowcase = () => {
  const sectionsRef = useRef([]);
  const imagesRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    imagesRef.current.forEach((image) => {
      gsap.fromTo(
        image,
        { scale: 0.8 },
        {
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: image,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-16 py-10">
      {/* PlayStation Section */}
      <div
        ref={(el) => (sectionsRef.current[0] = el)}
        className="flex items-center justify-between bg-white p-8 rounded-lg shadow-md"
      >
        <div className="max-w-[50%]">
          <h2 className="text-4xl font-semibold">
            Playstation <span className="font-bold">5</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will
            redefine your PlayStation experience.
          </p>
        </div>
        <img
          ref={(el) => (imagesRef.current[0] = el)}
          src="/playstation.png"
          alt="PlayStation 5"
          className="max-w-[40%] h-auto object-contain"
        />
      </div>

      {/* MacBook Air Section */}
      <div
        ref={(el) => (sectionsRef.current[1] = el)}
        className="flex items-center justify-between bg-gray-100 p-8 rounded-lg shadow-md"
      >
        <div className="max-w-[50%]">
          <h2 className="text-4xl font-semibold">
            Macbook <span className="font-bold">Air</span>
          </h2>
          <p className="text-gray-600 mt-2">
            The new 15-inch MacBook Air makes room for more of what you love
            with a spacious Liquid Retina display.
          </p>
          {/* <button className="mt-4 px-6 py-2 border border-black text-black text-lg rounded-lg hover:bg-black hover:text-white transition-transform transform hover:scale-105 duration-300">
            Shop Now
          </button> */}
        </div>
        <img
          ref={(el) => (imagesRef.current[1] = el)}
          src="/macbook.png"
          alt="MacBook Air"
          className="max-w-[40%] h-auto object-contain"
        />
      </div>

      {/* AirPods Max Section */}
      <div
        ref={(el) => (sectionsRef.current[2] = el)}
        className="flex items-center justify-between bg-gray-200 p-8 rounded-lg shadow-md"
      >
        <div className="max-w-[50%]">
          <h2 className="text-2xl font-semibold">
            Apple <span className="font-bold">AirPods Max</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Computational audio. Listen, it's powerful.
          </p>
        </div>
        <img
          ref={(el) => (imagesRef.current[2] = el)}
          src="/airpods.png"
          alt="AirPods Max"
          className="max-w-[40%] h-auto object-contain"
        />
      </div>

      {/* Apple Watch Section */}
      <div
        ref={(el) => (sectionsRef.current[3] = el)}
        className="flex items-center justify-between bg-black text-white p-8 rounded-lg shadow-md"
      >
        <div className="max-w-[50%]">
          <h2 className="text-2xl font-semibold">
            Apple <span className="font-bold">Watch</span>
          </h2>
          <p className="text-gray-400 mt-2">
            The ultimate device for a healthy life.
          </p>
        </div>
        <img
          ref={(el) => (imagesRef.current[3] = el)}
          src="/watch.png"
          alt="Apple Watch"
          className="max-w-[40%] h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default ProductShowcase;
