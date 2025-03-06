import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
   <div className='h-screen'>
    <Link to='/home' className='fixed h-10 w-10 bg-white flex right-2 top-2 items-center justify-center rounded-full'>
    <i className="ri-home-4-line text-lg font-medium "></i>
    </Link>
     <div className='h-1/2'>
          <img className='h-full w-full  object-cover'  src='https://miro.medium.com/v2/resize:fit:720/format:webp/0*gwMx05pqII5hbfmX.gif'/>
    </div>
    <div className='h-1/2'>
    <div className='flex items-center justify-between'>
<img className='h-12 p-3' src='https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png'/>
<div className='  text-right  '>
  
  <h2 className='text-lg font-medium  p-2  '>Sidhartha</h2>
    <h4 className='text-xl font-semibold -mt-1 -mb-1'>MH04 AB 2024</h4>
    <p className='text-sm text-gray-600 '>Maruti Suzuki Alto</p>
</div>
</div>
 <div className='flex justify-between  flex-col items-center'>

 </div>
 <div className='w-full mt-5'>

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
<button className='w-full bg-green-600   text-white font-semibold p-1 rounded-lg mt-5'>Make a Payment</button>

    </div>
   </div>
  )
}

export default Riding