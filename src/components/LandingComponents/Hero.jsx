import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {motion} from "framer-motion";

const slides = [
  {
    id: 1,
    title: "Explore Hidden Paradise",
    script: "Destination",
    desc: "Float above crystal-clear lagoons, drift through untouched islands, and experience endless horizons where time slows down beautifully.",
    image: "https://images.unsplash.com/photo-1476522465286-b5b94c729d2a?q=80&w=1458&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Ocean Blue Paradise",
    script: "Freedom",
    desc: "Sail across endless blue waters, dive into crystal-clear oceans, and feel the calm rhythm of tropical island life.",
    image: "https://images.unsplash.com/photo-1598598795009-f80c5072e665?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Discover Sacred Heritage",
    script: "Skyline",
    desc: "Walk through ancient temples hidden in mist and jungle, where history, culture, and nature blend into a magical experience.",
    image: "https://images.unsplash.com/photo-1553670590-f58a6135f69e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function TripHero() {
  const [current, setCurrent] = useState(0);
  const active = slides[current];

  useEffect(() => {
  const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, 6000);

  return () => clearInterval(interval);
}, []);


  return (
    <section className="relative h-[60vh] md:h-screen overflow-hidden flex items-center justify-center text-white">
      {/* BACKGROUND */}
{slides.map((s, i) => (
  <div
    key={s.id}
    className={`absolute inset-0 transition-opacity duration-1000 ${
      current === i ? "opacity-100" : "opacity-0"
    }`}
  >
    <img
      src={s.image}
      alt={s.title}
      className={`h-full w-full object-cover transition-all duration-1000 ease-in-out ${
  current === i ? "scale-110" : "scale-100"
}`}
      loading="lazy"
    />
  </div>
))}

      {/* overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent z-10" />

      {/* CONTENT */}
      <div className="relative z-20 text-center px-6">
  <motion.h1
    key={active.id}
    initial={{ opacity: 0, y: 30, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.6 }}
    className="text-4xl md:text-7xl font-bold"
  >
    {active.title}
    <span className="block text-orange-400">{active.script}</span>
  </motion.h1>

  <motion.p
    key={active.desc}
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.7, delay: 0.1 }}
    className="mt-5 text-white/70 max-w-xl mx-auto"
  >
    {active.desc}
  </motion.p>

  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="mt-10"
  >
    <Link
      to="/login"
      className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-linear-to-r from-blue-600 to-cyan-500 hover:scale-105 transition-transform"
    >
      Start Journey
      <ArrowRight className="w-5 h-5" />
    </Link>
  </motion.div>
</div>

      {/* DOTS (NEW) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-500 rounded-full ${
              current === i
                ? "w-10 h-2 bg-blue-400"
                : "w-2 h-2 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
