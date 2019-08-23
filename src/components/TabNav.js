import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";


// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/
const NavBar = styled.div`
    width: 100%;
`

const List = styled.div` 
display: flex;
width: 60%;
justify-content: space-between;
margin: 0 auto;
padding-top: 30px;
padding-bottom: 30px;
font-size: 20px;
color: black;
`

export default function TabNav() {
    return (
        <NavBar>
            <List>
                <NavLink className="nav" to="/">Homepage</NavLink>
                <NavLink className="nav" to="/characters">Characters</NavLink>
                <NavLink className="nav" to="/locations">Locations</NavLink>
                <NavLink className="nav" to="/episodes">Episodes</NavLink>

            </List>

        </NavBar>
    )
};

