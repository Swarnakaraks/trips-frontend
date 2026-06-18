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
import useApi from "@/hooks/useApi"
import { useMemo } from "react"
import { Link } from "react-router-dom";


const getMonth = (dateStr) => {
  const d = new Date(dateStr)
  return d.getMonth()
}

const StatCards = () => {

  const { data: bookings } = useApi("/booking")
  const { data: trips } = useApi("/trips")

  const bookingList = Array.isArray(bookings) ? bookings : []
  const tripList = Array.isArray(trips) ? trips : []

  const stats = useMemo(() => {
    const now = new Date()
    const currentMonth = now.getMonth()
    const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1

    // BOOKINGS
    const currentBookings = bookingList.filter(
      (b) => getMonth(b.bookingDate) === currentMonth
    ).length

    const prevBookings = bookingList.filter(
      (b) => getMonth(b.bookingDate) === prevMonth
    ).length

    // TRIPS 
    const currentTrips = tripList.length

    const prevTrips = tripList.filter(
      (t) => getMonth(t.createdAt || t.date) === prevMonth
    ).length

    // CUSTOMERS
    const currentCustomers = new Set(
      bookingList
        .filter((b) => getMonth(b.bookingDate) === currentMonth)
        .map((b) => b.customerPhone)
    ).size

    const prevCustomers = new Set(
      bookingList
        .filter((b) => getMonth(b.bookingDate) === prevMonth)
        .map((b) => b.customerPhone)
    ).size

    // REVENUE
    const currentRevenue = bookingList
      .filter((b) => getMonth(b.bookingDate) === currentMonth)
      .reduce((sum, b) => sum + (b.totalPrice || 0), 0)

    const prevRevenue = bookingList
      .filter((b) => getMonth(b.bookingDate) === prevMonth)
      .reduce((sum, b) => sum + (b.totalPrice || 0), 0)

    const calcChange = (curr, prev) => {
      if (prev === 0) return curr > 0 ? 100 : 0
      return ((curr - prev) / prev) * 100
    }

    const formatChange = (val) =>
      `${val >= 0 ? "+" : ""}${val.toFixed(1)}%`

    return [
      {
        title: "Total Bookings",
        value: currentBookings,
        change: formatChange(calcChange(currentBookings, prevBookings)),
        trend: currentBookings >= prevBookings ? "up" : "down",
        icon: Calendar,
        gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
        route: "/bookings",
      },
      {
        title: "Active Trips",
        value: currentTrips,
        change: formatChange(calcChange(currentTrips, prevTrips)),
        trend: currentTrips >= prevTrips ? "up" : "down",
        icon: Plane,
        gradient: "bg-gradient-to-br from-cyan-500 to-teal-500",
        route: "/trips",
      },
      {
        title: "Total Customers",
        value: currentCustomers,
        change: formatChange(calcChange(currentCustomers, prevCustomers)),
        trend: currentCustomers >= prevCustomers ? "up" : "down",
        icon: Users,
        gradient: "bg-gradient-to-br from-indigo-500 to-purple-500",
        route: "/bookings",
      },
      {
        title: "Revenue",
        value: `₹${currentRevenue}`,
        change: formatChange(calcChange(currentRevenue, prevRevenue)),
        trend: currentRevenue >= prevRevenue ? "up" : "down",
        icon: CreditCard,
        gradient: "bg-gradient-to-br from-emerald-500 to-green-500",
        route: "/dashboard",
      },
    ]
  }, [bookingList, tripList])

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
                {/* LEFT */}
                <div className="space-y-3">
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </p>

                  <p className="text-3xl font-bold tracking-tight">
                    {stat.value}
                  </p>

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

                {/* ICON */}
                <div
                  className={cn(
                    "p-3 rounded-xl text-white shadow-lg",
                    stat.gradient
                  )}
                >
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>

              {stat.route && (
  <Link
    to={stat.route}
    className="mt-4 flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors cursor-pointer relative z-10"
  >
    View details
    <ArrowUpRight className="w-4 h-4 ml-1" />
  </Link>
)}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

export default StatCards