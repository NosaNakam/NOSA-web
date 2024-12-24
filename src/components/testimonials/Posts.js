import React, { Fragment, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { RiChat1Fill } from "react-icons/ri";
import { IoIosShareAlt } from "react-icons/io";
import { FaImage } from "react-icons/fa";
import { BsPinAngleFill, BsThreeDots } from "react-icons/bs";
import { useCreateSetPostMutation, useGetAllSetPostsQuery } from "../../Redux/Api/SetPostApiSlice";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

const Container = tw.div`w-full flex flex-col lg:flex-row gap-5`;
const LeftContainer = tw.div`w-full lg:w-[60%]`;
const InnerContainer = tw.div`w-full bg-[#f9f9f9] rounded-md shadow-md p-5 my-5`;
const PinContainer = tw.div`hidden lg:block w-full lg:w-[40%] h-auto bg-[#f9f9f9] rounded-md shadow-md p-5 my-5`;
const PostFlex = tw.div`flex items-start gap-3`;
const Profile = tw.div`w-12 h-12`;
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded-full bg-cover bg-center h-full shadow-md`,
]);
const ImagePost = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded-lg bg-cover bg-center h-full shadow-md`,
]);

const InputContainer = tw.div`flex-1 flex flex-col gap-3`;
const PostInput = tw.textarea`w-full h-[3rem] py-2 px-5 rounded-[1.5rem] bg-white border-gray-300 border-2 overflow-hidden resize-none focus:outline-none`;
const SubmitButton = tw.button`py-2 px-4 rounded-md bg-primary-500 text-white font-bold transition duration-200 hover:bg-primary-600`;
const ImageButton = tw.button`flex items-center gap-2 py-2 px-4 rounded-md bg-gray-300 text-black font-bold transition duration-200 hover:bg-gray-400`;
const PostDetailsFlex = tw.div`flex justify-between items-center pb-3 border-b-[1px] border-gray-200`;
const PostDetailUserFlex = tw.div`flex flex-col`;
const MainPost = tw.div`pt-2 pb-4`;
const IconContainer = tw.div`flex justify-between text-gray-700 items-center border-t-2 border-gray-200 pt-4`;
const Icon = tw.div`flex items-center gap-2 cursor-pointer`;

const image =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80";

const Posts = () => {
  const { setId } = useParams();
  const { data, isLoading } = useGetAllSetPostsQuery(setId);
  const [addPost] = useCreateSetPostMutation();
  const [postContent, setPostContent] = useState("");

  const handleInputChange = (e) => {
    setPostContent(e.target.value);
  };

  const handlePostSubmit = async () => {
    const res = await addPost({}).unwrap();
    // Handle the post submission logic here
    console.log("Post submitted:", postContent);
    // Optionally reset the input and button state
    setPostContent("");
  };
  if (isLoading) {
    return <Loading />;
  }
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
              <div
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <ImageButton>
                  <FaImage />
                  <span>Attach Image</span>
                </ImageButton>
                {postContent && <SubmitButton onClick={handlePostSubmit}>Post</SubmitButton>}
              </div>
            </InputContainer>
          </PostFlex>
        </InnerContainer>

        <div>
          {data?.posts?.map((post) => {
            return (
              <Fragment key={post?._id}>
                <InnerContainer>
                  <PostDetailsFlex>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <Profile>
                        <Image imageSrc={image} />
                      </Profile>
                      <PostDetailUserFlex>
                        <h2 className="font-semibold">
                          {post?.author?.firstName} {post?.author?.surname}
                        </h2>
                        <p className="text-sm text-gray-500">May 5, 2023</p>
                      </PostDetailUserFlex>
                    </div>
                    <BsThreeDots style={{ cursor: "pointer" }} />
                  </PostDetailsFlex>
                  <MainPost>{post?.content}</MainPost>
                  {post?.image && <ImagePost imageSrc={image} />}
                  <IconContainer>
                    <Icon>
                      ({post?.interactions?.likes?.length})<AiFillLike fontSize={24} />
                      <span>Like</span>
                    </Icon>
                    <Icon>
                      ({post?.interactions?.dislikes?.length}) <AiFillDislike fontSize={24} />
                      <span>Dislike</span>
                    </Icon>
                    <Icon>
                      <RiChat1Fill fontSize={24} />
                      <span>Comment</span>
                    </Icon>
                    <Icon>
                      ({post?.interactions?.shares?.length})<IoIosShareAlt fontSize={24} />
                      <span>Share</span>
                    </Icon>
                  </IconContainer>
                </InnerContainer>
              </Fragment>
            );
          })}
        </div>
      </LeftContainer>

      {/* Pinned Posts Section */}
      <PinContainer>
        <h2 className="font-bold text-lg pb-4">Pinned Post</h2>
        <InnerContainer>
          <div className="flex items-center gap-3">
            <BsPinAngleFill fontSize={20} />
            <div>
              <p className="font-semibold">Important Announcement</p>
              <p className="text-sm text-gray-500">
                Please read the updated community guidelines...
              </p>
            </div>
          </div>
        </InnerContainer>
      </PinContainer>
    </Container>
  );
};

export default Posts;
