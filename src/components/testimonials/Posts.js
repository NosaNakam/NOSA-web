import React, { Fragment, useState, useRef } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { RiChat1Fill } from "react-icons/ri";
import { IoIosShareAlt } from "react-icons/io";
import { FaImage } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { useCreateSetPostMutation, useGetAllSetPostsQuery } from "../../Redux/Api/SetPostApiSlice";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

const Container = tw.div`w-full flex flex-col lg:flex-row gap-5`;
const LeftContainer = tw.div`w-full lg:w-[60%]`;
const InnerContainer = tw.div`w-full bg-[#f9f9f9] rounded-md shadow-md p-5 my-5`;
const PostDetailsFlex = tw.div`flex justify-between items-center pb-3 border-b-[1px] border-gray-200`;
const AuthorDetails = tw.div`flex items-center gap-3`;
const ProfileImage = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-12 h-12 rounded-full bg-cover bg-center`,
]);
const MainPost = tw.div`pt-2 pb-4`;
const IconContainer = tw.div`flex justify-between text-gray-700 items-center border-t-2 border-gray-200 pt-4`;
const Icon = tw.div`flex items-center gap-2 cursor-pointer`;
const Menu = styled.div`
  ${tw`absolute bg-white shadow-md rounded-md p-2 text-sm`}
  top: 2rem;
  right: 1rem;
  z-index: 10;
  min-width: 8rem;
`;
const MenuItem = tw.div`py-2 px-4 hover:bg-gray-200 cursor-pointer rounded-md`;

const Posts = () => {
  const { setId } = useParams();
  const { data, isLoading } = useGetAllSetPostsQuery(setId);
  const [addPost] = useCreateSetPostMutation();
  const [postContent, setPostContent] = useState("");
  const [menuPostId, setMenuPostId] = useState(null);

  const toggleMenu = (postId) => {
    setMenuPostId(menuPostId === postId ? null : postId);
  };

  const handleEditPost = (postId) => {
    console.log(`Edit post ${postId}`);
    setMenuPostId(null); // Close the menu
  };

  const handleDeletePost = (postId) => {
    console.log(`Delete post ${postId}`);
    setMenuPostId(null); // Close the menu
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <LeftContainer>
        <div>
          {data?.posts?.map((post) => (
            <Fragment key={post._id}>
              <InnerContainer>
                <PostDetailsFlex>
                  <AuthorDetails>
                    <ProfileImage
                      imageSrc={post.author.profileImage || "https://via.placeholder.com/150"}
                    />
                    <div>
                      <h2 className="font-semibold">
                        {post.author.firstName} {post.author.surname}
                      </h2>
                      <p className="text-sm text-gray-500">
                        {new Intl.DateTimeFormat("en-GB", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        }).format(new Date(post.createdAt))}
                      </p>
                    </div>
                  </AuthorDetails>
                  <div style={{ position: "relative" }}>
                    <BsThreeDots
                      style={{ cursor: "pointer" }}
                      onClick={() => toggleMenu(post._id)}
                    />
                    {menuPostId === post._id && (
                      <Menu>
                        <MenuItem onClick={() => handleEditPost(post._id)}>Edit Post</MenuItem>
                        <MenuItem onClick={() => handleDeletePost(post._id)}>Delete Post</MenuItem>
                      </Menu>
                    )}
                  </div>
                </PostDetailsFlex>
                <MainPost>{post.content}</MainPost>
                {post.image && <img src={post.image} alt="Post" style={{ maxWidth: "100%" }} />}
                <IconContainer>
                  <Icon>
                    ({post.interactions.likes.length}) <AiFillLike fontSize={24} />
                    <span>Like</span>
                  </Icon>
                  <Icon>
                    ({post.interactions.dislikes.length}) <AiFillDislike fontSize={24} />
                    <span>Dislike</span>
                  </Icon>
                  <Icon>
                    <RiChat1Fill fontSize={24} />
                    <span>Comment</span>
                  </Icon>
                  <Icon>
                    ({post.interactions.shares.length}) <IoIosShareAlt fontSize={24} />
                    <span>Share</span>
                  </Icon>
                </IconContainer>
              </InnerContainer>
            </Fragment>
          ))}
        </div>
      </LeftContainer>
    </Container>
  );
};

export default Posts;
