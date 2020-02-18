import React from "react";
import styled from "styled-components";

import Modal from "./components/Modal";
import Text from "./components/Text";
import CTA from "./components/CTA";

const StyledModal = styled(Modal)`
  @media (max-width: 896px) {
    display: none;
  }
`;

const Achievement = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  overflow: scroll;

  & > * + * {
    margin-top: 20px;
  }
`;

const AchievementImage = styled.img`
  width: 50px;
  align-self: center;
  margin-bottom: 40px;
`;

const ShareBlock = styled.div`
  & > * + * {
    margin-top: 10px;
  }
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

const AchievementComp = ({ dismissFunc, blockCount }) => {
  const pickaxe = { name: "" };

  if (blockCount === 10) {
    pickaxe.name = "The Super-Cool 3D-Printed Pickaxe";
  } else if (blockCount === 30) {
    pickaxe.name = "The Useful Groupmates Summoning Pickaxe";
  } else if (blockCount === 50) {
    pickaxe.name = "The Better Pickaxe By Design";
  } else if (blockCount === 201) {
    pickaxe.name = "The Ultimate Pickaxe of Eternal 5.3 GPA";
  }

  return (
    <StyledModal dismissFunc={dismissFunc}>
      <Achievement>
        <AchievementImage
          src={require(`./assets/images/${
            blockCount === 10
              ? "pickaxe-two"
              : blockCount === 30
              ? "pickaxe-three"
              : blockCount === 50
              ? "pickaxe-four"
              : blockCount === 201
              ? "pickaxe-five"
              : "clown"
          }.png`)}
          alt={
            blockCount === 10 ||
            blockCount === 30 ||
            blockCount === 50 ||
            blockCount === 201
              ? "pickaxe"
              : "clown"
          }
        />
        <Text>
          {blockCount === 10 ? (
            <>
              Congratulations, you have unlocked{" "}
              <span class="colored">{pickaxe.name}</span>!
            </>
          ) : blockCount === 30 ? (
            <>
              Congratulations (wowz you are still here), you have unlocked{" "}
              <span class="colored">{pickaxe.name}</span>!
            </>
          ) : blockCount === 50 ? (
            <>
              Seriously, don't you have anything better to do? But anyway, you
              have unlocked <span class="colored">{pickaxe.name}</span>! Nothing
              else after this, go and do your homework or something.
            </>
          ) : blockCount === 100 ? (
            <>
              Congratulations, you have unlocked{" "}
              <span class="colored">...nothing</span>??? LOL, don't look so
              disappointed, I already told you just now there was nothing
              else... 🙄
            </>
          ) : blockCount === 201 ? (
            <>
              OK FINE LAST ONE I SWEAR, and honestly for all that time you have
              just wasted on clicking instead of mugging, you probably need{" "}
              <span class="colored">{pickaxe.name}</span>! Now shoo!
            </>
          ) : null}
        </Text>
        <ShareBlock>
          <Text>Share your achievement:</Text>
          <CTA
            href="https://www.facebook.com/sharer/sharer.php?u=https://sutdmc.opensutd.org/"
            onClick={e => openSocialPopup(e, "Facebook")}
          >
            Facebook
          </CTA>
          <CTA
            href={`http://twitter.com/share?text=I unlocked ${
              pickaxe.name ? pickaxe.name : "nothing"
            } on SUTD Minecraft! Come mine with me at&url=https://sutdmc.opensutd.org/&hashtags=betterworldbyminecraft`}
            onClick={e => openSocialPopup(e, "Twitter")}
          >
            Twitter
          </CTA>
        </ShareBlock>
      </Achievement>
    </StyledModal>
  );
};

export default AchievementComp;
