import { FC } from "react";
import { format, parseISO } from "date-fns";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

import { InfoBlockItem } from "../InfoBlockItem/InfoBlockItem";

import { IUpworkFeedMatchEntityDto } from "../../../interfaces-submodule/interfaces/dto/upwork-feed/iupwork-feed-match-entity.dto";
import { BLOGS_KEYS, CASES_KEYS, MatchedItemType } from "../../../constants";
import {
  expandItemLinkStyles,
  fullDescriptionStyles,
  itemContentStyles,
  itemInfoStyles,
  itemLinkStyles,
  shortDescriptionStyles,
} from "./MatchedItemStyles";
import { useExpandableText } from "../../../hooks";

interface IMatchedItemProps {
  item: IUpworkFeedMatchEntityDto;
  type: MatchedItemType.CASES | MatchedItemType.BLOGS;
}

export const MatchedItem: FC<IMatchedItemProps> = ({ item, type }) => {
  const keysToRender = type === MatchedItemType.CASES ? CASES_KEYS : BLOGS_KEYS;

  const maxShortHeight = 6 * 1.43 * 14;
  const { isOpen, showExpand, toggleOpen, contentRef } = useExpandableText({
    content: item.content,
    maxShortHeight,
  });

  return (
    <Box sx={itemInfoStyles}>
      {item.title && (
        <Link sx={itemLinkStyles} href={item.link} target="_blank" rel="noopener noreferrer">
          {item.title}
        </Link>
      )}
      {type === MatchedItemType.CASES && item.content && (
        <Box sx={itemContentStyles}>
          <Box
            ref={contentRef}
            sx={{
              ...(isOpen ? fullDescriptionStyles : shortDescriptionStyles),
            }}
          >
            {item.content}
          </Box>
          {showExpand && (
            <Link onClick={toggleOpen} sx={expandItemLinkStyles}>
              {isOpen ? "Collapse" : "Expand"}
            </Link>
          )}
        </Box>
      )}
      {item.infoBlock
        ?.filter(({ key, value }) => keysToRender.includes(key) && value)
        .map(({ key, value }, index) => (
          <InfoBlockItem
            key={index}
            title={key === "Published" ? "Published" : key}
            value={key === "Published" ? format(parseISO(value), "dd MMM yyyy") : value}
          />
        ))}
    </Box>
  );
};
