import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";

import PageHeader from "./components/PageHeader";
import Text from "./components/Text";

import Defaults from "./Defaults";
import Cursor from "./Cursor";
import Navbar from "./Navbar";
import Hero from "./Hero";

const Temp = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20%;
  cursor: auto;

  & > * + * {
    margin-top: 20px;
  }
`;

function App() {
  const [mining, setMining] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize(window.innerWidth);
    });
  }, []);

  return (
    <Router>
      <Defaults />
      {windowSize > 1200 ? (
        <>
          <Cursor mining={mining} />
          <Navbar setMining={setMining} />
          <Hero setMining={setMining} />
        </>
      ) : (
        <Temp>
          <PageHeader>Apologies!</PageHeader>
          <Text>
            Please view this site on <span class="colored">Desktop/Laptop</span>{" "}
            for the meantime - mobile version is still a work in progress!
          </Text>
        </Temp>
      )}
    </Router>
  );
}

export default App;
