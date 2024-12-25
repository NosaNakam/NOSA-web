import React, { Fragment, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { BsFillSendFill } from "react-icons/bs";
import { FiMoreVertical } from "react-icons/fi";
import { useParams } from "react-router-dom";
import {
  useGetAllSetChatsQuery,
  useSendSetChatMutation,
} from "../../Redux/Api/SetDiscussionApiSlice";
import { useSelector } from "react-redux";

const Container = tw.div`w-full mt-5 h-[80vh] flex flex-col bg-[#f9f9f9] rounded-md shadow-md`;
const ChatHeader = tw.div`flex justify-between items-center bg-white p-4 border-b border-gray-200 rounded-t-md`;
const GroupName = tw.h2`text-xl font-semibold`;
const ChatBody = styled.div`
  ${tw`flex-1 overflow-y-auto p-4 bg-[#f2f2f2]`}
  scroll-behavior: smooth;
`;
const Message = styled.div`
  ${tw`mb-5`}
  ${(props) => (props.isOwn ? tw`text-right` : tw`text-left`)}
`;
const SenderName = tw.p`text-sm text-gray-500 mb-1 font-medium`;
const MessageBubble = styled.div`
  ${tw`inline-block px-4 py-2 rounded-lg max-w-xs`}
  ${(props) =>
    props.isOwn ? tw`bg-blue-500 text-white ml-auto` : tw`bg-gray-100 text-black mr-auto`}
`;
const ChatFooter = tw.div`flex items-center p-4 border-t border-gray-200 bg-white rounded-b-md`;
const MessageInput = tw.input`flex-1 py-2 px-4 rounded-full border-2 border-gray-300 focus:outline-none focus:border-blue-400`;
const SendButton = tw.button`ml-3 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600`;

const Discussion = () => {
  const { setId } = useParams();
  const { user } = useSelector((state) => state.AppSlice);
  const { data, isLoading } = useGetAllSetChatsQuery(setId);
  const [sendMessage] = useSendSetChatMutation();
  const [text, setText] = useState("");

  const chatBodyRef = useRef(null);

  // Scroll to the bottom whenever messages change
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [data?.messages]);
  const handleSend = async () => {
    try {
      const res = await sendMessage({ text, setId }).uwrap();
      console.log(res);
    } catch (error) {
      console.log(error?.data?.message);
    }
  };
  return (
    <Container>
      {/* Chat Header */}
      <ChatHeader>
        <GroupName>Set Chat Group</GroupName>
        <FiMoreVertical style={{ cursor: "pointer" }} />
      </ChatHeader>

      {/* Chat Body */}
      <ChatBody ref={chatBodyRef}>
        {isLoading ? (
          <p>Loading messages...</p>
        ) : (
          data?.messages?.map((message) => (
            <Fragment key={message._id}>
              <Message isOwn={user?.id === message?.sender?._id}>
                <SenderName>{message?.sender?.fullName}</SenderName>
                <MessageBubble isOwn={user?.id === message?.sender?._id}>
                  {message?.text}
                </MessageBubble>
              </Message>
            </Fragment>
          ))
        )}
      </ChatBody>

      {/* Chat Footer */}
      <ChatFooter>
        <MessageInput
          onChange={(e) => setText(e.target.value)}
          value={text}
          placeholder="Type a message..."
        />
        <SendButton onClick={handleSend}>
          <BsFillSendFill />
        </SendButton>
      </ChatFooter>
    </Container>
  );
};

export default Discussion;
