import { Theme } from "@mui/material";

export const createChatFormStyles = {
  display: "flex",
  flexDirection: "column",
  gap: "27px",
};

export const chatNameInputStyles = (theme: Theme) => {
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

export const errorMessageStyles = {
  position: "absolute",
  top: "49px",
  left: "12px",
  fontSize: "10px",
  lineHeight: "8px",
};
