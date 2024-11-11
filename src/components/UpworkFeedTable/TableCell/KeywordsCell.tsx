import { FC } from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";

import { chipStyles, keywordsWrapperStyles } from "../UpworkFeedTableStyles";

interface IKeywordsCellProps {
  keywords: string[];
}

export const KeywordsCell: FC<IKeywordsCellProps> = ({ keywords }) => {
  return (
    <Box sx={keywordsWrapperStyles}>
      {keywords &&
        keywords.map((keyword: string) => (
          <Chip key={keyword} label={keyword} size="small" sx={chipStyles} />
        ))}
    </Box>
  );
};
