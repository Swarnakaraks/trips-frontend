import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

/* slides data */
const slides = [
  {
    id: 1,
    title: "Explore Hidden Paradise",
    script: "Destination",
    desc: "Float above crystal-clear lagoons, drift through untouched islands, and experience endless horizons where time slows down beautifully.",
    image: "/mountain.jpg",
  },
  {
    id: 2,
    title: "Ocean Blue Paradise",
    script: "Freedom",
    desc: "Sail across endless blue waters, dive into crystal-clear oceans, and feel the calm rhythm of tropical island life.",
    image: "/sea.jpg",
  },
  {
    id: 3,
    title: "Discover Sacred Heritage",
    script: "Skyline",
    desc: "Walk through ancient temples hidden in mist and jungle, where history, culture, and nature blend into a magical experience.",
    image: "/trip.jpg",
  },
];

const AUTOPLAY = 6000;

/* hero component */
export default function TripHero() {
  const [current, setCurrent] = useState(0);

  /* preload images */
  useEffect(() => {
    slides.forEach((s) => (new Image().src = s.image));
  }, []);

  /* autoplay slider */
  useEffect(() => {
    const id = setInterval(() => setCurrent((p) => (p + 1) % slides.length), AUTOPLAY);
    return () => clearInterval(id);
  }, []);

  const active = slides[current];

  return (
    <section id="home" className="relative h-[50vh] sm:h-[70vh] md:h-screen overflow-hidden flex items-center text-white justify-center">

      {/* background */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={active.id}
            className="absolute inset-0"
            initial={{ scale: 1.4, opacity: 1, filter: "blur(0px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            exit={{ scale: 1.04, opacity: 1, filter: "blur(4px)" }}
            transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={active.image} className="h-full w-full object-cover" />
          </motion.div>
        </AnimatePresence>

        {/* overlays */}
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/40 to-transparent" />
      </div>

      {/* content */}
      <div className="absolute  inset-0 w-screen z-10 flex justify-center text-center items-center px-6 md:px-12">

        <div className="w-full ">

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 1, y: 60, filter: "blur(5px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -25, filter: "blur(6px)" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col justify-center items-center "
            >

              {/* title */}
              <h1 className=" relative text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mt-12 md:mt-0">
                <div>{active.title}</div>
                <div className=" text-5xl md:text-8xl bg-linear-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                  {active.script}
                </div>
              </h1>
              {/* description */}
              <p className="mt-6 max-w-xl text-lg text-white/70 text-center">
                {active.desc}
              </p>


              {/* buttons */}
              <div className="flex flex-wrap text-white gap-8 items-center justify-center mt-10">
            <Link to="/login" className="flex justify-center items-center overflow-hidden group rounded-full bg-linear-to-r from-blue-600 to-cyan-500 px-6 py-2 text-[15px] font-semibold text-white shadow-md transition hover:scale-105 duration-300">
            <span >
              Start Journey
            </span>
              <ArrowRight className="w-6 h-6 -rotate-30 group-hover:ml-0.5 group-hover:mb-0.5 duration-300" />

            </Link>
          </div>

            </motion.div>
          </AnimatePresence>

        </div>
      </div>

      {/* dots */}
      <div className="absolute bottom-6 right-50% z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-700 ${current === i ? "w-10 bg-blue-400" : "w-2 bg-white/30"}`}
          />
        ))}
      </div>

    </section>
  );
}