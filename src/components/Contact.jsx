import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contactRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.from(".title", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power2.out",
    })
      .from(".description", { opacity: 0, y: 20, duration: 0.6 }, "-=0.4")
      .from(formRef.current, { opacity: 0, scale: 0.9, duration: 0.8, ease: "back.out(1.4)" }, "-=0.3")
      .from(infoRef.current, { opacity: 0, x: 50, duration: 0.8, ease: "power3.out" }, "-=0.5");
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
    alert("Message Sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      ref={contactRef}
      className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center px-6 md:px-16 py-20"
    >
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl font-bold title">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-600 description">
          Have questions? Let’s talk.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mt-12 max-w-5xl w-full">
        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="p-6 bg-white shadow-lg rounded-lg transform transition-transform hover:scale-[1.02]"
        >
          <h2 className="text-xl font-semibold">Send a Message</h2>
          <div className="mt-4">
            <label className="block text-gray-600">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-600">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-transform transform active:scale-95"
          >
            Send Message
          </button>
        </form>

        {/* Contact Information */}
        <div ref={infoRef} className="p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold">Contact Information</h2>
          <p className="mt-4 text-gray-600">
            Reach us through the details below.
          </p>
          <div className="mt-6 space-y-4">
            <p className="flex items-center text-gray-700">
              📍 <span className="ml-2">123 Tech Street, Karachi, PK</span>
            </p>
            <p className="flex items-center text-gray-700">
              📞 <span className="ml-2">+92 323 123 4567</span>
            </p>
            <p className="flex items-center text-gray-700">
              ✉️ <span className="ml-2">contact@applepakistan.com.pk</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
