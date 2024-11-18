import { FC } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { IChatItem } from "../../interfaces-submodule/interfaces/dto/chat/dto/ichat-item";
import { modalBtnStyles, modalBtnWrapperStyles } from "../../theme";

interface IDeleteChatContentProps {
  chat: IChatItem;
  toggleModal: () => void;
  onDelete: (id: number) => void;
}

export const DeleteChatContent: FC<IDeleteChatContentProps> = ({ chat, toggleModal, onDelete }) => {
  return (
    <>
      <Typography color="text.secondary">{`Are you sure you want to delete the chat "${chat.name}"?`}</Typography>
      <Box sx={modalBtnWrapperStyles}>
        <Button variant="outlined" type="button" sx={modalBtnStyles} onClick={toggleModal}>
          No, Keep it
        </Button>
        <Button
          variant="contained"
          type="button"
          sx={modalBtnStyles}
          onClick={() => onDelete(chat.id)}
        >
          Yes, Delete it
        </Button>
      </Box>
    </>
  );
};
