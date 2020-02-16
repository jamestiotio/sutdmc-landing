import React from "react";

import PageBase from "../components/PageBase";
import PageHeader from "../components/PageHeader";
import Text from "../components/Text";
import CTA from "../components/CTA";

const ContributeComp = ({ setMining }) => {
  return (
    <PageBase>
      <PageHeader>Recruiting Builders & Surveryors!</PageHeader>
      <Text>
        Help us rebuild SUTD in Minecraft to host the blockiest virtual open
        house ever! You can start by joining us in our Telegram group below.
      </Text>
      <CTA
        href="https://t.me/joinchat/D_qXhUkqWq4sSROb6ZeZ6Q"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setMining(true)}
        onMouseLeave={() => setMining(false)}
      >
        Telegram Link
      </CTA>
    </PageBase>
  );
};

export default ContributeComp;
