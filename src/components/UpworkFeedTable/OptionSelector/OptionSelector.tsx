import { FC, useState } from "react";
import Select, { MultiValue, SingleValue } from "react-select";
import { useTheme } from "@mui/material";

import { CustomOption } from "./CustomOption/CustomOption";
import { CustomValueContainer } from "./CustomValueContainer/CustomValueContainer";

import { useUniversalSearchParams } from "../../../hooks";
import { IOptionInterface } from "../../../interfaces-submodule/interfaces/dto/common/ioption.interface";
import { UpworkFeedSearchBy } from "../../../interfaces-submodule/enums/upwork-feed/upwork-feed-search-by.enum";

interface IOptionSelectorProps {
  options: IOptionInterface[];
  filterKey: UpworkFeedSearchBy.Keywords | UpworkFeedSearchBy.Score;
}

export const OptionSelector: FC<IOptionSelectorProps> = ({ options, filterKey }) => {
  const theme = useTheme();
  const { searchParams, setParam } = useUniversalSearchParams();

  const allOption = { value: "all", label: "ALL" };
  const divider = { value: "divider", label: "divider", isDivider: true };

  const optionsWithDivider = [allOption, divider, ...options];
  const searchKeywords = searchParams.get(filterKey);
  const initialSelectedOptions = searchKeywords
    ? searchKeywords
        .split(",")
        .map(value => optionsWithDivider.find(option => option.value === value))
        .filter((option): option is IOptionInterface => option !== undefined)
    : [];

  const [selectedOptions, setSelectedOptions] =
    useState<MultiValue<IOptionInterface>>(initialSelectedOptions);

  const handleSelectChange = (
    newValue: MultiValue<IOptionInterface> | SingleValue<IOptionInterface>
  ) => {
    const selected = Array.isArray(newValue) ? newValue : newValue ? [newValue] : [];

    if (selected.some(option => option.value === "all")) {
      setSelectedOptions(options);
    } else {
      setSelectedOptions(selected);
    }

    const selectedValues = selected.map(option => option.value).join(",");
    setParam(filterKey, selectedValues);
  };

  return (
    <Select
      options={optionsWithDivider}
      isMulti={true}
      isClearable={false}
      isSearchable={false}
      components={{ Option: CustomOption, ValueContainer: CustomValueContainer }}
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
      placeholder=""
      value={selectedOptions}
      onChange={handleSelectChange}
      styles={{
        control: base => ({
          ...base,
          padding: 0,
          backgroundColor: theme.palette.background.paper,
          borderColor: theme.palette.gray[400],
          borderRadius: "8px",
          height: "44px",
          "&:hover": {
            borderColor: theme.palette.primary.main,
            boxShadow: `0px 0px 0px 1px ${theme.palette.primary.main}`,
          },
        }),
        input: base => ({
          ...base,
          overflow: "hidden",
        }),
        valueContainer: base => ({
          ...base,
          padding: "0 0 0 12px",
          display: "flex",
          flexWrap: "wrap",
          overflow: "hidden",
        }),
        dropdownIndicator: base => ({
          ...base,
          color: theme.palette.text.secondary,
        }),
        indicatorSeparator: () => ({
          display: "none",
        }),
        option: (base, state) => ({
          ...base,
          backgroundColor: state.isSelected
            ? "transparent"
            : state.isFocused
            ? theme.palette.action.hover
            : "transparent",
        }),
        menu: base => ({
          ...base,
          zIndex: 9999,
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          position: "absolute",
          top: "46px",
          minWidth: "240px",
          overflowX: "hidden",
          padding: "8px 0px",
          margin: 0,
          borderRadius: "12px",
          border: `1px solid ${theme.palette.gray[300]}`,
          boxShadow: "0px 4px 16px -2px rgba(0, 0, 0, 0.16)",
        }),
        placeholder: base => ({
          ...base,
          color: theme.palette.text.secondary,
        }),
        menuList: base => ({
          ...base,
          padding: 0,
          margin: 0,
          height: "auto",
          maxHeight: "360px",
          overflowY: "auto",
          overflowX: "hidden",
        }),
      }}
    />
  );
};
