import { useMemo, useState } from "react"
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
import useApi from "../../../hooks/useApi"


const RevenueChart = () => {
  const { data } = useApi("/booking")

  // ✅ SAFE fallback (prevents crash)
  const bookings = Array.isArray(data) ? data : []

  const [tab, setTab] = useState("revenue")

  const chartData = useMemo(() => {
    const months = [
      "Jan","Feb","Mar","Apr","May","Jun",
      "Jul","Aug","Sep","Oct","Nov","Dec"
    ]

    const map = {}

    months.forEach((m) => {
      map[m] = { name: m, revenue: 0, bookings: 0 }
    })

    bookings.forEach((b) => {
      if (!b?.bookingDate) return

      const date = new Date(b.bookingDate)
      const month = months[date.getMonth()]

      map[month].bookings += 1
      map[month].revenue += Number(b.totalPrice || 0)
    })

    return months.map((m) => map[m])
  }, [bookings])

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <Card className="ring-0 shadow-lg p-5">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold">
              Revenue Overview
            </CardTitle>

            <Tabs value={tab} onValueChange={setTab} className="w-auto">
              <TabsList className="h-8">
                <TabsTrigger value="revenue" className="text-xs px-3">
                  Revenue
                </TabsTrigger>
                <TabsTrigger value="bookings" className="text-xs px-3">
                  Bookings
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardHeader>

        <CardContent>
          <div className="h-75">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />

                {tab === "revenue" ? (
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    fill="url(#chartFill)"
                  />
                ) : (
                  <Area
                    type="monotone"
                    dataKey="bookings"
                    stroke="#10b981"
                    strokeWidth={2}
                    fill="url(#chartFill)"
                  />
                )}
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default RevenueChart