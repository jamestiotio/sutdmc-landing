import React from "react";
import styled from "styled-components";

const PageHeader = styled.h1`
  font-family: var(--font-primary);
  font-size: 50px;
  color: #ffbf00;
`;

const PageHeaderComp = ({ children, ...others }) => {
  return <PageHeader {...others}>{children}</PageHeader>;
};

export default PageHeaderComp;
