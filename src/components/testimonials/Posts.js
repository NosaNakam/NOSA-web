import React, { Fragment, useState, useRef } from "react";
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
const InputContainer = tw.div`flex-1 flex flex-col gap-3`;
const PostInput = tw.textarea`w-full h-[3rem] py-2 px-5 rounded-[1.5rem] bg-white border-gray-300 border-2 overflow-hidden resize-none focus:outline-none`;
const SubmitButton = tw.button`py-2 px-4 rounded-md bg-primary-500 text-white font-bold transition duration-200 hover:bg-primary-600`;
const ImageButton = tw.button`flex items-center gap-2 py-2 px-4 rounded-md bg-gray-300 text-black font-bold transition duration-200 hover:bg-gray-400`;
const PostDetailsFlex = tw.div`flex justify-between items-center pb-3 border-b-[1px] border-gray-200`;
const MainPost = tw.div`pt-2 pb-4`;
const IconContainer = tw.div`flex justify-between text-gray-700 items-center border-t-2 border-gray-200 pt-4`;
const Icon = tw.div`flex items-center gap-2 cursor-pointer`;
const CommentSection = tw.div`mt-4`;
const CommentInput = tw.input`w-full h-[2rem] py-2 px-4 rounded-md bg-gray-200 border border-gray-300 resize-none focus:outline-none`;

const image =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80";

const Posts = () => {
  const { setId } = useParams();
  const { data, isLoading } = useGetAllSetPostsQuery(setId);
  const [addPost] = useCreateSetPostMutation();
  const [postContent, setPostContent] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [comments, setComments] = useState({});
  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    setPostContent(e.target.value);
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file ? URL.createObjectURL(file) : null);
  };

  const handleCommentChange = (postId, value) => {
    setComments((prev) => ({ ...prev, [postId]: value }));
  };

  const handlePostSubmit = async () => {
    await addPost({ content: postContent, nosaSet: setId }).unwrap();
    setPostContent("");
    setImageFile(null);
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
                rows={1}
              />
              {imageFile && (
                <img
                  src={imageFile}
                  alt="Selected"
                  style={{ maxWidth: "100%", marginTop: "10px" }}
                />
              )}
              <div
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <ImageButton onClick={handleImageClick}>
                  <FaImage />
                  <span>Attach Image</span>
                </ImageButton>
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
                {postContent && <SubmitButton onClick={handlePostSubmit}>Post</SubmitButton>}
              </div>
            </InputContainer>
          </PostFlex>
        </InnerContainer>

        <div>
          {data?.posts?.map((post) => (
            <Fragment key={post?._id}>
              <InnerContainer>
                <PostDetailsFlex>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Profile>
                      <Image imageSrc={image} />
                    </Profile>
                    <div>
                      <h2 className="font-semibold">
                        {post?.author?.firstName} {post?.author?.surname}
                      </h2>
                      <p className="text-sm text-gray-500">May 5, 2023</p>
                    </div>
                  </div>
                  <BsThreeDots style={{ cursor: "pointer" }} />
                </PostDetailsFlex>
                <MainPost>{post?.content}</MainPost>
                {post?.image && <img src={post.image} alt="Post" style={{ maxWidth: "100%" }} />}
                <IconContainer>
                  <Icon>
                    ({post?.interactions?.likes?.length}) <AiFillLike fontSize={24} />
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
                    ({post?.interactions?.shares?.length}) <IoIosShareAlt fontSize={24} />
                    <span>Share</span>
                  </Icon>
                </IconContainer>
                <CommentSection>
                  <CommentInput
                    placeholder="Write a comment..."
                    value={comments[post._id] || ""}
                    onChange={(e) => handleCommentChange(post._id, e.target.value)}
                  />
                </CommentSection>
              </InnerContainer>
            </Fragment>
          ))}
        </div>
      </LeftContainer>
    </Container>
  );
};

export default Posts;
