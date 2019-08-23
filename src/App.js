import React from "react";
import { Route } from "react-router-dom";

import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import Characters from "./components/Characters.js";
import Locations from "./components/Locations.js";
import Episodes from "./components/Episodes.js";




export default function App() {
  return (
      <main>
        <Header />
        {/* <TabNav /> */}
        <Route path="/characters" component={Characters} />
        <Route path="/locations" component={Locations} />
        <Route path="/episodes" component={Episodes} />
      </main>
  );
}
