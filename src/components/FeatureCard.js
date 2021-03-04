import React, {useEffect} from 'react';
import styled from 'styled-components';

const FeatureCard = styled.div`
    height: 40vh;
    margin: 0;
    color: var(--color-text);
    font-family: var(--font-primary);
    border: 3px solid var(--color-accent);
    border-radius: 10px;
    position: relative;
    overflow: hidden;

    &:hover {
        .feature-card__description {
            transform: translateY(0);
            opacity: 1;
        }

        & > .feature-card__overlay {
            opacity: 1;
        }
    }

    @media (max-width: 896px) {
        margin: 10px 10px;
    }
`;

const FeatureCardImage = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const FeatureCardTitle = styled.p`
    text-transform: uppercase;
    text-align: center;
    text-shadow: 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black;
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 20px;
`;

const FeatureCardOverlay = styled.div`
    height: 100%;
    backdrop-filter: blur(5px);
    opacity: 0;
    transition: opacity .2s;
`;

const FeatureCardDescription = styled.p`
    font-size: 18px;
    transform: translateY(150px);
    opacity: 0;
    text-align: center;
    transition: all .5s;
`;

const FeatureCardComp = React.forwardRef(({ href, imgSource, title, description, children, ...others }, ref) => {

    const handleClick = () => {
        return e => {
            window.location.href = href; //to find a way to use react router instead?
        }
    }

    return (
        <FeatureCard ref={ref} {...others} onClick={handleClick()}>
            <FeatureCardImage src={imgSource} alt="card image"/>
            <FeatureCardTitle>{title}</FeatureCardTitle>
            <FeatureCardOverlay className="feature-card__overlay">
                <FeatureCardDescription className="feature-card__description">
                    {description}
                </FeatureCardDescription>
            </FeatureCardOverlay>
        </FeatureCard>
    );
});

export default FeatureCardComp;