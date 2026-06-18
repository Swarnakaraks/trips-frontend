import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, Eye, MapPin, Calendar, ArrowRight } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import useApi from "../../../hooks/useApi"
import { Link } from "react-router-dom";



const statusStyles = {
  confirmed:
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  pending:
    "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  cancelled:
    "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
}

const StatBooking = () => {
  const { data } = useApi("/booking")

  const bookings = Array.isArray(data) ? data : []

  const [selectedBooking, setSelectedBooking] = useState(null)


  const recentBookings = useMemo(() => {
    return [...bookings]
      .sort((a, b) => new Date(b.bookingDate) - new Date(a.bookingDate))
      .slice(0, 5)
  }, [bookings])

  const handleViewBooking = (booking) => {
    setSelectedBooking(booking)
    console.log("Selected booking:", booking)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <Card className="border-0 shadow-lg p-5">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg font-semibold">
            Recent Bookings
          </CardTitle>

<Link to={"/bookings"}>
          <Button variant="ghost" size="sm" className="text-primary">
            View all
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>

</Link>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            {recentBookings.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-10">
                No bookings available
              </p>
            ) : (
              recentBookings.map((booking, index) => (
                <motion.div
                  key={booking._id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-secondary/50 transition-colors cursor-pointer group"
                  onClick={() => handleViewBooking(booking)}
                >
                  {/* LEFT SIDE */}
                  <div className="flex items-center gap-4">
                    <Avatar className="w-10 h-10 ring-2 ring-background shadow-md">
                      <AvatarFallback className="bg-linear-to-br from-blue-500 to-cyan-400 text-white">
                        {booking.customerName
                          ?.split(" ")
                          .map((n) => n[0])
                          .join("")
                          .toUpperCase()}
                      </AvatarFallback>
                    </Avatar>

                    <div className="space-y-1">
                      <p className="font-medium text-sm">
                        {booking.customerName}
                      </p>

                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {booking.tripId?.title || "Trip"}
                        </span>

                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {booking.bookingDate
                            ? new Date(booking.bookingDate).toLocaleDateString()
                            : "N/A"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT SIDE */}
                  <div className="flex items-center gap-4">
                    <Badge
                      variant="secondary"
                      className={statusStyles[booking.status]}
                    >
                      {booking.status}
                    </Badge>

                    <span className="font-semibold text-sm min-w-20 text-right">
                      रु {booking.totalPrice?.toLocaleString() || 0}
                    </span>

                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() => handleViewBooking(booking)}
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default StatBooking