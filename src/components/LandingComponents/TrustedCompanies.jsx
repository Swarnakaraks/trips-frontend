import React, { useState } from "react";

const companies = [
  "/png1.png",
  "/png2.png",
  "/png3.png",
  "/png4.png",
  "/png5.png",
];

const TrustedCompanies = () => {
  const [paused, setPaused] = useState(false);

  return (
    <section className="py-10 overflow-hidden bg-blue-50">
      <div className="text-center mb-10">
        <p className="uppercase tracking-[6px] text-orange-500 font-semibold">
          Trusted By
        </p>

        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2">
          Top Global Companies
        </h2>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="run flex items-center"
          style={{
            animationPlayState: paused ? "paused" : "running",
          }}
        >
          {[...companies, ...companies].map((logo, index) => (
            <div
              key={index}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              className="flex items-center justify-center mx-10 md:mx-14 min-w-40 md:min-w-50"
            >
              <img
                src={logo}
                alt={`Company ${index + 1}`}
                loading="lazy"
                decoding="async"
                className="h-12 md:h-16 object-contain opacity-70 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;