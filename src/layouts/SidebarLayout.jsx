import React, { Children, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Plus, Search, CreditCardIcon, LogOutIcon, SettingsIcon, UserIcon, User2Icon, Sun, Moon, Bell, LogOut } from "lucide-react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuLabel } from "@/components/ui/dropdown-menu";
import AppSidebar from "../components/Common/AppSidebar";
import useAuth from "@/hooks/useAuth";
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { useNavigate } from "react-router-dom";

const SidebarLayout = ({ role }) => {
 

  const adminRoutes = ["/dashboard", "/trips", "/trips/add", "/trips/edit", "/bookings", "/blog", "/contacts"];

  const clientRoutes = ["/client/dashboard", "/client/trips", "/client/bookings", "/client/blogs",];

 const pathname = useLocation().pathname;
  if (role === "Admin" && !adminRoutes.some((route) => pathname.startsWith(route))) {
    return (
      <div className="flex items-center justify-center h-screen text-2xl font-bold">
        Unauthorized Access
      </div>
    );
  }

  if (role === "User" && !clientRoutes.some((route) => pathname.startsWith(route))) {
    return (
      <div className="flex items-center justify-center h-screen text-2xl font-bold">
        Unauthorized Access
      </div>
    );
  }

  const { token, logout } = useAuth();
  const navigate = useNavigate();

  const handlelogout = () => {
    logout();
    navigate("/login");
  };

   

  const notifications = [
    {
      id: 1,
      title: "New booking received",
      message: "Sarah Johnson booked a trip to Paris",
      time: "2 min ago",
      unread: true,
    },
    {
      id: 2,
      title: "Payment confirmed",
      message: "$2,500 received for booking #1234",
      time: "15 min ago",
      unread: true,
    },
    {
      id: 3,
      title: "Review submitted",
      message: "Mike left a 5-star review",
      time: "1 hour ago",
      unread: false,
    },
  ];

  return (
    <SidebarProvider>
      <AppSidebar />

      <main className="flex-1">
        <div className="h-16 border-b gap-6 px-5 flex items-center bg-blue-100/70 backdrop-blur-lg border-gray-100 sticky top-0 z-50">
          <SidebarTrigger />

         <div className="flex flex-1 w-full max-w-md relative">

  <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground"/>

  <input
    placeholder="Search trips, customers, bookings..."
    className="pl-9 h-10 w-full rounded-md bg-white border-blue-200 focus:border-blue-500 text-[15px] outline-blue-400/50"
  />

</div>

          <div className="flex items-center flex-row ml-auto gap-3 pr-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button variant="ghost" size="icon" className="relative">
                    <Bell className="w-5 h-5" />

                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 rounded-full text-[10px] font-bold text-white flex items-center justify-center"
                    >
                      2
                    </motion.span>
                  </Button>
                </motion.div>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-80">
                <DropdownMenuLabel className="flex items-center justify-between">
                  <span>Notifications</span>
                  <Badge variant="secondary" className="text-xs">2 new</Badge>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                {notifications.map((notification) => (
                  <DropdownMenuItem key={notification.id} className="flex flex-col items-start gap-1 p-3 cursor-pointer">
                    <div className="flex items-center gap-2 w-full">
                      <span className="font-medium text-sm">{notification.title}</span>

                      {notification.unread && (
                        <span className="w-2 h-2 rounded-full bg-blue-500 ml-auto" />
                      )}
                    </div>

                    <span className="text-xs text-muted-foreground">{notification.message}</span>
                    <span className="text-xs text-muted-foreground/70">{notification.time}</span>
                  </DropdownMenuItem>
                ))}

                <DropdownMenuSeparator />

                <DropdownMenuItem className="text-center text-sm text-primary cursor-pointer justify-center">
                  View all notifications
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="cursor-pointer">
              <AlertDialog>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <AvatarBadge className="bg-green-600 dark:bg-green-800" />
                    </Avatar>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent className="relative right-8 cursor-pointer">
                    <DropdownMenuItem><UserIcon /> Profile</DropdownMenuItem>
                    <DropdownMenuItem><CreditCardIcon /> Billing</DropdownMenuItem>
                    <DropdownMenuItem><SettingsIcon /> Settings</DropdownMenuItem>

                    <DropdownMenuSeparator />

                    <AlertDialogTrigger asChild>
                      <DropdownMenuItem variant="destructive">
                        <LogOut className="mr-2 h-4 w-4" />
                        Logout
                      </DropdownMenuItem>
                    </AlertDialogTrigger>
                  </DropdownMenuContent>
                </DropdownMenu>

                <AlertDialogContent>
                  <AlertDialogHeader className="flex flex-col items-center text-center gap-2">
                    <AlertDialogTitle>Logout Account?</AlertDialogTitle>

                    <AlertDialogDescription>
                      Are you sure you want to logout your account?
                    </AlertDialogDescription>
                  </AlertDialogHeader>

                  <AlertDialogFooter className="border-none">
                    <AlertDialogCancel className="active:bg-gray-200 active:scale-95 transition-all duration-300">
                      Cancel
                    </AlertDialogCancel>

                    <AlertDialogAction onClick={handlelogout} className="bg-red-500 hover:bg-red-600 active:scale-95 transition-all">
                      Logout
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>

        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
};

export default SidebarLayout;