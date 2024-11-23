import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ListItemButton from "@mui/material/ListItemButton";
import Typography from "@mui/material/Typography";

import { ChatsList, CustomIcon, UserMenu } from "../../components";

import { chatsApi } from "../../services";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { selectChats } from "../../redux";
import { navLinkStyles } from "../../theme";
import {
  addChatBtnWrapper,
  chatMenuStyles,
  feedsNavLinkStyles,
  mainMenuStyles,
} from "./SidebarStyles";

export const Sidebar = () => {
  const chats = useAppSelector(selectChats);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(chatsApi.endpoints.fetchChats.initiate());
  }, []);

  return (
    <>
      <Box sx={chatMenuStyles}>
        <Box sx={addChatBtnWrapper}>
          <Button variant="outlined" type="button" onClick={() => navigate("/chats")}>
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
    </>
  );
};
