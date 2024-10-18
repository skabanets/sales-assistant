import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#181A1F",
      paper: "#131314",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#EBECF0",
    },
    primary: {
      main: "#5B94FE",
    },
    gray: {
      100: "#181A1F",
      200: "#252733",
      300: "#414752",
      400: "#70737A",
      600: "#B0B3B8",
      700: "#C9CED6",
      800: "#EBECF0",
    },
    blue: {
      A300: "#3760AD",
      100: "#181B29",
      500: "#3E7FFF",
    },
    white: "#131314",
    black: "#FFFFFF",
    score: {
      0: "#7A2C39",
      100: "#6B3920",
      150: "#705C0B",
      200: "#2D662D",
      250: "#295266",
    },
    divider: "#70737A",
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
          backgroundColor: "#131314",
          color: "#EBECF0",
          border: "2px solid #3760AD",
          "&:hover": {
            backgroundColor: "#181B29",
          },
          "&:active": {
            backgroundColor: "#3760AD",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: "#131314",
          borderColor: "#70737A",
          "&.Mui-focused": {
            borderColor: "#5B94FE",
          },
        },
      },
    },
  },
});
