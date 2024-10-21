import { Theme } from "@mui/material/styles";

import { ThemeMode } from "../../constants";
import BgLite from "../../assets/images/auth-page-bg-light@1x.jpg";
import BgDark from "../../assets/images/auth-page-bg-dark@1x.jpg";
import BgLiteRetina from "../../assets/images/auth-page-bg-light@2x.jpg";
import BgDarkRetina from "../../assets/images/auth-page-bg-dark@2x.jpg";

export const getMainBgStyles = (theme: Theme) => {
  const backgroundImage = theme.palette.mode === ThemeMode.LIGHT ? BgLite : BgDark;
  const retinaBackgroundImage =
    theme.palette.mode === ThemeMode.LIGHT ? BgLiteRetina : BgDarkRetina;

  return {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${backgroundImage})`,
    height: "100%",
    width: "100%",
    "@media only screen and (min-resolution: 192dpi)": {
      backgroundImage: `url(${retinaBackgroundImage})`,
    },
  };
};

export const layoutStyles = {
  display: "flex",
  width: "100vw",
  height: "100vh",
};

export const asideStyles = {
  width: "440px",
  padding: "96px 60px",
};
