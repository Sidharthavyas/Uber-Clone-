import React from 'react'
import { Link } from 'react-router-dom'

const CaptainHome = () => {
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
      </div>
      
      <div className='h-2/5 p-4'>
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
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-600'>Hours Online</p>
          </div>
          <div className='text-center'>
            <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-600'>Trips</p>
          </div>
          <div className='text-center'>
            <i className="text-3xl mb-2 font-thin ri-file-check-line"></i>
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-600'>Rating</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaptainHome