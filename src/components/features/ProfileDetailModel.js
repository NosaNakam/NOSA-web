import styled, { css } from "styled-components";
import { FaWindowClose } from "react-icons/fa";
import { ImOffice } from "react-icons/im";
import tw from "twin.macro";
const Container = styled.div`
  ${tw`w-[90%] p-2 mx-auto h-[90%] mt-5 fixed bg-black/[0.2] z-[20] inset-0 rounded-md shadow `}
  .closeContainer {
    ${tw`relative w-full flex justify-end `}
  }
`;
const InnerContainer = tw.div`cursor-pointer text-xl lg:text-2xl text-primary-500 absolute top-0 right-0 m-5 bg-transparent flex justify-center items-center`;
const FlexContainer = tw.div`flex flex-col lg:flex-row`;
const FlexLeft = tw.div`w-[20%]`;
const FlexRight = tw.div`w-[80%] ml-12`;
const NameContainer = tw.div`pb-5`;
const Name = tw.div` font-bold text-5xl text-white`;
const Position = tw.div` font-bold text-2xl text-white -mt-3`;
const CardImage = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`w-[18rem] h-[18rem] bg-contain bg-center bg-cover rounded `}
`;
const NosaOfficeFlex = tw.div`flex items-center gap-5`;
const NosaOffice = tw.div`text-2xl font-bold text-white`;
export default ({ detail }) => {
  return (
    <Container>
      <div className="close">
        <InnerContainer>
          <FaWindowClose />
        </InnerContainer>
      </div>
      <FlexContainer>
        <FlexLeft>
          <CardImage imageSrc={detail.imageSrc} />
        </FlexLeft>
        <FlexRight>
          <NameContainer>
            <Name>Alexander Rengkat Gudam</Name>
            <Position>(NOSA President)</Position>
          </NameContainer>
          <NosaOfficeFlex>
            <ImOffice style={{ color: "white" }} />
            <NosaOffice>President</NosaOffice>
          </NosaOfficeFlex>
        </FlexRight>
      </FlexContainer>
    </Container>
  );
};
