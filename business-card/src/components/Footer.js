import React from "react"
import twitter from "../icons/twitter.png"
import github from "../icons/github.png"
import facebook from "../icons/facebook.png"
import instagram from "../icons/instagram.png"


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