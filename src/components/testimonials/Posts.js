import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import AnimationRevealPage from "../../helpers/AnimationRevealPage";
import { AiFillLike } from "react-icons/ai";
import { RiChat1Fill2 } from "react-icons/ri";
import { AiFillDislike } from "react-icons/ai";
import { IoIosShareAlt } from "react-icons/io";
import { FaImage } from "react-icons/fa";
import { BsPinAngleFill } from "react-icons/bs";
const Container = tw.div`w-full flex gap-5`;
const LeftContainer = tw.div`w-full lg:w-[60%]`;
const InnerContainer = tw.div`w-full bg-[#f9f9f9] rounded-md shadow-md p-5 my-5`;
const PinContainer = tw.div`hidden lg:block w-full lg:w-[40%] h-[20vh] bg-[#f9f9f9] rounded-md shadow-md p-5 my-5`;
const PostFlex = tw.div`flex items-center gap-2`;
const Profile = tw.div`w-12 h-12`;
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded-full bg-cover bg-center h-full shadow-md`,
]);

const image =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80";

const InputContainer = tw.div`w-[90%] flex items-center gap-3`;
const PostInput = tw.textarea`w-full h-[3rem] py-2 px-5 rounded-[1.5rem] bg-white border-gray-300 border-2 overflow-hidden resize-none`;
const SubmitButton = tw.button`py-2 px-4 rounded-md bg-primary-500 text-white font-bold transition duration-200 hover:bg-primary-600`;
const ImageButton = tw.button`flex items-center gap-4 py-2 px-4 rounded-md bg-primary-500 text-white font-bold transition duration-200 hover:bg-primary-600`;
const PostDetailsFlex = tw.div`flex justify-between items-center`;
const PostDetailUserFlex = tw.div``;
const MainPost = tw.div`pt-2 pb-4`;
const IconContainer = tw.div`flex justify-between text-gray-700 items-center border-t-2 border-gray-200 pt-4`;
const Icon = tw.div`flex items-center gap-2`;
const Posts = () => {
  const [postContent, setPostContent] = useState("");

  const handleInputChange = (e) => {
    setPostContent(e.target.value);
  };

  const handlePostSubmit = () => {
    // Handle the post submission logic here
    console.log("Post submitted:", postContent);
    // Optionally reset the input and button state
    setPostContent("");
  };

  return (
    <Container>
      <LeftContainer>
        <InnerContainer>
          <PostFlex>
            <Profile>
              <Image imageSrc={image} />
            </Profile>
            <InputContainer>
              <PostInput
                placeholder="Write something..."
                value={postContent}
                onChange={handleInputChange}
                draggable="false"
                rows={1}
              />
              {postContent && (
                <div style={{ display: "flex", justifyContent: "end" }}>
                  <SubmitButton onClick={handlePostSubmit}>Post</SubmitButton>
                </div>
              )}
              <ImageButton>
                <FaImage />
                <span>Attach</span>
              </ImageButton>
            </InputContainer>
          </PostFlex>
        </InnerContainer>
        <InnerContainer>
          <PostDetailsFlex>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Profile>
                <Image imageSrc={image} />
              </Profile>
              <PostDetailUserFlex>
                <h2>Alexander Rengkat</h2>
                <p>May 5, 2023</p>
              </PostDetailUserFlex>
            </div>
            <SubmitButton>...</SubmitButton>
          </PostDetailsFlex>
          <MainPost>
            To handle CORS (Cross-Origin Resource Sharing) issues when two sites (e.g., a dashboard
            and a main website) are using the same API, you can take the following approaches: 1.
            Configure CORS on the Backend Ensure that your backend API is configured to allow
            requests from both your dashboard and main website. In a Node.js and Express
            application, you can do this using the cors package:
          </MainPost>
          <IconContainer>
            <Icon>
              <AiFillLike fontSize={30} />
              <span>Like</span>
            </Icon>
            <Icon>
              <AiFillDislike fontSize={30} />
              <span>Dislike</span>
            </Icon>
            <Icon>
              <RiChat1Fill2 fontSize={30} />
              <span>Comment</span>
            </Icon>
            <Icon>
              <IoIosShareAlt fontSize={30} />
              <span>Share</span>
            </Icon>
          </IconContainer>
        </InnerContainer>
      </LeftContainer>
      <PinContainer>
        <IconContainer>
          <BsPinAngleFill />
          {/* <span>Pined Post</span> */}
        </IconContainer>
      </PinContainer>
    </Container>
  );
};

export default Posts;
