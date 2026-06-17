import React from "react";

const statsData = [
  { end: "20K+",  label: "Happy Travelers" },
  { end: "350+", label: "Destinations Covered" },
  { end: "12+", label: "Years Experience" },
  { end: "98%", label: "Customer Satisfaction" },
];
  

const Banner = () => {

  return (
    <section

      className="relative py-16 md:py-24 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/beautiful.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
          Trusted By Thousands of{" "}
          <span className="bg-linear-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Travelers Worldwide
          </span>
        </h2>

        <p className="mt-4 text-white/70 text-lg leading-8 max-w-3xl mx-auto">
          Turning dream destinations into unforgettable experiences for
          explorers worldwide.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 mt-12 gap-6">
          {statsData.map((item, index) => (
           <div key={index} className="flex flex-col text-white border-r-0 md:border-r border-white/20 ">
            <span className="text-3xl md:text-5xl font-extrabold">{item.end}</span>
           
            <span className="text-white/80">{item.label}</span>
           </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;