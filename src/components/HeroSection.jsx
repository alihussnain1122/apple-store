import React, { useEffect, useRef, useState } from "react";

// Array of YouTube video IDs and corresponding product details
const videos = [
  {
    id: "eDqfg_LexCQ", // iPhone 16 Pro
    title: "iPhone 16 Pro",
    desc: "Pro. Beyond. Created to change everything for the better.",
  },
  {
    id: "IHTT_7AjoU8", // MacBook Pro
    title: "MacBook Pro",
    desc: "Supercharged for pros. Faster than ever.",
  },
  {
    id: "ql6mhhHCldY", // AirPods Pro
    title: "AirPods Pro",
    desc: "Immersive sound. Adaptive Transparency. Magical experience.",
  },
  {
    id: "TX9qSaGXFyg", // Apple Vision Pro
    title: "Apple Vision Pro",
    desc: "Welcome to the era of spatial computing.",
  },
  {
    id: "fOHj5kGU4fY", // Apple Watch
    title: "Apple Watch",
    desc: "Your health. Your fitness. Right on your wrist.",
  },
];

const HeroSection = () => {
  const playerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Load YouTube IFrame Player API script
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    // Function to create a new YouTube player
    const createPlayer = () => {
      playerRef.current = new window.YT.Player("youtube-player", {
        videoId: videos[currentIndex].id,
        events: {
          onStateChange: onPlayerStateChange,
        },
        playerVars: {
          autoplay: 1,
          controls: 0,
          modestbranding: 1,
          loop: 0,
          mute: 1,
        },
      });
    };

    // Ensure the YouTube API is ready before creating the player
    if (!window.YT) {
      window.onYouTubeIframeAPIReady = createPlayer;
    } else {
      createPlayer();
    }

    // Cleanup function to remove the player when the component unmounts
    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [currentIndex]);

  // Handler for YouTube player state changes
  const onPlayerStateChange = (event) => {
    if (event.data === window.YT.PlayerState.ENDED) {
      // Move to the next video in the array
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* YouTube iframe container */}
      <div className="absolute inset-0 w-full h-full">
        <div id="youtube-player" className="w-full h-full"></div>
      </div>

      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content overlay */}
      <div className="relative z-10 max-w-3xl px-5">
        <h4 className="text-gray-300 text-lg md:text-xl font-medium">
          {videos[currentIndex].desc}
        </h4>
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
          {videos[currentIndex].title}
        </h1>
        <button className="mt-6 px-8 py-3 border-2 border-gray-400 text-white text-lg rounded-md hover:bg-opacity-10 hover:border-white transition duration-300 cursor-pointer">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
