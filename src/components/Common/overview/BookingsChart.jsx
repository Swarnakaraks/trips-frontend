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


const BookingsChart = () => {

  const bookingData = [
  { day: "Mon", bookings: 45 },
  { day: "Tue", bookings: 52 },
  { day: "Wed", bookings: 38 },
  { day: "Thu", bookings: 65 },
  { day: "Fri", bookings: 78 },
  { day: "Sat", bookings: 82 },
  { day: "Sun", bookings: 56 },
]

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <Card className="border-0 ring-0 shadow-lg h-full p-5">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Weekly Bookings</CardTitle>
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

                <Bar dataKey="bookings" fill="url(#barGradient)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default BookingsChart