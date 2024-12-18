import { FC } from "react";
import { useLocation, useNavigate } from "react-router";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

import { linkStyles, linkWrapperStyles } from "../UpworkFeedTableStyles";

interface ITitleCellProps {
  title: string;
  id: string;
}

export const TitleCell: FC<ITitleCellProps> = ({ title, id }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClickTitle = () => {
    navigate(`/upwork-feeds/${id}`, { state: { from: location } });
  };

  return (
    <Box sx={linkWrapperStyles}>
      <Link onClick={handleClickTitle} target="_blank" rel="noopener noreferrer" sx={linkStyles}>
        {title}
      </Link>
    </Box>
  );
};
