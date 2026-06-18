import { useMemo } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Clock, Users, ArrowRight, TrendingUp } from "lucide-react"
import useApi from "../../../hooks/useApi"

export function PopularTrips() {
  const { data } = useApi("/booking")
  const bookings = Array.isArray(data) ? data : []

  const trips = useMemo(() => {
    const map = {}

    bookings.forEach((b) => {
      const name = b.tripName || b.tripTitle || b.tripId?.title || "Unknown Trip"
      const price = b.totalPrice || 0


      if (!map[name]) {
        map[name] = {
          id: name,
          name,
          price,
          bookings: 0,
        }
      }

      map[name].bookings += 1
    })

    return Object.values(map)
      .sort((a, b) => b.bookings - a.bookings)
      .slice(0, 3)
  }, [bookings])

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <Card className="border-0 shadow-lg p-5">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg font-semibold">
            Popular Trips
          </CardTitle>
        </CardHeader>

        <CardContent>
          {trips.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-10">
              No trip data available
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {trips.map((trip, index) => (
                <motion.div
                  key={trip.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  {/* CARD */}
                  <div className="relative rounded-2xl border bg-linear-to-br from-white to-slate-50 p-5 shadow-md hover:shadow-xl transition-all duration-300">

                    {/* TOP BADGE */}
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-blue-100 text-blue-700 border-0">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Popular
                      </Badge>

                      <div className="text-xs text-muted-foreground">
                        #{index + 1}
                      </div>
                    </div>

                    {/* TITLE */}
                    <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition">
                      {trip.name}
                    </h3>

                    {/* STATS */}
                    <div className="mt-4 space-y-3">

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <Users className="w-4 h-4" />
                          Bookings
                        </div>

                        <span className="font-semibold text-slate-800">
                          {trip.bookings}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                          Rating
                        </div>

                        <span className="font-semibold text-slate-800">
                          4.5
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <Clock className="w-4 h-4" />
                          Total
                        </div>

                        <span className="font-bold text-blue-600">
                          रु {trip.price}
                        </span>
                      </div>

                    </div>

                   
                    <div className="mt-4 h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-linear-to-r from-blue-500 to-cyan-400"
                        style={{ width: `${Math.min(trip.bookings * 10, 100)}%` }}
                      />
                    </div>

                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}