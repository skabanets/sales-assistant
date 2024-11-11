import { FC } from "react";
import { OptionProps } from "react-select";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

import { checkBoxStyles, optionLablelStyles, optionWrapperStyles } from "./CustomOptionStyles";
import { IOptionInterface } from "../../../../interfaces-submodule/interfaces/dto/common/ioption.interface";

interface CustomOptionProps extends OptionProps<IOptionInterface> {}

export const CustomOption: FC<CustomOptionProps> = props => {
  const { selectProps, data } = props;
  const selectedValues = Array.isArray(selectProps.value) ? selectProps.value : [];
  const isAllSelected = selectedValues.length === selectProps.options.length - 2;
  const isDivider = data?.value === "divider";

  if (isDivider) {
    return <Divider sx={{ width: "240px", borderColor: "gray.200", margin: "4px 10px" }} />;
  }

  const isChecked =
    data.value === "all" ? isAllSelected : selectedValues.some(item => item.value === data.value);

  const handleCheckboxChange = () => {
    const updateSelectedValues = (updatedValues: any) => {
      selectProps.onChange(updatedValues, {
        action: "select-option",
        option: data,
      });
    };

    if (data.value === "all") {
      const allOptions = selectProps.options.filter(
        option => !("options" in option) && option.value !== "all" && option.value !== "divider"
      );

      const updatedSelectedValues = isChecked ? [] : allOptions;
      updateSelectedValues(updatedSelectedValues);
    } else {
      const updatedSelectedValues = isChecked
        ? selectedValues.filter((item: { value: string }) => item.value !== data.value)
        : [...selectedValues, { value: data.value, label: data.label }];
      updateSelectedValues(updatedSelectedValues);
    }
  };

  return (
    <MenuItem
      component="div"
      disableGutters
      sx={optionWrapperStyles}
      onClick={handleCheckboxChange}
    >
      <Checkbox checked={isChecked} sx={checkBoxStyles} />
      <Box component="span" sx={optionLablelStyles}>
        {props.label}
      </Box>
    </MenuItem>
  );
};
