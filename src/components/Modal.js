import React from "react";
import styled from "styled-components";

const Modal = styled.div`
  width: 500px;
  height: 600px;
  padding: 50px;
  background-color: var(--color-background);
  position: relative;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DismissButton = styled.button`
  position: absolute;
  right: 20px;
  top: 10px;
  font-family: var(--font-primary);
  font-size: 42px;
  color: var(--color-text);
  cursor: none;

  &:hover {
    color: var(--color-grey);
  }
`;

const ModalComp = ({ dismissFunc, children, ...others }) => {
  return (
    <Overlay
      id="overlay"
      onClick={e => {
        if (e.target === document.getElementById("overlay")) {
          dismissFunc();
        }
      }}
    >
      <Modal {...others}>
        <DismissButton onClick={dismissFunc}>x</DismissButton>
        {children}
      </Modal>
    </Overlay>
  );
};

export default ModalComp;
