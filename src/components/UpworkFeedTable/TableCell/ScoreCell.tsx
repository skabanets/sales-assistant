import { FC } from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";

import { getScoreColor } from "../../../heplers";
import { getScoreStyles, scoreWrapperStyles } from "../UpworkFeedTableStyles";

interface IScoreCellProps {
  score: number;
}

export const ScoreCell: FC<IScoreCellProps> = ({ score }) => {
  const scoreColor = getScoreColor(score);

  return (
    <Box sx={scoreWrapperStyles}>
      {score && <Chip size="small" label={score} sx={getScoreStyles(scoreColor)} />}
    </Box>
  );
};
