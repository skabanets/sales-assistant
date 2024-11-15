import { FC } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";

import { MatchedItem } from "./CaseItem/MatchedItem";

import { IUpworkFeedMatchEntityDto } from "../../interfaces-submodule/interfaces/dto/upwork-feed/iupwork-feed-match-entity.dto";
import { MatchedItemType } from "../../constants";
import { caseWrapperStyles, casesListStyles, checkboxStyles } from "./MatchedItemsStyles";
import { infoTitleStyles, vacancyBlockContainerStyles } from "../../theme";

interface IMatchedItemsProps {
  items: IUpworkFeedMatchEntityDto[];
  type: MatchedItemType.CASES | MatchedItemType.BLOGS;
}

export const MatchedItems: FC<IMatchedItemsProps> = ({ items, type }) => {
  return (
    <Box sx={vacancyBlockContainerStyles}>
      <Box sx={infoTitleStyles}>
        <Typography variant="h2">{type}</Typography>
      </Box>
      <Box component="ul" sx={casesListStyles}>
        {items?.map(item => (
          <Box component="li" key={item.docId} sx={caseWrapperStyles}>
            <MatchedItem item={item} type={type} />
            <Checkbox checked={item.selected} sx={checkboxStyles} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};
