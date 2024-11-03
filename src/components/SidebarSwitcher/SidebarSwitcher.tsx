import { useContext } from "react";
import Button from "@mui/material/Button";

import { CustomIcon } from "../CustomIcon/CustomIcon";

import { ThemeContext } from "../../context/ThemeContext";
import { switcherBtnStyles } from "../../theme";

export const SidebarSwitcher = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("ThemeSwitcher must be used within a ThemeContextProvider");
  }
  const { isSidebarOpen, toggleSidebar } = themeContext;

  return (
    <Button type="button" onClick={toggleSidebar} sx={switcherBtnStyles}>
      <CustomIcon iconName={isSidebarOpen ? "collapse-menu" : "menu"} htmlColor="gray.800" />
    </Button>
  );
};
