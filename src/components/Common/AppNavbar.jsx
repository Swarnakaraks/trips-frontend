import React from 'react'
import CustomButton from './CustomButton'
import { useNavigate } from 'react-router-dom'
import useAuth from '@/hooks/useAuth'
import { jwtDecode } from "jwt-decode";


const AppNavbar = () => {
    
    const navigate = useNavigate();
    const {token, logout} = useAuth();
const handlelogout = () => {
    logout();
    navigate("/login");
}

const decodedToken = token ? jwtDecode(token) : null;

  return (
  <header className="fixed top-0 left-0 w-full z-50 px-10 md:px-20 py-4 
bg-white/70 backdrop-blur-lg  border-b border-gray-100
flex justify-between items-center transition-all duration-300">

  {/* Left part */}
  <div className="flex items-center gap-2 cursor-pointer group">
    <h1 className="text-3xl md:text-4xl font-extrabold text-black ">
      Trip<span className="text-blue-600">Bridge</span>
    </h1>

  </div>

{
decodedToken.role === "admin" ? 
<>
{/* Middle nav */}
  <div className="flex items-center justify-center gap-10 w-100 h-12">

  <nav className="space-x-8 text-black font-medium flex items-center">

    <a href="/dashboard" className="relative group transition-all duration-300 hover:text-blue-600">
      Dashboard
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
    </a>

    <a href="/trips" className="relative group transition-all duration-300 hover:text-blue-600">
      Trips
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
    </a>

    <a href="/bookings" className="relative group transition-all duration-300 hover:text-blue-600">
      Booking
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
    </a>

    <a
      href="/blog"
      className="relative group transition-all duration-300 hover:text-blue-600"
    >
      Blog
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
    </a>

  </nav>

</div>
</>
:


  <div className="flex items-center justify-center gap-10 w-100 h-12">

  <nav className="space-x-8 text-black font-medium flex items-center">

    <a href="/client/dashboard" className="relative group transition-all duration-300 hover:text-blue-600">
      Dashboard
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
    </a>

    <a href="/client/trips" className="relative group transition-all duration-300 hover:text-blue-600">
      Trips
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
    </a>

    <a href="/client/bookings" className="relative group transition-all duration-300 hover:text-blue-600">
      Booking
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
    </a>

    <a href="/client/blog" className="relative group transition-all duration-300 hover:text-blue-600">
      Blog
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
    </a>

  </nav>

</div>
}
  


  {/* Right part */}
  <div onClick={handlelogout} className="hover:scale-105 transition-transform duration-300">
    <a href="/login">
      <CustomButton text={"Logout"} />
    </a>
  </div>

</header>
  )
}

export default AppNavbar