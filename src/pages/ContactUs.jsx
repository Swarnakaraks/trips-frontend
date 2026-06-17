import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Clock,
  Shield,
  ChevronDown,
  Send,
  Plane,
  Globe,
  Share2,
  Link as LinkIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Contact from "../components/LandingComponents/Contact";
import Footer from "../components/LandingComponents/Footer";
import PageNavbar from "../components/PageNavbar";

export default function ContactUs() {
  return (
    <div className="bg-white overflow-hidden">
        <div><PageNavbar/></div>
      <section className="flex items-center mt-20">
                <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center p-10 md:p-20"
        >
          <span className=" relative px-4 py-2 text-4xl md:text-5xl font-extrabold ">
            Contact US
             <div className="absolute left-6 right-0 top-4 md:top-7  w-full flex justify-center">
      <svg viewBox="0 0 450 100" className="w-64 h-24">
        <motion.path
          d="M10 60 Q 180 15 350 40"
          stroke="orange"
          strokeWidth="8"
          fill="transparent"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: true }}
        />
      </svg>
    </div>
          </span>


          <h2 className="mb-6 mt-15  md:mt-20 text-4xl font-extrabold text-gray-900 md:text-6xl">
            Let's Plan Your
            <span className="block text-blue-600">Next Adventure</span>
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600">
                        From luxury escapes to adventure tours, our travel experts craft unforgettable journeys tailored just for you.
          </p>
        </motion.div>
      </section>

       {/*form*/}
        <div> <Contact /></div>

        <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Connect With Us</h2>

          <div className="grid md:grid-cols-3 gap-6">

            {[Globe, Share2, LinkIcon].map((Icon, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white rounded-3xl shadow-xl p-8"
              >
                <Icon size={40} className="mx-auto text-orange-600 mb-3" />
                <h3 className="font-semibold text-lg">Travel Community</h3>
              </motion.div>
            ))}

          </div>
        </div>
      </section>
<section className="py-24 px-6 bg-white">
  <div className="max-w-6xl mx-auto">

    {/* TITLE */}
    <div className="text-center mb-10">
      <h2 className="text-4xl font-bold">Find Us Here</h2>
      <p className="text-slate-600 mt-2">
        Visit our office or connect with us online anytime
      </p>
    </div>

  
    <div className="rounded-3xl overflow-hidden shadow-2xl border relative">

    <iframe
        title="travel agency map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.042192317402!2d87.27506037520777!3d26.454368876923432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef7500793ee5e1%3A0x6b050165338afde9!2sMahendra%20Chowk%20Biratnagar!5e0!3m2!1sen!2snp!4v1781701442886!5m2!1sen!2snp"
        width="100%"
        height="450"
        loading="lazy"
        className="w-full"
      ></iframe>
    </div>
  </div>
</section>
      <div><Footer/></div>
      </div>
  );
}