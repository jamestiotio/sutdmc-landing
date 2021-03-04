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
       href: '/oh2021/treasure_hunt',
       imgSource: require('../assets/images/oh2021-games/treasure_hunt.png'),
       description: 'Slow day? Explore every nook and cranny of our school to find treasure chests.'
    },
    theatre: {
        title: 'Redstone Rush',
        href: '/oh2021/redstone_rush',
        imgSource: require('../assets/images/oh2021-games/redstone_rush.png'),
        description: 'Test your Boolean logic as fast as possible in our ISTD inspired game and complete the gauntlet!'
    },
    gallery: {
        title: 'Speed Bakers',
        href: '/oh2021/speed_bakers',
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

const bannerText = (
    <>
        <h1>Minecraft Open House 2021</h1>
        <h3>Discover a better world by <span style={{textDecoration: 'line-through'}}>design</span> Minecraft!</h3>
        <h3>Come discover what the SUTD life is like by visiting our campus in-game, interacting with our students and playing competitive games modelled after our academic programmes.</h3>
        <h3>Join us in game or tune in to our livestream on 6th of March!</h3>
    </>
)
const sectionText = {
    'text-align': 'center',
    'margin-top': '0px'
}

const OH2021Comp = () => {
    return (
        <PageBase>
            <PageHeader>Open House 2021</PageHeader>
            <PageBanner imgSource={require('../assets/images/oh2021/oh2021-main.png')}>
                {bannerText}
            </PageBanner>
            <Text style={sectionHeaders}>Games</Text>
            <Text style={sectionText}>Starbucks, GV and Gong Cha vouchers to be won, first come first serve!</Text>
            <FeatureCardSection cardDetails={gameCardDetails}></FeatureCardSection>
            <Text style={sectionHeaders}>View our ASD Projects</Text>
            <CTA href="/asd2020" style={ASDBtnStyles}>ASD Projects</CTA>
        </PageBase>
    )
}

export default OH2021Comp;