import { FC } from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

import Sprite from "../../assets/sprite.svg";

interface ICustomIconProps extends SvgIconProps {
  iconName: string;
}

export const CustomIcon: FC<ICustomIconProps> = props => {
  const { iconName, ...rest } = props;
  return (
    <SvgIcon {...rest}>
      <use xlinkHref={`${Sprite}#${iconName}`} />
    </SvgIcon>
  );
};
