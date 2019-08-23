import React, { useEffect, useState } from "react";
import axios from "axios";

function Locations() {
    const [locations, setLocations] = useState([]);
    useEffect(()=> {
        axios.get("https://rickandmortyapi.com/api/location/")
        .then(response => {
            const locations=response.data.results;
            setLocations(locations);
            console.log("locations", locations);
        })
    }, []);
    return(
        <div className="card-container">
            <div className="title"><h2>Locations</h2></div>
            {locations.map(location=>{
                return(
                    <div className="card" key={location.id}>
                        <h3>{location.name}</h3>
                        <p><span>Dimension: </span>{location.dimension}</p>
                        <p><span>Type: </span>{location.type}</p>
                    </div>
                );
            })}
        </div>
    )
}

export default Locations;