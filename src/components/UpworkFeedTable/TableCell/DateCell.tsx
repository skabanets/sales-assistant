import { FC } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { getFormattedDate } from "../../../heplers";
import { baseTableTextStyles, mediumCellStyles } from "../UpworkFeedTableStyles";

interface IDateCellProps {
  date: string;
}

export const DateCell: FC<IDateCellProps> = ({ date }) => (
  <Box sx={mediumCellStyles}>
    <Typography sx={baseTableTextStyles}>{getFormattedDate(date)}</Typography>
  </Box>
);
