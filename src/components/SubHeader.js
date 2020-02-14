import React from "react";
import styled from "styled-components";

const SubHeader = styled.h2`
  font-family: var(--font-primary);
  font-size: 24px;
  color: white;
  text-decoration: underline;
`;

const SubHeaderComp = ({ children, ...others }) => {
  return <SubHeader {...others}>{children}</SubHeader>;
};

export default SubHeaderComp;
