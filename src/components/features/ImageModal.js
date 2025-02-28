import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";

// Styled components for the modal
const ModalOverlay = styled.div`
  ${tw`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center`}
`;

const ModalContent = styled.div`
  ${tw`bg-white p-6 rounded-lg w-96 shadow-lg`}
`;

const ModalTitle = styled.h2`
  ${tw`text-xl font-bold mb-4`}
`;

const FileInput = styled.input`
  ${tw`mb-4`}
`;

const ImagePreview = styled.img`
  ${tw`w-full h-48 object-cover mb-4 rounded-lg`}
`;

const ButtonContainer = styled.div`
  ${tw`flex justify-end gap-2`}
`;

const CancelButton = styled.button`
  ${tw`bg-gray-200 text-gray-700 px-4 py-2 rounded-lg`}
`;

const UploadButton = styled.button`
  ${tw`bg-primary-500 text-white px-4 py-2 rounded-lg`}
`;

// Main component
const ImageUploadModal = ({ isOpen, onClose, onUpload, title }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);

  if (!isOpen) return null; // Ensures the modal is completely removed from the DOM when closed

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedFile(file);
      // Generate a preview URL for the image
      const fileURL = URL.createObjectURL(file);
      setPreviewURL(fileURL);
    }
  };

  // Handle upload
  const handleUpload = () => {
    if (selectedFile) {
      onUpload(selectedFile);
      onClose();
    }
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalTitle>{title}</ModalTitle>
        <FileInput type="file" accept="image/*" onChange={handleFileChange} />
        {previewURL && <ImagePreview src={previewURL} alt="Preview" />} {/* Show image preview */}
        <ButtonContainer>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
          <UploadButton onClick={handleUpload}>Upload</UploadButton>
        </ButtonContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ImageUploadModal;
