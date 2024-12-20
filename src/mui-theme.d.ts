import { PaletteOptions } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    gray: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
    };
    blue: {
      A300: string;
      100: string;
      500: string;
    };
    score: {
      low: string;
      midLow: string;
      mid: string;
      midHigh: string;
      high: string;
    };
    errors: {
      200: string;
      600: string;
    };
  }

  interface PaletteOptions {
    gray?: {
      100?: string;
      200?: string;
      300?: string;
      400?: string;
      500?: string;
      600?: string;
      700?: string;
      800?: string;
    };
    blue?: {
      A300?: string;
      100?: string;
      500?: string;
    };
    score?: {
      low?: string;
      midLow?: string;
      mid?: string;
      midHigh?: string;
      high?: string;
    };
    errors?: {
      200?: string;
      600?: string;
    };
  }
}
