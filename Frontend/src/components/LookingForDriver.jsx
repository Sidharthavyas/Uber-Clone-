import React from 'react'

const LookingForDriver = (props) => {
  return (
    <div>
    <h5  onClick={()=>{
    props.setVehicleFound(false)

   }} className='p-1   text-center w-full  w-[90%] absolute top-0  '> <i className="ri-arrow-down-wide-line text-gray-400 text-2xl"></i></h5>
  <h3 className='text-2xl font-semibold mb-4'>Looking for a Driver</h3>
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
 
  </div>
  )
}

export default LookingForDriver