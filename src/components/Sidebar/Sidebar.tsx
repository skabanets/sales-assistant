import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ListItemButton from "@mui/material/ListItemButton";
import Typography from "@mui/material/Typography";

import {
  CenterScreenModal,
  ChatsList,
  CreateChatModal,
  CustomIcon,
  UserMenu,
} from "../../components";

import { chatsApi } from "../../services";
import { useAppDispatch, useAppSelector, useModal } from "../../hooks";
import { selectChats } from "../../redux";
import { navLinkStyles } from "../../theme";
import {
  addChatBtnWrapper,
  chatMenuStyles,
  feedsNavLinkStyles,
  mainMenuStyles,
} from "./SidebarStyles";

export const Sidebar = () => {
  const [isOpenCreateModal, toggleCreateModal] = useModal();
  const chats = useAppSelector(selectChats);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(chatsApi.endpoints.fetchChats.initiate());
  }, []);

  return (
    <>
      <Box sx={chatMenuStyles}>
        <Box sx={addChatBtnWrapper}>
          <Button variant="outlined" type="button" onClick={toggleCreateModal}>
            <CustomIcon iconName="plus" />
            New chat
          </Button>
        </Box>
        {chats && <ChatsList chats={chats} />}
      </Box>
      <Box sx={mainMenuStyles}>
        <ListItemButton
          component={NavLink}
          to="/upwork-feeds"
          sx={{ ...navLinkStyles, ...feedsNavLinkStyles }}
        >
          <CustomIcon iconName="rss_feed" />
          <Typography color="text.primary">Upwork feed</Typography>
        </ListItemButton>
        <UserMenu />
      </Box>
      {isOpenCreateModal && (
        <CenterScreenModal
          isOpenModal={isOpenCreateModal}
          toggleModal={toggleCreateModal}
          title="New chat"
        >
          <CreateChatModal toggleModal={toggleCreateModal} />
        </CenterScreenModal>
      )}
    </>
  );
};
