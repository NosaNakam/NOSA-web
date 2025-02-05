import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";

const ModalOverlay = tw.div`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center`;
const ModalContainer = tw.div`bg-white rounded-lg shadow-lg p-8 max-w-sm w-full text-center`;
const ModalHeader = tw.h2`text-xl font-bold text-gray-900`;
const ModalText = tw.p`text-gray-700 mt-2`;
const CloseButton = tw.button`mt-4 bg-primary-500 text-white py-2 px-6 rounded-lg hover:bg-primary-700 transition-all duration-300`;

const MessageModal = ({ isOpen, onClose, head, text }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>{head}</ModalHeader>
        <ModalText>{text}</ModalText>
        <CloseButton onClick={onClose}>OK</CloseButton>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default MessageModal;
