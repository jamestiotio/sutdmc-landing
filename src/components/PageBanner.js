import React from "react";
import styled from "styled-components";

const PageBanner = styled.div`
    display: flex;
    height: 40vh;
    justify-content: space-around;

    @media (max-width: 896px) {
        flex-direction: column;
    }
`;

const PageBannerImg = styled.img`

`;

const PageBannerText = styled.div`
    font-family: var(--font-primary);
    line-height: 1.4;
    color: var(--color-text);

    & > h1 {
        text-transform: uppercase;
        font-size: 30px;

        @media (max-width: 1200px) {
            font-size: 24px;
        }

        @media (max-width: 896px) {
            font-size: 20px;
        }

        @media (max-width: 576px) {
            font-size: 18px;
        }
    }

    & > h3 {
        font-size: 20px;

        @media (max-width: 1200px) {
            font-size: 18px;
        }

        @media (max-width: 896px) {
            font-size: 16px;
        }

        @media (max-width: 576px) {
            font-size: 14px;
        }
    }
`;

const PageBannerComp = React.forwardRef(({ imgSource, children, ...others }, ref) => {
    return (
      <PageBanner ref={ref} {...others}>
        <PageBannerImg src={imgSource} alt="banner image"></PageBannerImg>
        <PageBannerText>
            {children}
        </PageBannerText>
      </PageBanner>
    );
  });

export default PageBannerComp;