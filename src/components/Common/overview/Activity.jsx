import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Calendar,
  CreditCard,
  MessageSquare,
  Star,
  UserPlus,
  Plane,
} from "lucide-react"
import { cn } from "@/lib/utils"
import useApi from "@/hooks/useApi"


const iconMap = {
  booking: Calendar,
  payment: CreditCard,
  review: Star,
  message: MessageSquare,
  signup: UserPlus,
  trip: Plane,
}

const colorMap = {
  booking: "text-blue-500 bg-blue-100",
  payment: "text-emerald-500 bg-emerald-100",
  review: "text-amber-500 bg-amber-100",
  message: "text-purple-500 bg-purple-100",
  signup: "text-cyan-500 bg-cyan-100",
  trip: "text-indigo-500 bg-indigo-100",
}

const Activity = () => {
  const { data: bookings } = useApi("/booking")
  const { data: trips } = useApi("/trips")

  // convert BOOKINGS → activities
  const bookingActivities =
    bookings?.slice(0, 5).map((b) => ({
      id: b._id,
      type: "booking",
      user: b.customerName,
      avatar: "",
      action: "booked a trip",
      target: b.tripId?.title || "Unknown Trip",
      time: new Date(b.bookingDate).toLocaleString(),
    })) || []

  // convert TRIPS → activities
  const tripActivities =
    trips?.slice(0, 3).map((t) => ({
      id: t._id,
      type: "trip",
      user: "Admin",
      avatar: "",
      action: "created a new trip",
      target: t.title,
      time: new Date(t.createdAt || Date.now()).toLocaleString(),
    })) || []

  const activities = [...bookingActivities, ...tripActivities]
    .sort((a, b) => new Date(b.time) - new Date(a.time))
    .slice(0, 6)

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <Card className="border-0 shadow-lg h-full p-5">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            Recent Activity
          </CardTitle>
        </CardHeader>

        <CardContent className="p-0">
          <div className="space-y-4 px-6 pb-6">
            {activities?.map((activity, index) => {
              const Icon = iconMap[activity.type] || Calendar

              return (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center bg-linear-to-br from-blue-500 to-cyan-400 text-white text-xs font-bold shadow-md"
                  >
                    {activity.user === "Admin"
                      ? "A"
                      : activity.user
                          ?.split(" ")
                          .map((n) => n[0])
                          .join("")
                          .toUpperCase()}
                  </div>

                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="font-medium">{activity.user}</span>{" "}
                      <span className="text-muted-foreground">
                        {activity.action}
                      </span>{" "}
                      <span className="font-medium text-primary">
                        {activity.target}
                      </span>
                    </p>

                    <p className="text-xs text-muted-foreground mt-0.5">
                      {activity.time}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default Activity