import { FC } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import { CustomIcon } from "../../components";

import { itNetworkingOptions } from "../../constants";
import { clearFilter, disableFilterState } from "../../redux";
import { useAppDispatch } from "../../hooks";
import {
  controlPanelStyles,
  itNetworkSelectStyles,
  refreshBtnStyles,
} from "./FeedControlPanelStyles";
import { formControlStyles } from "../../theme";

interface IFeedControlPanelProps {
  refetch: () => void;
  resetParams: () => void;
}

export const FeedControlPanel: FC<IFeedControlPanelProps> = ({ refetch, resetParams }) => {
  const dispatch = useAppDispatch();

  const handleRefresh = () => {
    resetParams();
    dispatch(clearFilter());
    refetch();
    dispatch(disableFilterState());
  };

  return (
    <Box sx={controlPanelStyles}>
      <FormControl sx={formControlStyles}>
        <Select
          value={itNetworkingOptions[1].value}
          sx={itNetworkSelectStyles}
          MenuProps={{
            PaperProps: {
              sx: {
                maxWidth: "600px",
                width: "100%",
              },
            },
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "center",
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "center",
            },
          }}
        >
          {itNetworkingOptions.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="outlined" sx={refreshBtnStyles} onClick={handleRefresh}>
        <CustomIcon iconName="refresh" />
        Refresh RSS
      </Button>
    </Box>
  );
};
