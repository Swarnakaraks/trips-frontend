import { useMemo } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts"
import useApi from "../../../hooks/useApi"


const COLORS = ["#3b82f6", "#06b6d4", "#6366f1", "#8b5cf6", "#f59e0b"]

const DestinationChart = () => {
  const { data } = useApi("/booking")

  const chartData = useMemo(() => {
    const bookings = Array.isArray(data) ? data : []

    const map = {}

    bookings.forEach((b) => {
     
      const tripName =
        b.tripId?.title ||
        b.tripTitle ||
        b.tripName ||
        "Unknown Trip"

    
      const destination =
        b.tripId?.location ||
        b.destination ||
        "Unknown"

      if (!map[tripName]) {
        map[tripName] = {
          name: tripName,
          value: 0,
          destination,
        }
      }

      map[tripName].value += 1
    })

    return Object.values(map)
      .sort((a, b) => b.value - a.value)
      .slice(0, 5)
      .map((item, index) => ({
        ...item,
        color: COLORS[index % COLORS.length],
      }))
  }, [data])

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <Card className="border-0 shadow-lg h-full p-5">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            Top Destination
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={85}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>

                <Tooltip formatter={(value, name) => [`${value} bookings`, name]} />
              </PieChart>
            </ResponsiveContainer>
          </div>

        
          <div className="mt-4 space-y-2">
            {chartData.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-muted-foreground">
                    {item.name}
                  </span>
                </div>

                <span className="text-sm font-medium">
                  {item.value} bookings
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default DestinationChart