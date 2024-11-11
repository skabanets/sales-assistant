import { FC } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Pagination from "@mui/material/Pagination";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";

import { usePagination } from "../../hooks";
import { itemsPerPageOptions } from "../../constants";
import {
  boldTextStyles,
  defaultPaginationStyles,
  itemsPageStyles,
  itemsShownWrapper,
  opacityTextStyles,
  pageItemsWrapper,
  paginationContainerStyles,
  paginationDividerStyles,
} from "./TablePaginationStyles";
import { formControlStyles } from "../../theme";

export interface ITablePaginationProps {
  totalItems: number;
}

export const TablePagination: FC<ITablePaginationProps> = ({ totalItems }) => {
  const {
    page,
    itemsPerPage,
    totalPages,
    startIndex,
    endIndex,
    handlePageChange,
    handleItemsPerPageChange,
  } = usePagination({ totalItems });

  return (
    <Box sx={paginationContainerStyles}>
      <Box sx={itemsShownWrapper}>
        <Typography variant="body2" sx={opacityTextStyles}>
          Items shown:
        </Typography>
        <Typography variant="body2" sx={boldTextStyles}>
          {startIndex}-{endIndex}
        </Typography>
        out of
        <Typography variant="body2" sx={boldTextStyles}>
          {totalItems}
        </Typography>
      </Box>
      <Divider orientation="vertical" sx={paginationDividerStyles} />
      <Box sx={pageItemsWrapper}>
        <Typography sx={opacityTextStyles}>Items per page</Typography>
        <FormControl sx={formControlStyles}>
          <Select
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            sx={itemsPageStyles}
            MenuProps={{
              PaperProps: {
                sx: {
                  borderRadius: "6px",
                  width: "100px",
                },
              },
              anchorOrigin: {
                vertical: "top",
                horizontal: "center",
              },
              transformOrigin: {
                vertical: "bottom",
                horizontal: "center",
              },
            }}
          >
            {Object.entries(itemsPerPageOptions).map(([value, label]) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      {totalPages > 1 && (
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          showFirstButton
          showLastButton
          sx={defaultPaginationStyles}
        />
      )}
    </Box>
  );
};
