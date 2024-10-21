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
      500: "#8A8D94",
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
    fontFamily: "Poppins, sans-serif",
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h1: {
      color: "#252733",
      fontWeight: 500,
    },
    h2: {
      color: "#414752",
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
          color: "#252733",
          borderRadius: "8px",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#F0F5FF",
          },
          "&:active": {
            backgroundColor: "#ABBDE0",
          },
        },
        contained: {
          backgroundColor: "#0F62FE",
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#0F62FE",
          },
          "&:active": {
            backgroundColor: "#0F62FE",
          },
        },
        outlined: {
          border: "2px solid #ABBDE0",
        },
      },
    },
  },
});
