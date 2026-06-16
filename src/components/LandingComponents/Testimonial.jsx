import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sujan Sharma",
    img: "/profile1.jpg",
    text: "Best Nepal travel experience ever. Everything was perfectly organized and smooth.",
  },
  {
    name: "Anita KC",
    img: "/profile2.jpg",
    text: "Super smooth booking process and excellent support throughout the journey.",
  },
  {
    name: "Kritika Katwal",
    img: "/profile3.jpg",
    text: "Everest trek was life-changing. Support team was amazing from start to end.",
  },
  {
    name: "Anisha Rai",
    img: "/profile4.jpg",
    text: "Perfect family tour experience in Chitwan. Kids enjoyed a lot!",
  },
   {
    name: "Priya Gurung",
    role: "Family Traveler",
    img: "/profile5.jpg",
    text: "Best travel agency experience I've had so far. Truly professional service.",
  },
];

const Testimonial = () => {
  return (
    <section className="py-15 px-6 lg:px-20 overflow-hidden">
      
      {/* HEADER */}
      <div className="text-center">
        <p className="uppercase tracking-[5px] text-orange-500 font-bold mb-4">
          Testimonials
        </p>
         <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className="text-6xl font-black text-gray-800 text-center mb-5"
                >
                  What Our{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                     Travelers Say
                  </span>
                </motion.h1>
      </div>

     
      <div className="relative w-full overflow-hidden">

        <motion.div
          className="flex gap-8 w-max py-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: "linear",
          }}
        >

          {[...testimonials, ...testimonials].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="relative min-w-[340px] max-w-[340px] bg-white rounded-[28px] shadow-xl p-6 flex flex-col justify-between"
            >

             
              <Quote className="absolute top-4 right-4 text-orange-300 w-6 h-6" />

              
              <div className="flex items-center gap-3">
                <img className="w-15 h-15 rounded-full object-cover" src={item.img} alt="C" />

                <div>
                  <h3 className="font-semibold text-gray-800 mt-3">
                    {item.name}
                  </h3>

              
              <div className="flex items-center gap-1 text-orange-500 mb-4">
                {Array(5).fill(0).map((_, i) => (
                  <Star key={i} size={16} className="fill-orange-400" />
                ))} <span className="text-gray-800">5.0</span>
              </div>
                 
                </div>
              </div>

              {/* TEXT */}
              <p className="text-gray-600 text-sm leading-6 mb-6">
                “{item.text}”
              </p>

             

            </motion.div>
          ))}

        </motion.div>

      </div>
    </section>
  );
};

export default Testimonial;