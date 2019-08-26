import React, { useEffect, useState } from "react";

import axios from "axios";

import CharacterCard from "./CharacterCard";

function CharacterList() {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character/")
        .then(response => {
            let characters=response.data.results;
            setCharacters(characters);
            console.log("characters", characters);
        })//close "then"
    }, []); //close useEffect

  return (

        <div class="card-container">
            {characters.map(character => {
                return (
                    <CharacterCard character={character} />
                )
                })}

        </div>
  );
}

export default CharacterList;