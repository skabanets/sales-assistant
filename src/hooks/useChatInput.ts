import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { chatsApi, useSendMessageMutation } from "../services";
import { useAppDispatch } from "../hooks";
import { ISendMessageRequest } from "../interfaces-submodule/interfaces/dto/message/isend-message-request.interface";

export const useChatInput = (
  sendNewMessage?: ({ chatId, content }: ISendMessageRequest) => void,
  chatId?: number
) => {
  const [isFocused, setIsFocused] = useState(false);
  const [sendMessage] = useSendMessageMutation();

  const { register, reset, handleSubmit } = useForm<ISendMessageRequest>();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleFocus = useCallback(() => setIsFocused(true), []);
  const handleBlur = useCallback(() => setIsFocused(false), []);

  const onSubmit = useCallback(
    async (data: ISendMessageRequest) => {
      if (!data.content.trim()) return;

      try {
        let chatResponse;

        if (!chatId) {
          chatResponse = await dispatch(
            chatsApi.endpoints.createChat.initiate({ name: data.content.slice(0, 40) })
          ).unwrap();
          if (chatResponse) {
            navigate(`/chats/${chatResponse.id}`);
          }
        }

        await sendMessage({
          chatId: chatId ?? chatResponse?.id,
          content: data.content,
        }).unwrap();

        if (sendNewMessage) {
          sendNewMessage({
            chatId: chatId ?? chatResponse?.id,
            content: data.content,
          });
        }

        reset();
      } catch (error) {
        console.error("Failed to send message:", error);
      }
    },
    [chatId, dispatch, navigate, reset, sendMessage, sendNewMessage]
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
