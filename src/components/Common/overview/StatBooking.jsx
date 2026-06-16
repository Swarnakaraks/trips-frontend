import { useState } from "react"
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


const bookings = [
  {
    id: "BK-001",
    customer: {
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      phone: "+1 234-567-8900",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    trip: "Paris Romance",
    destination: "Paris, France",
    dates: "Dec 15-22, 2024",
    travelers: 2,
    amount: 3250,
    status: "confirmed",
    paymentStatus: "paid",
    bookedOn: "Nov 28, 2024",
  },
  {
    id: "BK-002",
    customer: {
      name: "Michael Chen",
      email: "m.chen@email.com",
      phone: "+1 345-678-9012",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    trip: "Tokyo Adventure",
    destination: "Tokyo, Japan",
    dates: "Dec 20-28, 2024",
    travelers: 4,
    amount: 4180,
    status: "pending",
    paymentStatus: "partial",
    bookedOn: "Dec 5, 2024",
  },
  {
    id: "BK-003",
    customer: {
      name: "Emily Davis",
      email: "emily.d@email.com",
      phone: "+1 456-789-0123",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
    trip: "Maldives Escape",
    destination: "Maldives",
    dates: "Jan 5-12, 2025",
    travelers: 2,
    amount: 6500,
    status: "confirmed",
    paymentStatus: "paid",
    bookedOn: "Dec 10, 2024",
  },
  {
    id: "BK-004",
    customer: {
      name: "James Wilson",
      email: "j.wilson@email.com",
      phone: "+1 567-890-1234",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    },
    trip: "New York City",
    destination: "New York, USA",
    dates: "Dec 18-24, 2024",
    travelers: 2,
    amount: 2100,
    status: "cancelled",
    paymentStatus: "refunded",
    bookedOn: "Dec 1, 2024",
  },
  {
    id: "BK-005",
    customer: {
      name: "Anna Martinez",
      email: "anna.m@email.com",
      phone: "+1 678-901-2345",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    },
    trip: "Bali Paradise",
    destination: "Bali, Indonesia",
    dates: "Jan 10-20, 2025",
    travelers: 3,
    amount: 3800,
    status: "pending",
    paymentStatus: "pending",
    bookedOn: "Dec 15, 2024",
  },
]

const statusStyles = {
  confirmed:
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  pending:
    "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  cancelled:
    "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
}

const StatBooking = () => {
  const [detailDialogOpen, setDetailDialogOpen] = useState(false)
  const [selectedBooking, setSelectedBooking] = useState(null)

  const handleViewBooking = (booking) => {
    setSelectedBooking(booking)
    setDetailDialogOpen(true)
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

          <Button
            variant="ghost"
            size="sm"
            className="text-primary"
          >
            View all
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            {bookings.map((booking, index) => (
              <motion.div
                key={booking.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{x: 4}}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-secondary/50 transition-colors cursor-pointer group "
                onClick={() => handleViewBooking(booking)}
              >
                <div className="flex items-center gap-4">
                  <Avatar className="w-10 h-10 ring-2 ring-background shadow-md">
                    <AvatarImage src={booking.customer.avatar} />
                    <AvatarFallback className="bg-linear-to-br from-blue-500 to-cyan-400 text-white">
                      {booking.customer.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div className="space-y-1">
                    <p className="font-medium text-sm">
                      {booking.customer.name}
                    </p>

                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {booking.destination}
                      </span>

                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {booking.dates}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Badge
                    variant="secondary"
                    className={
                      statusStyles[booking.status]
                    }
                  >
                    {booking.status}
                  </Badge>

                  <span className="font-semibold text-sm min-w-17.5 text-right">
                    ${booking.amount.toLocaleString()}
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
                        <div className="flex">

                        <Eye className="w-4 h-4 mr-2" />
                        <div>View Details </div>
                        </div>
                      </DropdownMenuItem>


                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>


    </motion.div>
  )
}

export default StatBooking;