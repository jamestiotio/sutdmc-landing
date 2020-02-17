import React from "react";
import styled from "styled-components";

import Text from "./components/Text";
import SocialCTA from "./components/SocialCTA";

const Counter = styled.div`
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  z-index: 998;
  padding: 20px 40px;
  text-align: center;
  width: 100%;

  @media (max-width: 896px) {
    display: none;
  }
`;

const CounterText = styled(Text)`
  font-size: 18px;
`;

const openSocialPopup = (e, platform) => {
  let popupDims;
  switch (platform) {
    case "Facebook":
      popupDims = [600, 400];
      break;
    case "Twitter":
      popupDims = [550, 285];
      break;
    default:
      popupDims = [0, 0];
  }

  var href = e.target.href;
  e.preventDefault();
  window.open(
    href,
    platform,
    `toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,width=${
      popupDims[0]
    },height=${popupDims[1]},resizable=1`
  );
};

const CounterComp = ({ blockCount }) => {
  const achievement = { pickaxe: "", message: "" };

  if (blockCount === 10) {
    achievement.pickaxe = "The Super-Cool 3D-Printed Pickaxe";
    achievement.message = "Congratulations, you have unlocked";
  } else if (blockCount === 30) {
    achievement.pickaxe = "The Useful Groupmates Summoning Pickaxe";
    achievement.message =
      "Congratulations (wowz you still here), you have unlocked";
  } else if (blockCount === 50) {
    achievement.pickaxe = "The Better Pickaxe By Design";
    achievement.message =
      "Congratulations (aren't your fingers tired lmao), you have unlocked";
  } else if (blockCount === 100) {
    achievement.pickaxe = "The Ultimate Pickaxe of Eternal 5.3 GPA";
    achievement.message =
      "For all the time wasted on clicking instead of mugging, you probably need";
  }

  return (
    <>
      {blockCount >= 3 ? (
        <Counter>
          <CounterText>
            {blockCount} {blockCount > 1 ? "blocks" : "block"} mined!{" "}
            {achievement.pickaxe ? (
              <>
                {achievement.message}{" "}
                <span class="colored">{achievement.pickaxe}</span>! Share your
                achievements:{" "}
                <SocialCTA
                  href="https://www.facebook.com/sharer/sharer.php?u=https://sutdmc.opensutd.org/"
                  onClick={e => openSocialPopup(e, "Facebook")}
                >
                  Facebook
                </SocialCTA>{" "}
                <SocialCTA
                  href={`http://twitter.com/share?text=I unlocked the ${achievement.pickaxe} on SUTD Minecraft! Come mine with me at&url=https://sutdmc.opensutd.org/&hashtags=betterworldbyminecraft`}
                  onClick={e => openSocialPopup(e, "Twitter")}
                >
                  Twitter
                </SocialCTA>
              </>
            ) : null}
          </CounterText>
        </Counter>
      ) : null}
    </>
  );
};

export default CounterComp;
