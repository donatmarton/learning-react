import React from "react"
import photo from "../images/johnny.jpg"
import emailIcon from "../icons/mail.png"
import linkedinIcon from "../icons/linkedin.png"

export default function Info() {
  return (
    <header>
      <img className="photo" src={photo} alt=""/>
      <h1 className="name">Márton Donát Nagy</h1>
      <h2 className="job-title">Frontend Developer</h2>
      <p className="website">donatmarton.com</p>
      <div className="buttons">
        <button class="email-button">
          <img src={emailIcon} alt=""/>Email
        </button>
        <button class="linkedin-button">
          <img src={linkedinIcon} alt=""/>LinkedIn
        </button>
      </div>
    </header>
  )
}