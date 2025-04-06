import React, { useEffect, useRef, useState } from "react";

const videos = [
  { id: "abcd1234", title: "iPhone 16 Pro", desc: "Pro. Beyond. Created to change everything for the better." },
  { id: "efgh5678", title: "MacBook Pro", desc: "Supercharged for pros. Faster than ever." },
  { id: "ijkl9012", title: "AirPods Pro", desc: "Immersive sound. Adaptive Transparency. Magical experience." },
];

const HeroSection = () => {
  const playerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Load YouTube API script
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Setup player when API is ready
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("youtube-player", {
        videoId: videos[currentIndex].id,
        events: {
          onStateChange: onPlayerStateChange,
        },
        playerVars: {
          autoplay: 1,
          controls: 0,
          showinfo: 0,
          modestbranding: 1,
          loop: 0,
          mute: 1,
        },
      });
    };
  }, []);

  const onPlayerStateChange = (event) => {
    // 0 means video ended
    if (event.data === window.YT.PlayerState.ENDED) {
      const nextIndex = (currentIndex + 1) % videos.length;
      setCurrentIndex(nextIndex);
      playerRef.current.loadVideoById(videos[nextIndex].id);
    }
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* YouTube iframe */}
      <div className="absolute inset-0 w-full h-full">
        <div id="youtube-player" className="w-full h-full"></div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
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
