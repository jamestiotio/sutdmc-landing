import React, { useEffect } from "react";
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
  width: 40px;
  z-index: 999;
  pointer-events: none;

  @media (max-width: 896px) {
    display: none;
  }

  ${props => (props.mining ? MineMixin : null)}
`;

const CursorComp = ({ mining }) => {
  useEffect(() => {
    const cursor = document.getElementById("cursor");

    window.addEventListener("mousemove", e => {
      //   cursor.style.transform = `translate(${e.clientX - 20}px, ${e.clientY -
      //     20}px)`;
      cursor.style.left = `${e.clientX - 20}px`;
      cursor.style.top = `${e.clientY - 20}px`;
    });
  }, []);

  return (
    <Cursor
      id="cursor"
      src={require("./assets/images/pickaxe.png")}
      alt="pickaxe cursor"
      mining={mining}
    />
  );
};

export default CursorComp;
