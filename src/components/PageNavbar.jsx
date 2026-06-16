import React from "react";
import { motion } from "framer-motion";
import { House, Info, CircleHelp, Phone } from "lucide-react";
import CustomButton from "./Common/CustomButton";
import { Link } from "react-router-dom";

const PageNavbar = () => {
  const navLinks = [
    { name: "Home", to: "/", icon: House },
    { name: "About", to: "/about", icon: Info },
    { name: "Help", to: "/help", icon: CircleHelp },
    { name: "Contact", to: "/contact", icon: Phone },
  ];

  return (
    <>
      {/* TOP NAVBAR */}
      <header
        className="
          sticky top-0 z-50 w-full
          bg-white/95 backdrop-blur-xl
          shadow-lg border-b border-gray-100
        "
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-4 flex items-center justify-between">
          {/* LOGO */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="flex items-center cursor-pointer group h-12"
            >
              <img
                src="/logo.png"
                alt="TripBridge"
                className="h-10 sm:h-12 w-auto object-contain"
              />

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
                Trip
                <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Bridge
                </span>
              </h1>
            </motion.div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8 font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="relative group text-black hover:text-blue-500 transition-colors duration-300"
              >
                {link.name}

                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* BOOK NOW */}
          <motion.div whileHover={{ scale: 1.05 }}>
             <Link to="/login">
            <CustomButton text="Book Now" />
            </Link>
          </motion.div>
        </div>
      </header>

      {/* MOBILE NAV */}
      <div
        className="
          md:hidden
          fixed bottom-0 left-0 right-0
          z-50
          bg-white/95 backdrop-blur-xl
          border-t border-gray-200
          shadow-[0_-10px_30px_rgba(0,0,0,0.08)]
        "
      >
        <div className="grid grid-cols-4 h-16">
          {navLinks.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.Link
                key={item.name}
                to={item.to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.4,
                }}
                whileTap={{ scale: 0.9 }}
                className="
                  flex flex-col items-center justify-center
                  gap-1
                  text-gray-600
                  hover:text-blue-600
                  transition-all duration-300
                "
              >
                <Icon size={22} />

                <span className="text-[11px] font-medium">
                  {item.name}
                </span>
              </motion.Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PageNavbar;