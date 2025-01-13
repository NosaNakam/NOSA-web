import React, { useState } from "react";
import { useCreatePostCommentMutation } from "../../Redux/Api/PostCommentApiSlice";

const PostCommentInput = ({ post }) => {
  const [comment, setComment] = useState("");
  const [addComment] = useCreatePostCommentMutation();
  const handleAddComment = async () => {
    try {
      const res = await addComment({ postId: post?._id, content: comment });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <input
      type="text"
      placeholder="Add a comment..."
      onChange={(e) => setComment(e.target.value)}
      value={comment}
      style={{ width: "100%", padding: "0.5rem", marginTop: "1rem" }}
    />
  );
};

export default PostCommentInput;
