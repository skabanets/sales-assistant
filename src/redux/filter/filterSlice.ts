import { createSlice } from "@reduxjs/toolkit";

import { ISortOption } from "../../types";
import { SortDirection } from "../../interfaces-submodule/enums/common/sort-direction.enum";

interface IAuthSlice {
  sortParams: ISortOption;
  isResetFilers: boolean;
}

const initialState: IAuthSlice = {
  sortParams: { sortBy: null, sortDirection: null },
  isResetFilers: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addSortParams: (state, action) => {
      const accessorKey = action.payload;

      if (state.sortParams.sortBy === accessorKey) {
        const newDirection =
          state.sortParams.sortDirection === SortDirection.ASC
            ? SortDirection.DESC
            : state.sortParams.sortDirection === SortDirection.DESC
            ? null
            : SortDirection.ASC;

        state.sortParams = {
          sortBy: newDirection ? accessorKey : null,
          sortDirection: newDirection,
        };
      } else {
        state.sortParams = {
          sortBy: accessorKey,
          sortDirection: SortDirection.ASC,
        };
      }
    },
    clearFilter: state => {
      state.isResetFilers = true;
      state.sortParams = { sortBy: null, sortDirection: null };
    },
    disableFilterState: state => {
      state.isResetFilers = false;
    },
  },
  selectors: {
    selectSortParams: state => state.sortParams,
    selectFilterState: state => state.isResetFilers,
  },
});

export const filterReducer = filterSlice.reducer;
export const { addSortParams, clearFilter, disableFilterState } = filterSlice.actions;
export const { selectSortParams, selectFilterState } = filterSlice.selectors;
