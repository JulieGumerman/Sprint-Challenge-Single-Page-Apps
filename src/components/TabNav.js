import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/
const NavBar = styled.div`
    width: 100%;
`

const List = styled.ul` 
display: flex;
width: 50%;
justify-content: space-between;
list-style-type: none;
`

export default function TabNav() {
    return (
        <NavBar>
            <List>
                <li><NavLink to="/">Homepage</NavLink></li>
                <li><NavLink to="/characters">Characters</NavLink></li>
                <li><NavLink to="/locations">Locations</NavLink></li>
                <li><NavLink to="/episodes">Episodes</NavLink></li>

            </List>

        </NavBar>
    )
};

