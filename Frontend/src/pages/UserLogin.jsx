import React, { useState,useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UserLogin = () => {
    const[email,setEmail]=useState('')//allows to remeber values between render
    const[password,setPassword]=useState('')
  

    const{user,setUser}=useContext(UserContext)
    const navigate=useNavigate()

    
    const submitHandler = async(e)=>{
        e.preventDefault()
    const userData=({
        email:email,
        password:password
    })

    const response =await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,userData)

    if(response.status===200){
        const data =response.data
        setUser(data.user)
        localStorage.setItem('token',data.token)
        navigate('/home')
    }
        
        setEmail('')
        setPassword('')
        
    

    }

  return (
    <div className='p-7 flex h-screen  flex-col justify-between'>
        <div>
        <img className='w-16 mb-10'  src='https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg'></img>
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

        <p className='text-center'>New Here?<Link  to='/user-signup' className='mb-3 text-blue-500'>Create new Account</Link></p>
        </form> 
        </div>
        <div>
            <Link to='/captain-login' className=' bg-[#10b461]  flex items-center justify-center mb-5 text-white font-semibold mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base '>Sign in as captain</Link>
        </div>
        </div>
  )
}

export default UserLogin