import { FC, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Pagination from "@mui/material/Pagination";
import Typography from "@mui/material/Typography";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { useUniversalSearchParams } from "../../hooks";
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
  totalPages: number;
}

export const TablePagination: FC<ITablePaginationProps> = ({ totalItems, totalPages }) => {
  const { searchParams, setParam } = useUniversalSearchParams();

  const initialPage = Number(searchParams.get("page")) || 1;
  const initialItemsPerPage = Number(searchParams.get("limit")) || 10;

  const [page, setPage] = useState(initialPage);
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);

  const startIndex = (page - 1) * itemsPerPage + 1;
  const endIndex = Math.min(page * itemsPerPage, totalItems);

  useEffect(() => {
    setPage(initialPage);
  }, [initialPage, itemsPerPage]);

  const handlePageChange = (_: unknown, value: number) => {
    setPage(value);
    setParam("page", value);
  };

  const handleItemsPerPageChange = (event: SelectChangeEvent<number>) => {
    const limit = event.target.value;
    setItemsPerPage(Number(limit));
    setParam("limit", limit);
  };

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
