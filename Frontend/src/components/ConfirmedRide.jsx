import React from 'react'

const ConfirmedRide = (props) => {
  return (
    <div>
      <h5  onClick={()=>{
      props.setVehiclePanelOpen(false)
     }} className='p-1   text-center w-full  w-[93%] absolute top-0  '> <i className="ri-arrow-down-wide-line text-gray-400 text-2xl"></i></h5>
    <h3 className='text-2xl font-semibold m-b4'>Confirm your Ride</h3>
   <div className='flex justify-between gap-2 flex-col items-center'>
   <img className='h-25' src='https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png'/>
   </div>
   <div className='w-full mt-5'>
<div className='flex items-center  gap-5 border-b-2 p-3 '>
<i className="ri-map-pin-fill text-xl"></i>
<div>
<h3  className='text-lg font-medium ' >01/7b lourds Co-Oh </h3>
<p className='text-base text-gray-600 text-sm -mt-1 '>,Amol-Nagar,Station Road, Naigaon East</p>
</div>
</div>
<div className=' flex items-center  gap-5 border-b-2 p-3 '>
<i className="ri-map-pin-5-fill text-xl"></i>
<div >
<h3  className='text-lg font-medium ' >01/7b lourds Co-Oh </h3>
<p className='text-base text-gray-600 text-sm -mt-1 '>,Amol-Nagar,Station Road, Naigaon East</p>
</div>
</div>
<div className='flex items-center  gap-5  p-3  mb-2'> 
<i className="ri-money-rupee-circle-fill"></i>
<div>
<h3  className='text-lg font-medium ' > ₹193.89</h3>
<p className='text-base text-gray-600 text-sm -mt-1 '>Cash Cash</p>
</div>
</div>
   </div>
   <div>
    <button  onClick={()=>{
      props.setVehicleFound(true)
      props.setConfirmRidePanel(false)
    }} className='w-full bg-green-600   text-white font-semibold p-1 rounded-lg mt-5'>Confirm</button>
   </div>
    </div>
  )
}

export default ConfirmedRide