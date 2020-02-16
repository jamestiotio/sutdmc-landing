import React from "react";
import styled from "styled-components";

const Text = styled.p`
  font-family: var(--font-primary);
  font-size: 24px;
  line-height: 1.4;
  color: var(--color-text);

  & > a {
    color: var(--color-accent);
    text-decoration: underline;

    &:hover {
      color: var(--color-accent-light);
    }
  }

  & > span.colored {
    color: var(--color-accent);
  }

  & > span.code {
    background-color: var(--color-grey);
    border-radius: 10px;
    padding: 5px 10px;
  }

  @media (max-width: 1200px) {
    font-size: 22px;
  }

  @media (max-width: 896px) {
    font-size: 20px;
  }

  @media (max-width: 414px) {
    font-size: 18px;
  }
`;

const TextComp = ({ children, ...others }) => {
  return <Text {...others}>{children}</Text>;
};

export default TextComp;
