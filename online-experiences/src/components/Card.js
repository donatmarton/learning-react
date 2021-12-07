import React from "react"
import star from "../images/star.png"

export default function Card(props)  {
  const imagePath = `../images/${props.coverImg}`
  let stateText;
  if (props.openSpots === 0) {
    stateText = "sold out";
  } else if (props.location.toLowerCase() === "online") {
    stateText = "online";
  }
  return (
    <div className="card">
      {stateText && <p className="card-state">{stateText}</p>}
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