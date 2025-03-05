import React from 'react'
import 'remixicon/fonts/remixicon.css'

const LocationSearchPanel = (props) => {
    const locations = [
        '01/7b lourds Co-Oh,Amol-Nagar,Station Road ,Naigaon East',
        'TCET, Gate No 5, Thakur Educational Campus, Thakur Rd, Thakur Village',
        'ISKCON®, Hare Krishna Land, Sri Mukteshwar Devalaya Rd, Marg',
        'Gupha Tekdi, Jogeshwari East, Mumbai, Maharashtra 400060',
        'Apollo Bandar, Colaba, Mumbai, Maharashtra 400001'



    ]


  return (

    
    
    <div>
        {/* */}

        <div>
            {locations.map(function(elem,idx){
                return  <div key={idx}  onClick={()=>{
                    props.setVehiclePanelOpen(true)
                    props.setPanelOpen(false)
                }} className='flex  gap-2  border-gray-100 active:border-black p-2 border-2  my-3 items-center rounded-xl justify-start'>
                <h2 className='bg-[#eee] h-10  w-14 flex items-center justify-center rounded-full'><i className="ri-map-pin-user-line text-2xl "></i>
                </h2>
                <h4 className='font-medium' >{elem}</h4>
            </div>
            })
            }
        </div>
       
       
        
    </div>
  )
}

export default LocationSearchPanel