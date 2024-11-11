import { useEffect } from "react";
import Box from "@mui/material/Box";

import { FeedControlPanel, Loader, TablePagination, UpworkFeedTable } from "../../components";

import { useUniversalSearchParams } from "../../hooks";
import { useFetchFeedsQuery } from "../../services";
import { getParsedOptions } from "../../heplers";
import { upworkFeedContainer } from "./UpworkFeedsPageStyles";
import { UpworkFeedSearchBy } from "../../interfaces-submodule/enums/upwork-feed/upwork-feed-search-by.enum";
import { UpworkFeedSortBy } from "../../interfaces-submodule/enums/upwork-feed/upwork-feed-sort-by.enum";
import { SortDirection } from "../../interfaces-submodule/enums/common/sort-direction.enum";

const UpworkFeedsPage = () => {
  const { searchParams, setParam } = useUniversalSearchParams();

  const pageNumber = Number(searchParams.get("page"));
  const pageSize = Number(searchParams.get("limit"));
  const titleSearch = searchParams.get("title");
  const dateSearch = searchParams.get("published");
  const keywordsSearch = searchParams.get("keywords");
  const scoreSearch = searchParams.get("score");
  const sortBy = searchParams.get("sortBy");
  const sortDirection = searchParams.get("sortDirection");

  const params = {
    ...(pageSize && { pageSize }),
    ...(pageNumber && { pageNumber }),
    searchParameters: [
      ...(titleSearch ? [{ searchQuery: titleSearch, searchBy: UpworkFeedSearchBy.Title }] : []),
      ...(dateSearch ? [{ searchQuery: dateSearch, searchBy: UpworkFeedSearchBy.Published }] : []),
      ...(keywordsSearch
        ? [{ searchQuery: getParsedOptions(keywordsSearch), searchBy: UpworkFeedSearchBy.Keywords }]
        : []),
      ...(scoreSearch
        ? [{ searchQuery: getParsedOptions(scoreSearch), searchBy: UpworkFeedSearchBy.Score }]
        : []),
    ],
    ...(sortBy &&
      sortDirection && {
        sortDirection: sortDirection as SortDirection,
        sortBy: sortBy as UpworkFeedSortBy,
      }),
  };

  useEffect(() => {
    if (!searchParams.get("page") && !searchParams.get("limit")) {
      setParam("page", 1);
      setParam("limit", 10);
    }
  }, [searchParams, setParam]);

  const { data, isFetching, isLoading, refetch } = useFetchFeedsQuery(params, {
    refetchOnMountOrArgChange: true,
  });

  return (
    <>
      <Box component="section" sx={upworkFeedContainer}>
        <FeedControlPanel refetch={refetch} />
        {data && (
          <>
            <UpworkFeedTable items={data.items.items} />
            {data.items.items.length !== 0 && (
              <TablePagination
                totalItems={data.items.totalCount}
                totalPages={data.items.totalPages}
              />
            )}
          </>
        )}
      </Box>
      {(isLoading || isFetching) && <Loader />}
    </>
  );
};

export default UpworkFeedsPage;
