import { FC, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { CustomIcon } from "../../components";

import {
  chatIconStyles,
  chatIconWrapperStyles,
  messageWrapperStyles,
  textMessageStyles,
} from "./ChatMessageStyles";

import { IMessageDTO } from "../../interfaces-submodule/interfaces/dto/message/imessage-dto";

interface IChatMessageProps {
  text?: string;
  message?: IMessageDTO;
}
export const ChatMessage: FC<IChatMessageProps> = ({
  text = "Hello, how can I assist you today?",
  message,
}) => {
  const [messageText, setMessageText] = useState<string>("");

  useEffect(() => {
    setMessageText(message ? message.content : text);
  }, [message]);

  const icon = message && !message.isBot ? "user" : "chat";

  return (
    <Box sx={messageWrapperStyles(message?.isBot)}>
      <Box sx={chatIconWrapperStyles}>
        <CustomIcon iconName={icon} sx={chatIconStyles(message?.isBot)} />
      </Box>
      <Typography sx={textMessageStyles}>{messageText}</Typography>
    </Box>
  );
};
