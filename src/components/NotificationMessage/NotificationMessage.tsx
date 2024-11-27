import { FC } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { CustomIcon } from "../../components";

import {
  messageBlockStyles,
  notificationBoxStyles,
  notificationIconStyles,
  textMessageStyles,
  titleMessageStyles,
} from "./NotificationMessageStyles";

interface INotificationMessageProps {
  text: string;
}

export const NotificationMessage: FC<INotificationMessageProps> = ({ text }) => {
  return (
    <Box sx={notificationBoxStyles}>
      <CustomIcon iconName="error" sx={notificationIconStyles} />
      <Box sx={messageBlockStyles}>
        <Typography sx={titleMessageStyles}>Error</Typography>
        <Typography sx={textMessageStyles}>{text}</Typography>
      </Box>
    </Box>
  );
};
