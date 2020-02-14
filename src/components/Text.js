import React from "react";
import styled from "styled-components";

const Text = styled.p`
  font-family: var(--font-primary);
  font-size: 24px;
  line-height: 1.4;
  color: white;

  & > a {
    color: #ffbf00;
    text-decoration: underline;
  }

  & > span.colored {
    color: #ffbf00;
  }

  & > span.code {
    background-color: #4e4950;
    border-radius: 10px;
    padding: 5px 10px;
  }
`;

const TextComp = ({ children, ...others }) => {
  return <Text {...others}>{children}</Text>;
};

export default TextComp;
