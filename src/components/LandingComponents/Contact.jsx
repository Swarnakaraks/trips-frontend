import { useState } from 'react'
import {
  Mail,
  User,
  Send,
  MessageSquare,
  Sparkles,
  Plane,
  PhoneCall
} from 'lucide-react'
import { motion } from 'framer-motion'
import api from '@/api/axios'
import { toast } from 'sonner'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await api.post("/contacts", formData)

      if(response.status === 201){
        toast.success("Message sent successfully!")

        setFormData({
          name:'',
          email:'',
          message:''
        })

      }else{
        toast.error("Failed to send message")
      }

    } catch(error){
      toast.error(
        error.message ||
        "An error occurred while sending message."
      )
    } finally{
      setIsSubmitting(false)
    }
  }

  return (
    <section id='contact' className="relative overflow-hidden py-24 px-4 bg-blue-50/50">


      <div className="max-w-6xl mx-auto relative z-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT DESIGN SIDE */}

          <motion.div
            initial={{opacity:0,x:-50}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:.8}}
            viewport={{ once: true }}
            className="space-y-8"
          >

              <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
                Contact Us
              </span>
              
               <h1 className="text-5xl lg:text-6xl font-bold leading-tight">

              Let's Build Your

              <span className="block bg-linear-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">

                Next Adventure

              </span>

            </h1>

            <p className="text-gray-600 text-lg leading-relaxed">

              Have questions about our trips or need help planning your
              journey? Send us a message and our team will reach out shortly.

            </p>


            {/* cards */}
<div className="grid sm:grid-cols-2 gap-5">

  {/* Email Support */}
  <div className="bg-white/70 backdrop-blur-xl p-6 rounded-3xl shadow-lg border hover:shadow-xl transition-all">

    <Mail className="h-10 w-10 text-orange-500 mb-3" />

    <h3 className="font-semibold text-gray-900">
      Email Support
    </h3>

    <p className="text-sm text-gray-500 mt-1">
     tripbridge24@gmail.com
    </p>

    <span className="text-xs text-blue-600 mt-3 inline-block">
      Replies within 2-6 hours
    </span>

  </div>


  {/* Phone / Call */}
  <div className="bg-white/70 backdrop-blur-xl p-6 rounded-3xl shadow-lg border hover:shadow-xl transition-all">

    <PhoneCall className="h-10 w-10 text-orange-500 mb-3" />

    <h3 className="font-semibold text-gray-900">
      Call Us
    </h3>

    <p className="text-sm text-gray-500 mt-1">
      +977 9834621780
    </p>

    <span className="text-xs text-cyan-600 mt-3 inline-block">
      24/7 Emergency travel support
    </span>

  </div>

</div>

          </motion.div>


          {/* FORM SIDE */}

          <motion.div
            initial={{opacity:0,y:60}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:.8}}
            viewport={{ once: true }}
            className="relative"
          >


            <div className="bg-white/70 backdrop-blur-2xl border border-white/50 shadow-2xl rounded-[35px] p-8 md:p-10">

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                {/* name */}

                <div className="relative">

                  <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-blue-500"/>

                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="
                    w-full
                    pl-12
                    pr-4
                    py-4
                    rounded-2xl
                    bg-white
                    border
                    border-blue-100
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-500
                    shadow-sm
                    "
                  />

                </div>


                {/* email */}

                <div className="relative">

                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-blue-500"/>

                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="
                    w-full
                    pl-12
                    pr-4
                    py-4
                    rounded-2xl
                    bg-white
                    border
                    border-blue-100
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-500
                    shadow-sm
                    "
                  />

                </div>


                {/* message */}

                <div className="relative">

                  <MessageSquare className="absolute left-4 top-6 h-5 w-5 text-blue-500"/>

                  <textarea
                    name="message"
                    placeholder="Write your message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="
                    w-full
                    pl-12
                    pr-4
                    py-4
                    rounded-2xl
                    bg-white
                    border
                    border-blue-100
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-500
                    resize-none
                    shadow-sm
                    "
                  />

                </div>


                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                  w-full
                  py-4
                  rounded-2xl
                  text-white
                  font-semibold
                  bg-linear-to-r
                  from-blue-600
                  via-blue-500
                  to-cyan-500
                  hover:scale-[1.02]
                  transition-all
                  shadow-xl
                  flex
                  items-center
                  justify-center
                  gap-3
                  disabled:opacity-50
                  "
                >

                  <Send size={18}/>

                  {isSubmitting
                    ? 'Sending...'
                    : 'Send Message'
                  }

                </button>

              </form>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}