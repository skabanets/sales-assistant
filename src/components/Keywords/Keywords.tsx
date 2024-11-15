import { Box, Button, Chip, Typography } from "@mui/material";
import { infoTitleStyles } from "../ProjectInfo/ProjectInfoStyles";
import { CustomIcon } from "../../components";

import { FC } from "react";

import { ReviewType } from "../../interfaces-submodule/enums/upwork-feed/review-type.enum";
import { IReview } from "../../types";
import {
  emotionBtnStyles,
  emotionButtonWrapperStyles,
  keywordsBlockStyles,
  keywordsStyles,
  keywordsWrapperStyles,
} from "./KeywordsStyles";
import { vacancyBlockContainerStyles } from "../../theme";

interface IKeywordsProps {
  keywords: string[];
  review: IReview | undefined;
}

export const Keywords: FC<IKeywordsProps> = ({ keywords, review }) => {
  const isActiveLike = review?.type === ReviewType.Like;
  const isActiveDislike = review?.type === ReviewType.Dislike;

  return (
    <Box sx={vacancyBlockContainerStyles}>
      <Box sx={infoTitleStyles}>
        <Typography variant="h2">Keywords</Typography>
      </Box>
      <Box sx={keywordsBlockStyles}>
        <Box sx={keywordsWrapperStyles}>
          {keywords &&
            keywords.map((keyword: string) => (
              <Chip key={keyword} label={keyword} size="small" sx={keywordsStyles} />
            ))}
        </Box>
        <Box sx={emotionButtonWrapperStyles}>
          <Button variant="outlined" sx={emotionBtnStyles(isActiveLike)}>
            <CustomIcon iconName="like" />
          </Button>
          <Button variant="outlined" sx={emotionBtnStyles(isActiveDislike)}>
            <CustomIcon iconName="dislike" />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
