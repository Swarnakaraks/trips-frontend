import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const RevenueChart = () => {
  const revenueData = [
  { name: "Jan", revenue: 45000, bookings: 120 },
  { name: "Feb", revenue: 52000, bookings: 145 },
  { name: "Mar", revenue: 48000, bookings: 132 },
  { name: "Apr", revenue: 61000, bookings: 168 },
  { name: "May", revenue: 55000, bookings: 152 },
  { name: "Jun", revenue: 67000, bookings: 185 },
  { name: "Jul", revenue: 72000, bookings: 198 },
  { name: "Aug", revenue: 85000, bookings: 234 },
  { name: "Sep", revenue: 78000, bookings: 215 },
  { name: "Oct", revenue: 82000, bookings: 226 },
  { name: "Nov", revenue: 76000, bookings: 209 },
  { name: "Dec", revenue: 92000, bookings: 253 }, 
]
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} >
      <Card className="ring-0 shadow-lg p-5">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold">Revenue Overview</CardTitle>

            <Tabs defaultValue="revenue" className="w-auto">
              <TabsList className="h-8">
                <TabsTrigger value="revenue" className="text-xs px-3">Revenue</TabsTrigger>
                <TabsTrigger value="bookings" className="text-xs px-3">Bookings</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardHeader>

        <CardContent>
          <div className="h-75">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  fill="url(#revenueGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default RevenueChart