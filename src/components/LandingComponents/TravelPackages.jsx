import React from "react";
import { motion } from "framer-motion";
import { Clock3, Star, ArrowRight, MapPin } from "lucide-react";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const packageData = {
  honeymoon: [
    {
      title: "Pokhara Romantic Escape",
      img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200",
      days: "5 Days",
      reviews: "26",
      price: "रू28000",
      old: "रू35000",
      location: "Pokhara",
      tag: "Honeymoon",
      star: "4.5",
    },
    {
      title: "Nagarkot Sunset Honeymoon",
      img: "https://images.unsplash.com/photo-1585898175463-4bb8b8a9dea2?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8A%3D%3D",
      days: "4 Days",
      reviews: "19",
      price: "रू22000",
      old: "रू26000",
      location: "Nagarkot",
      tag: "Honeymoon",
      star: "4.8",
    },
    {
      title: "Mustang Luxury Couple Trip",
      img: "https://images.unsplash.com/photo-1560428798-735f16905de6?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1uYWdlfHx8fGVufDB8fHx8A%3D%3D",
      days: "7 Days",
      reviews: "32",
      price: "रू40000",
      old: "रू48000",
      location: "Mustang",
      tag: "Honeymoon",
      star: "4.8",
    },
    {
      title: "Bandipur Romantic Stay",
      img: "https://images.unsplash.com/photo-1540883214770-08e60a9bfd97?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8A%3D%3D",
      days: "3 Days",
      reviews: "14",
      price: "रू18000",
      old: "रू23000",
      location: "Bandipur",
      tag: "Honeymoon",
      star: "4.3",
    },
    {
      title: "Lumbini Peace Couple Tour",
      img: "https://images.unsplash.com/photo-1662441646729-77e1a3f90bd0?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8A%3D%3D",
      days: "5 Days",
      reviews: "22",
      price: "रू30000",
      old: "रू34000",
      location: "Lumbini",
      tag: "Honeymoon",
      star: "4.9",
    },
    {
      title: "Everest View Honeymoon",
      img: "https://images.unsplash.com/photo-1676471049029-f93852da351d?q=80&w=1262&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fGVufDB8fHx8fA%3D%3D",
      days: "8 Days",
      reviews: "40",
      price: "रू45000",
      old: "रू52000",
      location: "Everest",
      tag: "Honeymoon",
      star: "4.9",
    },
  ],
  adventure: [
    {
      title: "Everest Base Camp Trek",
      img: "https://images.unsplash.com/photo-1693717671076-374d59bc2ff2?q=80&w=1171&auto=format&fit=crop",
      days: "15 Days",
      reviews: "18",
      price: "रू65000",
      old: "रू72000",
      location: "Everest",
      tag: "Adventure",
      star: "4.5",
    },
    {
      title: "Annapurna Circuit Trek",
      img: "https://images.unsplash.com/photo-1666358188946-4fea8727e3d9?q=80&w=1170&auto=format&fit=crop",
      days: "12 Days",
      reviews: "20",
      price: "रू50000",
      old: "रू56000",
      location: "Annapurna",
      tag: "Adventure",
      star: "4.8",
    },
    {
      title: "Pokhara Paragliding",
      img: "https://images.unsplash.com/photo-1620720970374-5b7e67e1e610?q=80&w=1170&auto=format&fit=crop",
      days: "2 Days",
      reviews: "30",
      price: "रू10000",
      old: "रू13000",
      location: "Pokhara",
      tag: "Adventure",
      star: "4.6",
    },
    {
      title: "Chitwan Jungle Safari",
      img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200",
      days: "4 Days",
      reviews: "16",
      price: "रू14000",
      old: "रू18000",
      location: "Chitwan",
      tag: "Adventure",
      star: "4.9",
    },
    {
      title: "Trishuli River Rafting",
      img: "https://images.unsplash.com/photo-1629248457649-b082812aea6c?q=80&w=1170&auto=format&fit=crop",
      days: "3 Days",
      reviews: "24",
      price: "रू12000",
      old: "रू15000",
      location: "Trishuli",
      tag: "Adventure",
      star: "4.9",
    },
    {
      title: "Bungee Jump Bhotekoshi",
      img: "https://images.unsplash.com/photo-1559677624-3c956f10d431?q=80&w=1025&auto=format&fit=crop",
      days: "2 Days",
      reviews: "30",
      price: "रू10000",
      old: "रू13000",
      location: "Bhotekoshi",
      tag: "Adventure",
      star: "4.7",
    },
  ],
  weekend: [
    {
      title: "Kathmandu Heritage Tour",
      img: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=1200",
      days: "2 Days",
      reviews: "31",
      price: "रू7000",
      old: "रू10000",
      location: "Kathmandu",
      tag: "Weekend",
      star: "4.9",
    },
    {
      title: "Pokhara Short Escape",
      img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200",
      days: "3 Days",
      reviews: "25",
      price: "रू9000",
      old: "रू12000",
      location: "Pokhara",
      tag: "Weekend",
      star: "4.7",
    },
    {
      title: "Nagarkot Sunrise Trip",
      img: "https://images.unsplash.com/photo-1585898175463-4bb8b8a9dea2?q=80&w=1934&auto=format&fit=crop",
      days: "2 Days",
      reviews: "15",
      price: "रू6500",
      old: "रू9000",
      location: "Nagarkot",
      tag: "Weekend",
      star: "4.5",
    },
    {
      title: "Bandipur Village Tour",
      img: "https://images.unsplash.com/photo-1540883214770-08e60a9bfd97?q=80&w=1170&auto=format&fit=crop",
      days: "2 Days",
      reviews: "18",
      price: "रू8000",
      old: "रू11000",
      location: "Bandipur",
      tag: "Weekend",
      star: "4.8",
    },
    {
      title: "Lumbini Peace Tour",
      img: "https://images.unsplash.com/photo-1662441646729-77e1a3f90bd0?q=80&w=1172&auto=format&fit=crop",
      days: "2 Days",
      reviews: "20",
      price: "रू8500",
      old: "रू10000",
      location: "Lumbini",
      tag: "Weekend",
      star: "4.4",
    },
    {
      title: "Chitwan Short Safari",
      img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200",
      days: "3 Days",
      reviews: "22",
      price: "रू9500",
      old: "रू12000",
      location: "Chitwan",
      tag: "Weekend",
      star: "4.9",
    },
  ],
  family: [
    {
      title: "Kathmandu Heritage Tour",
      img: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=1200",
      days: "4 Days",
      reviews: "22",
      price: "रू18000",
      old: "रू22000",
      location: "Kathmandu",
      tag: "Family",
      star: "4.6",
    },
    {
      title: "Pokhara Family Fun Trip",
      img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200",
      days: "5 Days",
      reviews: "28",
      price: "रू25000",
      old: "रू30000",
      location: "Pokhara",
      tag: "Family",
      star: "4.8",
    },
    {
      title: "Chitwan Jungle Safari",
      img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200",
      days: "4 Days",
      reviews: "19",
      price: "रू20000",
      old: "रू24000",
      location: "Chitwan",
      tag: "Family",
      star: "4.5",
    },
    {
      title: "Bandipur Village Stay",
      img: "https://images.unsplash.com/photo-1540883214770-08e60a9bfd97?q=80&w=1170&auto=format&fit=crop",
      days: "3 Days",
      reviews: "16",
      price: "रू15000",
      old: "रू18000",
      location: "Bandipur",
      tag: "Family",
      star: "4.7",
    },
    {
      title: "Lumbini Cultural Tour",
      img: "https://images.unsplash.com/photo-1662441646729-77e1a3f90bd0?q=80&w=1172&auto=format&fit=crop",
      days: "6 Days",
      reviews: "14",
      price: "रू22000",
      old: "रू26000",
      location: "Lumbini",
      tag: "Family",
      star: "4.8",
    },
    {
      title: "Nepal Heritage Tour",
      img: "https://images.unsplash.com/photo-1585597800810-07a63ea8e983?q=80&w=1074&auto=format&fit=crop",
      days: "7 Days",
      reviews: "25",
      price: "रू30000",
      old: "रू36000",
      location: "Nepal",
      tag: "Family",
      star: "4.6",
    },
  ],
  luxury: [
    {
      title: "Ultra Luxury Mustang Resort",
      img: "https://images.unsplash.com/photo-1534679541758-8dc76ff8081d?q=80&w=1208&auto=format&fit=crop",
      days: "6 Days",
      reviews: "18",
      price: "रू80000",
      old: "रू95000",
      location: "Mustang",
      tag: "Luxury",
      star: "4.9",
    },
    {
      title: "5-Star Pokhara Lake Hotel",
      img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1170&auto=format&fit=crop",
      days: "5 Days",
      reviews: "22",
      price: "रू60000",
      old: "रू72000",
      location: "Pokhara",
      tag: "Luxury",
      star: "4.6",
    },
    {
      title: "Everest View Luxury Stay",
      img: "https://images.unsplash.com/photo-1686239270493-4f64f907660e?q=80&w=1170&auto=format&fit=crop",
      days: "7 Days",
      reviews: "20",
      price: "रू90000",
      old: "रू105000",
      location: "Everest",
      tag: "Luxury",
      star: "4.5",
    },
    {
      title: "Kathmandu Royal Hotel",
      img: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?q=80&w=1170&auto=format&fit=crop",
      days: "4 Days",
      reviews: "16",
      price: "रू70000",
      old: "रू85000",
      location: "Kathmandu",
      tag: "Luxury",
      star: "4.9",
    },
    {
      title: "Helicopter Everest Tour",
      img: "https://images.unsplash.com/photo-1586097484000-d49dfa3b8da8?q=80&w=1170&auto=format&fit=crop",
      days: "1 Day",
      reviews: "12",
      price: "रू120000",
      old: "रू140000",
      location: "Everest",
      tag: "Luxury",
      star: "4.7",
    },
    {
      title: "Premium Spa Resort Pokhara",
      img: "https://images.unsplash.com/photo-1729003702131-51807464dcec?q=80&w=1170&auto=format&fit=crop",
      days: "5 Days",
      reviews: "24",
      price: "रू65000",
      old: "रू78000",
      location: "Pokhara",
      tag: "Luxury",
      star: "4.8",
    },
  ],
};

const tabs = ["weekend", "adventure", "family", "honeymoon", "luxury"];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut", staggerChildren: 0.06 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0 },
};

const TravelPackages = () => {
  return (
    <section className="py-24 px-6 lg:px-32 overflow-hidden">
      <div className="mb-14">
        <p className="uppercase tracking-[5px] text-orange-500 font-bold mb-3">
          Travel Packages
        </p>

        <h1 className="text-5xl lg:text-6xl font-black text-gray-900">
          Discover Your Perfect
          <span className="block text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-blue-400">
            Journey Package
          </span>
        </h1>

        <p className="text-gray-500 max-w-2xl mt-5 text-lg">
          Browse travel experiences designed for every traveler — honeymoon
          escapes, adventures, family tours, luxury vacations and quick weekend
          trips.
        </p>
      </div>

      <Tabs defaultValue="weekend">
        <div className="overflow-x-auto no-scrollbar mb-12">
          <TabsList className="bg-transparent flex flex-nowrap gap-4 w-max min-w-full scroll-smooth py-10">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="whitespace-nowrap rounded-full px-7 py-6 text-lg border border-gray-200 bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 data-[state=active]:bg-linear-to-r from-blue-600 to-blue-400 data-[state=active]:text-white data-[state=active]:border-blue-600 data-[state=active]:shadow-xl"
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {Object.entries(packageData).map(([key, items]) => (
          <TabsContent value={key} key={key}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid md:grid-cols-2 xl:grid-cols-3 gap-10"
            >
              {items.map((trip, i) => (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="group"
                >
                  <div className="relative">
                    <div className="overflow-hidden rounded-[35px] h-85 shadow-2xl">
                      <img
                        src={trip.img}
                        className="w-full h-full object-cover group-hover:scale-110 duration-700"
                      />
                    </div>

                    <div className="absolute top-5 left-5 px-4 py-2 rounded-full bg-white/20 backdrop-blur-xl text-white text-sm font-bold">
                      {trip.tag}
                    </div>

                    <div className="absolute top-5 right-5 flex items-center gap-1 bg-white rounded-full px-3 py-2 text-sm font-bold">
                      <Star
                        size={14}
                        className="fill-orange-400 text-orange-400"
                      />
                      {trip.star}
                    </div>

                    <div className="relative z-20 bg-white mx-5 rounded-[28px] p-6 shadow-2xl -mt-14">
                      <h1 className="text-xl font-semibold mb-4 text-gray-800 group-hover:text-blue-600 duration-300">
                        {trip.title}
                      </h1>

                      <div className="flex justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <Clock3 size={18} />
                          {trip.days}
                        </div>

                        <div className="flex items-center gap-2">
                          <MapPin size={18} />
                          {trip.location}
                        </div>
                      </div>

                      <div className="flex justify-between mt-4">
                        <div>
                          <div className="flex gap-2 items-center">
                            <h1 className="text-xl font-bold text-orange-600">
                              {trip.price}
                            </h1>
                            <del className="text-gray-400">{trip.old}</del>
                          </div>
                          <p className="text-sm text-gray-400 mt-1">
                            ({trip.reviews} Reviews)
                          </p>
                        </div>

                          <a href="/login"><Button className="rounded-full p-4 mt-5 bg-linear-to-r from-blue-600 to-blue-400 hover:scale-105 duration-500">
                          Book
                          <ArrowRight className="w-4" />
                        </Button></a>
                        
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default TravelPackages;
