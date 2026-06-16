import React, { useEffect, useState, useMemo } from "react";
import { House, Info, CircleHelp, Phone } from "lucide-react";
import CustomButton from "./Common/CustomButton";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", to: "/", icon: House },
  { name: "About", to: "/about", icon: Info },
  { name: "Help", to: "/help", icon: CircleHelp },
  { name: "Contact", to: "/contact", icon: Phone },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 80);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const desktopLinks = useMemo(
    () =>
      navLinks.map((link) => {
        const Icon = link.icon;
        return (
          <Link
            key={link.name}
            to={link.to}
            className="relative group hover:text-blue-500 transition-colors duration-300"
          >
            {link.name}
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-500 rounded-full transition-all duration-300 group-hover:w-full" />
          </Link>
        );
      }),
    []
  );

  const mobileLinks = useMemo(
    () =>
      navLinks.map((link) => {
        const Icon = link.icon;

        return (
          <Link
            key={link.name}
            to={link.to}
            className="flex flex-col items-center justify-center gap-1 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <Icon size={22} />
            <span className="text-[11px] font-medium">{link.name}</span>
          </Link>
        );
      }),
    []
  );

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-50 px-4 sm:px-6 md:px-10 lg:px-20 py-4 flex justify-between items-center transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-md text-black"
            : "text-white"
        }`}
      >
        {/* LOGO */}
        <Link to="/">
          <div className="flex items-center gap-2 h-12">
            <img src="/logo.png" className="h-10 md:h-12 w-auto" />
            <h1 className="text-2xl font-extrabold">
              Trip
              <span className="bg-linear-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Bridge
              </span>
            </h1>
          </div>
        </Link>

        {/* DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          {desktopLinks}
        </nav>

        {/* BUTTON */}
        <Link to="/login">
          <CustomButton text="Book Now" />
        </Link>
      </header>

      {/* MOBILE NAV */}
      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 z-50 backdrop-blur-xl border-t transition-all duration-300 ${
          scrolled
            ? "bg-white/95 border-gray-200"
            : "bg-white/10 border-white/20"
        }`}
      >
        <div className="grid grid-cols-4 h-16">
          {mobileLinks}
        </div>
      </div>
    </>
  );
};

export default Navbar;