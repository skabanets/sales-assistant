import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ListItemButton from "@mui/material/ListItemButton";
import Typography from "@mui/material/Typography";

import { ChatsList, CustomIcon, UserMenu } from "../../components";

import { useFetchChatsQuery } from "../../services";
import { navLinkStyles } from "../../theme";
import {
  addChatBtnWrapper,
  chatMenuStyles,
  feedsNavLinkStyles,
  mainMenuStyles,
} from "./SidebarStyles";

export const Sidebar = () => {
  const { data: chats, refetch } = useFetchChatsQuery();

  return (
    <>
      <Box sx={chatMenuStyles}>
        <Box sx={addChatBtnWrapper}>
          <Button variant="outlined" type="button">
            <CustomIcon iconName="plus" />
            New chat
          </Button>
        </Box>
        {chats && <ChatsList chats={chats} refetch={refetch} />}
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
