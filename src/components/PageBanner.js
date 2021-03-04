import React from "react";
import styled from "styled-components";

const PageBanner = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 896px) {
        display: flex;
        flex-direction: column;
    }
`;

const PageBannerImgDiv = styled.div`
    height: 100%;

`;
const PageBannerImg = styled.img`
    height: 100%;
    width: 100%;
`;

const PageBannerText = styled.div`
    font-family: var(--font-primary);
    line-height: 1.4;
    color: var(--color-text);
    margin-left: 10px;
    height: 100%;

    @media (max-width: 896px) {
        margin-left: 0;
    }

    & h1 {
        text-transform: uppercase;
        font-size: 30px;
        font-weight: normal;

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

    & h3 {
        font-size: 20px;
        font-weight: normal;

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
        <PageBannerImgDiv><PageBannerImg src={imgSource} alt="banner image"></PageBannerImg></PageBannerImgDiv>
        <PageBannerText>
            {children}
        </PageBannerText>
      </PageBanner>
    );
  });

export default PageBannerComp;