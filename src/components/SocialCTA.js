import React, { useContext } from "react";
import styled from "styled-components";

import { MiningContext } from "../Context";

const SocialCTA = styled.a`
  text-align: center;
  background: var(--color-accent);
  border-bottom: 4px inset rgba(0, 0, 0, 0.5);
  border-left: 4px inset rgba(0, 0, 0, 0.5);
  border-right: 4px inset rgba(255, 255, 255, 0.5);
  border-top: 4px inset rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  color: var(--color-grey);
  display: inline-block;
  font-family: var(--font-primary);
  font-size: 18px;
  padding: 1px 5px;
  text-transform: uppercase;
  width: auto;

  &:focus,
  &:hover {
    background: var(--color-accent-light);
  }
`;

const SocialCTAComp = ({ href, children, ...others }) => {
  const setMining = useContext(MiningContext);

  return (
    <SocialCTA
      href={href}
      {...others}
      onMouseEnter={() => setMining(true)}
      onMouseLeave={() => setMining(false)}
    >
      {children}
    </SocialCTA>
  );
};

export default SocialCTAComp;
