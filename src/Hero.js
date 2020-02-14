import React from "react";
import styled from "styled-components";

import HeroImage from "./HeroImage";
import HeroContent from "./HeroContent";

const Hero = styled.section`
  width: 100vw;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    border: 1px solid red;
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
