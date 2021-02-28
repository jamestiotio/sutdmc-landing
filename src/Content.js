import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Elsewhere from "./pages/Elsewhere";
import Error from "./pages/Error";

const Content = styled.div`
  max-height: 100%;
  //overflow-y: auto;
  //margin-left: 150px;

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

const ContentComp = () => {
  return (
    <Content>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/elsewhere">
          <Elsewhere />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Content>
  );
};

export default ContentComp;
