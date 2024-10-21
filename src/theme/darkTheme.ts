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
      500: "#8B8E94",
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
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h1: {
      color: "#EBECF0",
      fontWeight: 500,
    },
    h2: {
      color: "#C9CED6",
      fontSize: "14px",
      fontWeight: 600,
      lineHeight: "20px",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          transition: "background-color 0.3s ease, color 0.3s ease",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          display: "flex",
          gap: "8px",
          alignItems: "center",
          padding: "12px 16px",
          width: "100%",
          fontSize: "16px",
          lineHeight: "24px",
          fontWeight: 500,
          color: "#EBECF0",
          borderRadius: "8px",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#181B29",
          },
          "&:active": {
            backgroundColor: "#3760AD",
          },
        },
        contained: {
          backgroundColor: "#5B94FE",
          color: "#131314",
          "&:hover": {
            backgroundColor: "#5B94FE",
          },
          "&:active": {
            backgroundColor: "#5B94FE",
          },
        },
        outlined: {
          border: "2px solid #3760AD",
        },
      },
    },
  },
});
