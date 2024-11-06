import { Suspense, useContext } from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";

import { Header, Loader, Sidebar } from "../../components";

import { useAppSelector } from "../../hooks";
import { selectIsLoggedIn } from "../../redux";
import { ThemeContext } from "../../context/ThemeContext";
import {
  closedSidebarStyles,
  layoutStylesWithSidebar,
  layoutStylesWithoutSidebar,
  mainStylesWithSidebar,
  mainStylesWithoutSidebar,
  openSidebarStyles,
} from "./SharedLayoutStyles";

export const SharedLayout = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("ThemeSwitcher must be used within a ThemeContextProvider");
  }

  const { isSidebarOpen } = themeContext;

  return (
    <>
      {isLoggedIn ? (
        <Box sx={isSidebarOpen ? layoutStylesWithSidebar : layoutStylesWithoutSidebar}>
          <Header />
          <Box component="aside" sx={isSidebarOpen ? openSidebarStyles : closedSidebarStyles}>
            <Sidebar />
          </Box>
          <Box
            component="main"
            sx={isSidebarOpen ? mainStylesWithSidebar : mainStylesWithoutSidebar}
          >
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </Box>
        </Box>
      ) : (
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      )}
    </>
  );
};
