import { useMemo } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts"
import useApi from "../../../hooks/useApi"



const BookingsChart = () => {
  const { data } = useApi("/booking")

  const bookings = Array.isArray(data) ? data : []

  const bookingData = useMemo(() => {
    const now = new Date()

    // 🧠 get start of week (Monday)
    const day = now.getDay() // 0 (Sun) - 6 (Sat)
    const diffToMonday = day === 0 ? -6 : 1 - day

    const monday = new Date(now)
    monday.setDate(now.getDate() + diffToMonday)
    monday.setHours(0, 0, 0, 0)

    const sunday = new Date(monday)
    sunday.setDate(monday.getDate() + 6)
    sunday.setHours(23, 59, 59, 999)

    // week structure
    const weekMap = {
      Mon: 0,
      Tue: 0,
      Wed: 0,
      Thu: 0,
      Fri: 0,
      Sat: 0,
      Sun: 0,
    }

    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    bookings.forEach((b) => {
      if (!b?.bookingDate) return

      const date = new Date(b.bookingDate)

    
      if (date < monday || date > sunday) return

      const dayName = dayNames[date.getDay()]

      weekMap[dayName] += 1
    })

    return [
      { day: "Mon", bookings: weekMap.Mon },
      { day: "Tue", bookings: weekMap.Tue },
      { day: "Wed", bookings: weekMap.Wed },
      { day: "Thu", bookings: weekMap.Thu },
      { day: "Fri", bookings: weekMap.Fri },
      { day: "Sat", bookings: weekMap.Sat },
      { day: "Sun", bookings: weekMap.Sun },
    ]
  }, [bookings])

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <Card className="border-0 ring-0 shadow-lg h-full p-5">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            This Week Bookings
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="h-50">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={bookingData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />

                <defs>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>

                <Bar
                  dataKey="bookings"
                  fill="url(#barGradient)"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default BookingsChart