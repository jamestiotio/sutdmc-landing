import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const HeroImage = styled.div`
  position: relative;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;

  // border: 1px solid red;
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
      pixelate(canvas, image, 3);
      setTimeout(() => pixelate(canvas, image, 4), 100);
      setTimeout(() => pixelate(canvas, image, 5), 200);
      setTimeout(() => pixelate(canvas, image, 6), 300);
      setTimeout(() => pixelate(canvas, image, 7), 400);
      setTimeout(() => pixelate(canvas, image, 8), 500);
      setTimeout(() => pixelate(canvas, image, 9), 600);
      setTimeout(() => pixelate(canvas, image, 10), 700);
      setTimeout(() => pixelate(canvas, image, 100), 800);
    });
  }, [location]);

  return (
    <HeroImage>
      <canvas id="canvas" width="500" height="580" ref={canvasRef}></canvas>
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
