import React from "react";

export default function CharacterCard(props) {
  return (
    <div className="card">
        <h3>{props.character.name}</h3>
        <img src={props.character.image} alt={props.character.name}/>
        <p><span>Species: </span>{props.character.species}</p>
        <p><span>Status: </span>{props.status}</p>
        <p><span>Gender: </span>{props.gender}</p>
    </div>

  )
}
