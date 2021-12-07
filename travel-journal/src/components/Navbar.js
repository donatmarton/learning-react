import React from "react";
import globe from "../images/globe.png"

export default function Navbar() {
  return (
    <nav>
      <img className="globe-image" src={globe} alt="" />
      <h1 className="page-title">my travel journal.</h1>
    </nav>
  )
}