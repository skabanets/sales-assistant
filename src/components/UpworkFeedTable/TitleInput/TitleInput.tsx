import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

import { CustomIcon } from "../../../components";

import { useAppSelector, useUniversalSearchParams } from "../../../hooks";
import { selectFilterState } from "../../../redux";
import { tableInputStyles } from "../UpworkFeedTableStyles";

export const TitleFilterInput = () => {
  const { searchParams, setParam } = useUniversalSearchParams();
  const resetFilter = useAppSelector(selectFilterState);
  const initialTitle = searchParams.get("title") || "";

  const [value, setValue] = useState(initialTitle);

  useEffect(() => {
    if (resetFilter) {
      setValue("");
    }
  }, [resetFilter]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setValue(title);
    setParam("title", title, 1000);
  };

  const handleClear = () => {
    setValue("");
    setParam("title", "");
  };

  return (
    <TextField
      type="text"
      label=""
      variant="filled"
      autoComplete="off"
      fullWidth
      sx={tableInputStyles}
      value={value}
      onChange={handleChange}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              {value && (
                <IconButton
                  onClick={handleClear}
                  edge="end"
                  sx={{ width: "28px", height: "28px", padding: 0 }}
                >
                  <CustomIcon iconName="x-circle" htmlColor="gray.600" />
                </IconButton>
              )}
            </InputAdornment>
          ),
        },
      }}
    />
  );
};
