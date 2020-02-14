import React from "react";
import styled from "styled-components";

const CTA = styled.a`
  text-align: center;
  //   background: #ffd866;
  background: #ffbf00;
  border-bottom: 6px inset rgba(0, 0, 0, 0.5);
  border-left: 6px inset rgba(0, 0, 0, 0.5);
  border-right: 6px inset rgba(255, 255, 255, 0.5);
  border-top: 6px inset rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  color: #666666;
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
    // background: #ffe699;
    background: #ffd866;
  }
`;

const CTAComp = ({ href, children, ...others }) => {
  return (
    <CTA href={href} {...others}>
      {children}
    </CTA>
  );
};

export default CTAComp;
