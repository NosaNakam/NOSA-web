import styled, { css } from "styled-components";
import { FaWindowClose, FaFacebookSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { ImOffice } from "react-icons/im";
import { PiCheckSquareOffsetFill } from "react-icons/pi";
import tw from "twin.macro";
const Container = styled.div`
  ${tw`w-[90%] p-4 mx-auto h-[90%] mt-5 fixed bg-white z-[20] inset-0 rounded-md shadow `}
  .closeContainer {
    ${tw`relative w-full flex justify-end `}
  }
`;
// text - gray - 400;
const InnerContainer = tw.div`cursor-pointer text-xl lg:text-2xl text-primary-500 absolute top-0 right-0 m-5 bg-transparent flex justify-center items-center`;
const FlexContainer = tw.div`flex flex-col lg:flex-row`;
const FlexLeft = tw.div`w-[20%]`;
const FlexRight = tw.div`w-[80%] ml-[5rem] overflow-auto`;
const FlexRightHead = tw.div`h-[18rem]`;
const NameContainer = tw.div`pb-5`;
const Name = tw.div` font-bold text-5xl text-white text-gray-900`;
const Position = tw.div` font-bold text-3xl`;
const CardImage = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`w-[18rem] h-[18rem] bg-contain bg-center bg-cover rounded `}
`;
const NosaOfficeFlex = tw.div`flex items-center gap-8 text-primary-600`;
const IconFlex = tw.div`flex items-center gap-3 text-primary-600`;
const SocialIcon = tw.div`flex items-center gap-5 text-gray-600 text-2xl py-2`;
const PresentWorkPlace = tw.div`text-gray-600`;
const Bio = tw.div`text-sm p-2 overflow-auto`;
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
          <FlexRightHead>
            <NameContainer>
              <Name>Alexander Rengkat Gudam</Name>
              <NosaOfficeFlex>
                <IconFlex>
                  <ImOffice style={{ fontSize: "1.5rem" }} />
                  <Position>NOSA President</Position>
                </IconFlex>
                <IconFlex>
                  <PiCheckSquareOffsetFill style={{ fontSize: "1.5rem" }} />
                  <Position>NOSA Set '89</Position>
                </IconFlex>
              </NosaOfficeFlex>
              <SocialIcon>
                <FaFacebookSquare />
                <FaSquareXTwitter />
                <FaInstagramSquare />
                <FaLinkedin />
              </SocialIcon>
            </NameContainer>

            <PresentWorkPlace> Marketer with Plateau State Brewis Company Limited</PresentWorkPlace>
          </FlexRightHead>

          <Bio>
            After the execution of Badu Bonsu II, the throne of Busua remained empty for ten years,
            following the ban on rebuilding the city. The Dutch dismiss the position of supreme
            leader and refuse to recognize it during this period. Governor Anthony Van der Eb lifted
            the ban on appointment in 1848, but did not recognize any indigenous authority or rights
            to the supreme leader. That year, Badu Bonsu III was designated as successor, but died a
            year later. Badu Bonsu IV , will try to plead in favor of the recognition of the rank of
            supreme leader with different governors, without success. He committed suicide in 1863.
            His successor, Kwaw Asua (Badu Bonsu V ) managed to re-establish healthy diplomatic
            relations with the Dutch and fought alongside them against the British. He was
            posthumously recognized as king. Unfortunately, the British, who regained possession of
            the territories, refused to recognize the title of supreme leader to his descendant
          </Bio>
          <Bio>
            After the execution of Badu Bonsu II, the throne of Busua remained empty for ten years,
            following the ban on rebuilding the city. The Dutch dismiss the position of supreme
            leader and refuse to recognize it during this period. Governor Anthony Van der Eb lifted
            the ban on appointment in 1848, but did not recognize any indigenous authority or rights
            to the supreme leader. That year, Badu Bonsu III was designated as successor, but died a
            year later. Badu Bonsu IV , will try to plead in favor of the recognition of the rank of
            supreme leader with different governors, without success. He committed suicide in 1863.
            His successor, Kwaw Asua (Badu Bonsu V ) managed to re-establish healthy diplomatic
            relations with the Dutch and fought alongside them against the British. He was
            posthumously recognized as king. Unfortunately, the British, who regained possession of
            the territories, refused to recognize the title of supreme leader to his descendant
          </Bio>
        </FlexRight>
      </FlexContainer>
    </Container>
  );
};
