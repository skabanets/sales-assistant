import {
  Divider,
  FormControl,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import {
  boldTextStyles,
  defaultPaginationStyles,
  itemsPageStyles,
  itemsShownWrapper,
  opacityTextStyles,
  pageItemsWrapper,
  paginationContainerStyles,
  paginationDividerStyles,
  tableWrapperStyles,
  upworkFeedContainer,
} from "./UpworkFeedsPageStyles";
import { useEffect, useState } from "react";
import { itemsPerPageOptions } from "../../constants";
import { useSearchParams } from "react-router-dom";
import { FeedControlPanel } from "../../components";
import { formControlStyles } from "../../theme";
import { UpworkFeedTable } from "../../components/UpworkFeedTable/UpworkFeedTable";

const UpworkFeedsPage = () => {
  const totalItems = 100;

  const [searchParams, setSearchParams] = useSearchParams();
  const initialPage = Number(searchParams.get("page")) || 1;
  const initialItemsPerPage = Number(searchParams.get("items")) || 10;

  const [page, setPage] = useState(initialPage);
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);

  useEffect(() => {
    setSearchParams({
      page: String(page),
      items: String(itemsPerPage),
    });
  }, [page, itemsPerPage, setSearchParams]);

  const handlePageChange = (_: unknown, value: number) => {
    setPage(value);
  };

  const handleItemsPerPageChange = (event: SelectChangeEvent<number>) => {
    setItemsPerPage(Number(event.target.value));
    setPage(1);
  };

  const pageCount = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage + 1;
  const endIndex = Math.min(page * itemsPerPage, totalItems);

  return (
    <Box component="section" sx={upworkFeedContainer}>
      <FeedControlPanel />
      <Box sx={tableWrapperStyles}>
        <UpworkFeedTable />
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
          {pageCount > 1 && (
            <Pagination
              count={pageCount}
              page={page}
              onChange={handlePageChange}
              showFirstButton
              showLastButton
              sx={defaultPaginationStyles}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default UpworkFeedsPage;
