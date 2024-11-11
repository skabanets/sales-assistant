import { ISortOption } from "../types";

export interface IParams {
  title?: string;
  published?: string;
  keywords?: string;
  score?: string;
  page?: number;
  limit?: number;
  sort: ISortOption;
}
