import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export const Loader = () => {
  return (
    <Backdrop
      sx={theme => ({
        color: "#fff",
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: "rgba(0, 0, 0, 0.25)",
      })}
      open={true}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
