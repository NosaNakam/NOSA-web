import styled, { css } from "styled-components";
import { FaWindowClose, FaFacebookSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { ImOffice } from "react-icons/im";
import { PiCheckSquareOffsetFill } from "react-icons/pi";
import tw from "twin.macro";
import { useDispatch, useSelector } from "react-redux";
import { Fragment } from "react";
const Container = styled.div`
  ${tw`w-[90%] p-4 mx-auto h-[90%] overflow-auto mt-5 fixed bg-white z-[20] inset-0 rounded-md shadow `}
  .closeContainer {
    ${tw`relative w-full flex justify-end `}
  }
`;
// text - gray - 400;
const InnerContainer = tw.div`cursor-pointer text-xl lg:text-2xl text-primary-500 absolute top-0 right-0 m-5 bg-transparent flex justify-center items-center`;
const FlexContainer = tw.div`flex flex-col lg:flex-row`;
const FlexLeft = tw.div`w-[20%]`;
const FlexRight = tw.div`w-full lg:w-[80%] ml-0 lg:ml-[5rem]`;
const FlexRightHead = tw.div`lg:h-[18rem]`;
const NameContainer = tw.div`pb-5`;
const Name = tw.div` font-bold text-2xl lg:text-5xl text-gray-900 mt-5 lg:mt-0`;
const Position = tw.div` font-bold text-xl lg:text-3xl`;
const CardImage = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`w-[20rem] md:w-[18rem] h-[18rem] bg-contain bg-center bg-cover rounded `}
`;
const NosaOfficeFlex = tw.div`flex flex-col lg:flex-row lg:items-center lg:gap-8 text-primary-600`;
const IconFlex = tw.div`cursor-pointer flex items-center gap-3 text-primary-600 `;
const SocialIcon = tw.div`flex items-center gap-5 text-gray-600 text-2xl py-2`;
const PresentWorkPlace = tw.div`text-gray-600`;
const Bio = tw.div`text-sm py-5 lg:p-2`;

export default () => {
  const { openProfileModel, profileDetails } = useSelector((store) => store.AppSlice);
  const dispatch = useDispatch();
  return (
    <Container>
      <div className="close">
        <InnerContainer>
          <FaWindowClose onClick={() => dispatch(openProfileModel())} />
        </InnerContainer>
      </div>
      <FlexContainer>
        <FlexLeft>
          <CardImage imageSrc={profileDetails && profileDetails.image} />
        </FlexLeft>
        <FlexRight>
          <FlexRightHead>
            <NameContainer>
              <Name>{profileDetails && profileDetails.name}</Name>
              <NosaOfficeFlex>
                <IconFlex>
                  <ImOffice style={{ fontSize: "1.5rem" }} />
                  <Position>{profileDetails?.position}</Position>
                </IconFlex>
                <IconFlex>
                  <PiCheckSquareOffsetFill style={{ fontSize: "1.5rem" }} />
                  <Position>NOSA Set {profileDetails?.setOf}</Position>
                </IconFlex>
              </NosaOfficeFlex>
              <SocialIcon>
                <FaFacebookSquare />
                <FaSquareXTwitter />
                <FaInstagramSquare />
                <FaLinkedin />
              </SocialIcon>
            </NameContainer>

            <PresentWorkPlace>
              Currently working as {profileDetails?.currentJob} with {profileDetails?.employer}
            </PresentWorkPlace>
          </FlexRightHead>
          {/* {profileDetails?.EducationalBackground?.map((detail, index) => {
            return (
              <Fragment key={index}>
                <Bio>{detail?.primaryEducation[0]}</Bio>
                <Bio>{detail?.secondaryEducation[0]}</Bio>
                <Bio>{detail?.undergraduate[0]}</Bio>
              </Fragment>
            );
          })} */}
          {profileDetails?.portfolio?.map((detail, index) => {
            return (
              <Fragment key={index}>
                <Bio>{detail}</Bio>
              </Fragment>
            );
          })}
        </FlexRight>
      </FlexContainer>
    </Container>
  );
};
