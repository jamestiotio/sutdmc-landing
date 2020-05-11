import React from "react";

import PageBase from "../components/PageBase";
import PageHeader from "../components/PageHeader";
// import SubHeader from "../components/SubHeader";
import Text from "../components/Text";
import CTA from "../components/CTA";

const HomeComp = () => {
  return (
    <PageBase>
      <PageHeader>Welcome!</PageHeader>
      <Text>
        Take a tour of a blocky and virtual rendition of SUTD in a
        student-hosted Minecraft server. Virtual Open Campus is open day or night, rain or shine!
      </Text>
      <Text>
        Address: <code>game.sutdmc.opensutd.org</code>
        <br></br>
        Java Edition 1.15.2
        <br></br>
        When entering the server, please use the portal on the left to teleport to the Open House world.
      </Text>
      <CTA href="https://sutdmc-map.opensutd.org/open_house">Live 3D Maps (View in Browser)</CTA>
    </PageBase>
  );
};

export default HomeComp;
