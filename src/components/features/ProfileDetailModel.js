import styled from "styled-components";
import tw from "twin.macro";
const Container = styled.div`
  ${tw`w-[90%] mx-auto h-full fixed bg-black/[0.2] z-[20] inset-0 `}
  .closeContainer {
    ${tw`w-full flex justify-end `}
  }
`;
const InnerContainer = tw.div`bg-white w-5 h-5`;

export default () => {
  return (
    <Container>
      <div className="close">
        <InnerContainer></InnerContainer>
      </div>
    </Container>
  );
};
