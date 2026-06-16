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
} from "lucide-react"
import { cn } from "@/lib/utils"

const activities = [
  {
    id: 1,
    type: "booking",
    user: "Sarah Johnson",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    action: "booked a trip to",
    target: "Paris, France",
    time: "2 minutes ago",
    icon: Calendar,
    color: "text-blue-500 bg-blue-100 dark:bg-blue-900/30",
  },
  {
    id: 2,
    type: "payment",
    user: "Michael Chen",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    action: "completed payment of",
    target: "$4,180",
    time: "15 minutes ago",
    icon: CreditCard,
    color: "text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30",
  },
  {
    id: 3,
    type: "review",
    user: "Emily Davis",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    action: "left a 5-star review for",
    target: "Maldives Escape",
    time: "1 hour ago",
    icon: Star,
    color: "text-amber-500 bg-amber-100 dark:bg-amber-900/30",
  },
  {
    id: 4,
    type: "message",
    user: "James Wilson",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    action: "sent a message about",
    target: "Tokyo Adventure",
    time: "2 hours ago",
    icon: MessageSquare,
    color: "text-purple-500 bg-purple-100 dark:bg-purple-900/30",
  },
  {
    id: 5,
    type: "signup",
    user: "Anna Martinez",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    action: "created an account",
    target: "",
    time: "3 hours ago",
    icon: UserPlus,
    color: "text-cyan-500 bg-cyan-100 dark:bg-cyan-900/30",
  },
  {
    id: 6,
    type: "trip",
    user: "David Lee",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    action: "started their trip to",
    target: "Bali, Indonesia",
    time: "4 hours ago",
    icon: Plane,
    color: "text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30",
  },
]

const Activity = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
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
              {activities.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-start gap-3 group"
                >
                  <div className="relative">
                    <Avatar className="w-9 h-9">
                      <AvatarImage src={activity.avatar} />
                      <AvatarFallback className="bg-linear-to-br from-blue-500 to-cyan-400 text-white text-xs">
                        {activity.user
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div
                      className={cn(
                        "absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full flex items-center justify-center",
                        activity.color
                      )}
                    >
                      <activity.icon className="w-2.5 h-2.5" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-sm">
                      <span className="font-medium">{activity.user}</span>{" "}
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
                      {activity.time}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default Activity;