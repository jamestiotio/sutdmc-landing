import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import MainPage from "./MainPage";
import ContributePage from "./ContributePage";
import ChangelogPage from "./ChangelogPage";
import ElsewherePage from "./ElsewherePage";

const HeroContent = styled.div`
  height: 70%;
  overflow-y: scroll;
  margin-left: 150px;

  // border: 1px solid blue;

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

const HeroContentComp = ({ setMining }) => {
  return (
    <HeroContent>
      <Switch>
        <Route exact path="/">
          <MainPage setMining={setMining} />
        </Route>
        <Route exact path="/contribute">
          <ContributePage setMining={setMining} />
        </Route>
        <Route exact path="/changelog">
          <ChangelogPage />
        </Route>
        <Route exact path="/elsewhere">
          <ElsewherePage setMining={setMining} />
        </Route>
      </Switch>
    </HeroContent>
  );
};

export default HeroContentComp;
