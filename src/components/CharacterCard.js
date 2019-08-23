import React from "react";

export default function CharacterCard(props) {
  return (
    {props.characters.map(character => {
      return (
          <div className="card">
              <h3>{character.name}</h3>
              <img src={character.image} alt={character.name}/>
              <p><span>Species: </span>{character.species}</p>
              <p><span>Status: </span>{character.status}</p>
              <p><span>Gender: </span>{character.gender}</p>
          </div>
      )
  })}
  )
}
