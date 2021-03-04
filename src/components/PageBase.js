import React from "react";
import styled from "styled-components";

const PageBase = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;

  & > * + * {
    margin-top: 30px;
  }

  & > * + a {
    margin-top: 30px;
  }
`;

const PageBaseComp = React.forwardRef(({ children, ...others }, ref) => {
  return (
    <PageBase ref={ref} {...others}>
      {children}
    </PageBase>
  );
});

export default PageBaseComp;
