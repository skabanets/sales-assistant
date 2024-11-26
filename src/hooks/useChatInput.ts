import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { chatsApi, useSendMessageMutation } from "../services";
import { useAppDispatch } from "../hooks";
import { ISendMessageRequest } from "../interfaces-submodule/interfaces/dto/message/isend-message-request.interface";

export const useChatInput = (chatId?: number) => {
  const [isFocused, setIsFocused] = useState(false);
  const [sendMessage] = useSendMessageMutation();

  const { register, reset, handleSubmit } = useForm<ISendMessageRequest>();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleFocus = useCallback(() => setIsFocused(true), []);
  const handleBlur = useCallback(() => setIsFocused(false), []);

  const onSubmit = useCallback(
    async (data: ISendMessageRequest) => {
      try {
        if (!data.content.trim()) {
          return;
        }

        if (!chatId) {
          const response = await dispatch(
            chatsApi.endpoints.createChat.initiate({ name: data.content.slice(0, 40) })
          ).unwrap();

          await sendMessage({ chatId: response.id, content: data.content });
          navigate(`/chats/${response.id}`);
        } else {
          await sendMessage({ chatId, content: data.content });
        }

        reset();
      } catch (error) {
        console.error("Failed to send message:", error);
      }
    },
    [chatId, dispatch, navigate, reset, sendMessage]
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
