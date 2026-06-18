import React, { useState } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sujan Sharma",
    img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Best Nepal travel experience ever. Everything was perfectly organized and smooth.",
  },
  {
    name: "Anita KC",
    img: "https://images.unsplash.com/photo-1648123367577-661eee58334b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Super smooth booking process and excellent support throughout the journey.",
  },
  {
    name: "Krishna Katwal",
    img: "https://images.unsplash.com/photo-1572957946666-2e386e1e913d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Everest trek was life-changing. Support team was amazing from start to end.",
  },
  {
    name: "Anisha Rai",
    img: "https://images.unsplash.com/photo-1580632969236-0c96e97d48fe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Perfect family tour experience in Chitwan. Kids enjoyed a lot!",
  },

];

const Testimonial = () => {
  const [paused, setPaused] = useState(false);

  return (
    <section className="py-16 px-6 lg:px-20 overflow-hidden">
      {/* HEADER */}
      <div className="text-center mb-12">
        <p className="uppercase tracking-[5px] text-orange-500 font-bold mb-4">
          Testimonials
        </p>

        <h1 className="flex flex-col md:flex-row justify-center items-center gap-3 text-4xl md:text-6xl font-black text-gray-800">
          <span>What Our</span>
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-blue-400">
            Travelers Say
          </span>
        </h1>
      </div>

      
      <div className="relative overflow-hidden">
        <div
          className="run flex gap-8 w-max py-4"
          style={{
            animationPlayState: paused ? "paused" : "running",
          }}
        >
          {[...testimonials, ...testimonials].map((item, i) => (
            <div
              key={i}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              className="group relative min-w-85 max-w-85 bg-white rounded-[28px] shadow-lg p-6 transition-all duration-300 hover:scale-105"
            >
              <Quote className="absolute top-5 right-5 text-orange-300 w-6 h-6" />

              <div className="flex items-center gap-4 mb-5">
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  decoding="async"
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-semibold text-gray-800">
                    {item.name}
                  </h3>

                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        size={15}
                        className="fill-orange-400 text-orange-400"
                      />
                    ))}
                    <span className="text-sm text-gray-700 ml-1">
                      5.0
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-7">
                "{item.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;