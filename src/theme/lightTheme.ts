import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#F6F7F8",
      paper: "#FFF",
    },
    text: {
      primary: "#131314",
      secondary: "#252733",
    },
    primary: {
      main: "#0F62FE",
    },
    divider: "#414752",
  },
  typography: {
    fontFamily: "Popins, Roboto, sans-serif",
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFF",
          color: "#252733",
          border: "2px solid #ABBDE0",
          "&:hover": {
            backgroundColor: "#F0F5FF",
          },
          "&:active": {
            backgroundColor: "#ABBDE0",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          borderColor: "#B0B3B8",
          "&.Mui-focused": {
            borderColor: "#0F62FE",
          },
        },
      },
    },
  },
});
