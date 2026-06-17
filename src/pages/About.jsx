import { motion } from "framer-motion";
import {
  CheckCircle,
  Play,
  PlaneTakeoff,
  Compass,
  MapPinned,
  Users,
  Trophy,
  ShieldCheck,
  BadgeCheck,
  Award,
} from "lucide-react";
import Footer from '../components/LandingComponents/Footer'
import TrustedCompanies from "../components/LandingComponents/TrustedCompanies";
import Navbar from "../components/Navbar";

const galleryImages = [
  "/about1.jpg",
  "/about2.jpg",
  "/about3.jpg",
  "/about4.jpg",
];

const features = [
  "Customized Travel Packages",
  "Expert Travel Assistance",
  "100% Customer Satisfaction",
];

const achievements = [
  {
    icon: Trophy,
    title: "Top Rated Travel Agency",
    description:
      "Recognized for delivering exceptional travel experiences and customer satisfaction.",
    color: "text-orange-500",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Travel Partner",
    description:
      "Working with verified hotels, airlines, and local tour providers worldwide.",
    color: "text-blue-500",
  },
  {
    icon: BadgeCheck,
    title: "Certified Travel Experts",
    description:
      "Our experienced travel consultants help create personalized and seamless journeys.",
    color: "text-green-500",
  },
  {
    icon: Award,
    title: "Excellence In Service",
    description:
      "Dedicated to providing reliable support and unforgettable travel memories.",
    color: "text-pink-500",
  },
];

const cards = [
  {
    icon: MapPinned,
    title: "Local Travel Experts",
    iconcolor: "text-blue-300",
    description:
      "Discover destinations with trusted local insights, hidden gems, and guided support at every step of your journey.",
  },
  {
    icon: Compass,
    title: "Tailor-Made Adventures",
    iconcolor: "text-orange-300",
    description:
      "Fully personalized itineraries designed around your style, interests, and dream destinations for a perfect trip.",
  },
  {
    icon: CheckCircle,
    title: "Trusted & Secure Booking",
    iconcolor: "text-green-300",
    description:
      "Book with confidence using safe payment options, verified partners, and reliable travel arrangements worldwide.",
  },
  {
    icon: Users,
    title: "24/7 Travel Support",
    iconcolor: "text-pink-300",
    description:
      "Our dedicated team is always available to assist you anytime, anywhere during your entire journey.",
  },
];

const AboutUs = () => {
  return (
    <section className="relative overflow-hidden pt-2 mt-20">
      <Navbar/>

    {/* <div className="absolute -top-50 -left-50 h-200 w-200 rotate-120 rounded-full bg-linear-to-b from-blue-50/5 via-blue-100/40 to-blue-300 -z-10 blur-2xl"/>
    <div className="absolute -top-50 -right-50 h-200 w-200 rotate-240 rounded-full bg-linear-to-b from-blue-50/5 via-blue-100/40 to-blue-300 -z-10 blur-2xl"/> */}
      
      <div className=" mx-auto z-50">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center p-10 md:p-20"
        >
          <span className=" relative px-4 py-2 text-4xl md:text-5xl font-extrabold ">
            ABOUT US
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
            Discover The World
            <span className="block text-blue-600">With Confidence</span>
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600">
            We are passionate travel experts dedicated to creating unforgettable
            journeys and helping travelers explore the world through
            personalized experiences.
          </p>
        </motion.div>

       
        <div className="grid gap-5 grid-cols-2 lg:grid-cols-4 p-10 md:p-20">
          {galleryImages.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-3xl shadow-xl hover:scale-105 group  transition-all duration-300"
            >
              <img
                src={img}
                alt="Travel"
                className=" h-30 md:h-60 w-full object-cover group-hover:scale-110 transition-all duration-300"
              />
            </div>
          ))}
        </div>


  
        <div className=" grid items-center gap-12 lg:grid-cols-2 p-10 md:p-20">
          {/* video */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[30px] shadow-2xl">
             <img src="https://images.unsplash.com/photo-1542359649-31e03cd4d909?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-4xl font-bold text-gray-900">
              We inspire people
              <br />
              <span className="text-blue-600">to explore the world</span>
            </h3>

            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              Our mission is to make travel accessible, enjoyable, and
              unforgettable through trusted guidance, personalized itineraries,
              and exceptional service.
            </p>

            <div className=" relative rounded-tr-xl border-l-4 border-orange-500 bg-linear-to-r  from-orange-50/5 to-orange-50/80 p-6">
              <div className="absolute bottom-0 right-0 w-20 h-20  ">
                <div className="absolute right-0 bottom-0 h-15 w-1 bg-linear-to-b from-orange-50 to-orange-500" />
                <div className="absolute bottom-0 right-0 w-15 h-1 bg-linear-to-r from-orange-50 to-orange-500" />
              </div>
              <p className="italic text-gray-700">
                “Our mission is to turn travel dreams into extraordinary
                adventures and unforgettable experiences.”
              </p>
            </div>
          </motion.div>
        </div>

        <section className="relative p-10 md:px-6 md:py-24 overflow-hidden">
  {/* Heading */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="mx-auto mb-16 max-w-3xl text-center"
  >
    <span className=" flex flex-col md:inline-flex items-center gap-2 text-center text-orange-500 font-semibold uppercase tracking-[5px] mb-4">
      <Trophy size={16} />
      Achievements & Recognition
    </span>

    <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
      Recognized For
      <span className="block text-blue-600">
        Excellence In Travel
      </span>
    </h2>

    <p className="mt-5 text-lg text-gray-600">
      Our commitment to quality service, trusted partnerships,
      and customer satisfaction has helped us become a reliable
      travel companion for thousands of travelers.
    </p>
  </motion.div>

  {/* Cards */}
  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
    {achievements.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -10 }}
        transition={{
          duration: 0.5,
          delay: index * 0.1,
        }}
        viewport={{ once: true }}
        className="group flex flex-col items-center md:items-start relative overflow-hidden rounded-[30px] border border-gray-100 bg-white p-8 shadow-xl"
>

        {/* Icon */}
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-linear-to-br from-blue-50 to-blue-50/50">
          <item.icon
            size={45}
            className={`${item.color} transition-all duration-300 group-hover:scale-110`}
          />
        </div>

        {/* Title */}
        <h3 className="mb-4 text-xl font-bold text-gray-900">
          {item.title}
        </h3>

        {/* Description */}
        <p className=" text-center md:text-start leading-7 text-gray-600">
          {item.description}
        </p>

        {/*Line Animation */}
        <div className="mt-6 h-1 w-0 rounded-full bg-linear-to-r from-orange-500 to-orange-400 transition-all duration-700 group-hover:w-full" />
      </motion.div>
    ))}
  </div>

  <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mt-16 sm:mt-24 overflow-hidden rounded-[24px] sm:rounded-[40px] bg-white shadow-2xl"
    >
      <div className="grid lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div
          className="relative overflow-hidden bg-cover bg-center p-6 sm:p-8 lg:p-12 min-h-[250px] sm:min-h-[350px]"
          style={{ backgroundImage: "url('/trip.jpg')" }}
        >
          {/* overlay */}
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 text-white">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black">
              50K+
            </h1>

            <h3 className="mt-2 sm:mt-4 text-2xl sm:text-3xl font-bold">
              Happy Travelers
            </h3>

            <p className="mt-3 sm:mt-4 max-w-md text-sm sm:text-base text-blue-50 leading-relaxed">
              Creating unforgettable travel experiences and helping thousands of explorers discover amazing destinations worldwide.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-6 sm:p-8 lg:p-12">

          <span className="uppercase tracking-[4px] sm:tracking-[6px] text-orange-500 font-semibold text-xs sm:text-sm">
            Why People Trust Us
          </span>

          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Excellence In Every Journey
          </h2>

          <div className="mt-8 sm:mt-10 space-y-5 sm:space-y-8">

            {/* ITEM 1 */}
            <div className="flex items-start gap-3 sm:gap-5">
              <div className="rounded-xl sm:rounded-2xl bg-blue-100 p-3 sm:p-4 shrink-0">
                <Trophy className="h-5 w-5 sm:h-7 sm:w-7 text-blue-600" />
              </div>

              <div>
                <h4 className="text-base sm:text-xl font-semibold">
                  Industry Recognition
                </h4>
                <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
                  Trusted by travelers for delivering premium travel planning and exceptional customer experiences.
                </p>
              </div>
            </div>

            {/* ITEM 2 */}
            <div className="flex items-start gap-3 sm:gap-5">
              <div className="rounded-xl sm:rounded-2xl bg-orange-100 p-3 sm:p-4 shrink-0">
                <ShieldCheck className="h-5 w-5 sm:h-7 sm:w-7 text-orange-500" />
              </div>

              <div>
                <h4 className="text-base sm:text-xl font-semibold">
                  Secure & Reliable
                </h4>
                <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
                  Verified partners, secure payments, and reliable travel arrangements around the globe.
                </p>
              </div>
            </div>

            {/* ITEM 3 */}
            <div className="flex items-start gap-3 sm:gap-5">
              <div className="rounded-xl sm:rounded-2xl bg-green-100 p-3 sm:p-4 shrink-0">
                <BadgeCheck className="h-5 w-5 sm:h-7 sm:w-7 text-green-600" />
              </div>

              <div>
                <h4 className="text-base sm:text-xl font-semibold">
                  Certified Experts
                </h4>
                <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
                  Experienced travel consultants helping travelers build unforgettable journeys.
                </p>
              </div>
            </div>

            {/* ITEM 4 */}
            <div className="flex items-start gap-3 sm:gap-5">
              <div className="rounded-xl sm:rounded-2xl bg-purple-100 p-3 sm:p-4 shrink-0">
                <Users className="h-5 w-5 sm:h-7 sm:w-7 text-purple-600" />
              </div>

              <div>
                <h4 className="text-base sm:text-xl font-semibold">
                  Customer First Approach
                </h4>
                <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
                  Personalized support before, during, and after every trip.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </motion.section>
</section>

      </div>
        <TrustedCompanies/>
      <Footer/>
    </section>
  );
}

export default AboutUs;