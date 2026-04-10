import React from "react";
import { useEffect, useState } from "react";
import CustomButton from "../common/CustomButton";

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const slides = [
  {
    id: 1,
    title: "FIND YOUR NEXT ADVENTURE",
    desc: "Discover unforgettable journeys across unique experiences, carefully crafted to inspire your travel dreams. Explore new destinations, enjoy seamless planning, and create memories that last a lifetime with ease and comfort.",
    image: "/sea.jpg",
  },
  {
    id: 2,
    title: "EXPLORE THE WORLD WITH CONFIDENCE",
    desc: "Plan your trips effortlessly with trusted recommendations, smooth itineraries, and reliable travel experiences. Whether you're traveling solo or with others, enjoy comfort, safety, and convenience at every step of your journey.",
    image: "/trip.jpg",
  },
  {
    id: 3,
    title: "RELAX, EXPLORE & ENJOY",
    desc: "Take a break from your routine and immerse yourself in relaxing escapes designed for every traveler. From peaceful getaways to exciting adventures, find the perfect balance of relaxation, exploration, and enjoyment.",
    image: "/mountain.jpg",
  },
];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const active = slides[current];

  return (
    <div className="-mt-26 relative w-full h-screen overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${active.image})` }}/>

      {/* OVERLAY + BLUR */}
      <div className="absolute inset-0 bg-black/60 "></div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 md:px-20 text-white w-full">
        {/* TITLE */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight ">
          {active.title}
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-6 text-gray-300 text-lg leading-relaxed delay-300 text-center max-w-4xl mb-10">
          {active.desc}
        </p>
      <CustomButton text={"Explore"}/>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === current ? "bg-blue-600" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
