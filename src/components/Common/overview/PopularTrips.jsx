import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Star,
  MapPin,
  Clock,
  Users,
  Heart,
  ArrowRight,
} from "lucide-react"


const trips = [
  {
    id: 1,
    name: "Paris Romance",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=300&fit=crop",
    destination: "Paris, France",
    duration: "7 Days / 6 Nights",
    price: 2499,
    rating: 4.9,
    reviews: 234,
    status: "active",
    bookings: 156,
    startDate: "Dec 15, 2024",
  },
  {
    id: 2,
    name: "Tokyo Adventure",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=300&fit=crop",
    destination: "Tokyo, Japan",
    duration: "10 Days / 9 Nights",
    price: 3899,
    rating: 4.8,
    reviews: 189,
    status: "active",
    bookings: 142,
    startDate: "Dec 20, 2024",
  },
  {
    id: 3,
    name: "Maldives Escape",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400&h=300&fit=crop",
    destination: "Maldives",
    duration: "5 Days / 4 Nights",
    price: 4299,
    rating: 5.0,
    reviews: 312,
    status: "active",
    bookings: 198,
    startDate: "Jan 5, 2025",
  },
]

export function PopularTrips() {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
    >
      <Card className="border-0 shadow-lg p-5">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg font-semibold">
            Popular Trips
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {trips.map((trip, index) => (
              <motion.div
                key={trip.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group cursor-pointer"
                onClick={() => handleViewTrip(trip)}
              >
                {/* Image Section */}
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    src={trip.image}
                    alt={trip.name}
                    className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

                  <Badge className="absolute top-3 left-3 bg-linear-to-r from-blue-500 to-cyan-400 border-0">
                    Featured
                  </Badge>

            

                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="font-semibold text-white text-lg">
                      {trip.name}
                    </h3>

                    <div className="flex items-center gap-1 text-white/80 text-sm">
                      <MapPin className="w-3 h-3" />
                      {trip.destination}
                    </div>
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-3 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span className="font-medium text-sm">
                        {trip.rating}
                      </span>
                      <span className="text-muted-foreground text-xs">
                        ({trip.reviews})
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-muted-foreground text-xs">
                      <Users className="w-3 h-3" />
                      {trip.bookings} travelers
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <Clock className="w-4 h-4" />
                      {trip.duration}
                    </div>

                    <div className="text-right">
                      <span className="text-xs text-muted-foreground">
                        From
                      </span>
                      <p className="font-bold text-lg text-primary">
                        ${trip.price}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

    </motion.div>
  )
}