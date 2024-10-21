import { Theme } from "@mui/material";

export const formStyles = {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  width: "320px",
};

export const deviderStyles = {
  color: "gray.600",
  fontWeight: 500,
  padding: "8px 0",
  textAlign: "center",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: 0,
    width: "143.5px",
    height: "1px",
    backgroundColor: "gray.300",
    transform: "translateY(-50%)",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    top: "50%",
    right: 0,
    width: "143.5px",
    height: "1px",
    backgroundColor: "gray.300",
    transform: "translateY(-50%)",
  },
};

export const inputStyles = (theme: Theme) => {
  return {
    height: "60px",
    border: `1px solid ${theme.palette.gray[400]}`,
    background: theme.palette.background.paper,
    borderRadius: "8px",
    "&:focus-within": {
      border: `1px solid ${theme.palette.primary.main}`,
      "& .MuiInputLabel-root": {
        fontWeight: 500,
        color: theme.palette.gray[600],
      },
    },
    "& .MuiFilledInput-root": {
      background: "transparent",
      border: "none",
      "&:before": { display: "none" },
      "&:after": { display: "none" },
      "&:hover": {
        backgroundColor: "transparent",
      },
      "&.Mui-focused": {
        backgroundColor: "transparent",
      },
      "&.Mui-filled": {
        backgroundColor: "transparent",
      },
    },
    "& .MuiInputLabel-root": {
      color: theme.palette.gray[500],
    },
  };
};

export const passwordIconStyles = (theme: Theme) => ({
  stroke: theme.palette.gray[600],
});

export const fieldWrapperStyles = {
  position: "relative",
};

export const errorMessageStyles = {
  position: "absolute",
  top: "62px",
  left: "12px",
  lineHeight: "10px",
};
