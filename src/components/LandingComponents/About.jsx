import React, { useEffect } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Button } from "../ui/button";
import { Plane, Users, Star, ArrowRight } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar";

const CountUp = ({ value }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 2000, bounce: 0 });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  const [display, setDisplay] = React.useState(0);

  useEffect(() => {
    spring.on("change", (latest) => {
      setDisplay(Math.floor(latest));
    });
  }, [spring]);

  return <span ref={ref}>{display.toLocaleString()}+</span>;
};

const About = () => {
  return (
    <section className="relative overflow-hidden py-28 px-6 lg:px-32 bg-blue-50/50">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative flex justify-center"
        >
          <div className="absolute top-5 left-18 border-dashed rounded-2xl w-100 h-125 border-2 border-orange-500 bg-blue"></div>

          <div className="group relative w-100 h-125 rounded-2xl overflow-hidden duration-700">
            <img
              src="/pic34.jpg"
              alt=""
              className="w-full h-full object-cover object-[80%_center] group-hover:scale-110 duration-700"
            />
          </div>

          <div className="group absolute bottom-5 right-0 w-40 h-50 rounded-2xl overflow-hidden border-8 border-white duration-700">
            <img
              src="/pic22.jpg"
              alt=""
              className="w-full h-full object-cover group-hover:scale-110 duration-700"
            />
          </div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            viewport={{ once: true }}
            className="absolute top-8 left-2 bg-white px-5 py-4 rounded-3xl shadow-xl flex gap-4 items-center"
          >
            <div>
              <h1 className="font-black text-sm text-orange-500">37K+</h1>
              <p className="text-gray-500 text-sm">Successful Tours</p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <p className="uppercase tracking-[5px] text-orange-500 font-semibold mb-4">
            About Company
          </p>

          <motion.h1  initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-5xl lg:text-4xl font-black leading-tight text-gray-900">
            We're Number One Travel
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              Adventure Company
            </span>
          </motion.h1>

          <p className="text-gray-500 leading-8 mt-4 text-lg">
            We create unforgettable travel experiences with world-class
            destinations, premium service and personalized journeys that turn
            every trip into an adventure.
          </p>

          <div className="flex mt-4 items-center justify-around">
            <div>
              <AvatarGroup>
                <Avatar>
                  <AvatarImage src="/profile1.jpg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="/profile2.jpg" />
                  <AvatarFallback>LR</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="/profile3.jpg" />
                  <AvatarFallback>ER</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="/profile4.jpg" />
                  <AvatarFallback>ER</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="/profile5.jpg" />
                  <AvatarFallback>ER</AvatarFallback>
                </Avatar>

                <AvatarGroupCount className="text-black">
                  +8k
                </AvatarGroupCount>
              </AvatarGroup>
            </div>

            <section className="flex">
              <div className="p-6 px-3">
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

          <div className="flex flex-wrap text-white gap-8 items-center mt-10">
            <a href="#" className="flex justify-center items-center gap-1 rounded-full px-5 py-2 text-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:scale-105 group duration-500">
            <span >
              About Us More
            </span>
              <ArrowRight className="w-6 h-6 -rotate-30" />

            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;