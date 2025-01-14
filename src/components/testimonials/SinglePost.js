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
import { formatDate, formatDateWithoutDay } from "../../helpers/extras";
import { useGetAllPostCommentsQuery } from "../../Redux/Api/PostCommentApiSlice";
import PostCommentInput from "./PostCommentInput";
import CommentModal from "./CommentModal";
import { FaUser } from "react-icons/fa";

const InnerContainer = tw.div`w-full bg-[#f9f9f9] rounded-md shadow-md p-5 my-5`;

const Profile = tw.div`w-12 h-12 bg-gray-300 rounded-full overflow-hidden flex items-center justify-center`;
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded-full bg-cover bg-center h-full shadow-md`,
]);
const ImagePostWrapper = styled.div`
  ${tw`rounded-lg h-full shadow-md flex justify-center `}
`;

const ImagePost = ({ src, alt }) => (
  <ImagePostWrapper>
    <img src={src} alt={alt} className="w-full h-full object-cover rounded-[12px]" />
  </ImagePostWrapper>
);

const PostDetailsFlex = tw.div`flex justify-between items-center pb-3 border-b-[1px] border-gray-200`;
const PostDetailUserFlex = tw.div`flex flex-col`;
const MainPost = tw.div`pt-2 pb-4`;
const IconContainer = tw.div`flex justify-between text-gray-700 items-center border-t-2 border-gray-200 pt-6`;
const Icon = tw.div`flex items-center gap-2 cursor-pointer`;
const PopupMenu = tw.div`absolute bg-white w-[10rem] shadow-md rounded p-2 mt-2 text-sm right-0`;

const SinglePost = ({ post }) => {
  const [deletePost, { isLoading }] = useDeleteSetPostMutation();
  const { user } = useSelector((state) => state.AppSlice);
  const [activePopup, setActivePopup] = useState(null);
  const [showCommentModal, setShowCommentModal] = useState(false);
  // console.log(post);
  const toggleCommentModal = () => {
    setShowCommentModal((prev) => !prev);
  };
  const handleDeletePost = async (postId) => {
    const res = await deletePost(postId).unwrap();
    console.log(res);
  };

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
            {post?.author?.image ? (
              <Image imageSrc={post?.author?.image} />
            ) : (
              <FaUser size={24} color="#fff" />
            )}
          </Profile>
          <PostDetailUserFlex>
            <h2 className="font-semibold">
              {post?.author?.firstName} {post?.author?.surname}
            </h2>
            <p className="text-sm text-gray-500">{formatDateWithoutDay(post?.createdAt)}</p>
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
      {post?.image && <ImagePost src={post?.image} alt="Post image" />}

      <IconContainer>
        <Icon>
          ({post?.interactions?.likes?.length})<AiFillLike fontSize={24} />
          <span>Like</span>
        </Icon>
        <Icon>
          ({post?.interactions?.dislikes?.length}) <AiFillDislike fontSize={24} />
          <span>Dislike</span>
        </Icon>
        <Icon onClick={toggleCommentModal}>
          ({post?.interactions?.comments?.length})<RiChat1Fill fontSize={24} />
          <span>Comment</span>
        </Icon>
      </IconContainer>
      <PostCommentInput post={post} />
      {showCommentModal && (
        <CommentModal setShowCommentModal={toggleCommentModal} postId={post?._id} />
      )}
    </InnerContainer>
  );
};

export default SinglePost;
