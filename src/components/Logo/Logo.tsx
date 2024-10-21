import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { CustomIcon } from "../../components";

import { iconStyles, logoContainerStyles, logoTextStyles } from "./LogoStyles";

export const Logo = () => {
  return (
    <Box sx={logoContainerStyles}>
      <CustomIcon iconName="union" sx={iconStyles} />
      <Typography color="text.secondary" sx={logoTextStyles}>
        Sales Assistant
      </Typography>
    </Box>
  );
};
