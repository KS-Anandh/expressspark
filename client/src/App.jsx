import React, { useState,Suspense, lazy} from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import CopyRights from './components/CopyRights.jsx'
import AboutUs from './pages/AboutUs.jsx'
import ForSchool from './pages/ForSchool.jsx'
import NavBar2 from './components/NavBar2.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import EmployeeAttendance from './pages/EmployeeAttendance.jsx'
import EmployeeLogin from './pages/EmployeeLogin.jsx'
const Home = lazy(() => import("./pages/Home.jsx"));
const AfterSchooling = lazy(() => import("./pages/AfterSchooling.jsx"));
const ContactUs = lazy(() => import("./pages/ContactUs.jsx"));

const App = () => {

const [navigation,SetNavigation]=useState(0);
  return (
    <div>
      <BrowserRouter>
      <ScrollToTop />
      <NavBar2 navigation={navigation} SetNavigation={SetNavigation}/>
      <NavBar navigation={navigation} SetNavigation={SetNavigation}/>
      <Routes>
        <Route index path="/" element={<Home/>} />
        <Route path='/afterSchoolProgram' element={<AfterSchooling/>}/>
        <Route path='/contactUs' element={<ContactUs/>}/>
        <Route path='/aboutUs' element={<AboutUs/>}/>
        <Route path='/forSchool' element={<ForSchool/>}/>
        <Route path='/EmployeeAttendance' element={<EmployeeAttendance/>}/>
        <Route path='/EmployeeLogin' element={<EmployeeLogin/>}/>
      </Routes>
      <Footer/>
      <CopyRights/>
      </BrowserRouter>
   
    </div>
  )
}

export default App
