import React from "react";

import PageBase from "../components/PageBase";
import PageHeader from "../components/PageHeader";
import SubHeader from "../components/SubHeader";
import Text from "../components/Text";
import TextAnchor from "../components/TextAnchor";

const ElsewhereComp = () => {
  return (
    <PageBase>
      <PageHeader>Other Places to Visit</PageHeader>

      <SubHeader>Official Links</SubHeader>
      <div>
        <Text>
          <TextAnchor
            href="https://openhouse.sutd.edu.sg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SUTD Open House 2020
          </TextAnchor>
        </Text>
        <Text>
          <TextAnchor
            href="https://sutd.edu.sg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SUTD Website
          </TextAnchor>
        </Text>
      </div>

      <SubHeader>OpenSUTD</SubHeader>
      <div>
        <Text>
          <TextAnchor
            href="https://openhouse.opensutd.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            OpenSUTD Open House 2020
          </TextAnchor>
        </Text>
        <Text>
          <TextAnchor
            href="https://virtual.opensutd.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SUTD Virtual Tour
          </TextAnchor>
        </Text>
        <Text>
          <TextAnchor
            href="https://opensutd.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            OpenSUTD Website
          </TextAnchor>
        </Text>
      </div>

      <SubHeader>Source Code</SubHeader>
      <div>
        <Text>
          <TextAnchor
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Server Source
          </TextAnchor>
        </Text>
        <Text>
          <TextAnchor
            href="https://github.com/OpenSUTD/sutdmc-landing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website Source
          </TextAnchor>
        </Text>
      </div>
    </PageBase>
  );
};

export default ElsewhereComp;
