import React from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
const NavBar2 = ({navigation,SetNavigation}) => {
  return (
    <div className='navBar2' >
        <div className="header">
          <img src={logo}  />
        </div>
        <div className="list" >
          <ul style={{columnGap:"10px",display:"flex"}}>
           <Link to={'/'}><li style={{color:navigation==0?"orangered":"white"}} onClick={()=>SetNavigation(0)}>Home</li></Link>
           <Link to={'/afterSchoolProgram'}><li style={{color:navigation==1?"orangered":"white"}} onClick={()=>SetNavigation(1)}>After School</li></Link>
            <Link to={'/aboutUs'}><li style={{color:navigation==4?"orangered":"white"}} onClick={()=>SetNavigation(4)}>Company</li></Link>
            <Link to={'/contactUs'}><li style={{color:navigation==5?"orangered":"white"} } onClick={()=>SetNavigation(5)}>Contact Us</li></Link>
            <Link to={'/forSchool'}><li style={{color:navigation==2?"orangered":"white"}} onClick={()=>SetNavigation(2)}>For Schools</li></Link>
            <li><a href="https://theexpresssparkacademy.com/" target='_blank' style={{color:"white"}}>Test Series</a></li>
          </ul>
        </div>
    </div>
  )
}

export default NavBar2