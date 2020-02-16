import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Div100vh from "react-div-100vh";

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
      <Div100vh>
        <Navbar setMining={setMining} />
        <Main setMining={setMining} />
      </Div100vh>
    </Router>
  );
}

export default App;
