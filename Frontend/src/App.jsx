import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from './pages/Start.jsx'
import Home from './pages/Home.jsx'
import UserLogin from './pages/UserLogin.jsx'
import UserSignup from './pages/UserSignup.jsx'
import CaptainLogin from './pages/CaptainLogin.jsx'
import CaptainSignup from './pages/CaptainSignup.jsx'
import UserLogout from './pages/UserLogout.jsx'
import UserProtectedWrapper from './pages/UserProtectedWrapper.jsx'
import CaptainHome from './pages/CaptainHome.jsx'
import CaptainProtectedWrapper from './pages/CaptainProtectedWrapper.jsx'

const App = () => {
  return (
    
    <div><Routes>
      <Route path='/Start' element={<Start/>}/>
      <Route path='/user-login' element={<UserLogin/>}/>
      <Route path='/user-signup' element={<UserSignup/>}/>
      <Route path='/captain-login' element={<CaptainLogin/>}/>
      <Route path='/captain-signup' element={<CaptainSignup/>}/>
      <Route path='/home' element={<UserProtectedWrapper><Home/></UserProtectedWrapper>}/>
      <Route path='/captain-home' element={<CaptainProtectedWrapper><CaptainHome/></CaptainProtectedWrapper>}/>
      <Route path='/user/logout' element={<UserProtectedWrapper>{<UserLogout/>}</UserProtectedWrapper>}/>


      </Routes>
      </div> 

  )
}

export default App