import Box from "@mui/material/Box";

import { SidebarSwitcher, ThemeSwitcher } from "../../components";

import { headerStyles } from "./HeaderStyles";

export const Header = () => {
  return (
    <Box component="header" sx={headerStyles}>
      <SidebarSwitcher />
      <ThemeSwitcher />
    </Box>
  );
};
