import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#181A1F",
      paper: "#131314",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#252733",
    },
    primary: {
      main: "#5B94FE",
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
