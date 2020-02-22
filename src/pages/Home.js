import React from "react";

import PageBase from "../components/PageBase";
import PageHeader from "../components/PageHeader";
import SubHeader from "../components/SubHeader";
import Text from "../components/Text";
import CTA from "../components/CTA";

const HomeComp = () => {
  return (
    <PageBase>
      <PageHeader>Welcome!</PageHeader>
      <Text>
        Take a tour of a blocky and virtual rendition of SUTD in a
        student-hosted Minecraft server. If you're up for a challenge, come find
        treasures hidden across the map and win real life prizes!
      </Text>
      <SubHeader>
        Server is open to public from 10am to 6pm SGT, 22 Feb and 23 Feb.
      </SubHeader>
      <Text>
        Server Address: <b>game.sutdmc.opensutd.org</b>
        <br></br>Game version: Java Edition 1.14.1
      </Text>
      <CTA href="https://sutdmc-map.opensutd.org/">Live 3D Maps</CTA>
    </PageBase>
  );
};

export default HomeComp;
