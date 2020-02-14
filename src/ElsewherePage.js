import React from "react";

import PageBase from "./components/PageBase";
import PageHeader from "./components/PageHeader";
import SubHeader from "./components/SubHeader";
import Text from "./components/Text";

const ElsewherePageComp = ({ setMining }) => {
  return (
    <PageBase>
      <PageHeader>Other Places to Visit</PageHeader>

      <SubHeader>Official Links</SubHeader>
      <div>
        <Text>
          <a
            href="https://openhouse.sutd.edu.sg/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setMining(true)}
            onMouseLeave={() => setMining(false)}
          >
            SUTD Open House 2020
          </a>
        </Text>
        <Text>
          <a
            href="https://sutd.edu.sg/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setMining(true)}
            onMouseLeave={() => setMining(false)}
          >
            SUTD Website
          </a>
        </Text>
      </div>

      <SubHeader>OpenSUTD</SubHeader>
      <div>
        <Text>
          <a
            href="https://openhouse.opensutd.org/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setMining(true)}
            onMouseLeave={() => setMining(false)}
          >
            OpenSUTD Open House 2020
          </a>
        </Text>
        <Text>
          <a
            href="https://virtual.opensutd.org/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setMining(true)}
            onMouseLeave={() => setMining(false)}
          >
            SUTD Virtual Tour
          </a>
        </Text>
        <Text>
          <a
            href="https://opensutd.org/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setMining(true)}
            onMouseLeave={() => setMining(false)}
          >
            OpenSUTD Website
          </a>
        </Text>
      </div>

      <SubHeader>Source Code</SubHeader>
      <div>
        <Text>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setMining(true)}
            onMouseLeave={() => setMining(false)}
          >
            Server Source
          </a>
        </Text>
        <Text>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setMining(true)}
            onMouseLeave={() => setMining(false)}
          >
            Website Source
          </a>
        </Text>
      </div>
    </PageBase>
  );
};

export default ElsewherePageComp;
