import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Calendar,
  CreditCard,
  MessageSquare,
  Star,
  UserPlus,
  Plane,
  LogIn,
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
  login: LogIn,
}

const colorMap = {
  booking: "text-blue-500 bg-blue-100 dark:bg-blue-900/30",
  payment: "text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30",
  review: "text-amber-500 bg-amber-100 dark:bg-amber-900/30",
  message: "text-purple-500 bg-purple-100 dark:bg-purple-900/30",
  signup: "text-cyan-500 bg-cyan-100 dark:bg-cyan-900/30",
  trip: "text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30",
  login: "text-green-500 bg-green-100 dark:bg-green-900/30",
}

const Activity = () => {
  const { data: activities = [], loading } = useApi("/activity")

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="border-0 shadow-lg h-full p-5">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            Recent Activity
          </CardTitle>
        </CardHeader>

        <CardContent className="p-0">
          <div className="h-100 px-6">
            <div className="space-y-4 pb-6">
              {activities.length === 0 ? (
                <p className="text-center text-gray-400 text-sm">
                  No recent activity
                </p>
              ) : (
                activities.map((activity, index) => {
                  const Icon = iconMap[activity.type] || MessageSquare

                  return (
                    <motion.div
                      key={activity._id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-3 group"
                    >
                      <div className="relative">
                        <Avatar className="w-9 h-9">
                          <AvatarFallback>
                            {activity.user?.name
                              ?.split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>

                        <div
                          className={cn(
                            "absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full flex items-center justify-center",
                            colorMap[activity.type]
                          )}
                        >
                          <Icon className="w-2.5 h-2.5" />
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="text-sm">
                          <span className="font-medium">
                            {activity.user?.name}
                          </span>{" "}
                          <span className="text-muted-foreground">
                            {activity.action}
                          </span>{" "}
                          {activity.target && (
                            <span className="font-medium text-primary">
                              {activity.target}
                            </span>
                          )}
                        </p>

                        <p className="text-xs text-muted-foreground mt-0.5">
                          {new Date(activity.createdAt).toLocaleString()}
                        </p>
                      </div>
                    </motion.div>
                  )
                })
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default Activity