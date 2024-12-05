import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { BsThreeDots } from "react-icons/bs";

const Container = tw.div`w-full flex gap-5`;
const LeftContainer = tw.div`w-full lg:w-[60%]`;
const InnerContainer = tw.div`w-full bg-[#f9f9f9] rounded-md shadow-md p-5 my-5`;
const RightContainer = tw.div`hidden lg:block w-full lg:w-[40%] h-auto bg-[#f9f9f9] rounded-md shadow-md p-5 my-5`;
const Heading = tw.h1`font-bold text-xl`;
const SubHeading = tw.h1`font-semibold`;
const SearchInput = tw.input`w-full py-2 px-5 rounded-[1.5rem] bg-white border-gray-300 border-2  mt-5`;
const PostDetailsWrapper = styled.div`
  ${tw`py-3 relative`}
  &:not(:last-child) {
    border-bottom: 1px solid #e0e0e0;
  }
`;
const OptionModel = styled.div`
  ${tw`w-[10rem] bg-white p-2 absolute top-[60%] right-0 shadow-md rounded-md`}
  display: ${(props) => (props.visible ? "block" : "none")};
  z-index: 10;
`;
const PostDetailsFlex = tw.div`flex justify-between items-center`;
const PostDetailUserFlex = tw.div``;
const Profile = tw.div`w-12 h-12`;
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded-full bg-cover bg-center h-full shadow-md`,
]);

const image =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80";

export const ListMembers = () => {
  const [visibleModel, setVisibleModel] = useState(null);

  const toggleModel = (index) => {
    setVisibleModel(visibleModel === index ? null : index);
  };
  return (
    <Container>
      <LeftContainer>
        <InnerContainer>
          <Heading>Members</Heading>
          <SearchInput placeholder="Search a member..." />
          {[...Array(3)].map((_, index) => (
            <PostDetailsWrapper key={index}>
              <PostDetailsFlex>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <Profile>
                    <Image imageSrc={image} />
                  </Profile>
                  <PostDetailUserFlex>
                    <SubHeading>Alexander Rengkat</SubHeading>
                    <p>Joined 2 years ago</p>
                  </PostDetailUserFlex>
                </div>
                <BsThreeDots style={{ cursor: "pointer" }} onClick={() => toggleModel(index)} />
              </PostDetailsFlex>
              <OptionModel visible={visibleModel === index}>
                <div>View Profile</div>
                <div>Send Message</div>
                <div>Remove Member</div>
              </OptionModel>
            </PostDetailsWrapper>
          ))}
        </InnerContainer>
      </LeftContainer>
      <RightContainer>
        <Heading>Set Officials</Heading>
        <SearchInput placeholder="Search an official..." />
        <PostDetailsWrapper>
          <PostDetailsFlex>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Profile>
                <Image imageSrc={image} />
              </Profile>
              <PostDetailUserFlex>
                <SubHeading>Alexander Rengkat</SubHeading>
                <p>President</p>
              </PostDetailUserFlex>
            </div>
          </PostDetailsFlex>
        </PostDetailsWrapper>
        <PostDetailsWrapper>
          <PostDetailsFlex>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Profile>
                <Image imageSrc={image} />
              </Profile>
              <PostDetailUserFlex>
                <SubHeading>Alexander Rengkat</SubHeading>
                <p>Vice President</p>
              </PostDetailUserFlex>
            </div>
          </PostDetailsFlex>
        </PostDetailsWrapper>
      </RightContainer>
    </Container>
  );
};
