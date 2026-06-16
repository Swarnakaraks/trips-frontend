import React from 'react'
import AppNavbar from '../components/Common/AppNavbar'
import { Outlet, useLocation } from 'react-router-dom'

const AppLayout = ({role}) => {

  const adminRoutes = ['/dashboard', '/trips', '/trips/add', 'trips/edit/:id','/bookings','/blog'];
  const clientRoutes = ['/client/dashboard','/client/trips'];

  const pathname = useLocation().pathname;

  if(role === 'Admin' && !adminRoutes.some(route => pathname.startsWith(route))){
 return <div>Unauthorized Access</div>
  }

    if(role === 'User' && !clientRoutes.some(route => pathname.startsWith(route))){
 return <div>Unauthorized Access</div>
  }
  return (
   <>
     <AppNavbar/>
     <Outlet/>
   </>
  )
}

export default AppLayout