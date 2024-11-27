import React from 'react'
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from '../components/Pages/Home/Home'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Plans from '../components/Pages/Plans/Plans'
import Course from '../components/Pages/Courses/Course'
import AboutUs from '../components/Pages/AboutUs/AboutUs'
import ContactUs from '../components/Pages/ContactUs/ContactUs'
import Support from '../components/Pages/Suppport/Support'

function LayoutRoutes() {
  return (
  <Router>
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/edutech-react-app' element={<Home/>}/>
        <Route path='/services' element={<Plans/>}/>
        <Route path='/courses' element={<Course/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/contact us' element={<ContactUs/>}/>
        <Route path='/Support' element={<Support/>}/>
    </Routes>
    <Footer/>
  </Router>
  )
}

export default LayoutRoutes