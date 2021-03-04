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
       href: '/',
       imgSource: '',
       description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, exercitationem neque magnam cum aliquam facilis error temporibus autem esse sequi odit, eum ratione est! Est culpa cumque obcaecati tempore at?'
    },
    theatre: {
        title: 'Redstone Gauntlet',
        href: '/',
        imgSource: '',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, exercitationem neque magnam cum aliquam facilis error temporibus autem esse sequi odit, eum ratione est! Est culpa cumque obcaecati tempore at?'
    },
    gallery: {
        title: 'ESD Game',
        href: '/',
        imgSource: '',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, exercitationem neque magnam cum aliquam facilis error temporibus autem esse sequi odit, eum ratione est! Est culpa cumque obcaecati tempore at?'
    }
};

const ASDBtnStyles = {
    width: '50%',
    margin: '0 auto'
};

const sectionHeaders = {
    'margin': '40px auto 20px auto',
}

const OH2021Comp = () => {
    return (
        <PageBase>
            <PageHeader>Open House 2021</PageHeader>
            <PageBanner></PageBanner>
            <Text style={sectionHeaders}>Games</Text>
            <FeatureCardSection cardDetails={gameCardDetails}></FeatureCardSection>
            <Text style={sectionHeaders}>View our ASD Projects</Text>
            <CTA href="/asd2020" style={ASDBtnStyles}>ASD Projects</CTA>
        </PageBase>
    )
}

export default OH2021Comp;