import React from "react"
import weblogo from "../Assets/weblogo.jpg"

const Navbar = () => {
  
  return (
  <div className="py-[0.4rem] tx-[0.3rem] grid grid-cols-6 justify-center content-center">
    
    <img src={weblogo} alt="logo-img" className="w-[50px] h-[50px] rounded-[50%] col-span-1"/>
    
  <ul className="grid grid-cols-5 col-span-5 text-center justify-center items-center">
    <li><a href="#home">Home</a></li>
    <li><a href="#aboutme">About<span className="text-[#FF0054]">Me</span></a></li>
    <li><a href="#mywork">MyWork</a></li>
    <li><a href="#myskills">MySkills</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  </div>
    )
} 

export default Navbar;
