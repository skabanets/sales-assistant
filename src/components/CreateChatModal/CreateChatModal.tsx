import { FC } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import { useCreateChatForm } from "../../hooks";
import { fieldWrapperStyles, modalBtnStyles, modalBtnWrapperStyles } from "../../theme";
import { errorMessageStyles } from "../LoginForm/LoginFormStyles";
import { chatNameInputStyles, createChatFormStyles } from "./CreateChatModalStyles";

interface ICreateChatModalProps {
  toggleModal: () => void;
}

export const CreateChatModal: FC<ICreateChatModalProps> = ({ toggleModal }) => {
  const { register, handleSubmit, onSubmit, errors } = useCreateChatForm({
    toggleModal,
  });

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={createChatFormStyles}>
      <Box sx={fieldWrapperStyles}>
        <TextField
          type="text"
          label="Chat name"
          variant="filled"
          sx={chatNameInputStyles}
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
      <Box sx={modalBtnWrapperStyles}>
        <Button variant="outlined" type="button" sx={modalBtnStyles} onClick={toggleModal}>
          Cancel
        </Button>
        <Button
          variant="contained"
          type="submit"
          sx={modalBtnStyles}
          onClick={() => console.log("Create chat")}
        >
          Create
        </Button>
      </Box>
    </Box>
  );
};
