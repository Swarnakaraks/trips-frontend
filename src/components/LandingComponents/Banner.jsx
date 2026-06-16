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

    let animationFrame;
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, trigger, duration]);

  return count;
};

const StatItem = React.memo(({ end, suffix, label, trigger }) => {
  const value = useCountUp(end, trigger);

  return (
    <div className="py-6 border-r last:border-r-0 border-white/10">
      <h3 className="text-4xl md:text-5xl font-bold text-white">
        {value}
        {suffix}
      </h3>

      <p className="text-white/70 mt-3 text-sm md:text-base">
        {label}
      </p>
    </div>
  );
});

const Banner = () => {
  const sectionRef = useRef(null);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const currentSection = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTrigger(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 bg-cover bg-center bg-fixed overflow-hidden"
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
        <div className="grid grid-cols-2 lg:grid-cols-4 mt-12">
          {statsData.map((item, index) => (
            <StatItem
              key={index}
              {...item}
              trigger={trigger}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;