import { FC } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { infoItemStyles, infoItemTextStyles, infoItemTitleStyles } from "./InfoBlockItemStyles";

interface IInfoBlockItemProps {
  title: string;
  value: string;
}

export const InfoBlockItem: FC<IInfoBlockItemProps> = ({ title, value }) => (
  <Box sx={infoItemStyles}>
    <Typography sx={infoItemTitleStyles}>{title}:</Typography>
    <Typography sx={infoItemTextStyles}>{value}</Typography>
  </Box>
);
