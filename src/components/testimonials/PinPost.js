import React from "react";
import { BsPinAngleFill } from "react-icons/bs";
import tw from "twin.macro";
const InnerContainer = tw.div`w-full bg-[#f9f9f9] rounded-md shadow-md p-5 my-5`;
const PostAuthor = tw.div`text-bold`;
function PinPost({ post }) {
  return (
    <InnerContainer>
      <div className="flex items-center gap-3">
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <BsPinAngleFill fontSize={20} />
          <PostAuthor>
            {post?.author?.firstName} {post?.author?.surname}
          </PostAuthor>
        </div>
        <div>
          <p className="font-semibold">{post?.content}</p>
        </div>
      </div>
    </InnerContainer>
  );
}

export default PinPost;
