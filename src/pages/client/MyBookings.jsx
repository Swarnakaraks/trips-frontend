import React from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import useApi from '../../hooks/useApi'
import { formatDate } from '../../lib/formater'
import {
  Ticket,
  Clock,
} from "lucide-react";


const MyBooking = () => {

    const {data, error, loading} = useApi("/booking/me");
    
const badgeColor = (status) => {
  switch (status) {
    case "pending":
      return "bg-gradient-to-r from-orange-400 to-amber-500 text-white shadow-lg shadow-gray-400/30 border border-orange-300";

    case "confirmed":
      return "bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-600 text-white shadow-lg shadow-green-200/50 border border-green-300";

    case "cancelled":
      return "bg-gradient-to-r from-red-400 via-rose-500 to-red-600 text-white shadow-lg shadow-red-200/50 border border-red-300";

    default:
      return "bg-gradient-to-r from-slate-400 via-slate-500 to-slate-600 text-white shadow-md border border-slate-300";
  }
};

   if (loading) {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
    </div>
  )
}


  return (
  <main className="min-h-screen">
  <div className="mx-auto max-w-7xl">
    
    <Card className="overflow-hidden rounded-3xl border-0 bg-white/80 shadow-2xl backdrop-blur-xl">
      
      {/* Header */}
      <CardHeader className="border-b bg-linear-to-r from-indigo-600 via-blue-600 to-cyan-600 px-8 py-7 text-white">
        
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          
          <div className="space-y-2">
            
            <div className="flex items-center gap-4">
              
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md shadow-lg">
                <Ticket className="h-7 w-7" />
              </div>

              <div>
                <CardTitle className="text-3xl font-bold tracking-tight">
                  Booking Management
                </CardTitle>

                <CardDescription className="text-base text-blue-100">
                  Monitor, manage and track all customer travel bookings
                </CardDescription>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            
            <div className="rounded-2xl bg-white/10 px-5 py-4 text-center backdrop-blur-md">
              <p className="text-xs uppercase tracking-wide text-blue-100">
                Total
              </p>

              <h2 className="text-2xl font-bold">
                {data?.length || 0}
              </h2>
            </div>

            <div className="rounded-2xl bg-white/10 px-5 py-4 text-center backdrop-blur-md">
              <p className="text-xs uppercase tracking-wide text-blue-100">
                Confirmed
              </p>

              <h2 className="text-2xl font-bold">
                {
                  data?.filter((item) => item.status === "confirmed").length
                }
              </h2>
            </div>

            <div className="rounded-2xl bg-white/10 px-5 py-4 text-center backdrop-blur-md">
              <p className="text-xs uppercase tracking-wide text-blue-100">
                Pending
              </p>

              <h2 className="text-2xl font-bold">
                {
                  data?.filter((item) => item.status === "pending").length
                }
              </h2>
            </div>

            <div className="rounded-2xl bg-white/10 px-5 py-4 text-center backdrop-blur-md">
              <p className="text-xs uppercase tracking-wide text-blue-100">
                Cancelled
              </p>

              <h2 className="text-2xl font-bold">
                {
                  data?.filter((item) => item.status === "cancelled").length
                }
              </h2>
            </div>
          </div>
        </div>
      </CardHeader>

      {/* Table Section */}
      <CardContent className="p-8">
        
        <div className="overflow-hidden rounded-2xl border">
          
          <Table>
            
            <TableHeader className="bg-slate-100">
              
              <TableRow className="hover:bg-slate-100">
                
                <TableHead className="h-14 font-semibold text-slate-700">
                  S.N.
                </TableHead>

                <TableHead className="font-semibold text-slate-700">
                  Customer
                </TableHead>

                <TableHead className="font-semibold text-slate-700">
                  Phone
                </TableHead>

                <TableHead className="font-semibold text-slate-700">
                  Trip Package
                </TableHead>

                <TableHead className="font-semibold text-slate-700">
                  Travelers
                </TableHead>

                <TableHead className="font-semibold text-slate-700">
                  Total Amount
                </TableHead>

                <TableHead className="font-semibold text-slate-700">
                  Booking Status
                </TableHead>

                <TableHead className="text-right font-semibold text-slate-700">
                  Booking Date
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              
              {data && data.length === 0 ? (
                
                <TableRow>
                  
                  <TableCell colSpan={8}>
                    
                    <div className="flex flex-col items-center justify-center py-24">
                      
                      <div className="mb-5 rounded-full bg-blue-100 p-6">
                        <Ticket className="h-12 w-12 text-blue-600" />
                      </div>

                      <h2 className="text-3xl font-bold text-slate-800">
                        No Bookings Available
                      </h2>

                      <p className="mt-3 max-w-md text-center text-slate-500">
                        Customer bookings will appear here once users reserve
                        travel packages from your platform.
                      </p>
                    </div>
                  </TableCell>
                </TableRow>

              ) : (
                
                data?.map((booking, index) => {
                  
                  return (
                    
                    <TableRow
                        id={booking._id}
                        key={booking._id}
                      className="group border-b transition-all duration-200 hover:bg-blue-50/60"
                    >
                      
                      <TableCell className="font-medium text-slate-500">
                        {index + 1}
                      </TableCell>

                      {/* Customer */}
                      <TableCell>
                        
                        <div className="flex items-center gap-3">
                          
                          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-sm font-bold text-white shadow-md">
                           {booking.customerName?.split(" ").map(word => word[0]).join("").toUpperCase()}
                          </div>

                          <div>
                            <h3 className="font-semibold text-slate-800">
                              {booking.customerName}
                            </h3>
                          </div>
                        </div>
                      </TableCell>

                      {/* Phone */}
                      <TableCell className="text-slate-600">
                        {booking.customerPhone}
                      </TableCell>

                      {/* Trip */}
                      <TableCell>
                        
                        <div className="space-y-1">
                          
                          <h3 className="font-semibold text-slate-800">
                            {booking.tripId.title}
                          </h3>
                        </div>
                      </TableCell>

                      {/* Travelers */}
                      <TableCell>
                        
                        <div className="flex items-center gap-2">
                          
                          <div className="rounded-xl bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-700">
                            {booking.numberOfPeople} People
                          </div>
                        </div>
                      </TableCell>

                      {/* Price */}
                      <TableCell>
                        
                        <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700">
                          रु {booking.totalPrice}
                        </span>
                      </TableCell>

                      {/* Status */}
                      <TableCell>
                        <span className={` ${badgeColor(booking.status)} px-4 py-1 rounded-full uppercase`}>{booking.status}</span>
                      </TableCell>

                      {/* Date */}
                      <TableCell className="text-right">
                        
                        <div className="flex flex-col items-end">
                          
                          <span className="font-medium text-slate-700">
                            {formatDate(booking.bookingDate)}
                          </span>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter className="flex flex-col gap-3 border-t bg-slate-50 px-8 py-5 md:flex-row md:items-center md:justify-between">
        
        <p className="text-sm text-slate-500">
          Showing all recent customer booking activities
        </p>

        <div className="flex items-center gap-2 text-sm text-slate-500">
          <Clock className="h-4 w-4" />
          Booking records updated recently
        </div>
      </CardFooter>
    </Card>
  </div>
</main>
  )
}

export default MyBooking