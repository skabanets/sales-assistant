import { FC, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { useEditChatForm } from "../../hooks";
import { IChatItem } from "../../interfaces-submodule/interfaces/dto/chat/dto/ichat-item";
import { IEditChatRequest } from "../../interfaces-submodule/interfaces/dto/chat/dto/iedit-chat-request.interface";
import {
  chatModalBtnStyles,
  chatModalBtnWrapperStyles,
  chatModalWrapperStyles,
  chatNameInputStyles,
  editChatFormStyles,
  errorMessageStyles,
} from "./EditChatContentStyles";
import { fieldWrapperStyles } from "../../theme";

interface IEditChatContentProps {
  chat: IChatItem;
  toggleModal: () => void;
  onEdit: (id: number, data: IEditChatRequest) => void;
}

export const EditChatContent: FC<IEditChatContentProps> = ({ chat, toggleModal, onEdit }) => {
  const { register, handleSubmit, onSubmit, setValue, errors } = useEditChatForm({
    chat,
    toggleModal,
    onEdit,
  });
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      setValue("name", chat.name);
      inputRef.current.focus();
    }
  }, [chat.name, setValue]);

  return (
    <Box sx={chatModalWrapperStyles}>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={editChatFormStyles}>
        <Box sx={fieldWrapperStyles}>
          <TextField
            type="text"
            label=""
            variant="filled"
            sx={chatNameInputStyles}
            inputRef={inputRef}
            {...register("name")}
            autoComplete="off"
            fullWidth
          />
          {errors.name && (
            <Typography variant="caption" color="error" sx={errorMessageStyles}>
              {errors.name.message}
            </Typography>
          )}
        </Box>
        <Box sx={chatModalBtnWrapperStyles}>
          <Button variant="outlined" type="button" sx={chatModalBtnStyles} onClick={toggleModal}>
            Discard
          </Button>
          <Button variant="contained" sx={chatModalBtnStyles} type="submit">
            Save
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
