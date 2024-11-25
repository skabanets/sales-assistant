import Box from "@mui/material/Box";

import { ChatInput, ChatMessage } from "../../components";

import { chatMessagesListStyles, chatPageStyles, inputBlockStyles } from "./ChatPageStyles";

const ChatPage = () => {
  return (
    <Box sx={chatPageStyles}>
      <Box sx={chatMessagesListStyles}>
        <ChatMessage />
      </Box>
      <Box sx={inputBlockStyles}>
        <ChatInput />
      </Box>
    </Box>
  );
};

export default ChatPage;
