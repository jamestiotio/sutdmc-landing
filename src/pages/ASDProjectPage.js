import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import PageBase from "../components/PageBase";
import PageHeader from "../components/PageHeader";
import Text from '../components/Text';

const ArticleRow = styled.div`
    display: flex;

    @media (max-width: 1008px) {
        flex-direction: column;

        &:nth-child(even) {
            flex-direction: column-reverse;
        }
    }
`;

const ArticleImage = styled.img`
    width: 50%;
`;

const sampleMarkup = (
    <>
        <ArticleRow>
            <ArticleImage alt="row1"></ArticleImage>
            <Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae debitis laborum porro delectus voluptatibus, tenetur iusto ipsa culpa aliquam quam sequi quis sit provident temporibus qui dolorum quos, ab mollitia!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aperiam eveniet sint unde placeat illum eum esse repudiandae eius alias nam cum aspernatur corporis quidem voluptate ipsa aut, tempora at.
            </Text>
        </ArticleRow>

        <ArticleRow>
            <Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae debitis laborum porro delectus voluptatibus, tenetur iusto ipsa culpa aliquam quam sequi quis sit provident temporibus qui dolorum quos, ab mollitia!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aperiam eveniet sint unde placeat illum eum esse repudiandae eius alias nam cum aspernatur corporis quidem voluptate ipsa aut, tempora at.
            </Text>
            <ArticleImage alt="row2"></ArticleImage>
        </ArticleRow>

        <ArticleRow>
            <ArticleImage alt="row1"></ArticleImage>
            <Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae debitis laborum porro delectus voluptatibus, tenetur iusto ipsa culpa aliquam quam sequi quis sit provident temporibus qui dolorum quos, ab mollitia!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aperiam eveniet sint unde placeat illum eum esse repudiandae eius alias nam cum aspernatur corporis quidem voluptate ipsa aut, tempora at.    
            </Text>
        </ArticleRow>
    </>
)

const projectDetails = {
    'jurong_town_hall': {
        title: 'Jurong Town Hall',
        architectPhoto: '',
        content: sampleMarkup
    },
    'gallery': {
        title: 'National Gallery',
        architectPhoto: '',
        content: sampleMarkup
    },
    'theatre': {
        title: 'National Theatre',
        architectPhoto: '',
        content: sampleMarkup
    }
}

const ContentWrapper = styled.div`

`;

const ASDProjectPageComp = () => {
    let { id } = useParams();
    const project = projectDetails[id];

    return (
        <PageBase>
            <PageHeader>{project.title}</PageHeader>
            <ContentWrapper>{project.content}</ContentWrapper>
        </PageBase>
        
    );
}

export default ASDProjectPageComp;