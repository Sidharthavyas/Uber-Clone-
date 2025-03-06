import { useGSAP } from '@gsap/react'
import React from 'react'
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import gsap from 'gsap'
import FinishRide from '../components/FinishRide'
import { useRef, useState } from 'react'

const CaptainRiding = () => {
    const [finishRidePanel, setFinishRidePanel] = useState(false)
    const finishRidePanelRef = useRef(null)

    useGSAP(function(){
        if(finishRidePanel){
          gsap.to(finishRidePanelRef.current,{
            transform: 'translateY(0%)'
            
          })
        }else{
          gsap.to(finishRidePanelRef.current,{
            transform: 'translateY(100%)'
      
          })
        }
      
      },[finishRidePanel])
  return (
    <div className='h-screen relative'>


    <div className='fixed p-4 top-0 flex w-screen justify-between'>
      <img className='w-16' src='https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg' alt="Uber logo" />
      <Link to='/home' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
        <i className="ri-logout-box-line text-lg font-medium"></i>
      </Link>
    </div>
    
    <div className='h-4/5'>
      <img className='h-full w-full object-cover' src='https://miro.medium.com/v2/resize:fit:720/format:webp/0*gwMx05pqII5hbfmX.gif' alt="Ride animation" />
      

  </div>
 
       <div className='h-1/5 p-6  bg-yellow-400  relative flex items-center justify-between '
        onClick={()=>{
            setFinishRidePanel(true)
           }}>
      
       <h5  onClick={()=>{

}} className='p-2   text-center w-[90%]   absolute top-0  '>
<i className="ri-arrow-up-wide-line text-black text-2xl"></i></h5>
    <h4 className='text-xl font-semibold'>4 KM Away</h4>
    <button className='bg-green-600 text-white font-semibold text-lg p-3 px-8 rounded-lg'>Complete  </button>
       </div>
       <div  ref={finishRidePanelRef} className='fixed z-10  translate-y-full w-full   bg-white px-3 py-10 pt-12 bottom-0'>
     <FinishRide setFinishRidePanel={setFinishRidePanel} />
      </div>
  </div>
  )
}

export default CaptainRiding


