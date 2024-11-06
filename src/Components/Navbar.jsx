import React from "react"
import weblogo from "../Assets/weblogo.jpg"

const Navbar = () => {
  return (
  <div className="py-[0.4rem] tx-[0.3rem] grid grid-cols-6 border-5 border-solid border-red-700">
    
    <img src={weblogo} alt="logo-img" className="w-[50px] h-[50px] rounded-[50%] col-span-1 border-3 border-[green] border-solid"/>
    
  <ul className="grid grid-cols-5 col-span-5 border-3 border-[red] border-solid">
    <li><a href="#home">Home</a></li>
    <li><a href="#aboutme">AboutMe</a></li>
    <li><a href="#mywork">MyWork</a></li>
    <li><a href="#myskills">MySkills</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  </div>
    )
} 

export default Navbar;
