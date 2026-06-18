import React from 'react'
import {motion} from 'framer-motion'
import RevenueChart from '../components/Common/overview/RevenueChart'
import DestinationChart from '../components/Common/overview/DestinationChart'
import BookingsChart from '../components/Common/overview/BookingsChart'
import StatCards from '../components/Common/overview/StatCards'
import StatBooking from '../components/Common/overview/StatBooking'
import Activity from '../components/Common/overview/Activity'
import { PopularTrips } from '../components/Common/overview/PopularTrips'
import useAuth from "@/hooks/useAuth";
import { jwtDecode } from "jwt-decode";

const Dashboard = () => {

    const { token } = useAuth();
    const decodedToken = token ? jwtDecode(token) : null;
    const name = decodedToken?.name || "client";
  return (
    <div>
      <div className='mb-10'>
      <motion.div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Welcome back, {name}!</h1>
          <p className="text-muted-foreground">Here's what's happening with your travel agency today.</p>
        </div>
        </motion.div>
      </div>

      <div className='mb-10'>
        <StatCards/>
      </div>

       {/* Charts */}
      <motion.div className="grid lg:grid-cols-3 gap-6 mb-10">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <div className="space-y-6">
          <DestinationChart />
          <BookingsChart />
        </div>
      </motion.div>

      <motion.div className="grid lg:grid-cols-3 gap-6 mb-10">
        <div className="lg:col-span-2">
          <StatBooking />
        </div>
        <div>
         <Activity/>
        </div>
      </motion.div>

      <div>
        <PopularTrips/>
      </div>
    </div>
  )
}

export default Dashboard