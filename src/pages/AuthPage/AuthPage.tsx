import Box from "@mui/material/Box";
import { Typography, useTheme } from "@mui/material";

import { layoutStyles, asideStyles, getMainBgStyles, authPageTitle } from "./AuthPageStyles";
import { LoginForm, Logo } from "../../components";

const AuthPage = () => {
  const theme = useTheme();
  const mainBgStyles = getMainBgStyles(theme);

  return (
    <Box sx={layoutStyles}>
      <Box component="aside" sx={asideStyles} bgcolor="background.paper">
        <Logo />
        <Typography variant="h1" sx={authPageTitle}>
          Login
        </Typography>
        <LoginForm />
      </Box>
      <Box component="main" sx={mainBgStyles}></Box>
    </Box>
  );
};

export default AuthPage;
