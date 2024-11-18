import { FC } from "react";
import List from "@mui/material/List";

import { ChatListItem } from "../../components";

import { IChatItem } from "../../interfaces-submodule/interfaces/dto/chat/dto/ichat-item";
import { chatsListStyles } from "./ChatsListStyles";

interface IChatsListProps {
  chats: IChatItem[];
  refetch: () => void;
}

export const ChatsList: FC<IChatsListProps> = ({ chats, refetch }) => {
  return (
    <List sx={chatsListStyles}>
      {chats && chats.map(chat => <ChatListItem key={chat.id} chat={chat} refetch={refetch} />)}
    </List>
  );
};
