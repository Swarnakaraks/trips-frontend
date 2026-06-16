import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import { jwtDecode } from "jwt-decode";
import { motion } from "framer-motion";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";

import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  BookOpen,
  Ticket,
  Plane,
  LogOut,
  MessageSquare,
} from "lucide-react";

import { Avatar, AvatarBadge, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const AppSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { token, logout } = useAuth();

  const decodedToken = token ? jwtDecode(token) : null;
  const role = decodedToken?.role || "client";
  const name = decodedToken?.name || "client";

  const handlelogout = () => {
    logout();
    navigate("/login");
  };


  const adminMenuItems = [
    { id: "dashboard", icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
    { id: "trips", icon: Plane, label: "Trips", path: "/trips" },
    { id: "bookings", icon: Ticket, label: "Bookings", path: "/bookings" },
    { id: "contacts", icon: MessageSquare, label: "Contacts", path: "/contacts" },
    { id: "blog", icon: BookOpen, label: "Blog", path: "/blog" },
  ];

 
  const clientMenuItems = [
    { id: "dashboard", icon: LayoutDashboard, label: "Dashboard", path: "/client/dashboard" },
    { id: "trips", icon: Plane, label: "Trips", path: "/client/trips" },
    { id: "bookings", icon: Ticket, label: "Bookings", path: "/client/bookings" },
    { id: "blog", icon: BookOpen, label: "Blog", path: "/client/blogs" },
  ];

  const menuItems = role === "Admin" ? adminMenuItems : clientMenuItems;

  return (
    <Sidebar className="border-r">
      {/* HEADER */}
      <SidebarHeader className="border-b shadow-lg">
        <div className="flex items-center cursor-pointer group h-12">
          <img src="/logo.png" alt="logo"
            className="h-12 w-auto object-contain"
          />
          <h1 className="text-3xl md:text-2xl font-extrabold text-gray-900 tracking-tight">
            Trip
            <span className="bg-linear-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">
              Bridge
            </span>
          </h1>
        </div>
      </SidebarHeader>

      {/* CONTENT */}
      <SidebarContent>
        <nav className="flex-1 p-3 overflow-y-auto custom-scrollbar">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const isActive =
                location.pathname === item.path ||
                location.pathname.includes(item.path);

              return (
                <li key={item.id}>
                  <motion.button
                    onClick={() => navigate(item.path)}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.97 }}
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-300 group",
                      isActive
                        ? "bg-linear-to-r from-blue-600 to-cyan-500 text-white shadow-lg"
                        : "text-gray-600 hover:bg-gray-100"
                    )}
                  >
                    <item.icon
                      className={cn(
                        "w-5 h-5 transition-all",
                        isActive && "scale-110"
                      )}
                    />
                    <span className="font-medium">{item.label}</span>
                  </motion.button>
                </li>
              );
            })}
          </ul>
        </nav>
      </SidebarContent>

      {/* FOOTER */}
      <SidebarFooter className="flex flex-row border-t justify-around py-6">
        <div className="flex gap-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarBadge className="bg-green-600 dark:bg-green-800" />
          </Avatar>

          <div>
            <p className="text-sm capitalize text-gray-950 font-semibold font-heading">{name}</p>
            <h1 className="text-xs text-gray-800">{role}</h1>
          </div>
        </div>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="w-8 h-8 text-sidebar-foreground/70 hover:text-red-400 hover:bg-red-500/10"
            >
              <LogOut/>
            </Button>
          </AlertDialogTrigger>

          <AlertDialogContent>
            <AlertDialogHeader className="flex flex-col justify-center items-center">
              <AlertDialogTitle>Logout Account?</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to logout?
              </AlertDialogDescription>
            </AlertDialogHeader>

            <AlertDialogFooter className="border-none">
              <AlertDialogCancel>Cancel</AlertDialogCancel>

              <AlertDialogAction
                onClick={handlelogout}
                className="bg-red-500 hover:bg-red-600"
              >
                Logout
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;