import { FC } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { ordinaryTextStyles, smallCellStyles } from "../UpworkFeedTableStyles";

interface INumberCellProps {
  value: number;
}

export const NumberCell: FC<INumberCellProps> = ({ value }) => (
  <Box sx={smallCellStyles}>
    {value !== undefined && value !== null && (
      <Typography sx={ordinaryTextStyles}>{value}</Typography>
    )}
  </Box>
);
