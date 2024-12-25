import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { RiChat1Fill } from "react-icons/ri";
import { IoIosShareAlt } from "react-icons/io";
import { useDeleteSetPostMutation } from "../../Redux/Api/SetPostApiSlice";
import Loading from "./Loading";
import { useSelector } from "react-redux";
import { BsThreeDots } from "react-icons/bs";

const InnerContainer = tw.div`w-full bg-[#f9f9f9] rounded-md shadow-md p-5 my-5`;

const Profile = tw.div`w-12 h-12`;
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded-full bg-cover bg-center h-full shadow-md`,
]);
const ImagePost = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded-lg bg-cover bg-center h-full shadow-md`,
]);

const PostDetailsFlex = tw.div`flex justify-between items-center pb-3 border-b-[1px] border-gray-200`;
const PostDetailUserFlex = tw.div`flex flex-col`;
const MainPost = tw.div`pt-2 pb-4`;
const IconContainer = tw.div`flex justify-between text-gray-700 items-center border-t-2 border-gray-200 pt-4`;
const Icon = tw.div`flex items-center gap-2 cursor-pointer`;
const PopupMenu = tw.div`absolute bg-white w-[10rem] shadow-md rounded p-2 mt-2 text-sm right-0`;

const image =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80";

const SinglePost = ({ post }) => {
  const [deletePost, { isLoading }] = useDeleteSetPostMutation();
  const { user } = useSelector((state) => state.AppSlice);
  const [activePopup, setActivePopup] = useState(null);

  const handleDeletePost = async (postId) => {
    const res = await deletePost(postId).unwrap();
    console.log(res);
  };

  //   const handleImageSelect = (e) => {
  //     setSelectedImage(e.target.files[0]);
  //     console.log("Selected image:", e.target.files[0]);
  //   };

  const togglePopup = (postId) => {
    setActivePopup((prev) => (prev === postId ? null : postId));
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
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
        {user.id === post?.author?._id && (
          <div style={{ position: "relative" }}>
            <BsThreeDots style={{ cursor: "pointer" }} onClick={() => togglePopup(post?._id)} />
            {activePopup === post?._id && (
              <PopupMenu>
                <p onClick={() => console.log("Edit post ID:", post?._id)}>Edit Post</p>
                <p style={{ cursor: "pointer" }} onClick={() => handleDeletePost(post?._id)}>
                  Delete Post
                </p>
              </PopupMenu>
            )}
          </div>
        )}
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
      <input
        type="text"
        placeholder="Add a comment..."
        style={{ width: "100%", padding: "0.5rem", marginTop: "1rem" }}
      />
    </InnerContainer>
  );
};

export default SinglePost;
