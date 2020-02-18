import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import Achievement from "./Achievement";

import Text from "./components/Text";

const Counter = styled.div`
  position: fixed;
  left: 50%;
  bottom: 5vh;
  transform: translateX(-50%);
  z-index: 99;
  text-align: center;
  width: 100%;

  @media (max-width: 896px) {
    display: none;
  }
`;

const CounterText = styled(Text)`
  font-size: 18px;
`;

const CounterComp = ({ blockCount }) => {
  const [achievementModalOpen, setAchievementModalOpen] = useState(false);

  useEffect(() => {
    if (
      blockCount === 10 ||
      blockCount === 30 ||
      blockCount === 50 ||
      blockCount === 100 ||
      blockCount === 201
    ) {
      setAchievementModalOpen(true);
    }
  }, [blockCount]);

  return (
    <>
      {blockCount >= 3 ? (
        <Counter>
          <CounterText>
            {blockCount} {blockCount > 1 ? "blocks" : "block"} mined!{" "}
          </CounterText>
          {achievementModalOpen &&
            ReactDOM.createPortal(
              <Achievement
                dismissFunc={() => setAchievementModalOpen(false)}
                blockCount={blockCount}
              />,
              document.querySelector("#modal")
            )}
        </Counter>
      ) : null}
    </>
  );
};

export default React.memo(CounterComp);
