import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { BsFillSendFill } from "react-icons/bs";
import { FiMoreVertical } from "react-icons/fi";

const Container = tw.div`w-full mt-5 h-[80vh] flex flex-col bg-[#f9f9f9] rounded-md shadow-md`;
const ChatHeader = tw.div`flex justify-between items-center bg-white p-4 border-b border-gray-200 rounded-t-md`;
const GroupName = tw.h2`text-xl font-semibold`;
const ChatBody = tw.div`flex-1 overflow-y-auto p-4 bg-[#f2f2f2]`;
const Message = styled.div`
  ${tw`flex items-center mb-3`}
  ${(props) => (props.isOwn ? tw`justify-end` : tw`justify-start`)}
`;
const MessageBubble = styled.div`
  ${tw`px-4 py-2 rounded-lg max-w-xs`}
  ${(props) => (props.isOwn ? tw`bg-blue-500 text-white` : tw`bg-white text-black shadow-md`)}
`;
const ChatFooter = tw.div`flex items-center p-4 border-t border-gray-200 bg-white rounded-b-md`;
const MessageInput = tw.input`flex-1 py-2 px-4 rounded-full border-2 border-gray-300 focus:outline-none focus:border-blue-400`;
const SendButton = tw.button`ml-3 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600`;

const Discussion = () => {
  return (
    <Container>
      {/* Chat Header */}
      <ChatHeader>
        <GroupName>Group Chat</GroupName>
        <FiMoreVertical style={{ cursor: "pointer" }} />
      </ChatHeader>

      {/* Chat Body */}
      <ChatBody>
        {/* Example messages */}
        <Message>
          <MessageBubble>Hey everyone, welcome to the group!</MessageBubble>
        </Message>
        <Message isOwn>
          <MessageBubble>Thanks! Happy to be here.</MessageBubble>
        </Message>
        <Message>
          <MessageBubble>How's everyone doing?</MessageBubble>
        </Message>
        <Message isOwn>
          <MessageBubble>I'm doing well, excited for the discussion.</MessageBubble>
        </Message>
      </ChatBody>

      {/* Chat Footer */}
      <ChatFooter>
        <MessageInput placeholder="Type a message..." />
        <SendButton>
          <BsFillSendFill />
        </SendButton>
      </ChatFooter>
    </Container>
  );
};

export default Discussion;
