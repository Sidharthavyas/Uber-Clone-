import React ,{useState,useRef}from 'react'
import {useGSAP} from '@gsap/react' 
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmedRide from '../components/ConfirmedRide'

const Home = () => {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const vehiclePanelRef = useRef(null)
  const confirmRidePanelRef = useRef(null)
  const panelClosed = useRef(null)
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)


  const submitHandler=(e)=>{
    e.preventDefault()
    console.log('submit')
  }
  useGSAP(()=>{
    if(panelOpen){
      gsap.to(panelRef.current,{
        height:'70%',
        padding:4
      })
      gsap.to(panelClosed.current,{
        opacity:1,
        
      })
    }else{
      gsap.to(panelRef.current,{
        height:'0%',
        padding:4
      })
      gsap.to(panelClosed.current,{
        opacity:0,

      })
    }
  },[panelOpen])

useGSAP(function(){
  if(vehiclePanelOpen){
    gsap.to(vehiclePanelRef.current,{
      transform: 'translateY(0)'
      
    })
  }else{
    gsap.to(vehiclePanelRef.current,{
      transform: 'translateY(100%)'

    })
  }

},[vehiclePanelOpen])

useGSAP(function(){
  if(confirmRidePanel){
    gsap.to(confirmRidePanelRef.current,{
      transform: 'translateY(0%)'
      
    })
  }else{
    gsap.to(confirmRidePanelRef.current,{
      transform: 'translateY(100%)'

    })
  }

},[confirmRidePanel])

  return (
    <div className='h-screen  relative overflow-hidden' >
      <img className='w-16 absolute left-5 top-5' src='https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg'/>
      <div className='h-screen w-screen'>
        <img className='h-full w-full  object-cover'  src='https://miro.medium.com/v2/resize:fit:720/format:webp/0*gwMx05pqII5hbfmX.gif'/>
      </div>
      <div className=' flex flex-col  justify-end  h-screen absolute top-0  w-full'>
      
        <div className='h-[30%] p-6 bg-white relative '>
        <h5  ref={panelClosed} onClick={()=>{
          setPanelOpen(false)
        }}
        
        className='absolute opacity-0 top-5 right-6 text-3xl'>
        <i className="ri-arrow-down-wide-line"></i>
        </h5>
        <h4 className='text-l font-semibold  '>Find a Trip</h4>
          
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}>
          <div className="line absolute h-16 w-1 top-[50%] -translate-y-1/2  left-10 bg-gray-500 rounded-full"></div>
          <input 
          onClick={()=>setPanelOpen(true)}
          value={pickup}
          onChange={(e)=>setPickup(e.target.value)} 
          className='bg-[#eee] px-10 py-1 text-base rounded-lg w-full mt-3 ' 
          type='text' placeholder='Add a Pickup Location'></input>
          <input
          onClick={()=>setPanelOpen(true)}
          value={destination}
          onChange={(e)=>setDestination(e.target.value)}
           className='bg-[#eee] px-10 py-2 text-base rounded-lg w-full mt-2' 
           type='text' placeholder='Enter Destination'></input>
        </form>
        </div>
        <div  ref={panelRef} className='h-0 bg-white  '>
          <LocationSearchPanel 
           setPanelOpen={setPanelOpen}
          setVehiclePanelOpen={setVehiclePanelOpen}/>
        </div>
      </div>
      <div ref={vehiclePanelRef} className='fixed z-10  w-full  translate-y-full bg-white px-3 py-10 pt-12 bottom-0'>
<VehiclePanel setConfirmRidePanel={setConfirmRidePanel}
 setVehiclePanelOpen={setVehiclePanelOpen}/>
      </div>
      <div ref={confirmRidePanelRef} className='fixed z-10  w-full  translate-y-full bg-white px-3 py-6 pt-12 bottom-0'>
<ConfirmedRide setVehiclePanelOpen={setVehiclePanelOpen} 
/>
      </div>
    </div>
  )
}

export default Home  