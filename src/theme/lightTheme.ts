import { createTheme } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
    score: {
      low: "#FAC8D0",
      midLow: "#FAD2B4",
      mid: "#F0E4A8",
      midHigh: "#C9F0C9",
      high: "#C4E5F5",
    },
    errors: {
      200: "#FAE1E5",
      600: "#CC0022",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h1: {
      color: "#252733",
      fontSize: "24px",
      fontWeight: 500,
      lineHeight: "32px",
    },
    h2: {
      color: "#414752",
      fontSize: "14px",
      fontWeight: 600,
      lineheight: "20px",
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
          justifyContent: "center",
          padding: "12px 16px",
          width: "100%",
          height: "48px",
          fontSize: "16px",
          lineHeight: "24px",
          fontWeight: 500,
          color: "#252733",
          borderRadius: "8px",
          textTransform: "none",
          transition: "background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease",
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
        text: {
          padding: 0,
          minWidth: 0,
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          transition: "color 0.3s ease, stroke 0.3s ease",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          width: "288px",
          boxShadow: "0px 4px 16px -2px rgba(0, 0, 0, 0.16)",
          backgroundColor: "background.paper",
          borderRadius: "8px",
          border: "1px solid #D5D7DB",
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        IconComponent: KeyboardArrowDownIcon,
      },
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          lineHeight: 1.5,
          border: "1px solid #B0B3B8",
          padding: "12px",
          height: "44px",
          borderRadius: "8px",
          transition: "background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease",
          "&.Mui-focused": {
            borderColor: "#0F62FE",
          },
          "&.MuiSelect-open": {
            borderColor: "#0F62FE",
          },
        },
        select: {
          backgroundColor: "transparent",
          padding: 0,
        },
        icon: {
          color: "#252733",
          height: "24px",
          width: "24px",
        },
      },
    },
  },
});
