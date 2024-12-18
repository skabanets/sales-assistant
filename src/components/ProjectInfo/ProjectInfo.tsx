import { FC } from "react";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

import { getFormattedDate, getScoreColor } from "../../heplers";
import { infoTitleStyles, vacancyBlockContainerStyles } from "../../theme";
import {
  dataWrapperStyles,
  dateBlockStyles,
  descriptionBlockStyles,
  expandLinkStyles,
  fullDescriptionStyles,
  getScoreInfoStyles,
  infoBlockStyles,
  linkBlockStyles,
  linkStyles,
  shortDescriptionStyles,
} from "./ProjectInfoStyles";
import { useExpandableText } from "../../hooks";

interface IProjectInfoProps {
  url: string;
  title: string;
  description: string;
  published: string;
  score: number;
}

export const ProjectInfo: FC<IProjectInfoProps> = ({
  url,
  title,
  description,
  published,
  score,
}) => {
  const scoreColor = getScoreColor(score);
  const maxShortHeight = 6 * 1.5 * 16;
  const { isOpen, showExpand, toggleOpen, contentRef } = useExpandableText({
    content: description,
    maxShortHeight,
  });

  return (
    <Box sx={vacancyBlockContainerStyles}>
      <Box sx={infoTitleStyles}>
        <Typography variant="h2">Project info</Typography>
      </Box>
      <Box sx={dataWrapperStyles}>
        {score !== 0 && (
          <Box sx={infoBlockStyles}>
            <Chip size="small" label={score} sx={getScoreInfoStyles(scoreColor)} />
          </Box>
        )}
        <Box sx={linkBlockStyles}>
          <Link sx={linkStyles} href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </Link>
        </Box>
        <Box sx={dateBlockStyles}>
          <Typography color="gray.700">{getFormattedDate(published)}</Typography>
        </Box>
      </Box>
      <Box sx={descriptionBlockStyles}>
        <Box ref={contentRef} sx={{ ...(isOpen ? fullDescriptionStyles : shortDescriptionStyles) }}>
          {description}
        </Box>
        {showExpand && (
          <Link onClick={toggleOpen} sx={expandLinkStyles}>
            {isOpen ? "Collapse" : "Expand"}
          </Link>
        )}
      </Box>
    </Box>
  );
};
