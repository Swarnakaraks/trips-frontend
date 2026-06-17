import { useState } from "react";
import { motion } from "framer-motion";
import {
  HelpCircle,
  MessageCircle,
  Phone,
  Mail,
  Globe,
  Shield,
  Search,
} from "lucide-react";
import PageNavbar from "../components/PageNavbar";
import Footer from "../components/LandingComponents/Footer";
import Contact from "../components/LandingComponents/Contact";
import FAQ from "../components/LandingComponents/FAQ";

const helpCategories = [
  { icon: HelpCircle, title: "Booking Help", desc: "How to book trips easily" },
  { icon: Shield, title: "Payment & Refunds", desc: "Secure payments & refunds" },
  { icon: Globe, title: "Travel Guides", desc: "Visa, documents & info" },
  { icon: MessageCircle, title: "Live Support", desc: "Talk to our team anytime" },
];


export default function Help() {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-white overflow-hidden">
      <PageNavbar />

      {/* HERO */}
      <section className="mt-40 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-black"
        >
          How Can We <span className="text-blue-500">Help You?</span> 
        </motion.h1>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Find answers, guides, and support for your travel needs anytime.
        </p>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {helpCategories.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-white shadow-xl rounded-3xl p-6 text-center border"
            >
              <item.icon className="mx-auto text-orange-500 mb-3" size={40} />
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-gray-500 text-sm mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <FAQ/>
      <Footer />
    </div>
  );
}