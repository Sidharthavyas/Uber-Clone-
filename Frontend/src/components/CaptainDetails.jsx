import React from 'react'

const CaptainDetails = () => {
  return (
    <div>      <div className='h-2/5 p-4'>
    <div className='flex items-center justify-between'>
      <div className='flex items-center justify-start gap-3'>
        <img className='h-12 w-12 rounded-full object-cover' src='https://blog.uber-cdn.com/cdn-cgi/image/width=768,quality=80,onerror=redirect,format=auto/wp-content/uploads/2017/10/DSC_1946-1.jpg' alt="Driver profile" />
        <h4 className='text-lg font-medium'>Amit Rai</h4>
      </div>
      <div >
        <h4 className='text-xl font-semibold'>₹193</h4>
        <p className='text-sm  text-gray-600'>Earned</p>
      </div>
    </div>
    
    <div className='flex justify-center p-3 items-start  gap-8 bg-gray-300 rounded-xl mt-8'>
      <div className='text-center'>
        <i className="text-3xl mb-2 font-thin ri-time-line"></i>
        <h5 className='text-lg font-medium'>15.4</h5>
        <p className='text-sm text-gray-600'>Hours Online</p>
      </div>
      <div className='text-center'>
        <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
        <h5 className='text-lg font-medium'>10.2</h5>
        <p className='text-sm text-gray-600'>Trips</p>
      </div>
      <div className='text-center'>
        <i className="text-3xl mb-2 font-thin ri-file-check-line"></i>
        <h5 className='text-lg font-medium'>4.4</h5>
        <p className='text-sm text-gray-600'>Rating</p>
      </div>
    </div>
  </div></div>
  )
}

export default CaptainDetails