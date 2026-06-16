import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {
  TrendingUp,
  TrendingDown,
  Plane,
  Users,
  CreditCard,
  Calendar,
  ArrowUpRight,
} from "lucide-react"
import { cn } from "@/lib/utils"

const stats = [
  {
    title: "Total Bookings",
    value: "2,847",
    change: "+12.5%",
    trend: "up",
    icon: Calendar,
    gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
  },
  {
    title: "Active Trips",
    value: "156",
    change: "+8.2%",
    trend: "up",
    icon: Plane,
    gradient: "bg-gradient-to-br from-cyan-500 to-teal-500",
  },
  {
    title: "Total Customers",
    value: "12,584",
    change: "+22.4%",
    trend: "up",
    icon: Users,
    gradient: "bg-gradient-to-br from-indigo-500 to-purple-500",
  },
  {
    title: "Revenue",
    value: "$284,750",
    change: "-3.1%",
    trend: "down",
    icon: CreditCard,
    gradient: "bg-gradient-to-br from-emerald-500 to-green-500",
  },
]

const StatCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          whileHover={{ y: -4 }}
        >
          <Card className="relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">

           
            <div className={cn("absolute inset-0 opacity-10", stat.gradient)} />

            <CardContent className="p-6">
              <div className="flex items-start justify-between">

                {/* LEFT SIDE */}
                <div className="space-y-3">
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </p>

                  <motion.p
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                    className="text-3xl font-bold tracking-tight"
                  >
                    {stat.value}
                  </motion.p>

                  <div className="flex items-center gap-1.5">
                    {stat.trend === "up" ? (
                      <span className="flex items-center text-emerald-600 text-sm font-medium">
                        <TrendingUp className="w-4 h-4 mr-0.5" />
                        {stat.change}
                      </span>
                    ) : (
                      <span className="flex items-center text-red-500 text-sm font-medium">
                        <TrendingDown className="w-4 h-4 mr-0.5" />
                        {stat.change}
                      </span>
                    )}

                    <span className="text-xs text-muted-foreground">
                      vs last month
                    </span>
                  </div>
                </div>

                {/* RIGHT ICON */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1 + 0.1,
                    type: "spring",
                  }}
                  className={cn(
                    "p-3 rounded-xl text-white shadow-lg",
                    stat.gradient
                  )}
                >
                  <stat.icon className="w-6 h-6" />
                </motion.div>
              </div>

              {/* BUTTON */}
              <motion.button
                whileHover={{ x: 4 }}
                className="mt-4 flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                View details
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </motion.button>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

export default StatCards