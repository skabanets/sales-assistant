import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import { loaderStyles } from "./LoaderStyles";

export const Loader = () => {
  return (
    <Backdrop sx={loaderStyles} open={true}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
