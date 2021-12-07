import React from "react";
import marker from "../images/marker.png"

export default function Entry(props) {
  return (
    <div className="entry">
      <img className="entry-image" src={"../images/"+props.imageUrl} alt=""/>
      <div className="entry-content">
        <div className="location-container">
          <img className="marker" src={marker} alt="" />
          <p className="location">{props.location}</p>
          <a 
            className="maps-link" 
            href={props.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
          >View on Google Maps</a>
        </div>
        <h1 className="title">{props.title}</h1>
        <p className="dates">{props.startDate} - {props.endDate}</p>
        <p className="description">{props.description}</p>
      </div>
    </div>
  )
}