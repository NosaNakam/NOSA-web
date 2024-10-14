import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FaPlus, FaTimes } from "react-icons/fa";

const Container = tw.div`w-full flex flex-col gap-5`;
const GalleryContainer = tw.div`w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-5 bg-[#f9f9f9] rounded-md shadow-md`;
const ImageWrapper = styled.div`
  ${tw`relative overflow-hidden rounded-md cursor-pointer hover:opacity-75`}
  height: 200px;
  background-image: ${(props) => `url("${props.imageSrc}")`};
  background-size: cover;
  background-position: center;
`;
const UploadContainer = tw.div`w-full bg-white rounded-md shadow-md p-5 mt-5 flex justify-between items-center`;
const UploadButton = tw.button`flex items-center gap-2 py-2 px-4 rounded-md bg-primary-500 text-white font-bold transition duration-200 hover:bg-primary-700`;
const ModalOverlay = tw.div`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50`;
const ModalContent = styled.div`
  ${tw`relative bg-white rounded-md shadow-lg p-5`}
  width: 80%;
  max-width: 600px;
`;
const ModalImage = styled.div`
  ${tw`rounded-md overflow-hidden`}
  height: 400px;
  background-image: ${(props) => `url("${props.imageSrc}")`};
  background-size: cover;
  background-position: center;
`;

const sampleImages = [
  "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG5hdHVyZXxlbnwwfHx8fDE2ODQ5MTU3Njg&ixlib=rb-4.0.3&q=80&w=400",
  "https://images.unsplash.com/photo-1521747116042-5a810fda9664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGZvcmVzdHxlbnwwfHx8fDE2ODQ5MTU3NzQ&ixlib=rb-4.0.3&q=80&w=400",
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fGFuaW1hbHN8ZW58MHx8fHwxNjg0OTE1Nzgw&ixlib=rb-4.0.3&q=80&w=400",
  "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fGJpcmRzfGVufDB8fHx8MTY4NDkxNTc4Ng&ixlib=rb-4.0.3&q=80&w=400",
];

const Media = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <Container>
      {/* Upload Section */}
      <UploadContainer>
        <h2 className="font-bold text-lg">Media Gallery</h2>
        <UploadButton>
          <FaPlus />
          <span>Upload Image</span>
        </UploadButton>
      </UploadContainer>

      {/* Gallery Section */}
      <GalleryContainer>
        {sampleImages.map((image, index) => (
          <ImageWrapper key={index} imageSrc={image} onClick={() => handleImageClick(image)} />
        ))}
      </GalleryContainer>

      {/* Modal for Image Viewer */}
      {selectedImage && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalImage imageSrc={selectedImage} />
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}>
              <FaTimes fontSize={24} color="#333" />
            </button>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default Media;
