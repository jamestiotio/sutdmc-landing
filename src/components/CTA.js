import React, { useContext } from "react";
import styled from "styled-components";

import { MiningContext } from "../Context";

const CTA = styled.a`
  text-align: center;
  background: var(--color-accent);
  border-bottom: 6px inset rgba(0, 0, 0, 0.5);
  border-left: 6px inset rgba(0, 0, 0, 0.5);
  border-right: 6px inset rgba(255, 255, 255, 0.5);
  border-top: 6px inset rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  color: var(--color-grey);
  display: inline-block;
  font-family: var(--font-primary);
  font-size: 24px;
  margin: 1rem;
  min-width: 200px;
  padding: 0.5rem;
  text-transform: uppercase;
  width: auto;

  transform: translateX(-10px);

  &:focus,
  &:hover {
    background: var(--color-accent-light);
  }
`;

const CTAComp = ({ href, children, ...others }) => {
  const setMining = useContext(MiningContext);

  return (
    <CTA
      href={href}
      {...others}
      onMouseEnter={() => setMining(true)}
      onMouseLeave={() => setMining(false)}
    >
      {children}
    </CTA>
  );
};

export default CTAComp;
