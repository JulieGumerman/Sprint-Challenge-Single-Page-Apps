import React, { useEffect, useState } from "react";
import axios from "axios";




function Characters() {
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
        <div className="card-container">
            <div className="title">
                <h3>Characters</h3>
            </div>
            

            {characters.map(character => {
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
            
        </div>
    )
}

export default Characters;