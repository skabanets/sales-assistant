import { FC } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

import { CustomIcon } from "../../components";

import { useEscapeKeyClose } from "../../hooks";
import {
  closeButtonStyles,
  modalTitleStyles,
  titleWrapperStyles,
  wrapperModalStyles,
} from "./CenterScreenModalStyles";
import { backdropStyles } from "../../theme";

interface ICenterScreenModalProps {
  isOpenModal: boolean;
  toggleModal: () => void;
  title: string;
  children: React.ReactNode;
}

export const CenterScreenModal: FC<ICenterScreenModalProps> = ({
  isOpenModal,
  toggleModal,
  title,
  children,
}) => {
  useEscapeKeyClose(toggleModal);

  return (
    <Modal
      open={isOpenModal}
      onClose={toggleModal}
      sx={backdropStyles}
      aria-labelledby="modal-modal-title"
    >
      <Box sx={wrapperModalStyles}>
        <Box sx={titleWrapperStyles}>
          <Typography
            id="modal-modal-title"
            component="h2"
            sx={modalTitleStyles}
            color="text.secondary"
          >
            {title}
          </Typography>
          <Button sx={closeButtonStyles} onClick={toggleModal}>
            <CustomIcon iconName="close" />
          </Button>
        </Box>
        {children}
      </Box>
    </Modal>
  );
};
