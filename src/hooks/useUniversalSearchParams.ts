import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { debounce } from "lodash";

import { IParams, ISortOption } from "../types";

export const useUniversalSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateSearchParams = useCallback(
    (newParams: Record<string, string | undefined | null>) => {
      const updatedParams = new URLSearchParams(searchParams);

      Object.entries(newParams).forEach(([key, value]) => {
        if (value === null) {
          Object.keys(newParams).forEach(paramKey => updatedParams.delete(paramKey));
        } else if (value === undefined || value === "") {
          updatedParams.delete(key);
        } else {
          updatedParams.set(key, value);
        }
      });

      setSearchParams(updatedParams);
    },
    [searchParams, setSearchParams]
  );

  const setParam = useCallback(
    (key: keyof IParams | ISortOption, value?: string | number | undefined, debounceTime = 0) => {
      const updateWithPageReset = () => {
        let params: IParams | ISortOption | {} = {};

        if (typeof key === "object") {
          params = { ...key, page: 1 };
        } else {
          if (Array.isArray(value)) {
            value = value.join(",");
          }

          params = {
            [key]: value !== undefined ? String(value) : undefined,
            ...(key !== "page" && { page: 1 }),
          };
        }

        updateSearchParams(params);
      };

      if (debounceTime > 0) {
        debounce(updateWithPageReset, debounceTime)();
      } else {
        updateWithPageReset();
      }
    },
    [updateSearchParams]
  );

  return {
    searchParams,
    setParam,
  };
};
