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
      0: string;
      100: string;
      150: string;
      200: string;
      250: string;
    };
    white: string;
    black: string;
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
      0?: string;
      100?: string;
      150?: string;
      200?: string;
      250?: string;
    };
    white?: string;
    black?: string;
  }
}
