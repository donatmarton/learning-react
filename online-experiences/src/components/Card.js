import React from "react"
import katie from "../images/katie-zaferes.png"
import star from "../images/star.png"

export default function Card()  {
  return (
    <section className="cards-container">
      <div className="card">
        <p className="card-state">sold out</p>
        <img className="card-image" src={katie} alt="" />
        <div className="card-stats">
          <img className="card-star" src={star} alt=""/>
          <span>5.0 </span>
          <span className="gray">(6) • </span>
          <span className="gray">USA</span>
        </div>
        <p className="card-title">Life lessons with Katie Zaferes</p>
        <p className="card-price"><span className="emphasised">From $136</span> / person</p>
      </div>
    </section>
  )
}