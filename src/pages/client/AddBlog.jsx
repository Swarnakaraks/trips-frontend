import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card'
import TripForm from '../../components/Common/TripForm'
import { LayersPlus, Plane, X, } from 'lucide-react'
import { Button } from '../../components/ui/button'

const AddBlog = () => {
  return (
 <Card className="w-2/5 mx-auto my-12 overflow-hidden rounded-3xl border-0 shadow-2xl p-0">

  {/* HEADER */}
  <CardHeader className="relative overflow-hidden bg-linear-to-r from-blue-600 to-blue-700 px-6 py-6 text-white">

    <div className="relative z-10 space-y-2">
      <CardTitle className=" flex justify-between text-2xl font-bold tracking-tight">
       <div className='flex gap-2 text-3xl'>
         <LayersPlus className="w-12 h-12"/>Create New Blog
        </div>
        <div>
        <Button className={"bg-white p-0 active:scale-90"}><a href="/trips" className='p-2'><X className='text-black/90'/></a></Button>
      </div>
      </CardTitle>

      <CardDescription className="text-blue-100 leading-6">
      Create and publish travel packages with pricing, schedule, and availability in just a few steps.
      
      </CardDescription>
    </div>

  </CardHeader>

  <CardContent className="bg-white p-6">
    <BlogForm />
  </CardContent>

</Card>
  )
}

export default AddBlog