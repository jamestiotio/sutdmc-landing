import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Div100vh from "react-div-100vh";

import { MiningContext } from "./Context";

import SEO from "./SEO";
import Defaults from "./Defaults";
import Cursor from "./Cursor";
import Counter from "./Counter";
import Navbar from "./Navbar";
import Main from "./Main";

function App() {
  const [mining, setMining] = useState(false);
  const [blockCount, setBlockCount] = useState(0);

  return (
    <Router>
      <SEO />
      <Defaults />
      <Cursor mining={mining} blockCount={blockCount} />
      <MiningContext.Provider value={setMining}>
        <Counter blockCount={blockCount} />
        <Div100vh>
          <Navbar />
          <Main blockCount={blockCount} setBlockCount={setBlockCount} />
        </Div100vh>
      </MiningContext.Provider>
    </Router>
  );
}

export default App;
