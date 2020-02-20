import React from "react";
import styled from "styled-components";

import HeroImage from "./HeroImage";
import Content from "./Content";

const Main = styled.main`
  width: 100vw;
  max-width: 1680px;
  height: calc(100% - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0 10%;

  @media (max-width: 1200px) {
    padding: 0 7.5%;
  }

  @media (max-width: 896px) {
    padding: 20px 15%;
    flex-direction: column;
  }

  @media (max-width: 576px) {
    padding: 0 20px;
  }
`;

const MainComp = ({
  blockCount,
  setBlockCount,
  mainContentLoaded,
  setMainContentLoaded
}) => {
  return (
    <Main>
      <HeroImage
        blockCount={blockCount}
        setBlockCount={setBlockCount}
        setMainContentLoaded={setMainContentLoaded}
      />
      <Content mainContentLoaded={mainContentLoaded} />
    </Main>
  );
};

export default React.memo(MainComp);
