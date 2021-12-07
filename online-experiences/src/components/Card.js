import React from "react"
import star from "../images/star.png"

export default function Card(props)  {
  const data = props.data;
  const imagePath = `../images/${data.coverImg}`
  let stateText;
  if (data.openSpots === 0) {
    stateText = "sold out";
  } else if (data.location.toLowerCase() === "online") {
    stateText = "online";
  }
  return (
    <div className="card">
      {stateText && <p className="card-state">{stateText}</p>}
      <img className="card-image" src={imagePath} alt="" />
      <div className="card-stats">
        <img className="card-star" src={star} alt=""/>
        <span>{data.stats.rating} </span>
        <span className="gray">({data.stats.reviewCount}) • </span>
        <span className="gray">{data.location}</span>
      </div>
      <p className="card-title">{data.title}</p>
      <p className="card-price"><span className="emphasised">From ${data.price}</span> / person</p>
    </div>
  )
}