import React from "react";
import styled from "styled-components";

import HeroImage from "./HeroImage";
import HeroContent from "./HeroContent";

const Hero = styled.section`
  width: 100vw;
  max-width: 1680px;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  padding: 0 10%;

  // border: 1px solid red;

  @media (max-width: 1200px) {
    padding: 0 7.5%;
    // border: 1px solid red;
  }

  @media (max-width: 896px) {
    padding: 20px 15%;
    flex-direction: column;
    // border: 1px solid blue;
  }

  @media (max-width: 414px) {
    padding: 0 20px;
  }
`;

const HeroComp = ({ setMining }) => {
  return (
    <Hero>
      <HeroImage />
      <HeroContent setMining={setMining} />
    </Hero>
  );
};

export default HeroComp;
