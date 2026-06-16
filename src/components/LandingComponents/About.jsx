import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useMotionValue } from "framer-motion";
import { Users, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AvatarGroup, AvatarGroupCount } from "@/components/ui/avatar";

const CountUp = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    stiffness: 100,
    damping: 30,
  });

  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      setDisplay(Math.floor(latest));
    });

    return () => unsubscribe();
  }, [spring]);

  return (
    <span ref={ref} className="will-change-transform">
      {display.toLocaleString()}+
    </span>
  );
};

const About = () => {
  return (
    <section className="relative overflow-hidden py-14 md:py-28 px-6 lg:px-32 bg-blue-50/50">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE */}
        <div className="relative flex justify-center">
    <div className="absolute top-5 left-6 sm:left-2 md:left-18 border-dashed rounded-2xl w-70 h-75 md:w-100 md:h-125 border-2 border-orange-500 bg-blue"></div>

          <div className="group relative w-70 h-75 md:w-100 md:h-125 rounded-2xl overflow-hidden duration-700">
            <img src="/pic34.jpg" alt="" className="w-full h-full object-cover object-[80%_center] group-hover:scale-110 duration-700"/>
          </div>

          <div className="absolute bottom-5 right-0 w-20 h-24 md:w-32 md:h-40 rounded-2xl overflow-hidden border-4 border-white">
            <img
              src="/pic22.jpg"
              loading="lazy"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>

          <div className="absolute top-8 left-2 bg-white px-4 py-3 rounded-2xl shadow-md">
            <h1 className="font-bold text-orange-500 text-sm">37K+</h1>
            <p className="text-gray-500 text-xs">Successful Tours</p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-4">
          <p className="uppercase tracking-[5px] text-orange-500 font-semibold mb-4">
            About Company
          </p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-4xl lg:text-5xl font-black leading-tight text-gray-900"
          >
            We're Number One Travel {""}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-blue-400 mt-2">
              Adventure Company
            </span>
          </motion.h1>

          <p className="text-gray-500 leading-7 mt-4 max-w-xl">
            We create unforgettable travel experiences with premium service and
            personalized journeys.
          </p>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mt-6">
            <AvatarGroup>
              {[
                "/profile1.jpg",
                "/profile2.jpg",
                "/profile3.jpg",
                "/profile4.jpg",
              ].map((src, i) => (
                <Avatar key={i}>
                  <AvatarImage src={src} loading="lazy" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              ))}
              <AvatarGroupCount className="text-black">+8k</AvatarGroupCount>
            </AvatarGroup>

            {/* STATS */}
            <section className="flex ">
              <div className="p-6 px-0">
                
                <div className="flex justify-center items-center gap-3">
                  
                  <Users className="text-blue-600" />
                  <h1 className="text-3xl font-black text-gray-900">
                    
                    <CountUp value={8376} />
                  </h1>
                </div>
                <p className="text-gray-500 text-center">
                  
                  Satisfied Tourists
                </p>
              </div>
              <div className="p-6 px-3">
                
                <div className="flex justify-center items-center gap-3">
                  
                  <Star className="text-orange-500" />
                  <h1 className="text-3xl font-black text-gray-900">
                    
                    <CountUp value={6519} />
                  </h1>
                </div>
                <p className="text-gray-500 text-center">Active Clients</p>
              </div>
            </section>
          </div>

          <div className="mt-8">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-blue-500 text-white px-5 py-2 rounded-full hover:scale-105 transition-transform"
            >
              About Us More
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
