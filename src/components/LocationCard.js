import React from "react";

export default function LocationCard(props) {
  return (
    <div className="card" key={props.location.id}>
      <h3>{props.location.name}</h3>
      <p><span>Dimension: </span>{props.location.dimension}</p>
      <p><span>Type: </span>{props.location.type}</p>
      </div>
  );
}
