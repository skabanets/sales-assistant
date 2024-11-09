import { FC } from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";

import { chipStyles } from "../UpworkFeedTableStyles";

interface IKeywordsCellProps {
  keywords: string[];
}

export const KeywordsCell: FC<IKeywordsCellProps> = ({ keywords }) => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: "4px", width: "262px" }}>
      {keywords.map((keyword: string) => (
        <Chip key={keyword} label={keyword} size="small" sx={chipStyles} />
      ))}
    </Box>
  );
};
