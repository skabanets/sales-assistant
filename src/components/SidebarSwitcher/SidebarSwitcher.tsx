import { useContext } from "react";
import Button from "@mui/material/Button";

import { CustomIcon } from "../CustomIcon/CustomIcon";

import { ThemeContext } from "../../context/ThemeContext";

export const SidebarSwitcher = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("ThemeSwitcher must be used within a ThemeContextProvider");
  }
  const { isSidebarOpen, toggleSidebar } = themeContext;

  return (
    <Button variant="text" type="button" onClick={toggleSidebar}>
      <CustomIcon iconName={isSidebarOpen ? "collapse-menu" : "menu"} htmlColor="gray.800" />
    </Button>
  );
};
