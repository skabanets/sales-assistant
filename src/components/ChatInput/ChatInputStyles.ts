import { Theme } from "@mui/material";

export const inputFieldWrapperStyles = (isFocused: boolean) => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  alignSelf: "stretch",
  backgroundColor: "background.paper",
  borderRadius: "8px",
  border: "1px solid",
  borderColor: isFocused ? "primary.main" : "gray.400",
});

export const chatTextFieldStyles = {
  width: "100%",
  maxHeight: "calc(100vh - 240px)",
  borderRadius: "8px",
  backgroundColor: "transparent",
  overflowY: "auto",
  "& .MuiInputBase-root": {
    padding: "16px",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
};

export const sendIconWrapperStyles = {
  display: "flex",
  padding: "8px 6px",
  alignItems: "flex-end",
  gap: "8px",
  alignSelf: "stretch",
};

export const sendButtonStyles = (isFocused: boolean) => ({
  width: "40px",
  height: "40px",
  borderRadius: "20px",
  border: "1px solid",
  borderColor: isFocused ? "primary.main" : "transparent",
  backgroundColor: isFocused ? "primary.main" : "transparent",
  "&:hover": {
    backgroundColor: isFocused ? "blue.500" : "transparent",
    borderColor: isFocused ? "primary.main" : "transparent",
    boxShadow: isFocused ? "0px 2px 8px 0px rgba(15, 98, 254, 0.40)" : "none",
  },
});

export const sendIconStyles = (isFocused: boolean) => (theme: Theme) => ({
  stroke: isFocused ? theme.palette.text.primary : theme.palette.gray[800],
  opacity: "0.5",
});
