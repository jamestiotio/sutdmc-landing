import React from "react";
import styled from "styled-components";

const Modal = styled.dialog`
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
      <Modal open {...others}>
        {children}
      </Modal>
    </Overlay>
  );
};

export default ModalComp;
