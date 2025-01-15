import React, { Fragment, useRef, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { RiChat1Fill } from "react-icons/ri";
import { IoIosShareAlt } from "react-icons/io";
import { FaImage, FaUser } from "react-icons/fa";
import { BsPinAngleFill, BsThreeDots } from "react-icons/bs";
import {
  useCreateSetPostMutation,
  useDeleteSetPostMutation,
  useGetAllSetPostsQuery,
  useUploadImageMutation,
} from "../../Redux/Api/SetPostApiSlice";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { useSelector } from "react-redux";
import SinglePost from "./SinglePost";
import PinPost from "./PinPost";

const Container = tw.div`w-full flex flex-col lg:flex-row gap-5`;
const LeftContainer = tw.div`w-full lg:w-[60%]`;
const InnerContainer = tw.div`w-full bg-[#f9f9f9] rounded-md shadow-md p-5 my-5`;
const PinContainer = tw.div`hidden lg:block w-full lg:w-[40%] h-auto bg-[#f9f9f9] rounded-md shadow-md p-5 my-5`;
const PostFlex = tw.div`flex items-start gap-3`;
const Profile = tw.div`w-12 h-12 bg-gray-300 rounded-full overflow-hidden flex items-center justify-center`;

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
const PopupMenu = tw.div`absolute bg-white w-[10rem] shadow-md rounded p-2 mt-2 text-sm right-0`;

const image =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80";

const Posts = () => {
  const { setId } = useParams();
  const { data, isLoading } = useGetAllSetPostsQuery(setId);
  const [uploadImage] = useUploadImageMutation();
  const [addPost] = useCreateSetPostMutation();
  const [postContent, setPostContent] = useState("");
  const [message, setMessage] = useState({ type: "", text: "" });
  const [selectedImage, setSelectedImage] = useState(null);
  const pinPosts = data?.posts?.filter((post) => post?.isPinned);
  // console.log(data);
  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    setPostContent(e.target.value);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleImageSelect = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        const res = await uploadImage(formData).unwrap();
        console.log("Image upload response:", res);
        setSelectedImage(res?.postImgUrl);
        setMessage({ type: "success", text: "Image uploaded successfully." });
      } catch (error) {
        console.error("Error uploading image:", error);
        setMessage({ type: "error", text: "Failed to upload image." });
      }
    }
  };
  const handlePostSubmit = async () => {
    try {
      const res = await addPost({
        content: postContent,
        nosaSet: setId,
        image: selectedImage,
      }).unwrap();

      console.log("Post created successfully:", res);
      setPostContent("");
      setSelectedImage(null);
    } catch (error) {
      console.error("Error creating post:", error);
      setMessage({ type: "error", text: "Failed to create post." });
    }
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
              {/* <Image imageSrc={image} /> */}
              <FaUser size={24} color="#fff" />
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
                <ImageButton onClick={handleButtonClick}>
                  <FaImage />
                  <span>Attach Image</span>
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleImageSelect}
                  />
                </ImageButton>
                {(postContent || selectedImage) && (
                  <SubmitButton onClick={handlePostSubmit}>Post</SubmitButton>
                )}
              </div>
            </InputContainer>
          </PostFlex>
        </InnerContainer>

        <div>
          {data?.posts?.map((post) => {
            return (
              <Fragment key={post?._id}>
                <SinglePost post={post} />
              </Fragment>
            );
          })}
        </div>
      </LeftContainer>

      {/* Pinned Posts Section */}
      <PinContainer>
        <h2 className="font-bold text-lg pb-4">Pinned Post</h2>
        {pinPosts?.map((post) => {
          return (
            <Fragment key={post._id}>
              <PinPost post={post} />
            </Fragment>
          );
        })}
      </PinContainer>
    </Container>
  );
};

export default Posts;
