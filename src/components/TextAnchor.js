import React, { useContext } from "react";
import styled from "styled-components";

import { MiningContext } from "../Context";

const TextAnchor = styled.a`
  font-family: var(--font-primary);
  font-size: 24px;
  line-height: 1.4;
  color: var(--color-accent);
  text-decoration: underline;

  &:hover {
    color: var(--color-accent-light);
  }

  @media (max-width: 1200px) {
    font-size: 22px;
  }

  @media (max-width: 896px) {
    font-size: 20px;
  }

  @media (max-width: 576px) {
    font-size: 18px;
  }
`;

const TextAnchorComp = ({ children, ...others }) => {
  const setMining = useContext(MiningContext);

  return (
    <TextAnchor
      {...others}
      onMouseEnter={() => setMining(true)}
      onMouseLeave={() => setMining(false)}
    >
      {children}
    </TextAnchor>
  );
};

export default TextAnchorComp;
