import React from "react";

import PageBase from "../components/PageBase";
import PageHeader from "../components/PageHeader";
import SubHeader from "../components/SubHeader";
import TextAnchor from "../components/TextAnchor";

const ElsewhereComp = () => {
  return (
    <PageBase>
      <PageHeader>Other Places to Visit</PageHeader>

      <SubHeader>Official Links</SubHeader>
      <ul>
        <li>
          <TextAnchor
            href="https://openhouse.sutd.edu.sg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SUTD Open House 2020
          </TextAnchor>
        </li>
        <li>
          <TextAnchor
            href="https://sutd.edu.sg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SUTD Website
          </TextAnchor>
        </li>
      </ul>

      <SubHeader>OpenSUTD</SubHeader>
      <ul>
        <li>
          <TextAnchor
            href="https://openhouse.opensutd.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            OpenSUTD Open House 2020
          </TextAnchor>
        </li>
        <li>
          <TextAnchor
            href="https://virtual.opensutd.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SUTD Virtual Tour
          </TextAnchor>
        </li>
        <li>
          <TextAnchor
            href="https://opensutd.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            OpenSUTD Website
          </TextAnchor>
        </li>
      </ul>

      <SubHeader>Source Code</SubHeader>
      <ul>
        <li>
          <TextAnchor
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Server Source
          </TextAnchor>
        </li>
        <li>
          <TextAnchor
            href="https://github.com/OpenSUTD/sutdmc-landing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website Source
          </TextAnchor>
        </li>
      </ul>
    </PageBase>
  );
};

export default ElsewhereComp;
