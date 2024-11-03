import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import { backdropStyles } from "../../theme";

export const Loader = () => {
  return (
    <Backdrop sx={backdropStyles} open={true}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
