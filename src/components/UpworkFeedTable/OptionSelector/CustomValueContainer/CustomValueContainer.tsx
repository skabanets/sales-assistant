import { FC } from "react";
import { components, ValueContainerProps } from "react-select";

import { IOptionInterface } from "../../../../interfaces-submodule/interfaces/dto/common/ioption.interface";

export const CustomValueContainer: FC<ValueContainerProps<IOptionInterface, true>> = props => {
  const { children, getValue } = props;
  const selectedValues = getValue();
  const displayLabel =
    selectedValues.length === 0
      ? ""
      : selectedValues.length === 1
      ? selectedValues[0].label
      : `${selectedValues.length} selected`;

  return (
    <components.ValueContainer {...props}>
      {displayLabel}
      {Array.isArray(children) && children[1] ? children[1] : null}
    </components.ValueContainer>
  );
};
