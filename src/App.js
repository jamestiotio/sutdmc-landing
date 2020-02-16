import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

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
      <Navbar setMining={setMining} />
      <Main setMining={setMining} />
    </Router>
  );
}

export default App;
