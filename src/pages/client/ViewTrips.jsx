import React from "react";
import useApi from "@/hooks/useApi";
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
  Calendar,
  Calendar1,
  Clock9,
  MapPin,
  Users,
  Wallet,
} from "lucide-react";
import { formatDate } from "../../lib/formater";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { toast } from "sonner";
import api from "@/api/axios";

const ViewTrips = () => {
  const { data, error, loading } = useApi("/trips");

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const onSubmit = async (tripId) => {
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const numberOfPeople = document.getElementById("numberOfPeople").value;

    const data = {
      customerEmail: email,
      customerPhone: phone,
      numberOfPeople: numberOfPeople,
      tripId: tripId,
    };
    try {
      const response = await api.post("/booking", data);

      if (response.status === 201) {
        toast.success("Booking created Successfully!!");
      } else {
        toast.error("Some error occured.");
      }
    } catch (error) {
      toast.error(error.message || "Some error occured.");
    }
  };
  return (
    <main className="min-h-screen py-4 lg:px-6">
      {/* Heading */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
          <MapPin className="h-4 w-4" />
          Explore Amazing Destinations
        </div>

        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900">
          Available Trips Package
        </h1>

        <p className="mt-3 max-w-2xl text-slate-600">
          Choose your next adventure from our best travel packages and enjoy
          unforgettable experiences.
        </p>
      </div>

      {/* Cards */}
      <section className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
        {data && data.length == 0 ? (
          <div className="col-span-full flex h-75 flex-col items-center justify-center rounded-3xl border border-dashed border-blue-200 bg-white">
            <MapPin className="mb-4 h-12 w-12 text-blue-500" />

            <h2 className="text-2xl font-bold text-slate-800">
              No Trips Available
            </h2>

            <p className="mt-2 text-slate-500">
              New trip packages will be added soon.
            </p>
          </div>
        ) : (
          data.map((trip, index) => {
            return (
              <Card
                key={trip._id}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Image */}
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={trip.imageUrl}
                      className="h-56 w-full object-cover transition-all duration-500 group-hover:scale-110"
                      alt="Trips image"
                    />

                    <div className="absolute bottom-4 right-4 rounded-xl bg-white/90 px-3 py-1.5 shadow-md backdrop-blur-sm">
                      <div className="flex items-baseline gap-1">
                        <span className="text-lg font-bold text-blue-600">
                          रू {trip.price}
                        </span>

                        <span className="text-xs text-slate-500">/person</span>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="space-y-2 p-6 pb-2">
                    <CardTitle className="line-clamp-1 text-2xl font-bold text-slate-800">
                      {trip.title}
                    </CardTitle>

                    <CardDescription className="line-clamp-2 text-sm leading-relaxed text-slate-500">
                      {trip.description}
                    </CardDescription>
                  </div>
                </CardHeader>

                {/* Content */}
                <CardContent className="space-y-2 px-6">
                  {/* Location */}
                  <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
                    <div className="rounded-xl bg-blue-100 p-2 text-blue-600">
                      <MapPin className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-xs text-slate-500">Destination</p>

                      <h3 className="text-sm font-semibold text-slate-800">
                        {trip.location}
                      </h3>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
                    <div className="rounded-xl bg-cyan-100 p-2 text-cyan-600">
                      <Calendar className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-xs text-slate-500">Start Date</p>

                      <h3 className="text-sm font-semibold text-slate-800">
                        {formatDate(trip.startDate)}
                      </h3>
                    </div>
                  </div>

                  {/* Bottom Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Duration */}
                    <div className="rounded-2xl bg-blue-50 p-4">
                      <p className="text-xs text-slate-500">Duration</p>

                      <h3 className="mt-1 text-sm font-bold text-slate-800">
                        {trip.duration.days}D / {trip.duration.nights}N
                      </h3>
                    </div>

                    {/* Seats */}
                    <div className="rounded-2xl bg-cyan-50 p-4">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-cyan-600" />

                        <p className="text-xs text-slate-500">Seats Left</p>
                      </div>

                      <h3
                        className={`mt-1 text-sm font-bold ${
                          trip.availableSeats === 0
                            ? "text-red-500"
                            : "text-slate-800"
                        }`}
                      >
                        {trip.availableSeats} left
                      </h3>
                    </div>
                  </div>
                </CardContent>

                {/* Footer */}
                <CardFooter className="p-6 pt-2 mt-auto">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        size="lg"
                        className="h-11 w-full rounded-2xl bg-linear-to-r from-blue-600 to-cyan-500 text-sm font-semibold text-white shadow-md transition hover:opacity-90"
                      >
                        Book Trip
                      </Button>
                    </DialogTrigger>

                    {/* Dialog */}
                    <DialogContent className="rounded-3xl border-0 bg-white">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-slate-800">
                          Enter Contact Information
                        </DialogTitle>

                        <DialogDescription className="text-slate-500">
                          Please provide your contact details and number of
                          participants to book this trip.
                        </DialogDescription>
                      </DialogHeader>

                      <form className="mt-4">
                        {/* Email */}
                        <div className="mb-4 space-y-2">
                          <Label htmlFor="email">Email</Label>

                          <Input
                            id="email"
                            type="email"
                            placeholder="abc@gmail.com"
                            className="h-11 rounded-xl border-slate-200"
                          />
                        </div>

                        {/* Phone */}
                        <div className="mb-4 space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>

                          <Input
                            id="phone"
                            placeholder="9834785678"
                            className="h-11 rounded-xl border-slate-200"
                          />
                        </div>

                        {/* People */}
                        <div className="mb-5 space-y-2">
                          <Label htmlFor="numberOfPeople">
                            Number of People
                          </Label>

                          <Input
                            id="numberOfPeople"
                            type="number"
                            placeholder="2"
                            className="h-11 rounded-xl border-slate-200"
                          />
                        </div>

                        <Button
                          type="button"
                          onClick={() => {
                            onSubmit(trip._id);
                          }}
                          className="h-11 w-full rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 font-semibold"
                          size="lg"
                        >
                          Confirm Booking
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            );
          })
        )}
      </section>
    </main>
  );
};

export default ViewTrips;
