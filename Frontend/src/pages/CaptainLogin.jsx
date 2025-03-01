import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import axios from 'axios'

export const CaptainLogin = () => {
        const[email,setEmail]=useState('')//allows to remeber values between render
        const[password,setPassword]=useState('')
        const[captianData,setCaptainData]=useState({})
    
        
        const submitHandler = (e)=>{
            e.preventDefault()
            setCaptainData({
                email:email,
                password:password
            })
         
            
            setEmail('')
            setPassword('')
            
        
    
        }
  return (
    <div className='p-7 flex h-screen  flex-col justify-between'>
    <div>
    <img className='w-16 mb-10'  src='https://www.svgrepo.com/show/505031/uber-driver.svg'></img>
    <form onSubmit={(e)=>{
        submitHandler(e)
    }}>
    <h3 className='text-lg font-medium mb-2'> What's Your Email</h3>
    <input   className=' bg-[#eeeeee] mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base ' required 
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    type='email' placeholder='email@example.com'/>
    <h3 className='text-lg font-medium mb-2'>Enter password</h3>
    <input  className=' bg-[#eeeeee] mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base '  required
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
     type="password" placeholder='password'/>
    <button  className=' bg-[#111]  text-white font-semibold mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base ' >Login</button>

    <p className='text-center'>Intersted in Driving?<Link  to='/captain-signup' className='mb-3 text-blue-500'>Register as a Captain</Link></p>
    </form> 
    </div>
    <div>
        <Link to='/user-login' className=' bg-[#10b461]  flex items-center justify-center mb-5 text-white font-semibold mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base '>Sign in as User</Link>
    </div>
    </div>
)
}
  
export default CaptainLogin

