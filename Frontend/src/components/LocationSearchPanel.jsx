import React from 'react'
import 'remixicon/fonts/remixicon.css'



const LocationSearchPanel = ({ suggestions, setVehiclePanelOpen, setPanelOpen, setPickup, setDestination, activeField }) => {

    const handleSuggestionClick = (suggestion) => {
        if (activeField === 'pickup') {
            setPickup(suggestion)
        } else if (activeField === 'destination') {
            setDestination(suggestion)
        }
        // Remove this line to prevent opening the vehicle panel immediately
        // setVehiclePanelOpen(true)
        // setPanelOpen(false)
    }

    return (
        <div>
            {/* Display fetched suggestions */}
            {
                suggestions && suggestions.map((elem, idx) => (
                    <div key={idx} onClick={() => handleSuggestionClick(elem.description)} className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
                        <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill"></i></h2>
                        <h4 className='font-medium'>{elem.description}</h4>
                    </div>
                ))
            }
        </div>
    )
}

export default LocationSearchPanel




//const LocationSearchPanel = (props) => {
   // const locations = [
//         '01/7b lourds Co-Oh,Amol-Nagar,Station Road ,Naigaon East',
//         'TCET, Gate No 5, Thakur Educational Campus, Thakur Rd, Thakur Village',
//         'ISKCON®, Hare Krishna Land, Sri Mukteshwar Devalaya Rd, Marg',
//         'Gupha Tekdi, Jogeshwari East, Mumbai, Maharashtra 400060',
//         'Apollo Bandar, Colaba, Mumbai, Maharashtra 400001'



//     ]


//   return (

    
    
//     <div>
//         {/* */}

//         <div>
//             {locations.map(function(elem,idx){
//                 return  <div key={idx}  onClick={()=>{
//                     props.setVehiclePanelOpen(true)
//                     props.setPanelOpen(false)
//                 }} className='flex  gap-2  border-gray-100 active:border-black p-2 border-2  my-3 items-center rounded-xl justify-start'>
//                 <h2 className='bg-[#eee] h-10  w-14 flex items-center justify-center rounded-full'><i className="ri-map-pin-user-line text-2xl "></i>
//                 </h2>
//                 <h4 className='font-medium' >{elem}</h4>
//             </div>
//             })
//             }
//         </div>
       
       
        
//     </div>
//   )
// }

// export default LocationSearchPanel