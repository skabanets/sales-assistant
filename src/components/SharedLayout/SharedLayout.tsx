import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";

import { Loader } from "../../components";

import { asideStyles, headerStyles, layoutStyles, mainStyles } from "./SharedLayoutStyles";
import { useAppSelector } from "../../hooks";
import { selectIsLoggedIn } from "../../redux";

export const SharedLayout = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return (
    <>
      {isLoggedIn ? (
        <Box sx={layoutStyles}>
          <Box component="header" sx={headerStyles}>
            Header
          </Box>
          <Box component="aside" sx={asideStyles}>
            Sidebar
          </Box>
          <Box component="main" sx={mainStyles}>
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
