import React from 'react';
import styled from 'styled-components';

import Text from "../components/Text";
import CTAbtn from "../components/CTAbtn";

const HomeSelectContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: black;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
`;

const HomeSelect = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 50%;
`;

const HomeSelectBtnGrp = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;

    & > * {
        margin-right: 12.5px;
    }

    @media (max-width: 600px) {
        flex-direction: column;

        & > * {
            margin-right: 0;
            margin-bottom: 10px;
        }
    }
`;

const HomeSelectComp = (props) => {
    return (
        <HomeSelectContainer>
            <HomeSelect>
                <Text>Welcome to SUTD Minecraft!</Text>
                <HomeSelectBtnGrp>
                    <CTAbtn selectUserType={props.selectUserType}>I played Minecraft</CTAbtn>
                    <CTAbtn selectUserType={props.selectUserType}>I haven't played Minecraft</CTAbtn>
                </HomeSelectBtnGrp>
            </HomeSelect>
        </HomeSelectContainer>
    )
}

export default HomeSelectComp;