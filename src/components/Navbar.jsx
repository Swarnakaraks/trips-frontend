import React, { useEffect, useState } from "react";
import { House, Info, CircleHelp, Phone, Menu, X } from "lucide-react";
import CustomButton from "./Common/CustomButton";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "/", icon: House },
    { name: "About", to: "/about", icon: Info },
    { name: "Help", to: "/help", icon: CircleHelp },
    { name: "Contact", to: "/contactus", icon: Phone },
  ];

  return (
    <>
      <header
        className={`
    fixed top-0 left-0 w-full z-50
    px-4 sm:px-6 md:px-10 lg:px-20 py-4
    flex justify-between items-center
    transition-all duration-300
    ${
      scrolled || menuOpen
        ? "bg-white shadow-lg text-black"
        : "bg-transparent text-white"
    }
  `}
      >
        {/* LOGO */}
        <Link to="/">
          <div className="flex items-center cursor-pointer h-12">
            <img
              src="/logo.png"
              alt="TripBridge"
              className="h-10 md:h-12 w-auto object-contain"
            />

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
              <span
                className={`transition-colors duration-300 ${
                  scrolled || menuOpen ? "text-black" : "text-white"
                }`}
              >
                Trip
              </span>

              <span className="bg-linear-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Bridge
              </span>
            </h1>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="relative group hover:text-blue-500 transition-colors duration-300"
            >
              {link.name}

              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Link to="/login">
              <CustomButton text="Book Now" />
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden transition-all duration-300 ${
              scrolled || menuOpen ? "text-black" : "text-white"
            }`}
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`
          md:hidden fixed top-19 left-0 w-full z-40
          bg-white shadow-xl overflow-hidden
          transition-all duration-300 ease-in-out
          ${menuOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <nav className="flex flex-col py-3">
          {navLinks.map((link) => {
            const Icon = link.icon;

            return (
              <Link
                key={link.name}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="
                  flex items-center gap-3
                  px-6 py-4
                  text-gray-700
                  hover:bg-blue-50
                  hover:text-blue-600
                  transition-all duration-300
                "
              >
                <Icon size={20} />
                <span className="font-medium">{link.name}</span>
              </Link>
            );
          })}

          <div className="px-6 pt-3 pb-4">
            <Link to="/login" onClick={() => setMenuOpen(false)}>
              <CustomButton text="Book Now" />
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
