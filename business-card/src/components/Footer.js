import React from "react"
import twitter from "../images/twitter.png"
import github from "../images/github.png"
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"


export default function Footer() {
  return (
    <footer>
      <img src={twitter} alt=""/>
      <img src={github} alt=""/>
      <img src={facebook} alt=""/>
      <img src={instagram} alt=""/>
    </footer>
  )
}