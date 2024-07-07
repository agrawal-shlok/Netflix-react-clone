import React, { useEffect, useRef } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import search from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'


const Navbar = () => {

  const navref = useRef();

  useEffect(() => {
    window.addEventListener('scroll', () =>{
      if(window.scrollY >=80){
        navref.current.classList.add('nav-dark')
      }else{
        navref.current.classList.remove('nav-dark')
        
      }
    })
  },[])

  return (
    <div className='navbar' ref={navref}>
        <div className="navbar-left">
            <img src={logo} alt="" />
            <ul>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
                <li>Browse By Languages</li>
            </ul>
        </div>



        <div className="navbar-right">
            <img src={search} alt="" className='icons'/>
            <p>Children</p>
            <img src={bell_icon} alt="" className='icons'/>
            <div className="navbar-profile">
            <img src={profile_img} alt="" className='profile'/>
            <img src={caret_icon} alt="" />
            <div className="dropdown">
              <p onClick={() =>{
                logout()
              }}>Signout of Netflix</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar