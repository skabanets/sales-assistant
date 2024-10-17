import { FC, createContext, useEffect, useMemo, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { ThemeMode } from "../constants";
import { darkTheme, lightTheme } from "../theme";

interface IThemeContextProps {
  themeMode: ThemeMode;
  toggleTheme: () => void;
}

interface IThemeContextProviderRrops {
  children: React.ReactNode;
}

export const ThemeContext = createContext<IThemeContextProps | undefined>(undefined);

const ThemeContextProvider: FC<IThemeContextProviderRrops> = ({ children }) => {
  const storedTheme = localStorage.getItem("theme") as ThemeMode | null;
  const [themeMode, setThemeMode] = useState<ThemeMode>(storedTheme || ThemeMode.LIGHT);

  useEffect(() => {
    localStorage.setItem("theme", themeMode);
  }, [themeMode]);

  const toggleTheme = () => {
    setThemeMode(prevMode => (prevMode === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT));
  };

  const theme = useMemo(
    () => (themeMode === ThemeMode.LIGHT ? lightTheme : darkTheme),
    [themeMode]
  );

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
