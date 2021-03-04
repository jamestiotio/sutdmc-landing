import React from 'react';
import styled from 'styled-components';

import PageBase from "../components/PageBase";
import PageHeader from "../components/PageHeader";
import PageBanner from '../components/PageBanner';
import Text from "../components/Text";
import FeatureCardSection from '../components/FeatureCardSection';
import CTA from '../components/CTA';

const gameCardDetails = {
    jth: {
       title: 'Treasure Hunt',
       href: '',
       imgSource: require('../assets/images/oh2021-games/treasure_hunt.png'),
       description: 'Slow day? Explore every nook and cranny of our school to find treasure chests.'
    },
    theatre: {
        title: 'Redstone Gauntlet',
        href: '',
        imgSource: require('../assets/images/oh2021-games/redstone_rush.png'),
        description: 'Test your Boolean logic as fast as possible in our ISTD inspired game and complete the gauntlet!'
    },
    gallery: {
        title: 'Speed Bakers',
        href: '',
        imgSource: require('../assets/images/oh2021-games/speed_bakers.png'),
        description: 'Optimise your very own cake supply chain in our ESD inspired game!'
    }
};

const ASDBtnStyles = {
    width: '50%',
    margin: '0 auto'
};

const sectionHeaders = {
    'margin': '40px auto 20px auto',
}

const sectionText = {
    'text-align': 'center'
}

const OH2021Comp = () => {
    return (
        <PageBase>
            <PageHeader>Open House 2021</PageHeader>
            <PageBanner></PageBanner>
            <Text style={sectionHeaders}>Games</Text>
            <Text style={sectionText}>Starbucks, GV and Gong Cha vouchers to be won, first come first serve!</Text>
            <FeatureCardSection cardDetails={gameCardDetails}></FeatureCardSection>
            <Text style={sectionHeaders}>View our ASD Projects</Text>
            <CTA href="/asd2020" style={ASDBtnStyles}>ASD Projects</CTA>
        </PageBase>
    )
}

export default OH2021Comp;