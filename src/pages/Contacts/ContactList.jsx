import React, { useState } from "react";
import {
  Card,
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
import { Button } from "@/components/ui/button";
import api from "@/api/axios";
import useApi from "../../hooks/useApi";
import { toast } from "sonner";
import { Mail, MessageSquare, Clock } from "lucide-react";
import { useEffect } from "react";


const ContactList = () => {

  const [dependency, setDependency] = useState(0);

  const { data, error, loading } = useApi("/contacts", {}, [dependency]);


  const badgeColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-gradient-to-r from-orange-400 to-amber-500 text-white shadow-lg shadow-gray-400/30 border border-orange-300";
      case "resolved":
        return "bg-gradient-to-r from-green-700 to-green-600 text-white shadow-lg shadow-gray-400/30 border border-green-300";
      default:
        return "bg-slate-500 text-white";
    }
  };

  const handleStatusChange = async (contactId, newStatus) => {
    try {
      const response = await api.put(`/contacts/${contactId}`, {
        status: newStatus,
      });

      if (response.status === 200) {
        toast.success("Contact status updated!");
        setDependency((prev) => prev + 1);
      } else toast.error("Contact failed to update. Please try again.");
    } catch (error) {
      console.error("Status update failed:", error);
      toast.error("Status update failed. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      <div className="grid grid-cols-3 gap-4 my-5">

  {/* Total */}
  <div className="relative overflow-hidden rounded-2xl bg-white border border-blue-100 p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
    <div className="absolute top-0 left-0 h-1 w-full bg-blue-500" />
    <p className="text-xs text-center uppercase tracking-wider text-blue-500 font-semibold">
      Total
    </p>
    <h2 className="text-3xl text-center font-extrabold text-slate-800 mt-2">
      {data?.length || 0}
    </h2>
  </div>

  {/* Pending */}
  <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-orange-50 to-white border border-orange-200 p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
    <div className="absolute top-0 left-0 h-1 w-full bg-orange-400" />
    <p className="text-xs text-center uppercase tracking-wider text-orange-500 font-semibold">
      Pending
    </p>
    <h2 className="text-3xl text-center font-extrabold text-orange-600 mt-2">
      {data?.filter((item) => item.status === "pending").length}
    </h2>
  </div>

  {/* Resolved */}
  <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-emerald-50 to-white border border-emerald-200 p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
    <div className="absolute top-0 left-0 h-1 w-full bg-emerald-500" />
    <p className="text-xs uppercase tracking-wider text-emerald-600 font-semibold">
      Resolved
    </p>
    <h2 className="text-3xl font-extrabold text-emerald-700 mt-2">
      {data?.filter((item) => item.status === "resolved").length}
    </h2>
  </div>

</div>
      <div className="mx-auto max-w-7xl">
        <Card className="overflow-hidden rounded-3xl border-0 bg-white/80 shadow-2xl backdrop-blur-xl">
          <CardHeader className="border-b bg-linear-to-r from-indigo-600 via-blue-600 to-cyan-600 px-8 py-7 text-white">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 shadow-lg backdrop-blur-md">
                  <Mail className="h-7 w-7" />
                </div>

                <div>
                  <CardTitle className="text-3xl font-bold">
                    Contact Management
                  </CardTitle>
                  <CardDescription className="text-blue-100">
                    Manage and track customer contact messages
                  </CardDescription>
                </div>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-8">
            <div className="overflow-hidden rounded-2xl border">
              <Table>
                <TableCaption>A list of your contact messages</TableCaption>

                <TableHeader className="bg-slate-100">
                  <TableRow className="hover:bg-slate-100">
                    <TableHead>S.N.</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Message</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {data && data.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6}>
                        <div className="flex flex-col items-center justify-center py-24">
                          <div className="mb-5 rounded-full bg-blue-100 p-6">
                            <MessageSquare className="h-12 w-12 text-blue-600" />
                          </div>

                          <h2 className="text-3xl font-bold text-slate-800">
                            No Messages Available
                          </h2>
                          <p className="mt-3 max-w-md text-center text-slate-500">
                            User contact messages will appear here once
                            customers submit the contact form.
                          </p>
                        </div>
                      </TableCell>
                    </TableRow>
                  ) : (
                    data?.map((contact, index) => (
                      <TableRow
                        id={contact._id}
                        key={contact._id}
                        className="group border-b transition-all duration-200 hover:bg-blue-50/60"
                      >
                        <TableCell>{index + 1}</TableCell>

                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-linear-to-r from-blue-500 to-cyan-500 text-sm font-bold text-white">
                              {contact.name
                                ?.split(" ")
                                .map((word) => word[0])
                                .join("")
                                .toUpperCase()}
                            </div>

                            <h3 className="font-semibold">{contact.name}</h3>
                          </div>
                        </TableCell>

                        <TableCell>{contact.email}</TableCell>

                        <TableCell className="max-w-xs">
                          <p className="line-clamp-2">{contact.message}</p>
                        </TableCell>

                        <TableCell>
                          <span
                            className={`${badgeColor(contact.status)} rounded-full px-4 py-1 uppercase`}
                          >
                            {contact.status}
                          </span>
                        </TableCell>

                        <TableCell className="text-right">
                          {contact.status === "pending" ? (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                handleStatusChange(contact._id, "resolved")
                              }
                            >
                              Mark Resolved
                            </Button>
                          ) : (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                handleStatusChange(contact._id, "pending")
                              }
                            >
                              Mark Pending
                            </Button>
                          )}
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>

          <CardFooter className="flex items-center justify-between border-t bg-slate-50 px-8 py-5">
            <p className="text-sm text-slate-500">
              Showing all recent contact activities
            </p>

            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Clock className="h-4 w-4" />
              Contact records updated recently
            </div>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
};

export default ContactList;
