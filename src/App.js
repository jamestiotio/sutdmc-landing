import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Div100vh from "react-div-100vh";

import { MiningContext } from "./Context";

import SEO from "./SEO";
import Defaults from "./Defaults";
import Cursor from "./Cursor";
import Navbar from "./Navbar";
import Main from "./Main";

function App() {
  const [mining, setMining] = useState(false);

  return (
    <Router>
      <SEO />
      <Defaults />
      <Cursor mining={mining} />
      <MiningContext.Provider value={setMining}>
        <Div100vh>
          <Navbar />
          <Main />
        </Div100vh>
      </MiningContext.Provider>
    </Router>
  );
}

export default App;
