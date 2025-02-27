import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
        <div className='bg-cover bg-center bg-[url(https://media.istockphoto.com/id/2166988953/photo/illuminated-stoplight-against-sky-at-night.webp?a=1&b=1&s=612x612&w=0&k=20&c=ifzwLraQ1ogeYwvpElOsDjq0T35IhkT7TTHGqUNdwT8=)] h-screen pt-8  flex justify-between flex-col w-full '>
            <img className='w-16 ml-6'  src='https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg'></img>
            <div className='bg-white py-4 pb-6 px-4 '>
                <h2 className='text-3xl font bold'>Get started With Uber</h2>
                <Link to='/login'className=' flex items justify-center w-full bg-black text-white py-3  rounded mt-5'>Continue</Link>
            </div>
        </div>
    </div>

  )
}

export default Start