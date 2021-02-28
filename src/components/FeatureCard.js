import React from 'react';
import styled from 'styled-components';

const FeatureCard = styled.div`
    height: 40vh;
    margin: 0 10px;
    padding: 10px;
    color: var(--color-text);
    font-family: var(--font-primary);
    background-color: var(--color-accent);
    border: 1px solid var(--color-background);
    border-radius: 10px;
    position: relative;

    &:hover > .feature-card__description {
        transform: translateY(0);
        opacity: 1;
    }
`;

const FeatureCardImage = styled.img``;

const FeatureCardTitle = styled.p`
    text-transform: uppercase;
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 20px;
`;

const FeatureCardDescription = styled.p`
    transform: translateY(150px);
    opacity: 0;
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
            <FeatureCardDescription className="feature-card__description">{description}</FeatureCardDescription>
        </FeatureCard>
    );
});

export default FeatureCardComp;