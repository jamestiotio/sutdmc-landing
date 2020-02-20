import React, { useRef, useEffect, useContext } from "react";
import styled, { keyframes } from "styled-components";
import { useLocation } from "react-router-dom";

import { MiningContext } from "./Context";

const HeroImage = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  width: 440px;
  height: 540px;

  @media (max-width: 1200px) {
    width: 340px;
    height: 440px;
  }

  @media (max-width: 896px) {
    width: calc(30vh * 0.8);
    height: 30vh;
  }

  @media (max-width: 576px) {
    width: calc(25vh * 0.8);
    height: 25vh;
  }
`;

const StyledCanvas = styled.canvas`
  width: 100%;
  height: 100%;
`;

const Disappear = keyframes`
  100% {
    transform: translate(30px, -50px);
    opacity: 0;
  }
`;

const Block = styled.img`
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  width: 50px;
  animation: ${Disappear} 0.4s linear;

  @media (max-width: 896px) {
    width: 40px;
  }

  @media (max-width: 414px) {
    width: 30px;
  }
`;

function HeroImageComp({ blockCount, setBlockCount }) {
  const setMining = useContext(MiningContext);
  const location = useLocation();
  const canvasRef = useRef();
  const homeImageRef = useRef();
  const aboutImageRef = useRef();
  const elsewhereImageRef = useRef();
  const errorImageRef = useRef();
  const blockImageRef = useRef();

  function pixelate(canvas, image, v) {
    const ctx = canvas.getContext("2d");
    const size = v * 0.01;
    const w = canvas.width * size;
    const h = canvas.height * size;

    // draw original image to the scaled size
    ctx.drawImage(image, 0, 0, w, h);

    // then draw that scaled image thumb back to fill canvas
    // As smoothing is off the result will be pixelated
    ctx.drawImage(canvas, 0, 0, w, h, 0, 0, canvas.width, canvas.height);
  }

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.msImageSmoothingEnabled = false;
    ctx.mozImageSmoothingEnabled = false;
    ctx.webkitImageSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    let image;
    switch (location.pathname) {
      case "/":
        image = homeImageRef.current;
        break;
      case "/about":
        image = aboutImageRef.current;
        break;
      case "/about/":
        image = aboutImageRef.current;
        break;
      case "/elsewhere":
        image = elsewhereImageRef.current;
        break;
      case "/elsewhere/":
        image = elsewhereImageRef.current;
        break;
      default:
        image = errorImageRef.current;
        break;
    }

    requestAnimationFrame(() => {
      pixelate(canvas, image, 3);
      setTimeout(() => pixelate(canvas, image, 4), 100);
      setTimeout(() => pixelate(canvas, image, 5), 200);
      setTimeout(() => pixelate(canvas, image, 6), 300);
      setTimeout(() => pixelate(canvas, image, 7), 400);
      setTimeout(() => pixelate(canvas, image, 8), 500);
      setTimeout(() => pixelate(canvas, image, 100), 600);
    });
  }, [location]);

  return (
    <HeroImage>
      <StyledCanvas
        id="canvas"
        width="450"
        height="550"
        ref={canvasRef}
        onMouseEnter={() => setMining(true)}
        onMouseLeave={() => setMining(false)}
        onClick={
          window.matchMedia("(any-hover: hover)").matches
            ? e => {
                blockImageRef.current.style.left = `${e.clientX - 20}px`;
                blockImageRef.current.style.top = `${e.clientY - 20}px`;
                blockImageRef.current.style.display = "block";
                setBlockCount(blockCount + 1);
                setTimeout(() => {
                  blockImageRef.current.style.display = "none";
                }, 400);
              }
            : null
        }
      ></StyledCanvas>
      <img
        src={require("./assets/images/block-home.png")}
        alt="Minecraft block with words 'SUTD Land'"
        ref={homeImageRef}
        style={{ display: "none" }}
      />
      <img
        src={require("./assets/images/block-about.png")}
        alt="Minecraft block with words 'About This'"
        ref={aboutImageRef}
        style={{ display: "none" }}
      />
      <img
        src={require("./assets/images/block-elsewhere.png")}
        alt="Minecraft block with words 'Else Where'"
        ref={elsewhereImageRef}
        style={{ display: "none" }}
      />
      <img
        src={require("./assets/images/block-404.png")}
        alt="Minecraft block with words '404"
        ref={errorImageRef}
        style={{ display: "none" }}
      />
      <Block
        src={require("./assets/images/block.png")}
        alt="Minecraft block"
        ref={blockImageRef}
        style={{ display: "none" }}
        aria-hidden="true"
      />
    </HeroImage>
  );
}

export default HeroImageComp;
