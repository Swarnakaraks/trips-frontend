import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts"


const DestinationChart = () => {
   
   const destinationData = [
  { name: "Paris", value: 35, color: "#3b82f6" },
  { name: "Tokyo", value: 25, color: "#06b6d4" },
  { name: "New York", value: 20, color: "#6366f1" },
  { name: "Maldives", value: 12, color: "#8b5cf6" },
  { name: "Others", value: 8, color: "#a855f7" },
]

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <Card className="border-0 ring-0 shadow-lg h-full p-5">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Top Destinations</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="h-50">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={destinationData}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                >
                  {destinationData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
         <div className="mt-4 space-y-2">
            {destinationData.map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-muted-foreground">{item.name}</span>
                </div>
                <span className="text-sm font-medium">{item.value}%</span>
              </div>
            ))}
          </div>
      </Card>
    </motion.div>
  )
}

export default DestinationChart