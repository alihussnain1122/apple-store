import React from 'react';

export default function BigSummerSale() {
  return (
    <div className="relative bg-gradient-to-r from-gray-900 to-black text-white p-10 flex flex-col justify-center items-center h-[400px] overflow-hidden text-center">
      
      {/* 3D Futuristic SVG with Curved Neon Streaks */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-30"
        viewBox="0 0 800 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50 100 Q200 50, 400 100 T750 100"
          stroke="url(#neonGradient)"
          strokeWidth="8"
          fill="transparent"
          strokeLinecap="round"
        />
        <path
          d="M50 300 Q200 350, 400 300 T750 300"
          stroke="url(#neonGradient2)"
          strokeWidth="6"
          fill="transparent"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="neonGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00FFFF" />
            <stop offset="100%" stopColor="#FF00FF" />
          </linearGradient>
          <linearGradient id="neonGradient2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF0000" />
            <stop offset="100%" stopColor="#FFA500" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Heading */}
      <h2 className="text-6xl font-extralight relative">
        Big Summer <span className="font-bold">Sale</span>
      </h2>

      {/* Tagline */}
      <p className="text-gray-300 mt-2 text-lg relative">
        Hot Deals, Cool Prices on Apple Products!
      </p>

      {/* Call-to-Action Button */}
      <button className="mt-6 px-6 py-2 border border-white rounded-md text-white hover:bg-white hover:text-black transition relative">
        Shop Now
      </button>

      {/* Floating 3D Gradient Accents */}
      <div className="absolute bottom-[-40px] right-[-50px] w-36 h-36 bg-blue-500 opacity-30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-[-30px] left-[-50px] w-28 h-28 bg-purple-500 opacity-30 rounded-full blur-3xl animate-pulse"></div>
    </div>
  );
}
