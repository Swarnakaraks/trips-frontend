import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Plane } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CustomButton from "./Common/CustomButton";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Help", to: "/help" },
  { name: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-3"
            >
              <div className="relative">
                <img
                  src="/logo.png"
                  alt="TripBridge"
                  className="h-10 md:h-12 w-auto"
                />
              </div>

              <h1 className="text-2xl md:text-3xl font-black tracking-tight">
                Trip
                <span className="bg-linear-to-r from-blue-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  Bridge
                </span>
              </h1>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  "relative group  transition-colors duration-300 active:text-blue-500 hover:text-blue-500"
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}

                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
                  </>
                )}
              </NavLink>
            ))}

          </nav>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <Link to="/login">
              <CustomButton text="Book Now" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-700"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-white border-t border-slate-100 shadow-lg"
            >
              <div className="flex flex-col px-6 py-6">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      "py-3 text-lg font-medium transition-colors active:text-blue-500 hover:text-blue-500"
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}

                <div className="pt-4">
                  <Link to="/login" onClick={() => setIsOpen(false)}>
                    <CustomButton text="Book Now" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}