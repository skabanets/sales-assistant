import { createTheme } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
    score: {
      low: "#7A2C39",
      midLow: "#6B3920",
      mid: "#705C0B",
      midHigh: "#2D662D",
      high: "#295266",
    },
    errors: {
      200: "#3D2B2E",
      600: "#CC6677",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h1: {
      color: "#EBECF0",
      fontSize: "24px",
      fontWeight: 500,
      lineHeight: "32px",
    },
    h2: {
      color: "#C9CED6",
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
          color: "#EBECF0",
          borderRadius: "8px",
          textTransform: "none",
          transition: "background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease",
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
          border: "1px solid #414752",
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        IconComponent: KeyboardArrowDownIcon,
      },
      styleOverrides: {
        root: {
          backgroundColor: "#131314",
          lineHeight: 1.5,
          border: "1px solid #70737A",
          padding: "12px",
          height: "44px",
          borderRadius: "8px",
          transition: "background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease",
          "&.Mui-focused": {
            borderColor: "#5B94FE",
          },
          "&.MuiSelect-open": {
            borderColor: "#5B94FE",
          },
        },
        select: {
          backgroundColor: "transparent",
          padding: 0,
        },
        icon: {
          color: "#EBECF0",
          height: "24px",
          width: "24px",
        },
      },
    },
  },
});
