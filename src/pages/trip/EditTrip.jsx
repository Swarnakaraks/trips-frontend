
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import useApi from '@/hooks/useApi'
import { Edit, X } from 'lucide-react'
import React from 'react'
import { useParams } from 'react-router-dom'
import { Button } from '../../components/ui/button'
import TripForm from '../../components/Common/TripForm'

const EditTrip = () => {

    const tripId = useParams().id;
    console.log(tripId)

    const { data, error, loading } = useApi(`/trips/${tripId}`);

    if(error){
        console.error(error);
    }
   if (loading) {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
    </div>
  )
}
    const newData = {
        ...data,
        startDate: data.startDate.split('T')[0],
        endDate: data.endDate.split('T')[0],
    }
  return (
   <Card className="w-2/5 mx-auto my-12 overflow-hidden rounded-3xl border-0 shadow-2xl transition-all hover:shadow-xl p-0">

  {/* HEADER */}
  <CardHeader className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-6 text-white">

    <div className="relative z-10 space-y-2">
      <CardTitle className="flex justify-between text-2xl font-bold tracking-tight">
         <div className='flex gap-2 text-3xl'>
         <Edit className='w-10 h-10'/>Edit Trip
         </div>
        <div>
        <Button className={"bg-white p-0 active:scale-90"}><a href="/trips" className='p-2'><X className='text-black/90'/></a></Button>
      </div>
      </CardTitle>

      <CardDescription className="text-blue-100 leading-6">
        Update your travel package details — adjust pricing, schedule, availability, and destination info anytime.
      </CardDescription>
    </div>

  </CardHeader>

  {/* CONTENT */}
  <CardContent className="bg-white p-6">
    <TripForm tripData={newData} />
  </CardContent>

</Card>
  )
}

export default EditTrip