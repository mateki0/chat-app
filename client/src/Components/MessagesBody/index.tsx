import * as React from "react";
import MessagesBodyWrapper from "./styled/MessagesBodyWrapper";
import MessageContainer from "./styled/MessageContainer";
import IsTyping from "./styled/IsTyping";
import AnimatedDot from "./styled/AnimatedDot";
import { MessagesProps } from "../../App";

interface MessagesBodyProps {
  typingUser: string;
  messagesList: MessagesProps[];
}
const MessagesBody = ({ typingUser, messagesList }: MessagesBodyProps) => {
  console.log(messagesList);
  return (
    <MessagesBodyWrapper>
      {messagesList.map((message, index) => (
        <MessageContainer
          key={index}
          user1={
            messagesList[index - 1] &&
            messagesList[index - 1].user !== message.user
          }
        >
          {message.message}
        </MessageContainer>
      ))}
      <IsTyping isTyping={typingUser !== undefined && typingUser.length > 0}>
        {typingUser}
        <AnimatedDot>.</AnimatedDot>
      </IsTyping>
    </MessagesBodyWrapper>
  );
};

export default MessagesBody;
