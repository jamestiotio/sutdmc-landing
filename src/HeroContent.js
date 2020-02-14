import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import MainPage from "./MainPage";
import ContributePage from "./ContributePage";
import ChangelogPage from "./ChangelogPage";
import ElsewherePage from "./ElsewherePage";

const HeroContent = styled.div`
  width: 45%;
  height: 70%;
  padding: 0 100px;
  overflow-y: scroll;
  margin-left: 50px;

  // border: 1px solid blue;
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
