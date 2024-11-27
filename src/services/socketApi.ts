import { io, Socket } from "socket.io-client";

import { IMessageDTO } from "../interfaces-submodule/interfaces/dto/message/imessage-dto";
import { MessagesRoutesEnum } from "../interfaces-submodule/enums/routes/messages-routes.enum";
import { NotificationEvents } from "../interfaces-submodule/enums/notification/notification-events.enum";

const socketUrl = `${import.meta.env.VITE_API_BASE_URL}/messages`;

export const socket: Socket = io(socketUrl, {
  transports: ["websocket"],
  autoConnect: true,
  reconnection: true,
  reconnectionAttempts: Infinity,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
});

export const connectSocket = (
  chatId: number,
  accessToken: string,
  handleChatResponse: (data: IMessageDTO) => void
) => {
  const requestBody = { chatId, accessToken };

  socket.connect();
  socket.emit(MessagesRoutesEnum.Subscribe, requestBody);
  socket.on(NotificationEvents.ChatResponse, handleChatResponse);
};

export const disconnectSocket = (
  chatId: number,
  accessToken: string,
  handleChatResponse: (data: IMessageDTO) => void
) => {
  const requestBody = { chatId, accessToken };

  socket.off(NotificationEvents.ChatResponse, handleChatResponse);
  socket.emit(MessagesRoutesEnum.Unsubscribe, requestBody);
  socket.disconnect();
};
