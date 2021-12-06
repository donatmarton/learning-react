import React from "react";
import logo from "../logo.png"

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img className="logo-image" src={logo} alt=""/>
        <h3 className="logo-text" >ReactFacts</h3>
      </div>
      <h2 className="nav-title">React Course - Project 1</h2>
    </nav>
  )
}
