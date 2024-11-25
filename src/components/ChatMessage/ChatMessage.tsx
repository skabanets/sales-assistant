import { FC } from "react";
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
  message?: IMessageDTO;
}
export const ChatMessage: FC<IChatMessageProps> = ({ message }) => {
  const icon = message && !message.isBot ? "user" : "chat";
  const text = message ? message.content : "Hello, how can I assist you today?";

  return (
    <Box sx={messageWrapperStyles(message?.isBot)}>
      <Box sx={chatIconWrapperStyles}>
        <CustomIcon iconName={icon} sx={chatIconStyles(message?.isBot)} />
      </Box>
      <Typography sx={textMessageStyles}>{text}</Typography>
    </Box>
  );
};
