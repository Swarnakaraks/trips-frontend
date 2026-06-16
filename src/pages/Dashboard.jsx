import React from 'react'
import {motion} from 'framer-motion'
import RevenueChart from '../components/Common/overview/RevenueChart'
import DestinationChart from '../components/Common/overview/DestinationChart'
import BookingsChart from '../components/Common/overview/BookingsChart'
import StatCards from '../components/Common/overview/StatCards'
import StatBooking from '../components/Common/overview/StatBooking'
import Activity from '../components/Common/overview/Activity'
import { PopularTrips } from '../components/Common/overview/PopularTrips'

const Dashboard = () => {
  return (
    <div>

      <div className='mb-10'>
      <motion.div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Welcome back, John!</h1>
          <p className="text-muted-foreground">Here&apos;s what&apos;s happening with your travel agency today.</p>
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