import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import ListItemButton from "@mui/material/ListItemButton";
import Divider from "@mui/material/Divider";

import { CustomIcon } from "../../components";

import { useAppDispatch, useAppSelector, useMenu } from "../../hooks";
import { logout, selectUserInfo } from "../../redux";
import { dividerContainerStyles, userMenuDividerStyles, userNameStyles } from "./UserMenuStyles";
import { navLinkStyles } from "../../theme";

export const UserMenu = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUserInfo);
  const { anchorEl, open, handleClick, handleClose } = useMenu();

  return (
    <Box>
      <Button
        sx={{ ...navLinkStyles, ...(open && { backgroundColor: "gray.200" }) }}
        id="user-button"
        aria-controls={open ? "user-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        type="button"
      >
        <CustomIcon iconName="avatar-outline" />
        <Typography color="text.primary" sx={userNameStyles}>
          {user?.firstName} {user?.lastName}
        </Typography>
        <CustomIcon iconName="chevron-right" />
      </Button>
      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "user-button",
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <ListItemButton sx={navLinkStyles}>
          <CustomIcon iconName="filter" />
          <Typography color="text.primary" sx={{ width: "100%" }}>
            Filter presets
          </Typography>
        </ListItemButton>
        <Box sx={dividerContainerStyles}>
          <Divider sx={userMenuDividerStyles} />
        </Box>
        <ListItemButton sx={navLinkStyles} onClick={() => dispatch(logout())}>
          <CustomIcon iconName="logout" />
          <Typography color="text.primary" sx={{ width: "100%" }}>
            Logout
          </Typography>
        </ListItemButton>
      </Menu>
    </Box>
  );
};
