import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ListItemButton from "@mui/material/ListItemButton";
import Typography from "@mui/material/Typography";

import { ChatsList, CustomIcon, UserMenu } from "../../components";

import {
  addChatBtnWrapper,
  chatMenuStyles,
  feedsNavLinkStyles,
  mainMenuStyles,
} from "./SidebarStyles";
import { navLinkStyles } from "../../theme";

export const Sidebar = () => {
  const chats = [
    { id: 1, name: "Hi there! How can I help you? I help you?", accountId: 15 },
    { id: 2, name: "Hi there! How can I help you? I help you?", accountId: 15 },
    { id: 3, name: "Hi there! How can I help you? I help you?", accountId: 15 },
  ];

  return (
    <>
      <Box sx={chatMenuStyles}>
        <Box sx={addChatBtnWrapper}>
          <Button variant="outlined" type="button">
            <CustomIcon iconName="plus" />
            New chat
          </Button>
        </Box>
        <ChatsList chats={chats} />
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
