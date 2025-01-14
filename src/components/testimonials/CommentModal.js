import React, { useState } from "react";
// import { useCreatePostCommentMutation } from "../../Redux/Api/PostCommentApiSlice";
import tw from "twin.macro";
import { IoMdClose } from "react-icons/io";
import {
  useCreatePostCommentMutation,
  useGetAllPostCommentsQuery,
} from "../../Redux/Api/PostCommentApiSlice";

const ModalContainer = tw.div`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50`;
const ModalContent = tw.div`bg-white rounded-lg w-[80%] lg:w-[45%] shadow-lg`;
const Top = tw.div`relative p-5 border-b-2 border-gray-400 flex`;
const CommentBody = tw.div`p-5`;
const CommentHeading = tw.h1`text-xl font-semibold text-gray-600 w-full text-center`;
const CloseButton = tw.button`absolute bg-gray-300 p-[4px] rounded-full shadow top-[15px] right-[15px] text-gray-600 hover:text-gray-800`;
const CommentList = tw.ul`h-64 overflow-y-auto mt-4 space-y-2`;
const CommentItem = tw.li`bg-gray-100 p-3 rounded-lg`;
const InputContainer = tw.div`mt-4 flex items-center space-x-2`;
const TextInput = tw.input`flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500`;
const SubmitButton = tw.button`bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600`;
const CommentModal = ({ setShowCommentModal, postId }) => {
  const { data, isLoading } = useGetAllPostCommentsQuery(postId);
  const [newComment, setNewComment] = useState("");
  const [addComment] = useCreatePostCommentMutation();
  const handleCommentSubmit = async () => {
    if (!newComment.trim()) return;
    try {
      const res = await addComment({ postId, content: newComment }).unwrap();
      console.log(res);
    } catch (error) {
      console.error("Failed to post comment:", error);
    }
    setNewComment("");
  };

  //   if (!isOpen) return null;

  return (
    <ModalContainer>
      <ModalContent>
        <Top>
          <CommentHeading>Comments</CommentHeading>
          <CloseButton onClick={() => setShowCommentModal()}>
            <IoMdClose fontSize={30} />
          </CloseButton>
        </Top>
        <CommentBody>
          <CommentList>
            {data?.comments.map((comment, index) => (
              <CommentItem key={comment._id}>
                <small tw="text-gray-500 text-sm">
                  {comment.author.firstName} {comment.author.surname}
                </small>
                <p>{comment.content}</p>
              </CommentItem>
            ))}
          </CommentList>

          <InputContainer>
            <TextInput
              type="text"
              placeholder="Write a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <SubmitButton onClick={handleCommentSubmit}>Post</SubmitButton>
          </InputContainer>
        </CommentBody>
      </ModalContent>
    </ModalContainer>
  );
};

export default CommentModal;
