import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { RiMenu2Line } from "react-icons/ri";
import { IoCloseCircle } from "react-icons/io5";

const NavBar2 = ({navigation,SetNavigation}) => {

  const [dropDown,setDropDown]=useState(false);
  return (
    <div className='navBar2' >
        <div className="header">
          <img src={logo}  />
          <p>Center Of Robotics </p>
        </div>
        <div className='menu'>
          <p>Menu</p>
          <span onClick={()=>{
            setDropDown((prev)=>!prev)
          }}> {dropDown?<IoCloseCircle color='white' size={30}/>:<RiMenu2Line color='white' size={25}/>} </span>
        </div>
        <div className='drop-down-menu' style={{display:dropDown?"flex":"none"}}>
           <ul >
           <Link to={'/'} onClick={()=>setDropDown(false)}><li style={{color:navigation==0?"orangered":"white"}} onClick={()=>SetNavigation(0)}>Home</li></Link>
           <Link to={'/afterSchoolProgram'} onClick={()=>setDropDown(false)}><li style={{color:navigation==1?"orangered":"white"}} onClick={()=>SetNavigation(1)}>After School</li></Link>
            <Link to={'/aboutUs'} onClick={()=>setDropDown(false)}><li  style={{color:navigation==4?"orangered":"white"}} onClick={()=>SetNavigation(4)}>Company</li></Link>
            <Link to={'/contactUs'} onClick={()=>setDropDown(false)}><li style={{color:navigation==5?"orangered":"white"} } onClick={()=>SetNavigation(5)}>Contact Us</li></Link>
            <Link to={'/forSchool'} onClick={()=>setDropDown(false)}><li style={{color:navigation==2?"orangered":"white"}} onClick={()=>SetNavigation(2)}>For Schools</li></Link>
            <li onClick={()=>setDropDown(false)}><a href="https://theexpresssparkacademy.com/" target='_blank' style={{color:"white"}}>Test Series</a></li>
          </ul>
        </div>

    </div>
  )
}

export default NavBar2