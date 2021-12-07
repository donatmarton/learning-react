import React from "react";
import trollFace from "../images/troll_face.png"

export default function Header() {
  return (
    <header className="header">
      <img className="header--image" src={trollFace} alt="" />
      <h1 className="header--title">Meme Generator</h1>
      <h2 className="header--subtitle">React Course - Project 3</h2>
    </header>
  )
}