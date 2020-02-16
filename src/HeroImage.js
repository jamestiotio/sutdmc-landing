import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const HeroImage = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  // border: 1px solid green;

  width: 450px;
  height: 550px;

  @media (max-width: 1200px) {
    width: 350px;
    height: 450px;
  }

  @media (max-width: 896px) {
    width: calc(30vh * 0.8);
    height: 30vh;
  }

  @media (max-width: 414px) {
    width: calc(20vh * 0.8);
    height: 20vh;
  }
`;

const StyledCanvas = styled.canvas`
  width: 100%;
  height: 100%;
`;

function HeroImageComp() {
  const location = useLocation();
  const canvasRef = useRef();
  const mainImageRef = useRef();
  const contributeImageRef = useRef();
  const changelogImageRef = useRef();
  const elsewhereImageRef = useRef();

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
    ctx.mozImageSmoothingEnabled = false;
    ctx.webkitImageSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    let image;
    switch (location.pathname) {
      case "/":
        image = mainImageRef.current;
        break;
      case "/contribute":
        image = contributeImageRef.current;
        break;
      case "/changelog":
        image = changelogImageRef.current;
        break;
      default:
        image = elsewhereImageRef.current;
    }

    requestAnimationFrame(() => {
      // pixelate(canvas, image, 3);
      // setTimeout(() => pixelate(canvas, image, 4), 100);
      // setTimeout(() => pixelate(canvas, image, 5), 200);
      // setTimeout(() => pixelate(canvas, image, 6), 300);
      // setTimeout(() => pixelate(canvas, image, 7), 400);
      // setTimeout(() => pixelate(canvas, image, 8), 500);
      // setTimeout(() => pixelate(canvas, image, 9), 600);
      // setTimeout(() => pixelate(canvas, image, 10), 700);
      // setTimeout(() => pixelate(canvas, image, 100), 800);

      pixelate(canvas, image, 3);
      setTimeout(() => pixelate(canvas, image, 4), 100);
      setTimeout(() => pixelate(canvas, image, 5), 200);
      setTimeout(() => pixelate(canvas, image, 6), 300);
      setTimeout(() => pixelate(canvas, image, 7), 400);
      setTimeout(() => pixelate(canvas, image, 8), 500);
      // setTimeout(() => pixelate(canvas, image, 9), 600);
      setTimeout(() => pixelate(canvas, image, 10), 600);
      setTimeout(() => pixelate(canvas, image, 50), 700);
    });
  }, [location]);

  return (
    <HeroImage>
      <StyledCanvas
        id="canvas"
        width="450"
        height="550"
        ref={canvasRef}
      ></StyledCanvas>
      <img
        src={require("./assets/images/block-main.png")}
        alt="pic"
        ref={mainImageRef}
        style={{ display: "none" }}
      />
      <img
        src={require("./assets/images/block-contribute.png")}
        alt="pic"
        ref={contributeImageRef}
        style={{ display: "none" }}
      />
      <img
        src={require("./assets/images/block-changelog.png")}
        alt="pic"
        ref={changelogImageRef}
        style={{ display: "none" }}
      />
      <img
        src={require("./assets/images/block-elsewhere.png")}
        alt="pic"
        ref={elsewhereImageRef}
        style={{ display: "none" }}
      />
    </HeroImage>
  );
}

export default HeroImageComp;
