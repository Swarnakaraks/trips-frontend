import React from "react";
import { motion } from "framer-motion";
import FeaturesCards from "../Common/FeaturesCards";
import { Headphones, PlaneTakeoff, ShieldCheck, MapPinned } from "lucide-react";

const Features = () => {
  const featuresData = [
    {
      title: "24/7 Travel Assistance",
      description:
        "Our dedicated team is available anytime to help with bookings, support and travel guidance worldwide.",
      icon: Headphones,
      iconcolor: "text-blue-300",
    },
    {
      title: "Fast Flight Booking",
      description:
        "Book flights in seconds with smooth search experience and instant ticket confirmations.",
      icon: PlaneTakeoff,
      iconcolor: "text-orange-300",
    },
    {
      title: "Safe & Secure Journey",
      description:
        "Your payments and travel details stay protected with advanced security and trusted systems.",
      icon: ShieldCheck,
      iconcolor: "text-green-300",
    },
    {
      title: "Explore Dream Destinations",
      description:
        "Discover stunning places and curated travel experiences designed for unforgettable adventures.",
      icon: MapPinned,
      iconcolor: "text-purple-300",
    },
  ];
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-20 xl:px-40">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <p className="text-orange-500 font-semibold uppercase tracking-[5px] mb-4">
          Travel Smarter
        </p>

        <h2 className="text-4xl lg:text-6xl font-black text-gray-800 mb-5">
          Why Travelers{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-blue-400">
            Love Us
          </span>
        </h2>

        <p className="text-gray-500 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-12">
          Experience seamless bookings and unforgettable adventures.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {featuresData.map((feature, index) => (
          <div key={index} className="will-change-transform">
            <FeaturesCards feature={feature} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
