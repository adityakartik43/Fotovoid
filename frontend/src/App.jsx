import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Dashboard from './Screens/Dashboard'
import Contact from './Screens/Contact'
import About from './Screens/About'
import Homepage from './Screens/Homepage'
import APIs from './Screens/APIs'
import { Routes, Route } from 'react-router-dom'
import Login from './Screens/Login'
import Signup from './Screens/Signup'
import autoLogout from './utils/autoLogout'
import AdminDashboard from './Screens/AdminDashboard'


import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  autoLogout();

  return (
    <>
    <Routes>
      <Route path='/admin' element={<AdminDashboard />} />
    </Routes>
    <Navbar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/apis" element={<APIs />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    
    </Routes>

    
    <Footer />

    <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />

    </>
  )
}

export default App
