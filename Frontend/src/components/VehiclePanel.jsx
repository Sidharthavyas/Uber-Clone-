import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
<h5  onClick={()=>{
      props.setVehiclePanelOpen(false)
     }} className='p-1   text-center w-full  w-[90%] absolute top-0  '> <i className="ri-arrow-down-wide-line text-gray-400 text-2xl"></i></h5>
    <h3 className='text-2xl font-semibold mb4'>Choose a Vehicle</h3>

    <div onClick={()=>{
      props.setConfirmRidePanel(true)
    }} className='flex w-full  border-2 border-gray-400 active:border-black mb-2 rounded-2xl items-center p-2  justify-between '>
      <img className='h-16 ' src='https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png'></img>
      <div className=' w-1/2'>
        <h4 className='font-medium text-lg'>UberGo<span><i className="ri-user-fill"></i>4</span></h4>
        <h5 className='font-medium text-sm '>2 mins away</h5>
        <p className='font-normal text-xs text-gray-500'> Affordable,compact rides</p>
      </div>
      <h2 className='text-l font-semibold'> ₹196.98</h2>
    </div>
    <div  onClick={()=>{
      props.setConfirmRidePanel(true)
    }}  className='flex w-full  border-2 border-gray-400 active:border-black  mb-2 rounded-2xl items-center p-2  justify-between '>
      <img className='h-18 ' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_715,w_1072/v1649231046/assets/84/ad96b0-f8d6-41a7-babf-816237fe530d/original/Uber_Moto_Orange_696x464_pixels_Tablet.png'></img>
      <div className=' w-1/2'>
        <h4 className='font-medium text-lg'>Moto<span><i className="ri-user-fill"></i>1</span></h4>
        <h5 className='font-medium text-sm'>3 mins away</h5>
        <p className='font-normal text-xs text-gray-500'> Affordable,motorcycle rides</p>
      </div>
      <h2 className='text-l font-semibold'> ₹70.89</h2>
    </div>

    <div  onClick={()=>{
      props.setConfirmRidePanel(true)
    }} className='flex w-full  border-2 border-gray-400 active:border-black mb-2 rounded-2xl items-center p-2  justify-between '>
      <img className='h-18 ' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_384,w_576/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png'></img>
      <div className=' w-1/2'>
        <h4 className='font-medium text-lg'>UberAuto<span><i className="ri-user-fill"></i>3</span></h4>
        <h5 className='font-medium text-sm'>4 mins away</h5>
        <p className='font-normal text-xs text-gray-500'> Affordable,auto rides</p>
      </div>
      <h2 className='text-l font-semibold'> ₹110.69</h2>
    </div></div>
  )
}

export default VehiclePanel