import { FC } from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

import { linkStyles, linkWrapperStyles } from "../UpworkFeedTableStyles";

interface ITitleCellProps {
  title: string;
  url: string;
}

export const TitleCell: FC<ITitleCellProps> = ({ title, url }) => {
  return (
    <Box sx={linkWrapperStyles}>
      <Link href={url} target="_blank" rel="noopener noreferrer" sx={linkStyles}>
        {title}
      </Link>
    </Box>
  );
};
