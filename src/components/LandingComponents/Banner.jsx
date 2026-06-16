import React, { useEffect, useRef, useState } from "react";

const statsData = [
  { end: 20, suffix: "K+", label: "Happy Travelers" },
  { end: 350, suffix: "+", label: "Destinations Covered" },
  { end: 12, suffix: "+", label: "Years Experience" },
  { end: 98, suffix: "%", label: "Customer Satisfaction" },
];


const useCountUp = (end, trigger, duration = 1200) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [end, trigger, duration]);

  return count;
};

const StatItem = ({ end, suffix, label, trigger }) => {
  const value = useCountUp(end, trigger);

  return (
    <div className="py-6 border-r last:border-r-0 border-white/10">
      <h3 className="text-5xl font-bold text-white">
        {value}
        {suffix}
      </h3>
      <p className="text-white/70 mt-3 text-sm md:text-base">{label}</p>
    </div>
  );
};

const Banner = () => {
  const sectionRef = useRef(null);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTrigger(true);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-15 bg-fixed bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/beautiful.jpg')",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 text-center">

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-5 leading-tight">
            Trusted By Thousands of{" "}
            <span className="bg-gradient-to-r from bg-blue-600 to-blue-400 bg-clip-text text-transparent">
            Travelers Worldwide
              </span>
          </h2>

          <p className="mt-4 text-white/70 text-lg leading-8">
            Turning dream destinations into unforgettable experiences for explorers worldwide.
          </p>

        {/* stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4">

          {statsData.map((item, i) => (
            <StatItem key={i} {...item} trigger={trigger} />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Banner;