import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './SignUp'
import SignIn from './SignIn'
import Profile from './Profile'


function Router() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/Profile" element={<Profile />} />

          </Routes>
    </BrowserRouter>
  )
}

export default Router
