import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import AnimationRevealPage from "../../helpers/AnimationRevealPage";

const InnerContainer = tw.div`w-[70%] bg-[#f9f9f9] rounded-md shadow-md p-5 my-5`;
const PostFlex = tw.div`flex items-center gap-2`;
const Profile = tw.div`w-12 h-12`;
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded-full bg-cover bg-center h-full shadow-md`,
]);

const image =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80";

const InputContainer = tw.div`w-[70%]`;
const PostInput = tw.textarea`w-full h-[3rem] py-2 px-5 rounded-[1.5rem] bg-white border-gray-300 border-2 overflow-hidden resize-none`;
const SubmitButton = tw.button`mt-3 py-2 px-4 rounded-md bg-primary-500 text-white font-bold transition duration-200 hover:bg-blue-600`;
const PostDetailsFlex = tw.div`flex justify-between items-center`;
const PostDetailUserFlex = tw.div``;

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
    <div>
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
          <SubmitButton>Opt</SubmitButton>
        </PostDetailsFlex>
      </InnerContainer>
    </div>
  );
};

export default Posts;
