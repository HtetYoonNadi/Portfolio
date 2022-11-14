import React, { useState, useEffect } from "react";

//import components
import Logo from "../assets/img/white logo.png";
import Nav from "./Nav";

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${bg ? "bg-tertiary h-20" : "h-24"}
       flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300 `}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* Logo */}
        <a href="#">
          <img className="w-[145px] h-[50px]" src={Logo} alt="" />
        </a>
        {/* Nav */}
        <div className="hidden lg:block">
          <Nav />
        </div>
      </div>     
    </header>
  );
  
};


export default Header;
