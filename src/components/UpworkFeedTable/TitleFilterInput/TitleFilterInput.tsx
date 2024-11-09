import { titleInputStyles } from "../UpworkFeedTableStyles";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { CustomIcon } from "../..";
import { ChangeEvent, FC } from "react";

interface ITitleFilterInputProps {
  value: any;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleClear: () => void;
}

export const TitleFilterInput: FC<ITitleFilterInputProps> = ({
  value,
  handleChange,
  handleClear,
}) => {
  return (
    <TextField
      type="text"
      label=""
      variant="filled"
      autoComplete="off"
      fullWidth
      sx={titleInputStyles}
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
