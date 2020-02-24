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
      <SubHeader>Open House has concluded!</SubHeader>
      <Text>
        Thank you for visting us on the 22nd and 23rd of Feb. We'll be back
        soon!<br></br>
        Check out the{" "}
        <a href="https://opensutd.org/minecraft-gallery">gallery</a> and follow
        @sutdsg for updates!
      </Text>
      <CTA href="https://sutdmc-map.opensutd.org/">Live 3D Maps</CTA>
    </PageBase>
  );
};

export default HomeComp;
