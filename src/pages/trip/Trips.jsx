import {
  Plus,
  Edit,
  Trash,
  Eye,
  Plane,
  Clock,
  Info,
  Wallet,
  Calendar,
  Calendar1,
  Clock9,
} from "lucide-react";
import useApi from "@/hooks/useApi";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import api from "@/api/axios";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";




const Trips = () => {

  const navigate = useNavigate();

  const [dependency, setDependency] = useState(0);

  
  function formatDate(isoString) {
    const date = new Date(isoString);
    return date.toDateString();
  }


  const { data, error, loading } = useApi("/trips", {}, [dependency]);

 const handleDelete = async (tripId) => {
    try {
      const response = await api.delete(`/trips/${tripId}`);
      console.log(response);
      if (response.status === 200) {
        toast.success("Trip deleted successfully!");
        setDependency((prev) => prev + 1);
      } else {
        toast.error("Failed to delete trip. Please try again.");
      }
    } catch (error) {
      console.log(error);
      toast.error(
        error.message ||
          "An error occurred while delete the trip. Please try again.",
      );
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
        <Card className="overflow-hidden rounded-3xl border-0 bg-white/80 shadow-2xl backdrop-blur-xl p-0">
          {/* Header */}
          <CardHeader className="border-b bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-7 text-white">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md">
                    <Plane className="h-10 w-6" />
                  </div>

                  <div>
                    <CardTitle className="text-3xl font-bold tracking-tight">
                      Trips Management
                    </CardTitle>

                    <CardDescription className="text-blue-100 text-base">
                      Manage, organize and monitor all travel packages
                    </CardDescription>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Button
                  onClick={() => navigate("/trips/add")}
                  className="rounded-xl bg-white px-5 font-semibold text-blue-700 shadow-lg hover:bg-blue-50"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Add New Trip
                </Button>
              </div>
            </div>
          </CardHeader>

          {/* Table */}
          <CardContent className="p-8">
            <div className="overflow-hidden rounded-2xl border">
              <Table>
                <TableHeader className="bg-slate-100">
                  <TableRow className="hover:bg-slate-100">
                    <TableHead className="h-14 font-semibold text-slate-700">
                      S.N.
                    </TableHead>

                    <TableHead className="font-semibold text-slate-700">
                      Trip
                    </TableHead>

                    <TableHead className="font-semibold text-slate-700">
                      Price
                    </TableHead>

                    <TableHead className="font-semibold text-slate-700">
                      Start Date
                    </TableHead>

                    <TableHead className="font-semibold text-slate-700">
                      Duration
                    </TableHead>

                    <TableHead className="font-semibold text-slate-700">
                      Seats
                    </TableHead>

                    <TableHead className="text-right font-semibold text-slate-700">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {data && data.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={7}>
                        <div className="flex flex-col items-center justify-center py-20">
                          <div className="mb-4 rounded-full bg-blue-100 p-5">
                            <Plane className="h-10 w-10 text-blue-600" />
                          </div>

                          <h2 className="text-2xl font-bold text-slate-800">
                            No Trips Found
                          </h2>

                          <p className="mt-2 text-slate-500">
                            Start by creating your first travel package
                          </p>

                          <Button
                            onClick={() => navigate("/trips/add")}
                            className="mt-6 rounded-xl bg-blue-600 px-6 hover:bg-blue-700"
                          >
                            <Plus className="mr-2 h-4 w-4" />
                            Add Trip
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ) : (
                    data?.map((trip, index) => {
                      return (
                        <TableRow
                          id={trip._id}
                          key={trip._id}
                          className="group border-b transition-all duration-200 hover:bg-blue-50/60"
                        >
                          <TableCell className="font-medium text-slate-500">
                            {index + 1}
                          </TableCell>

                          <TableCell>
                            <div className="space-y-1">
                              <h3 className="font-semibold text-slate-800">
                                {trip.title}
                              </h3>
                            </div>
                          </TableCell>

                          <TableCell>
                            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                              रु {trip.price}
                            </span>
                          </TableCell>

                          <TableCell className="text-slate-600">
                            {formatDate(trip.startDate)}
                          </TableCell>

                          <TableCell>
                            <div className="flex flex-col">
                              <span className="font-medium text-slate-700">
                                {trip.duration.days} Days
                              </span>

                              <span className="text-sm text-slate-500">
                                {trip.duration.nights} Nights
                              </span>
                            </div>
                          </TableCell>

                          <TableCell>
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <div className="h-2 w-24 overflow-hidden rounded-full bg-slate-200">
                                  <div
                                    className="h-full rounded-full bg-blue-600"
                                    style={{
                                      width: `${(trip.availableSeats / trip.maxParticipants) * 100}%`,
                                    }}
                                  />
                                </div>

                                <span className="text-sm font-medium text-slate-700">
                                  {trip.availableSeats} Available
                                </span>
                              </div>

                              <p className="text-xs text-slate-500">
                                Max: {trip.maxParticipants} Seats
                              </p>
                            </div>
                          </TableCell>

                          <TableCell>
                            <div className="flex justify-end gap-2">
                              {/* View */}

                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button
                                    size="icon"
                                    variant="outline"
                                    className="rounded-xl border-slate-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600"
                                  >
                                    <Eye className="h-4 w-4 text-blue-600 hover:text-blue-700" />
                                  </Button>
                                </DialogTrigger>

                                <DialogContent
                                  aria-describedby={undefined}
                                  className="no-scrollbar max-h-[90vh] overflow-y-auto rounded-3xl border-0 p-0 shadow-2xl"
                                >
                                  {/* Hero Section */}
                                  <div className="relative overflow-hidden rounded-t-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-8 pb-4 text-white">
                                    <div className="mb-5 flex items-center justify-between">
                                      <div className="rounded-2xl bg-white/10 p-3 backdrop-blur-md">
                                        <Plane className="h-7 w-7" />
                                      </div>

                                      <div className="rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm backdrop-blur-md">
                                        Active Trip
                                      </div>
                                    </div>

                                    <DialogTitle className="text-4xl font-bold tracking-tight">
                                      {trip.title}
                                    </DialogTitle>

                                    <p className="mt-1 max-w-2xl text-base leading-7 text-blue-100">
                                      {trip.description}
                                    </p>

                                    <div className="grid grid-cols-3 gap-4 place-items-center ">
                                      <div className="rounded-2xl bg-white/10 px-3 py-4 text-sm backdrop-blur-md place-items-center">
                                        <Wallet /> रु {trip.price}
                                      </div>

                                      <div className="rounded-2xl bg-white/10 px-4 py-4 text-sm backdrop-blur-md place-items-center">
                                        <Calendar1 />{" "}
                                        {formatDate(trip.startDate)}
                                      </div>

                                      <div className="rounded-2xl bg-white/10 px-4 py-4 text-sm backdrop-blur-md place-items-center">
                                        <Clock9 /> {trip.duration.days}D /{" "}
                                        {trip.duration.nights}N
                                      </div>
                                    </div>
                                  </div>

                                  {/* Content */}
                                  <div className="space-y-5 p-3">
                                    {/* Trip Information */}
                                    <div className="rounded-3xl border bg-white p-4 shadow-sm">
                                      <div className="mb-6 flex items-center gap-3">
                                        <div className="rounded-xl bg-blue-100 p-3">
                                          <Info className="h-5 w-5 text-blue-700" />
                                        </div>

                                        <div>
                                          <h3 className="text-xl font-bold text-slate-800">
                                            Trip Information
                                          </h3>

                                          <p className="text-sm text-slate-500">
                                            Complete overview about this package
                                          </p>
                                        </div>
                                      </div>

                                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                        <div className="space-y-2 rounded-2xl border bg-slate-50 p-5 text-center">
                                          <p className="text-sm font-medium text-slate-500">
                                            Start Date
                                          </p>

                                          <h4 className="text-lg font-semibold text-slate-800">
                                            {formatDate(trip.startDate)}
                                          </h4>
                                        </div>

                                        <div className="space-y-2 rounded-2xl border bg-slate-50 p-5 text-center">
                                          <p className="text-sm font-medium text-slate-500">
                                            Total Capacity
                                          </p>

                                          <h4 className="text-lg font-semibold text-slate-800">
                                            {trip.maxParticipants} Travelers
                                          </h4>
                                        </div>

                                        <div className="space-y-2 rounded-2xl border bg-slate-50 p-5 text-center">
                                          <p className="text-sm font-medium text-slate-500">
                                            Available Seats
                                          </p>

                                          <h4 className="text-lg font-semibold text-slate-800">
                                            {trip.availableSeats} Seats Left
                                          </h4>
                                        </div>

                                        <div className="space-y-2 rounded-2xl border bg-slate-50 p-5 text-center">
                                          <p className="text-sm font-medium text-slate-500">
                                            Duration
                                          </p>

                                          <h4 className="text-lg font-semibold text-slate-800">
                                            {trip.duration.days} Days &{" "}
                                            {trip.duration.nights} Nights
                                          </h4>
                                        </div>

                                        <div className="w-full space-y-2 rounded-2xl border bg-slate-50 p-5 text-center col-span-2">
                                          <p className="text-sm font-medium text-slate-500">
                                            Location
                                          </p>

                                          <h4 className="text-lg font-semibold text-slate-800">
                                            {trip.location}
                                          </h4>
                                        </div>
                                      </div>
                                    </div>

                                    {/* Description */}
                                    <div className="rounded-3xl border bg-slate-50 p-5 text-center">
                                      <h3 className="mb-1 text-2xl font-bold text-slate-800">
                                        About This Trip
                                      </h3>

                                      <p className="text-base leading-8 text-slate-600">
                                        {trip.description}
                                      </p>
                                    </div>

                                    {/* Footer */}
                                    <div className="flex items-center justify-center p-5 pt-0 ">
                                      <Button
                                        onClick={() =>
                                          navigate(`/trips/edit/${trip._id}`)
                                        }
                                        className="rounded-xl bg-blue-600 px-6 py-6 hover:bg-blue-700"
                                      >
                                        <Edit className=" not-only-of-type:h-4 w-4" />
                                        Edit Trip
                                      </Button>
                                    </div>
                                  </div>
                                </DialogContent>
                              </Dialog>

                              {/* Edit */}
                              <Button
                                onClick={() =>
                                  navigate(`/trips/edit/${trip._id}`)
                                }
                                size="icon"
                                variant="outline"
                                className="rounded-xl border-indigo-200 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600"
                              >
                                <Edit className="h-4 w-4 text-indigo-700" />
                              </Button>

                              {/* Delete */}
                              <Button
                                onClick={() => handleDelete(trip._id)}
                                size="icon"
                                variant="outline"
                                className="rounded-xl border-red-200 hover:border-red-300 hover:bg-red-50 hover:text-red-600"
                              >
                                <Trash className="h-4 w-4 text-red-600" />
                              </Button>
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
          <CardFooter className="flex items-center justify-between border-t bg-slate-50 px-8 py-5">
            <p className="text-sm text-slate-500">
              Showing all available travel packages
            </p>

            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Clock className="h-4 w-4" />
              Updated recently
            </div>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
};

export default Trips;
