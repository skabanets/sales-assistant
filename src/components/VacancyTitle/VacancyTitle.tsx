import { FC, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import { CustomIcon } from "../../components";

import {
  saveResponseBtnStyles,
  titleContainerStyles,
  titleLinkIconStyles,
  titleWrapperStyles,
  upworkFeedLinkStyles,
} from "./VacancyTitleStyles";

interface IVacancyTitleProps {
  title: string | undefined;
}

export const VacancyTitle: FC<IVacancyTitleProps> = ({ title }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const goBackLink = useRef(location.state?.from || "/upwork-feeds");

  return (
    <Box sx={titleContainerStyles}>
      <Box sx={titleWrapperStyles}>
        <Link sx={upworkFeedLinkStyles} onClick={() => navigate(goBackLink.current)}>
          Upwork feed
          <Typography component="span" sx={titleLinkIconStyles}>
            &gt;
          </Typography>
        </Link>
        <Typography variant="h1">{title}</Typography>
      </Box>
      <Button variant="outlined" type="button" sx={saveResponseBtnStyles}>
        <CustomIcon iconName="send-solid" stroke="text.primary" />
        Save &#38; Generate response
      </Button>
    </Box>
  );
};
