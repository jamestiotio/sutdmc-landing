import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import Achievement from "./Achievement";

import Text from "./components/Text";

const Counter = styled.div`
  position: fixed;
  left: 50%;
  top: 15vh;
  transform: translateX(-50%);
  z-index: 99;
  text-align: center;
  width: 100%;

  @media (max-width: 896px) {
    top: 7.5vh;
  }

  @media (max-width: 576px) {
    top: 6vh;
  }
`;

const CounterText = styled(Text)`
  font-size: 18px;

  @media (max-width: 896px) {
    font-size: 16px;
  }

  @media (max-width: 576px) {
    font-size: 12px;
  }
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
            <span className="colored">
              {blockCount} {blockCount > 1 ? "blocks" : "block"} mined!{" "}
            </span>
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
