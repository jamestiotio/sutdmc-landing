import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Defaults from "./Defaults";
import Cursor from "./Cursor";
import Navbar from "./Navbar";
import Hero from "./Hero";

function App() {
  const [mining, setMining] = useState(false);
  // const [canvasDims, setCanvasDims] = useState(
  //   window.matchMedia("(max-width: 896px)").matches
  //     ? [250, 350]
  //     : window.matchMedia("(max-width: 1200px)").matches
  //     ? [350, 450]
  //     : [450, 550]
  // );

  // useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     if (window.matchMedia("(max-width: 896px)").matches) {
  //       if (canvasDims !== [250, 350]) {
  //         setCanvasDims([250, 350]);
  //       }
  //     } else if (window.matchMedia("(max-width: 1200px)").matches) {
  //       if (canvasDims !== [350, 450]) {
  //         setCanvasDims([350, 450]);
  //       }
  //     } else {
  //       if (canvasDims !== [450, 550]) {
  //         setCanvasDims([450, 550]);
  //       }
  //     }
  //   });
  // }, []);

  return (
    <Router>
      <Defaults />
      <Cursor mining={mining} />
      <Navbar setMining={setMining} />
      <Hero setMining={setMining} />
    </Router>
  );
}

export default App;
