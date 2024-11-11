import { useEffect, useState } from "react";
import { SelectChangeEvent } from "@mui/material/Select";

import { useUniversalSearchParams } from "../hooks";

interface IUsePaginationProps {
  totalItems: number;
  initialPage?: number;
  initialItemsPerPage?: number;
}

export const usePagination = ({
  totalItems,
  initialPage = 1,
  initialItemsPerPage = 10,
}: IUsePaginationProps) => {
  const { searchParams, setParam } = useUniversalSearchParams();

  const [page, setPage] = useState(Number(searchParams.get("page")) || initialPage);
  const [itemsPerPage, setItemsPerPage] = useState(
    Number(searchParams.get("limit")) || initialItemsPerPage
  );

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage + 1;
  const endIndex = Math.min(page * itemsPerPage, totalItems);

  useEffect(() => {
    setPage(Number(searchParams.get("page")) || initialPage);
  }, [initialPage, itemsPerPage, searchParams]);

  const handlePageChange = (_: unknown, value: number) => {
    setPage(value);
    setParam("page", value);
  };

  const handleItemsPerPageChange = (event: SelectChangeEvent<number>) => {
    const limit = event.target.value;
    setItemsPerPage(Number(limit));
    setParam("limit", limit);
  };

  return {
    page,
    itemsPerPage,
    totalPages,
    startIndex,
    endIndex,
    handlePageChange,
    handleItemsPerPageChange,
  };
};
