import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CaptainContext } from '../context/CaptainContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CaptainSignup = () => {
  const navigate = useNavigate()
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [vehicleColor, setVehicleColor] = useState('')
  const [vehiclePlate, setVehiclePlate] = useState('')
  const [vehicleCapacity, setVehicleCapacity] = useState('')
  const [vehicleType, setVehicleType] = useState('')
  const [error, setError] = useState('')
  
  const { captain, setCaptain } = React.useContext(CaptainContext)
  
  const submitHandler = async(e) => {
    e.preventDefault()
    setError('') // Clear any previous errors
    
    const captainData = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    };
    
    console.log("Sending data:", captainData);
    
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);
      
      if(response.status === 201) {
        const data = response.data;
        localStorage.setItem('token', data.token);
        navigate('/captain-home');
      }
      
      // Clear form fields on success
      setFirstname('');
      setLastname('');
      setEmail('');
      setPassword('');
      setVehicleColor('');
      setVehiclePlate('');
      setVehicleCapacity('');
      setVehicleType('');
      
    } catch (error) {
      console.error("Registration error:", error);
      
      // Display detailed error information
      if (error.response) {
        // Server responded with an error
        console.log("Error data:", error.response.data);
        console.log("Error status:", error.response.status);
        
        if (error.response.data.errors) {
          // Format validation errors for display
          const errorMessages = error.response.data.errors.map(err => err.msg).join(', ');
          setError(errorMessages);
        } else {
          setError(error.response.data.message || "Registration failed");
        }
      } else if (error.request) {
        // Request was made but no response received
        setError("No response from server. Please try again later.");
      } else {
        // Something else happened while setting up the request
        setError("Error: " + error.message);
      }
    }
  }
  
  return (
    <div className='p-7 flex h-screen flex-col justify-between'>
      <div>
        <img
          className='w-16 mb-10'
          src='https://www.svgrepo.com/show/505031/uber-driver.svg'
          alt='Uber Logo'
        />
        
        {/* Display error message if exists */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        
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
          
          <h3 className='text-base font-medium mb-2'>Vehicle Information</h3>
          <div className='flex gap-4 mb-6'>
            <input
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-base placeholder:text-sm'
              required
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              type='text'
              placeholder='Vehicle Color'
            />
            <input
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-base placeholder:text-sm'
              required
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              type='text'
              placeholder='License Plate'
            />
          </div>
          
          <div className='flex gap-4 mb-6'>
            <input
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-base placeholder:text-sm'
              required
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              type='text'
              placeholder='Vehicle Type'
            />
            <input
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-base placeholder:text-sm'
              required
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              type='text'
              placeholder='Passenger Capacity'
            />
          </div>
          
          <button
            className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg'
            type='submit'
          >
            Sign Up
          </button>
          
          <p className='text-center'>
            Driving Already?
            <Link to='/captain-login' className='mb-3 text-blue-500'> Login Here</Link>
          </p>
        </form>
      </div>
      <div>
        <p className='text-[10px] leading-tight'>
        By proceeding, you agree to <span className='underline'>Uber's Terms</span> of Service and Privacy Policy. Your information may be processed in accordance with <span className='underline'>Google's Privacy Policy</span> for certain services.
        </p>
      </div>
    </div>
  )
}

export default CaptainSignup