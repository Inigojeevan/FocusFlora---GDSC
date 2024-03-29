import React from "react";
import styled from "styled-components";

const ModalContainer = ({isOpen, onClose} :any) => {
  return (
    <Container>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Modal Title</ModalTitle>
          <ModalCloseButton onClick={onClose}>X</ModalCloseButton>
        </ModalHeader>
        <ModalBody></ModalBody>
      </ModalContent>
    </Container>
  );
};

export default ModalContainer;

const Container = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
  z-index: 150;

`;

const ModalContent = styled.div`
    width: 60rem;
    height: 40rem;
    background-color: white;
`;
const ModalHeader = styled.div``;
const ModalTitle = styled.h1``;
const ModalCloseButton = styled.button``;
const ModalBody = styled.div``;