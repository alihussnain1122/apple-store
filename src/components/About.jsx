import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.from(".fade-in", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <section ref={aboutRef} className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center px-6 md:px-16 py-20">
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl font-bold fade-in">About Us</h1>
        <p className="mt-4 text-lg text-gray-600 fade-in">
          We are a modern tech company committed to innovation, excellence, and delivering the best digital experiences.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-5xl">
        <div className="p-6 bg-white shadow-md rounded-lg fade-in">
          <h2 className="text-xl font-semibold">Our Mission</h2>
          <p className="text-gray-600 mt-2">
            Deliver top-notch products and services with a focus on customer satisfaction.
          </p>
        </div>

        <div className="p-6 bg-white shadow-md rounded-lg fade-in">
          <h2 className="text-xl font-semibold">Our Vision</h2>
          <p className="text-gray-600 mt-2">
            Innovate the industry by providing cutting-edge digital solutions.
          </p>
        </div>

        <div className="p-6 bg-white shadow-md rounded-lg fade-in">
          <h2 className="text-xl font-semibold">Our Values</h2>
          <p className="text-gray-600 mt-2">
            Integrity, quality, and continuous growth in everything we do.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
