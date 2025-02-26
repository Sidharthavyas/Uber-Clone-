import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {
  const[firstname,setFirstname]=useState('')
  const[lastname,setLastname]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[captainData,setCaptainData]=useState({})

  const submitHandler = (e)=>{
    e.preventDefault()
    setCaptainData({
      fullname:{
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password
     
    });
   
    
    setFirstname('')
    setLastname('')
    setEmail('')
    setPassword('')
  }
  return (
    <div className='p-7 flex h-screen flex-col justify-between'>
      <div>
        <img
          className='w-16 mb-10'
          src='https://www.svgrepo.com/show/505031/uber-driver.svg'
          alt='Uber Logo'
        />
        <form onSubmit={submitHandler}>
          <h3 className='text-base font-medium mb-2'>What's Your Name</h3>
          <div className='flex gap-4 mb-6'>
            <input
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-base placeholder:text-sm'
              required
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              type='text'
              placeholder='Firstname'
            />
            <input
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-base placeholder:text-sm'
              required
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              type='text'
              placeholder='Lastname'
            />
          </div>

          <h3 className='text-base font-medium mb-2'>What's Your Email</h3>
          <input
            className='bg-[#eeeeee] mb-6 rounded px-4 py-2 w-full text-lg placeholder:text-base'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            placeholder='email@example.com'
          />

          <h3 className='text-base font-medium mb-2'>Enter Password</h3>
          <input
            className='bg-[#eeeeee] mb-6 rounded px-4 py-2 w-full text-lg placeholder:text-base'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            placeholder='Password'
          />

          <button
            className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg'
            type='submit'
          >
            Sign Up
          </button>

          <p className='text-center'>
            Driving  Already?
            <Link to='/captain-login' className='mb-3 text-blue-500'> Login Here</Link>
          </p>
        </form>
      </div>
      <div>
        <p className='text-[10px] leading-tight'>
        By proceeding, you agree to <span className='underline'>Uber’s Terms</span> of Service and Privacy Policy. Your information may be processed in accordance with<span className='underline'>Google’s Privacy Policy</span>  for certain services.
        </p>
      </div>
    </div>
  )
}

export default CaptainSignup