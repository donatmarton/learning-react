import React from "react"
import star from "../images/star.png"

export default function Card(props)  {
  const imagePath = `../images/${props.coverImg}`
  return (
    <div className="card">
      <p className="card-state">sold out</p>
      <img className="card-image" src={imagePath} alt="" />
      <div className="card-stats">
        <img className="card-star" src={star} alt=""/>
        <span>{props.stats.rating} </span>
        <span className="gray">({props.stats.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card-title">{props.title}</p>
      <p className="card-price"><span className="emphasised">From ${props.price}</span> / person</p>
    </div>
  )
}