import React from 'react'
import CustomButton from './common/CustomButton'

const PageNavbar = () => {

  const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Help", href: "/help" },
  { name: "Contact", href: "/contact" },
];

  return (
    <header
      className="
        w-full z-50
        px-10 md:px-20 py-4
        flex justify-between items-center
  bg-white shadow-lg
        transition-all duration-300"
    >
      {/* LEFT */}
      <a href="#home">
      <div className="flex items-center cursor-pointer group h-12">
        <img src="/logo.png" className="h-13 w-auto object-contain" />

        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Trip
          <span className="bg-linear-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Bridge
          </span>
        </h1>
      </div>
</a>

<nav className="flex items-center gap-8 font-medium">
  {navLinks.map((link) => (
    <a
      key={link.name}
      href={link.href}
      className="relative group text-black hover:text-blue-500 transition-colors duration-300"
    >
      {link.name}

      <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
    </a>
  ))}
</nav>

      {/* RIGHT */}
      <div>
        <a href="/login">
          <CustomButton text="Book Now" />
        </a>
      </div>
    </header>
  )
}


export default PageNavbar