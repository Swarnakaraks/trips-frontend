import React from "react";

const companies = [
 "/png1.png",
 "/png2.png",
 "/png3.png",
 "/png4.png",
 "/png5.png",
];

const TrustedCompanies = () => {
  return (
    <section className="py-10 overflow-hidden bg-blue-50">
      <div className="text-center mb-10">
        <p className="uppercase tracking-[6px] text-orange-500 font-semibold">
          Trusted By
        </p>
        <h2 className=" text-3xl md:text-4xl font-black text-gray-900 mt-2">
          Top Global Companies
        </h2>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-scroll group-hover:[animation-play-state:paused]">
          {[...companies, ...companies].map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center mx-12 min-w-[180px]"
            >
              <img
                src={logo}
                alt="company"
                className="h-15 object-contain opacity-70 hover:opacity-100 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TrustedCompanies;