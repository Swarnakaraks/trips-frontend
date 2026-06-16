import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Plane,
} from "lucide-react";

const Footer = () => {
  return (
    <footer style={{backgroundImage:"url(/pic45.jpg)"}} className="relative overflow-hidde bg-cover py-10 bg-center pb-10 px-6 lg:px-20">

      
      {/* main content */}
      <div className="relative z-10 max-w-7xl mx-auto p-10 rounded-xl bg-white/95">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* brand */}
          <div>
              <div className="flex items-center cursor-pointer group h-12">
        <img src="/logo.png" className="h-13 w-auto object-contain" />

        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Trip
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Bridge
          </span>
        </h1>
      </div>
            <p className="mt-5 text-gray-700 leading-7">
              We create unforgettable travel experiences with premium
              destinations, smooth booking, and personalized adventure planning.
            </p>

           

          </div>

          {/* links */}
          <div>
            <h3 className="font-bold text-lg text-gray-900 mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-700">
              {["Home", "About", "Packages","Contact"].map((item, i) => (
                <li key={i} className="hover:text-blue-600 cursor-pointer transition flex items-center gap-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* support */}
          <div>
            <h3 className="font-bold text-lg text-gray-900 mb-5">
              Support
            </h3>

            <ul className="space-y-3 text-gray-700">
              {["Help Center", "Terms & Conditions", "Privacy Policy"].map((item, i) => (
                <li key={i} className="hover:text-orange-500 cursor-pointer transition flex items-center gap-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <h3 className="font-bold text-lg text-gray-900 mb-5">
              Contact
            </h3>

            <div className="space-y-4 text-gray-700">

              <div className="flex items-center gap-3">
                <MapPin className="text-blue-600" size={18} />
                Biratnagar, Nepal
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-orange-500" size={18} />
                +977 9897356278
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-blue-600" size={18} />
                tripbridge24@gmail.com
              </div>

            </div>

          </div>

        </div>

        {/* bottom bar */}
        <div className="mt-16 pt-6 pb-6 lg:pb-0 md:flex-row text-center">

          <p className="text-gray-500 text-sm">
            © 2026 Designed & Developed by Abhisek Kumar Sah All rights reserved.
          </p>


        </div>

      </div>

    </footer>
  );
};

export default Footer;