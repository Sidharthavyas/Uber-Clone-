import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useRef } from 'react'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'

const CaptainHome = () => {
const ridePopUpPanelRef = useRef(null)
const confirmRidePopUpPanelRef = useRef(null)
  const [ridePopUpPanel, setRidePopUpPanel] = useState(true)
  const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false)

  useGSAP(function(){
    if(ridePopUpPanel){
      gsap.to(ridePopUpPanelRef.current,{
        transform: 'translateY(0%)'
        
      })
    }else{
      gsap.to(ridePopUpPanelRef.current,{
        transform: 'translateY(100%)'
  
      })
    }
  
  },[ridePopUpPanel])

  useGSAP(function(){
    if(confirmRidePopUpPanel){
      gsap.to(confirmRidePopUpPanelRef.current,{
        transform: 'translateY(0%)'
        
      })
    }else{
      gsap.to(confirmRidePopUpPanelRef.current,{
        transform: 'translateY(100%)'
  
      })
    }
  
  },[confirmRidePopUpPanel])
  return (
    <div className='h-screen'>
      <div className='fixed p-4 top-0 flex w-screen justify-between'>
        <img className='w-16' src='https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg' alt="Uber logo" />
        <Link to='/home' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
          <i className="ri-logout-box-line text-lg font-medium"></i>
        </Link>
      </div>
      
      <div className='h-1/2'>
        <img className='h-full w-full object-cover' src='https://miro.medium.com/v2/resize:fit:720/format:webp/0*gwMx05pqII5hbfmX.gif' alt="Ride animation" />
        <CaptainDetails/>

      </div>
      <div>
      <div  ref={ridePopUpPanelRef} className='fixed z-10  translate-y-full w-full   bg-white px-3 py-10 pt-12 bottom-0'>
        <RidePopUp setRidePopUpPanel={setRidePopUpPanel}
        setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}/>
      </div>
      <div  ref={confirmRidePopUpPanelRef} className='fixed z-10  w-full  translate-y-full h-screen bg-white px-3 py-10 pt-12 bottom-0'>
      <ConfirmRidePopUp setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}
        setRidePopUpPanel={setRidePopUpPanel}/>
      </div>
      </div>

    </div>
  )
}

export default CaptainHome