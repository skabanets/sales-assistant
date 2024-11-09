import { FC, createContext, useEffect, useMemo, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { ThemeMode } from "../constants";
import { darkTheme, lightTheme } from "../theme";

interface IThemeContextProps {
  themeMode: ThemeMode;
  toggleTheme: () => void;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

interface IThemeContextProviderProps {
  children: React.ReactNode;
}

export const ThemeContext = createContext<IThemeContextProps | undefined>(undefined);

const ThemeContextProvider: FC<IThemeContextProviderProps> = ({ children }) => {
  const storedTheme = localStorage.getItem("theme") as ThemeMode | null;
  const storedSidebarState = localStorage.getItem("isSidebarOpen") === "true";
  const [themeMode, setThemeMode] = useState<ThemeMode>(storedTheme || ThemeMode.LIGHT);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(storedSidebarState || false);

  useEffect(() => {
    localStorage.setItem("theme", themeMode);
  }, [themeMode]);

  useEffect(() => {
    localStorage.setItem("isSidebarOpen", isSidebarOpen.toString());
  }, [isSidebarOpen]);

  const toggleTheme = () => {
    setThemeMode(prevMode => (prevMode === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT));
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState);
  };

  const theme = useMemo(
    () => (themeMode === ThemeMode.LIGHT ? lightTheme : darkTheme),
    [themeMode]
  );

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme, isSidebarOpen, toggleSidebar }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
