import { FC, useRef } from "react";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ListItemButton from "@mui/material/ListItemButton";

import {
  CenterScreenModal,
  SidebarModal,
  CustomIcon,
  DeleteChatContent,
  EditChatContent,
} from "../../components";

import { IChatItem } from "../../interfaces-submodule/interfaces/dto/chat/dto/ichat-item";
import { useMenu, useModal } from "../../hooks";
import { navLinkStyles } from "../../theme";
import {
  chatItemStyles,
  chatMenuTextStyles,
  chatTitleStyles,
  moreButtonStyles,
} from "./ChatListItemStyles";

interface IChatListItem {
  chat: IChatItem;
}

export const ChatListItem: FC<IChatListItem> = ({ chat }) => {
  const [isOpenEditModal, toggleEditModal] = useModal();
  const [isOpenDeleteModal, toggleDeleteModal] = useModal();
  const { setAnchorEl, open, handleClick, handleClose } = useMenu();

  const modalRef = useRef<HTMLDivElement>(null);
  const listItemRef = useRef<HTMLAnchorElement>(null);

  const handleOpenModal = (toggle: () => void) => {
    handleClose();
    toggle();
  };

  return (
    <>
      {!isOpenEditModal && !isOpenDeleteModal && (
        <Box>
          <ListItemButton
            ref={listItemRef}
            sx={{ ...navLinkStyles, ...chatItemStyles }}
            component={NavLink}
            to={`/chats/${chat.id}`}
            id="more-button"
            aria-controls={open ? "more-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Typography color="text.primary" sx={chatTitleStyles}>
              {chat.name}
            </Typography>
            <Button
              sx={{ ...moreButtonStyles, ...(open && { backgroundColor: "gray.200" }) }}
              id="more-button"
              type="button"
              aria-controls={open ? "chat-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={e => {
                e.preventDefault();
                setAnchorEl(listItemRef.current);
                handleClick(e);
              }}
            >
              <CustomIcon iconName="more-vertical" />
            </Button>
          </ListItemButton>
          <Menu
            id="chat-menu"
            anchorEl={listItemRef.current}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "more-button",
            }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <ListItemButton sx={navLinkStyles}>
              <CustomIcon iconName="edit" />
              <Typography
                color="text.primary"
                sx={chatMenuTextStyles}
                onClick={() => handleOpenModal(toggleEditModal)}
              >
                Rename
              </Typography>
            </ListItemButton>
            <ListItemButton sx={navLinkStyles} onClick={() => handleOpenModal(toggleDeleteModal)}>
              <CustomIcon iconName="delete" />
              <Typography color="text.primary" sx={chatMenuTextStyles}>
                Delete
              </Typography>
            </ListItemButton>
          </Menu>
        </Box>
      )}
      {isOpenEditModal && (
        <SidebarModal toggleModal={toggleEditModal} modalRef={modalRef}>
          <EditChatContent chat={chat} toggleModal={toggleEditModal} />
        </SidebarModal>
      )}
      {isOpenDeleteModal && (
        <CenterScreenModal
          isOpenModal={isOpenDeleteModal}
          toggleModal={toggleDeleteModal}
          title="Delete chat"
        >
          <DeleteChatContent chat={chat} toggleModal={toggleDeleteModal} />
        </CenterScreenModal>
      )}
    </>
  );
};