import { useContext } from "react";
import Button from "@mui/material/Button";

import { CustomIcon } from "../CustomIcon/CustomIcon";

import { ThemeContext } from "../../context/ThemeContext";
import { themeIconStyles } from "./ThemeSwitcherStyles";
import { ThemeMode } from "../../constants";
import { switcherBtnStyles } from "../../theme";

export const ThemeSwitcher = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("ThemeSwitcher must be used within a ThemeContextProvider");
  }

  const { themeMode, toggleTheme } = themeContext;

  return (
    <Button type="button" onClick={toggleTheme} sx={switcherBtnStyles}>
      <CustomIcon
        iconName={themeMode === ThemeMode.LIGHT ? "dark-mode" : "light-mode"}
        htmlColor="gray.800"
        sx={themeIconStyles}
      />
    </Button>
  );
};
