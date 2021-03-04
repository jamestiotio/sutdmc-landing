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

const ComingSoonComp = () => {
  return (
    <PageBase>
      <PageHeader>Coming Soon!</PageHeader>
      <Text>
        Stay tuned for the next few days...
      </Text>
      <StyledLink to="/oh2021">Return to Open House 2021 →</StyledLink>
    </PageBase>
  );
};

export default ComingSoonComp;
