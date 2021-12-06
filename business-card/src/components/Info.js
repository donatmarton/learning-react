import React from "react"
import photo from "../images/johnny.jpg"

export default function Info() {
  return (
    <div>
      <img className="photo" src={photo} alt=""/>
      <h1 className="name">Márton Donát Nagy</h1>
      <h2 className="job-title">Frontend Developer</h2>
      <p className="website">donatmarton.com</p>
      <div className="buttons">
        <button class="email-button">Email</button>
        <button class="linkedin-button">LinkedIn</button>
      </div>
    </div>
  )
}