import { FC } from "react";
import Box from "@mui/material/Box";
import TableSortLabel from "@mui/material/TableSortLabel";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ImportExportIcon from "@mui/icons-material/ImportExport";

import { SortLabelStyles, headerTextWrapper, sortIconStyles } from "../UpworkFeedTableStyles";

interface ISortLabelProps {
  headerTitle: string;
  isSorted: "asc" | "desc" | null;
  onSortChange: () => void;
}

export const SortLabel: FC<ISortLabelProps> = ({ headerTitle, isSorted, onSortChange }) => {
  return (
    <Box sx={headerTextWrapper}>
      <TableSortLabel
        sx={SortLabelStyles}
        active={isSorted !== null}
        direction={isSorted === "desc" ? "desc" : "asc"}
        IconComponent={() => null}
        onClick={onSortChange}
      >
        {headerTitle}
        {isSorted ? (
          isSorted === "asc" ? (
            <ArrowUpwardIcon sx={sortIconStyles} />
          ) : (
            <ArrowDownwardIcon sx={sortIconStyles} />
          )
        ) : (
          <ImportExportIcon sx={sortIconStyles} />
        )}
      </TableSortLabel>
    </Box>
  );
};
