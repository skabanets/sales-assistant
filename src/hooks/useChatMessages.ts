import { useEffect, useState } from "react";

import { connectSocket, disconnectSocket, useFetchMessagesQuery } from "../services";
import { IMessageDTO } from "../interfaces-submodule/interfaces/dto/message/imessage-dto";
import { ISendMessageRequest } from "../interfaces-submodule/interfaces/dto/message/isend-message-request.interface";

export const useChatMessages = (
  chatId: number,
  accessToken: string,
  user: { id: number | null } | null
) => {
  const { data: fetchedMessages = [] } = useFetchMessagesQuery(
    { id: chatId },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const [chatMessages, setChatMessages] = useState<IMessageDTO[]>(fetchedMessages);
  const [isPending, setIsPending] = useState<boolean>(false);

  useEffect(() => {
    setChatMessages(fetchedMessages);
  }, [fetchedMessages]);

  useEffect(() => {
    setIsPending(false);
  }, [chatId]);

  useEffect(() => {
    const handleMessageReceived = (data: IMessageDTO) => {
      setChatMessages(prevState => {
        if (
          prevState.some(
            message => message.created === data.created && message.content === data.content
          )
        ) {
          return prevState;
        }
        return [...prevState, data];
      });
      setIsPending(false);
    };

    connectSocket(chatId, accessToken, handleMessageReceived);

    return () => {
      disconnectSocket(chatId, accessToken, handleMessageReceived);
    };
  }, [chatId, accessToken]);

  const sendMessage = (message: IMessageDTO) => {
    setChatMessages(prevState => [...prevState, message]);
    setIsPending(true);
  };

  const handleSendMessage = ({ content, chatId }: ISendMessageRequest): void => {
    sendMessage({
      content,
      created: new Date().toISOString(),
      isBot: false,
      accountId: user?.id || 0,
      chatId: chatId || 0,
    });
  };

  return { chatMessages, isPending, sendMessage, handleSendMessage };
};
