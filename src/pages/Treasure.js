import React from "react";

import PageBase from "../components/PageBase";
import PageHeader from "../components/PageHeader";
import SubHeader from "../components/SubHeader";
import Text from "../components/Text";

const TreasureComp = () => {
  return (
    <PageBase>
      <PageHeader>Treasure Hunt</PageHeader>
      <SubHeader>Join us in Minecraft, find Prizes!</SubHeader>
      <Text>
        We've placed a total of 10x $10 Starbucks Vouchers and 10x Golden
        Village Movie tickets in treasure chests around the campus. If you get
        your hands on a book with a winning code, email us and you get the
        prize!
      </Text>
      <Text>
        Prizes are served on a first-come first-serve basis. Prizes are reset
        10am each day. Participants must be residing in Singapore to be able to
        come down to campus on a later date to collect the physical prize from
        us.
      </Text>
      <SubHeader>
        Prizes have been claimed as of 24 Feb! Thank you for playing!
      </SubHeader>
    </PageBase>
  );
};

export default TreasureComp;
