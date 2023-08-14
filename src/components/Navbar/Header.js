import React from 'react'
import "../css/login.css"
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./navbar.js";
export default function Header() {
      return (
        <>
           <Nav>
            <NavLogo className="logo-holder logo-4">
            <h3>Food</h3>
          <p>basket</p>
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink 
                  to="/home"
                  activeStyle={{ color:'black' }}
                >
                    Home
                </NavLink>
                <NavLink 
                  to="/about"
                  activeStyle={{ color: 'black' }}
                >
                    About
                </NavLink>
                <NavLink 
                  to="/contact" 
                  activeStyle={{ color: 'black' }}
                >
                    Contact
                </NavLink>
                <NavBtn>
                    <NavBtnLink to="/login">Log In</NavBtnLink>
                </NavBtn>
            </NavMenu>
           </Nav> 
        </>
  )
}
