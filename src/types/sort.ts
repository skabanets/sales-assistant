import { SortDirection } from "../interfaces-submodule/enums/common/sort-direction.enum";
import { UpworkFeedSortBy } from "../interfaces-submodule/enums/upwork-feed/upwork-feed-sort-by.enum";

export type ISortOption = {
  sortBy?: UpworkFeedSortBy | null;
  sortDirection?: SortDirection | null;
};
