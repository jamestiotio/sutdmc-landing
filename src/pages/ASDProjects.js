import React from 'react';

import PageBase from "../components/PageBase";
import PageHeader from "../components/PageHeader";
import PageBanner from '../components/PageBanner';
import Text from "../components/Text";
import FeatureCardSection from '../components/FeatureCardSection';

const formattedBannerText = (
    <>
        <h1>Experience</h1>
        <h3>SG Architecture</h3>
        <h3>In Minecraft</h3>
    </>
);

const featureCardDetails = {
    jth: {
       title: 'Jurong Town Hall',
       href: '/asd2020/jurong_town_hall',
       imgSource: require('../assets/images/asd-landing/Jurong Town Hall.png'),
       description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, exercitationem neque magnam cum aliquam facilis error temporibus autem esse sequi odit, eum ratione est! Est culpa cumque obcaecati tempore at?'
    },
    theatre: {
        title: 'Theatre',
        href: '/asd2020/theatre',
        imgSource: require('../assets/images/asd-landing/National Theatre.png'),
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, exercitationem neque magnam cum aliquam facilis error temporibus autem esse sequi odit, eum ratione est! Est culpa cumque obcaecati tempore at?' 
    },
    gallery: {
        title: 'National Design Centre',
        href: '/asd2020/design_centre',
        imgSource: require('../assets/images/asd-landing/National Design Centre.png'),
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, exercitationem neque magnam cum aliquam facilis error temporibus autem esse sequi odit, eum ratione est! Est culpa cumque obcaecati tempore at?' 
    }
};



const ASDProjectsComp = () => {
    return (
        <PageBase>
            <PageHeader>ASD 2020 projects</PageHeader>
            <PageBanner imgSource="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=980:*">
                {formattedBannerText}
            </PageBanner>
            <Text>Explore Our Featured Projects</Text>
            <FeatureCardSection cardDetails={featureCardDetails}></FeatureCardSection>
        </PageBase>
    );
}

export default ASDProjectsComp;