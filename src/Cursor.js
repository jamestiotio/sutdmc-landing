import React, { useRef, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

const Mine = keyframes`
  0% {
    transform: rotate(20deg);
  }

  100% {
    transform: rotate(-30deg);
  }
`;

const MineMixin = css`
  animation: ${Mine} 0.3s linear infinite alternate;
`;

const Cursor = styled.img`
  position: fixed;
  left: 0;
  top: 0;
  width: ${props =>
    props.blockCount >= 100
      ? "60px"
      : props.blockCount >= 50
      ? "55px"
      : props.blockCount >= 30
      ? "50px"
      : props.blockCount >= 10
      ? "45px"
      : "40px"};
  z-index: 999;
  pointer-events: none;

  @media (max-width: 896px) {
    display: none;
  }

  ${props => (props.mining ? MineMixin : null)}
`;

const CursorComp = ({ mining, blockCount }) => {
  const cursorRef = useRef();

  useEffect(() => {
    const cursor = cursorRef.current;

    window.addEventListener("mousemove", e => {
      cursor.style.left = `${e.clientX - 20}px`;
      cursor.style.top = `${e.clientY - 20}px`;
    });
  }, []);

  return (
    <Cursor
      ref={cursorRef}
      src={require(`./assets/images/${
        blockCount >= 100
          ? "pickaxe-five"
          : blockCount >= 50
          ? "pickaxe-four"
          : blockCount >= 30
          ? "pickaxe-three"
          : blockCount >= 10
          ? "pickaxe-two"
          : "pickaxe-one"
      }.png`)}
      alt="pickaxe cursor"
      mining={mining}
      blockCount={blockCount}
    />
  );
};

export default CursorComp;
