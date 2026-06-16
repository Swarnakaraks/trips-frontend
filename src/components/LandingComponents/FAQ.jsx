import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  HelpCircle,
  Headphones,
  ShieldCheck,
  Plane,
  MessageCircle,
  Zap,
} from "lucide-react";

const FAQ = () => {
  const faq = [
    {
      q: "How do I book a travel package?",
      a: "Choose your destination, select your preferred package, and complete booking in a few simple steps.",
    },
    {
      q: "Can I customize my trip itinerary?",
      a: "Yes. You can personalize destinations, hotels, activities, and travel dates.",
    },
    {
      q: "Are payments secure?",
      a: "All transactions are protected with secure payment gateways and encrypted systems.",
    },
    {
      q: "Do you offer 24/7 support?",
      a: "Our travel team is available anytime before and during your journey.",
    },
    {
      q: "Can I cancel or reschedule?",
      a: "Yes, cancellation and rescheduling options are available depending on package policy.",
    },
  ];

  return (
    <section id="help" className="relative py-28 overflow-hidden px-10 lg:px-20">

     
   
      <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}

            <motion.div
              initial={{opacity:0,x:-40}}
              whileInView={{opacity:1,x:0}}
              viewport={{once:true}}
              transition={{duration:.7}}
            >

                <span className="uppercase tracking-[5px] text-orange-500 font-semibold mb-4">
                  Frequently Asked Questions
                </span>

            

              <h1 className="mt-4 text-4xl md:text-6xl font-black leading-tight text-gray-900">

                Travel Questions?
                
                <span className="block bg-linear-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  We Have Answers
                </span>

              </h1>

              <p className="mt-6 text-gray-500 text-lg max-w-xl leading-relaxed">
                Everything you need to know before booking your next
                adventure. From payments to customization, we've covered it.
              </p>

              {/* features */}

              <div className="mt-10 space-y-5">

                {[
                  {
                    icon: Headphones,
                    title:"24/7 Support",
                    text:"Get assistance anytime during your trip",
                    color:"bg-blue-50 text-blue-600"
                  },
                  {
                    icon: ShieldCheck,
                    title:"Safe Booking",
                    text:"Secure payment and verified travel partners",
                    color:"bg-orange-50 text-orange-500"
                  },
                  {
                    icon: Plane,
                    title:"Flexible Packages",
                    text:"Customize your trip your way",
                    color:"bg-cyan-50 text-cyan-600"
                  }
                ].map((item,i)=>(
                  <div
                  key={i}
                  className="flex gap-4 items-center group"
                  >

                    <div className={`h-14 w-14 rounded-2xl flex items-center justify-center ${item.color}`}>
                      <item.icon size={24}/>
                    </div>

                    <div>

                      <h3 className="font-bold text-gray-800">
                        {item.title}
                      </h3>

                      <p className="text-gray-500 text-sm">
                        {item.text}
                      </p>

                    </div>

                  </div>
                ))}

              </div>

            </motion.div>

            {/* RIGHT */}

            <motion.div
              initial={{opacity:0,y:40}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              transition={{duration:.7}}
            >

              <div className="space-y-5">

                <Accordion
                  type="single"
                  collapsible
                  defaultValue="item-1"
                >

                  {faq.map((item,index)=>(

                    <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="mb-5 border-0"
                    >

                      <div className="group rounded-3xl bg-white duration-500 overflow-hidden shadow-xs">

                        <AccordionTrigger className="px-7 py-6 hover:no-underline">

                          <div className="flex items-center gap-4 text-left">

                            <span className="font-semibold text-gray-800 text-lg">
                              {item.q}
                            </span>

                          </div>

                        </AccordionTrigger>

                        <AccordionContent className="px-7 pb-6 text-gray-500 leading-5 text-[15px]">

                          {item.a}

                        </AccordionContent>

                      </div>

                    </AccordionItem>

                  ))}

                </Accordion>

              </div>

            </motion.div>

          </div>

        </div>

    </section>
  );
};

export default FAQ;