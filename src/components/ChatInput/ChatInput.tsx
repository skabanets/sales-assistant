import { FC } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { CustomIcon } from "../../components";

import { useChatInput } from "../../hooks";
import { ISendMessageRequest } from "../../interfaces-submodule/interfaces/dto/message/isend-message-request.interface";
import {
  chatTextFieldStyles,
  inputFieldWrapperStyles,
  sendButtonStyles,
  sendIconStyles,
  sendIconWrapperStyles,
} from "./ChatInputStyles";

interface IChatInput {
  sendNewMessage: ({ chatId, content }: ISendMessageRequest) => void;
  chatId: number;
}

export const ChatInput: FC<IChatInput> = ({ sendNewMessage, chatId }) => {
  const { isFocused, handleFocus, handleBlur, register, handleSubmit, onSubmit } = useChatInput(
    sendNewMessage,
    chatId
  );

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={inputFieldWrapperStyles(isFocused)}>
      <TextField
        aria-label="Chat input"
        multiline
        placeholder="Write a question..."
        sx={chatTextFieldStyles}
        {...register("content")}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="scrollbar"
      />
      <Box sx={sendIconWrapperStyles}>
        <Button sx={sendButtonStyles(isFocused)} type="submit">
          <CustomIcon iconName="send" sx={sendIconStyles(isFocused)} />
        </Button>
      </Box>
    </Box>
  );
};
