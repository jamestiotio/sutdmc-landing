import React from "react";
import styled from "styled-components";

const PageHeader = styled.h1`
  font-family: var(--font-primary);
  font-size: 50px;
  color: var(--color-accent);

  &::selection {
    background-color: var(--color-accent);
    color: var(--color-background);
  }

  @media (max-width: 1200px) {
    font-size: 42px;
  }

  @media (max-width: 896px) {
    font-size: 34px;
  }

  @media (max-width: 414px) {
    font-size: 28px;
  }
`;

const PageHeaderComp = ({ children, ...others }) => {
  return <PageHeader {...others}>{children}</PageHeader>;
};

export default PageHeaderComp;
