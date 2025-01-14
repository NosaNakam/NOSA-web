import React, { useState } from "react";
import { useCreatePostCommentMutation } from "../../Redux/Api/PostCommentApiSlice";
import tw from "twin.macro";
import { BsFillSendFill } from "react-icons/bs";
const ChatFooter = tw.div`flex items-center p-[5px] border-2 border-gray-300 bg-white mt-5 rounded-[30px]`;
const MessageInput = tw.input`flex-1 py-[5px] px-4 rounded-full border-none focus:outline-none focus:border-blue-400`;
const SendButton = tw.button`ml-3 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600`;

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
    setComment("");
  };
  return (
    <ChatFooter>
      <MessageInput
        onChange={(e) => setComment(e.target.value)}
        value={comment}
        placeholder="Type a comment..."
      />
      <SendButton onClick={handleAddComment}>
        <BsFillSendFill />
      </SendButton>
    </ChatFooter>
  );
};

export default PostCommentInput;
