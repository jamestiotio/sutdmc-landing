import React, {useState} from "react";
import styled from "styled-components";

import PageBase from "../components/PageBase";
import PageHeader from "../components/PageHeader";
// import SubHeader from "../components/SubHeader";
import Text from "../components/Text";
import CTA from "../components/CTA";
import CTAbtn from '../components/CTAbtn';

const BtnGroup = styled.div`
  display: flex;

  & > * {
    margin-right: 10px;
    margin-top: 0;
  }

  @media (max-width: 600px) {
    flex-direction: column;

    & > * {
      margin-top: 10px;
    }
  }
`;

const HomeComp = () => {
  const [userType, setUserType] = useState('minecraft');

  const selectUserType = e => {
    let selectedType;
    if (e.target.innerText === 'I PLAY MINECRAFT') {
      selectedType = 'minecraft';
    } else {
      selectedType = 'nonMinecraft';
    }
    setUserType(selectedType);
  };

  return (
    <PageBase>
      <PageHeader>Welcome!</PageHeader>
      <BtnGroup>
        <CTAbtn selectUserType={selectUserType}>I play Minecraft</CTAbtn>
        <CTAbtn selectUserType={selectUserType}>I don't play minecraft</CTAbtn>
      </BtnGroup>
      {userType === 'minecraft' ?
      <React.Fragment>
        <Text>
        Take a tour of a blocky and virtual rendition of SUTD in a
        student-hosted Minecraft server. Virtual Open Campus is open day or night, rain or shine!
        </Text>
        <Text>
          Address: <code>game.sutdmc.opensutd.org</code>
          <br></br>
          Java Edition 1.15.2
          <br></br>
          When entering the server, please use the portal on the right to teleport to the Open House world.
        </Text>
        <Text>
          Found some posters around school with info about treasures? Head into the Open House world and start searching! There are chests hidden around the in-game counterpart of where you spotted the posters.
          <br></br>
          If you have found a chest, follow the instructions written in the in-game book to redeem your prize. Stand to win Starbucks vouchers, and special prizes for the first 3 winners.
        </Text>
        <CTA href="https://sutdmc-map.opensutd.org/open_house">Live 3D Maps (View in Browser)</CTA>
      </React.Fragment> :
      <Text>Non minecraft player</Text>
      }
      
    </PageBase>
  );
};

export default HomeComp;
