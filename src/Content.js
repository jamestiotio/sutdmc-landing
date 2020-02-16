import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contribute from "./pages/Contribute";
import Changelog from "./pages/Changelog";
import Elsewhere from "./pages/Elsewhere";

const Content = styled.div`
  height: 70%;
  overflow-y: scroll;
  margin-left: 150px;

  @media (max-width: 1200px) {
    margin-left: 100px;
  }

  @media (max-width: 896px) {
    margin-left: 0;
    margin-top: 20px;
    padding-bottom: 20px;
    height: auto;
  }
`;

const ContentComp = ({ setMining }) => {
  return (
    <Content>
      <Switch>
        <Route exact path="/">
          <Home setMining={setMining} />
        </Route>
        <Route exact path="/contribute">
          <Contribute setMining={setMining} />
        </Route>
        <Route exact path="/changelog">
          <Changelog />
        </Route>
        <Route exact path="/elsewhere">
          <Elsewhere setMining={setMining} />
        </Route>
      </Switch>
    </Content>
  );
};

export default ContentComp;
