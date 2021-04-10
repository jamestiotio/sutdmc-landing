import React from "react";
import styled from "styled-components";

const SubHeader = styled.h2`
  font-family: var(--font-primary);
  font-size: 24px;
  text-align: center;
  margin: 40px auto 20px auto;
  color: var(--color-text);
  text-decoration: underline;

  &::selection {
    background-color: var(--color-accent);
    color: var(--color-background);
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

const SubHeaderComp = ({ children, ...others }) => {
  return <SubHeader {...others}>{children}</SubHeader>;
};

export default SubHeaderComp;
