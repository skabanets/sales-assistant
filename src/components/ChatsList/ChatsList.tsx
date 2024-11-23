import { FC } from "react";
import List from "@mui/material/List";

import { ChatListItem } from "../../components";

import { IChatItem } from "../../interfaces-submodule/interfaces/dto/chat/dto/ichat-item";
import { chatsListStyles } from "./ChatsListStyles";

interface IChatsListProps {
  chats: IChatItem[];
}

export const ChatsList: FC<IChatsListProps> = ({ chats }) => {
  return (
    <List sx={chatsListStyles} className="scrollbar">
      {chats && chats.map(chat => <ChatListItem key={chat.id} chat={chat} />)}
    </List>
  );
};
