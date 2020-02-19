import React from "react";
import styled from "styled-components";

import PageBase from "../components/PageBase";
import PageHeader from "../components/PageHeader";
import Text from "../components/Text";
import Link from "../components/Link";

const StyledLink = styled(Link)`
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

const ErrorComp = () => {
  return (
    <PageBase>
      <PageHeader>Oops!</PageHeader>
      <Text>
        You seem to have gotten yourself quite lost in the vast Overworld, or
        could this maybe even be the terrifying Nether?! <i>*Shudders*</i> Don't
        worry though, we have prepared this nice little portal for you to get
        back home. Safe travels!
      </Text>
      <StyledLink to="/">Return Home →</StyledLink>
    </PageBase>
  );
};

export default ErrorComp;
