import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Box from "@mui/material/Box";

import { ChatInput, ChatMessage } from "../../components";

import { selectUserInfo } from "../../redux";
import { useAppSelector, useAutoScroll, useChatMessages } from "../../hooks";
import {
  chatMessagesListStyles,
  chatPageStyles,
  inputBlockStyles,
} from "../ChatPage/ChatPageStyles";

const SingleChatPage = () => {
  const { id } = useParams();
  const chatId = Number(id);
  const navigate = useNavigate();
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const accessToken = localStorage.getItem("accessToken") || "";
  const user = useAppSelector(selectUserInfo);

  const { chatMessages, isPending, handleSendMessage } = useChatMessages(chatId, accessToken, user);

  useEffect(() => {
    if (isNaN(chatId)) {
      navigate("/chats");
    }
  }, [chatId, navigate]);

  useAutoScroll(messagesContainerRef, [chatMessages]);

  return (
    <Box sx={chatPageStyles}>
      <Box sx={chatMessagesListStyles} className="scrollbar" ref={messagesContainerRef}>
        <ChatMessage />
        {chatMessages?.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
        {isPending && <ChatMessage text="looking for answer..." />}
      </Box>
      <Box sx={inputBlockStyles}>
        <ChatInput chatId={chatId} sendNewMessage={handleSendMessage} />
      </Box>
    </Box>
  );
};

export default SingleChatPage;
