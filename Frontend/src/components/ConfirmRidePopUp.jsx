import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
const ConfirmRidePopUp = (props) => {


  const [otp, setOtp] = useState('')
  const submitHandler=(e)=>{
    e.preventDefault()
  
  }
  
  return (
    <div> 
       <h5  onClick={()=>{
        props.setRidePopUpPanel(false)
           }} className='p-1   text-center w-full  w-[93%] absolute top-0  '>
          <i className="ri-arrow-down-wide-line text-gray-400 text-2xl"></i></h5>
      
          <h3 className='text-3xl font-semibold mb-5'>Confirm This Ride to Start</h3>
          <div className='flex items-center justify-between p-3  bg-yellow-300 rounded-lg mt-4 ' >
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
          <form onSubmit={(e)=>{
            submitHandler(e)
          }}>
            <input value={otp} onChange={(e)=>{
              setOtp(e.target.value)
            }} 
            className='bg-[#eeee] px-6 py-4 text-lg font-mono rounded-lg w-full mt-2' type='text' placeholder='Enter OTP'></input>
          <Link to='/captain-riding' onClick={()=>{
       
      }} className='w-full bg-green-600  text-lg  flex justify-center  text-white font-semibold p-3 rounded-lg mt-5'>Confirm</Link>
      <button  onClick={()=>{
        props.setConfirmRidePopUpPanel(false)
        props.setRidePopUpPanel(false)}} className='w-full bg-red-500  text-lg text-white font-semibold p-3 rounded-lg mt-2'>Cancel</button>
          </form>
         </div>
       </div>
  )
}

export default ConfirmRidePopUp;
