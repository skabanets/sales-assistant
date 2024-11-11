import { FC } from "react";
import Box from "@mui/material/Box";
import TableSortLabel from "@mui/material/TableSortLabel";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ImportExportIcon from "@mui/icons-material/ImportExport";

import { SortLabelStyles, headerTextWrapper, sortIconStyles } from "../UpworkFeedTableStyles";
import { SortDirection } from "../../../interfaces-submodule/enums/common/sort-direction.enum";

interface ISortLabelProps {
  headerTitle: string;
  isSorted: SortDirection | null | undefined;
  onSortChange: () => void;
}

export const SortLabel: FC<ISortLabelProps> = ({ headerTitle, isSorted, onSortChange }) => {
  return (
    <Box sx={headerTextWrapper}>
      <TableSortLabel
        sx={SortLabelStyles}
        active={isSorted !== null}
        direction={isSorted === SortDirection.DESC ? SortDirection.DESC : SortDirection.ASC}
        IconComponent={() => null}
        onClick={onSortChange}
      >
        {headerTitle}
        {isSorted ? (
          isSorted === SortDirection.ASC ? (
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
