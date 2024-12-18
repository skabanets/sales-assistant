import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";

import { useSendMessageMutation } from "../services";
import { ISendMessageRequest } from "../interfaces-submodule/interfaces/dto/message/isend-message-request.interface";

export const useChatInput = (
  sendNewMessage: ({ chatId, content }: ISendMessageRequest) => void,
  chatId: number
) => {
  const [isFocused, setIsFocused] = useState(false);
  const [sendMessage] = useSendMessageMutation();

  const { register, reset, handleSubmit } = useForm<ISendMessageRequest>();

  const handleFocus = useCallback(() => setIsFocused(true), []);
  const handleBlur = useCallback(() => setIsFocused(false), []);

  const onSubmit = useCallback(
    async (data: ISendMessageRequest) => {
      if (!data.content.trim()) return;

      try {
        await sendMessage({
          chatId: chatId,
          content: data.content,
        }).unwrap();

        if (sendNewMessage) {
          sendNewMessage({
            chatId: chatId,
            content: data.content,
          });
        }

        reset();
      } catch (error) {
        console.error("Failed to send message:", error);
      }
    },
    [chatId, reset, sendMessage, sendNewMessage]
  );

  return {
    isFocused,
    handleFocus,
    handleBlur,
    register,
    handleSubmit,
    onSubmit,
  };
};
