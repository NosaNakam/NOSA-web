import React, { useState } from "react";
import { Container, ContentWithPaddingXl } from "../misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { SectionHeading, Subheading as SubheadingBase } from "../misc/Headings";
import { SectionDescription } from "../misc/Typography";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { useGetAllGalleryQuery } from "../../Redux/Api/GalleryApiSlice";
import Modal from "react-modal";

// Styled Components
const HeadingContainer = tw.div`text-center`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)``;
const Description = tw(SectionDescription)`mx-auto`;

const GalleryGrid = tw.div`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10`;
const GallerySet = styled.div`
  ${tw`cursor-pointer bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300`}
`;
const GalleryImage = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`h-48 bg-cover bg-center`}
`;
const GalleryTitle = tw.h3`text-lg font-bold p-4 text-center`;

// Modal Styling
const ModalContent = styled.div`
  ${tw`bg-white rounded-lg p-6 w-full max-w-4xl mx-auto relative`}
  width: 60%; // Set modal width to 60% of the screen
`;
const ModalImage = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`h-96 bg-cover bg-center rounded-lg`}
`;
const ModalCaption = tw.p`mt-4 text-center text-gray-700`;
const ModalNav = tw.div`flex justify-between mt-4`;
const NavButton = styled.button`
  ${tw`px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600 transition-colors duration-300`}
`;

// Modal Configuration
Modal.setAppElement("#root"); // Set the root element for accessibility

const GalleryPage = () => {
  const { data, isLoading } = useGetAllGalleryQuery();
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const galleries = data?.data || [];

  // Open modal with selected gallery
  const openModal = (gallery) => {
    setSelectedGallery(gallery);
    setCurrentImageIndex(0);
  };

  // Close modal
  const closeModal = () => {
    setSelectedGallery(null);
  };

  // Navigate to next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < selectedGallery.images.length - 1 ? prevIndex + 1 : 0
    );
  };

  // Navigate to previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : selectedGallery.images.length - 1
    );
  };

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          <Subheading>Our Gallery</Subheading>
          <Heading>Memorable Moments</Heading>
          <Description>
            Explore our collection of memorable moments captured over the years.
          </Description>
        </HeadingContainer>

        <GalleryGrid>
          {galleries.map((gallery) => (
            <GallerySet key={gallery._id} onClick={() => openModal(gallery)}>
              <GalleryImage imageSrc={gallery.images[0]} />
              <GalleryTitle>{gallery.title}</GalleryTitle>
            </GallerySet>
          ))}
        </GalleryGrid>

        {/* Modal for Gallery Details */}
        <Modal
          isOpen={!!selectedGallery}
          onRequestClose={closeModal}
          contentLabel="Gallery Modal"
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.75)",
              zIndex: 1000,
            },
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              padding: 0,
              border: "none",
              borderRadius: "0.5rem",
              width: "60%", // Set modal width to 60% of the screen
              maxWidth: "1200px", // Optional: Set a max-width for very large screens
            },
          }}>
          {selectedGallery && (
            <ModalContent>
              <ModalImage imageSrc={selectedGallery.images[currentImageIndex]} />
              <ModalCaption>{selectedGallery.caption}</ModalCaption>
              <ModalNav>
                <NavButton onClick={prevImage}>Previous</NavButton>
                <NavButton onClick={nextImage}>Next</NavButton>
              </ModalNav>
            </ModalContent>
          )}
        </Modal>
      </ContentWithPaddingXl>
    </Container>
  );
};

export default GalleryPage;
