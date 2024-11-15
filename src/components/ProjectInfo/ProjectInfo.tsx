import { FC, useEffect, useRef, useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);
  const [showExpand, setShowExpand] = useState(false);
  const descriptionRef = useRef<HTMLDivElement | null>(null);
  const scoreColor = getScoreColor(score);

  useEffect(() => {
    const maxShortHeight = 6 * 1.5 * 16;

    if (descriptionRef.current) {
      const descriptionHeight = descriptionRef.current.scrollHeight;
      setShowExpand(descriptionHeight > maxShortHeight);
    }
  }, [description]);

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
          <Link sx={linkStyles} href={url}>
            {title}
          </Link>
        </Box>
        <Box sx={dateBlockStyles}>
          <Typography color="gray.700">{getFormattedDate(published)}</Typography>
        </Box>
      </Box>
      <Box sx={descriptionBlockStyles}>
        <Box
          ref={descriptionRef}
          sx={{ ...(isOpen ? fullDescriptionStyles : shortDescriptionStyles) }}
        >
          {description}
        </Box>
        {showExpand && (
          <Link onClick={() => setIsOpen(!isOpen)} sx={expandLinkStyles}>
            {isOpen ? "Collapse" : "Expand"}
          </Link>
        )}
      </Box>
    </Box>
  );
};
