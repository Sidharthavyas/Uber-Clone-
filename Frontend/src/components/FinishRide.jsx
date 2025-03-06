import React from 'react'
import { Link } from 'react-router-dom'

const FinishRide = (props) => {
  return (
    <div> 
    <h5  onClick={()=>{
     props.setFinishRidePanel(false)
        }} className='p-1   text-center w-full  w-[93%] absolute top-0  '>
       <i className="ri-arrow-down-wide-line text-gray-400 text-2xl"></i></h5>
   
       <h3 className='text-3xl font-semibold mb-5'>Finish This Ride </h3>
       <div className='flex items-center justify-between p-4  border-2  bg-yellow-400 rounded-lg mt-4 ' >
           <div className='flex items-center gap-3'>
           <img  className='h-12 w-12 object-cover  rounded-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRN87dktrdzrT5LNXHM5dMH7eQlmhh9jmVGA&s'/>
           <h2 className='text-lg font-medium'>Sidhartha Vyas</h2>      
           </div>
           <h5 className='font-semibold text-lg '>2.2 Km</h5>
       </div>
      <div className='flex justify-between gap-2 flex-col items-center'>
      
      </div>
      <div className='w-full mt-5'>
   <div className='flex items-center  gap-5 border-b-2 p-3 '>
   <i className="ri-map-pin-fill text-xl"></i>
   <div>
   <h3  className='text-lg font-medium ' >01/7b lourds Co-Oh </h3>
   <p className='text-base text-gray-600 text-sm -mt-1 '>Amol-Nagar,Station Road, Naigaon East</p>
   </div>
   </div>
   <div className=' flex items-center  gap-5 border-b-2 p-3 '>
   <i className="ri-map-pin-5-fill text-xl"></i>
   <div >
   <h3  className='text-lg font-medium ' >01/7b lourds Co-Oh </h3>
   <p className='text-base text-gray-600 text-sm -mt-1 '>Amol-Nagar,Station Road, Naigaon East</p>
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
     
      <div className='mt-6 w-full'>
     

       <Link to='/captain-home' onClick={()=>{
    
   }} className='w-full bg-green-600   flex justify-center  text-white font-semibold p-3 rounded-lg mt-5'>Finish</Link>
    <p className=' mt-10 text-xs text-center  '>Click on Finish Ride , if you have Completed the Payment!!</p>
      </div>
    </div>
  )
}

export default FinishRide



// google maps :AIzaSyDTV7r9ExH7xD1j5G4dcGUTMQxKkgAdEVc