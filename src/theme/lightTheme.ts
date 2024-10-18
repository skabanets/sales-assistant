import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#F6F7F8",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#131314",
      secondary: "#252733",
    },
    primary: {
      main: "#0F62FE",
    },
    gray: {
      100: "#F6F7F8",
      200: "#EBECF0",
      300: "#D5D7DB",
      400: "#B0B3B8",
      600: "#70737A",
      700: "#414752",
      800: "#252733",
    },
    blue: {
      A300: "#ABBDE0",
      100: "#F0F5FF",
      500: "#3E7FFF",
    },
    white: "#FFFFFF",
    black: "#131314",
    score: {
      0: "#FAC8D0",
      100: "#FAD2B4",
      150: "#F0E4A8",
      200: "#C9F0C9",
      250: "#C4E5F5",
    },
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
          fontWeight: 500,
          backgroundColor: "#FFFFFF",
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
