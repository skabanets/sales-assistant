import { Theme } from "@mui/material";

export const chatModalWrapperStyles = {
  padding: "12px",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

export const editChatFromStyles = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

export const chatModalBtnWrapperStyles = {
  display: "flex",
  gap: "12px",
};

export const chatModalBtnStyles = {
  fontSize: "14px",
  lineHeight: "20px",
  paddig: "8px 12px",
  height: "36px",
};

export const chatNameInputStyles = (theme: Theme) => {
  return {
    height: "48px",
    padding: "12px 16px 12px 12px",
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
      "& .MuiFilledInput-input": {
        padding: "0",
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
