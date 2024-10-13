import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
const Container = tw.div`w-full flex gap-5`;
const LeftContainer = tw.div`w-full lg:w-[60%]`;
const InnerContainer = tw.div`w-full bg-[#f9f9f9] rounded-md shadow-md p-5 my-5`;
const RightContainer = tw.div`hidden lg:block w-full lg:w-[40%] h-auto bg-[#f9f9f9] rounded-md shadow-md p-5 my-5`;
const Heading = tw.h1`font-bold text-xl`;
const SubHeading = tw.h1`font-semibold text-xl`;
const SearchInput = tw.input`w-full py-2 px-5 rounded-[1.5rem] bg-white border-gray-300 border-2  mt-5`;
const PostDetailsFlex = tw.div`flex justify-between items-center pt-3`;
const PostDetailUserFlex = tw.div``;
const PostFlex = tw.div`flex items-center gap-2`;
const Profile = tw.div`w-12 h-12`;
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded-full bg-cover bg-center h-full shadow-md`,
]);
const image =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80";

const Members = () => {
  return (
    <Container>
      <LeftContainer>
        <InnerContainer>
          <Heading>Members</Heading>
          <SearchInput placeholder="Search a member..." />
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
          </PostDetailsFlex>
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
          </PostDetailsFlex>
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
          </PostDetailsFlex>
        </InnerContainer>
      </LeftContainer>
      <RightContainer>
        <Heading>Set Officials</Heading>
        <SearchInput placeholder="Search an official..." />
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
      </RightContainer>
    </Container>
  );
};

export default Members;
