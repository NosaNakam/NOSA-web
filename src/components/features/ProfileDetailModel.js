import styled from "styled-components";
import { FaWindowClose } from "react-icons/fa";
import tw from "twin.macro";
const Container = styled.div`
  ${tw`w-[90%] mx-auto h-[90%] mt-5 fixed bg-black/[0.2] z-[20] inset-0 `}
  .closeContainer {
    ${tw`relative w-full flex justify-end `}
  }
`;
const InnerContainer = tw.div` cursor-pointer text-xl text-primary-500 absolute top-0 right-0 m-5 bg-transparent flex justify-center items-center`;

export default () => {
  return (
    <Container>
      <div className="close">
        <InnerContainer>
          <FaWindowClose />
        </InnerContainer>
      </div>
    </Container>
  );
};
