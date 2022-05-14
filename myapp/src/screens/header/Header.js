import React from 'react'
import Typed from 'react-typed';
import './header.css'
function Header() {
  return (
    <div className='main-info'>
      <h1>
       SAMUEL NDAMBUKI
      </h1>
      <Typed
       strings={[
        "  ",
         "HELLO!!",
        "I AM A FULLSTACK WEB DEVELOPER",
        "I USE REACT AND JAVASCRIPT FOR MY FRONT END",
        "I USE ASP.NET CORE FOR MY BACKEND",
        "THANK YOU!!",
      "  ",
      "   "
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                    />
      
    </div>
  )
}

export default Header
