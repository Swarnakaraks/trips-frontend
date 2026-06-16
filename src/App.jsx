import React, { useState } from "react";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import useAuth from "./hooks/useAuth";
import { jwtDecode } from "jwt-decode";
import AppLayout from "./layouts/AppLayout";
import AddTrip from "./pages/trip/AddTrip";
import EditTrip from "./pages/trip/EditTrip";
import Trips from "./pages/trip/Trips";
import ViewTrips from "./pages/client/ViewTrips";
import Booking from "./pages/booking/Booking";
import Blog from "./pages/Blog";
import SidebarLayout from "./layouts/SidebarLayout";
import MyBookings from "./pages/client/MyBookings";
import ClientDashboard from "./pages/client/ClientDashboard";
import MyBlog from "./pages/client/MyBlog";
import Contact from "./components/LandingComponents/Contact";
import ContactList from "./pages/Contacts/ContactList";



const App = () => {
  const { token, logout } = useAuth();

  const ProtectedRoutes = () => {
    try {
      const decodedToken = token ? jwtDecode(token) : null;
      const userId = decodedToken?.userId;
      console.log("Decoded Token:", decodedToken)

      console.log(token, decodedToken)

      if (decodedToken && decodedToken.exp) {
        const currentTime = Date.now() / 1000;
        if (currentTime > decodedToken?.exp) {
          logout();
          return <Navigate to="/login" />;
        }
      }

      if (!token || !userId) {
        logout();
        return <Navigate to="/login" />;
      }

      return <SidebarLayout role = {decodedToken.role} />;
    } catch (err) {
      console.error(err);
      logout();
      return <Navigate to="/login" />;
    }
  };

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/About" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
       
  


        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/trips/add" element={<AddTrip/>} />
          <Route path="/trips/edit/:id" element={<EditTrip/>}/>
          <Route path="/trips" element={<Trips/>}/>
          <Route path="/bookings" element={<Booking/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/contacts" element={<ContactList/>}/>

          <Route path="/client/trips" element={<ViewTrips/>}/>
          <Route path="/client/bookings" element={<MyBookings/>}/>
          <Route path="/client/dashboard" element={<ClientDashboard/>}/>
          <Route path="/client/blogs" element={<MyBlog/>}/>
        
        </Route>

        <Route path="*" element={<div>Page is not Found </div>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
