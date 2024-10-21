import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";

import { layoutStyles, asideStyles, getMainBgStyles } from "./AuthPageStyles";

const AuthPage = () => {
  const theme = useTheme();
  const mainBgStyles = getMainBgStyles(theme);

  return (
    <Box sx={layoutStyles}>
      <Box component="aside" sx={asideStyles} bgcolor="background.paper"></Box>
      <Box component="main" sx={mainBgStyles}></Box>
    </Box>
  );
};

export default AuthPage;
