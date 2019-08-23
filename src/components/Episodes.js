import React, { useEffect, useState } from "react";
import axios from "axios";

function Episodes() {
    const [episodes, setEpisodes] = useState([]);
    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/episode/")
        .then(response => {
            const episodes=response.data.results;
            setEpisodes(episodes);
            console.log("episodes", episodes);
        })
    }, []);
    return (
        <div className="card-container">
            <div className="title"><h3>Episodes</h3></div>
            {episodes.map(episode=> {
                return (
                    <div className="card">
                        <h3>{episode.name}</h3>
                        <p><span>air date:</span> {episode.air_date}</p>
                        <p><span>episode number:</span> {episode.episode}</p>
                    </div>
                );
            })}
        </div>
    )
}

export default Episodes;