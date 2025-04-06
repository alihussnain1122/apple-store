import React, { useEffect, useRef, useState } from "react";

const videos = [
  { id: "eDqfg_LexCQ", title: "iPhone 16 Pro", desc: "Pro. Beyond. Created to change everything for the better." },
  { id: "LzHbDkGvHlw", title: "MacBook Pro", desc: "Supercharged for pros. Faster than ever." },
  { id: "jYXaYwq0_9A", title: "AirPods Pro", desc: "Immersive sound. Adaptive Transparency. Magical experience." },
];

const HeroSection = () => {
  const playerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Load YouTube Iframe API
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    window.onYouTubeIframeAPIReady = loadVideo;

    return () => {
      window.onYouTubeIframeAPIReady = null;
    };
  }, []);

  const loadVideo = () => {
    playerRef.current = new window.YT.Player("yt-player", {
      height: "100%",
      width: "100%",
      videoId: videos[currentIndex].id,
      playerVars: {
        autoplay: 1,
        mute: 1,
        controls: 0,
        showinfo: 0,
        modestbranding: 1,
        rel: 0,
      },
      events: {
        onStateChange: (event) => {
          if (event.data === window.YT.PlayerState.ENDED) {
            setCurrentIndex((prev) => (prev + 1) % videos.length);
          }
        },
      },
    });
  };

  useEffect(() => {
    if (window.YT && window.YT.Player && playerRef.current) {
      playerRef.current.loadVideoById(videos[currentIndex].id);
    }
  }, [currentIndex]);

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 w-full h-full rounded-lg overflow-hidden">
        <div id="yt-player" className="absolute w-full h-full"></div>
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>
      <div className="relative z-10 max-w-3xl px-5">
        <h4 className="text-gray-300 text-lg md:text-xl font-medium">{videos[currentIndex].desc}</h4>
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide">{videos[currentIndex].title}</h1>
        <button className="mt-6 px-8 py-3 border-2 border-gray-400 text-white text-lg rounded-md hover:bg-opacity-10 hover:border-white transition duration-300 cursor-pointer">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
