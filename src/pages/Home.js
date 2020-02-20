import React from "react";

import PageBase from "../components/PageBase";
import PageHeader from "../components/PageHeader";
import Text from "../components/Text";
import CTA from "../components/CTA";

const HomeComp = () => {
  return (
    <PageBase>
      <PageHeader>Welcome!</PageHeader>
      <Text>
        Take a tour of a blocky and virtual rendition of SUTD in a
        student-hosted Minecraft server - 'spleef' with your friends at the
        campus center, admire the Jackie Chan pavilion in all its 8-bit glory or
        simply chill at your virtual hostel room!
      </Text>
      <Text> Server Opens 22 Feb 8am. Come back for updates!</Text>
      <CTA href="https://sutdmc-map.opensutd.org/">Live Preview</CTA>
    </PageBase>
  );
};

export default HomeComp;
