import { format, isValid } from "date-fns";

export const getFormattedDate = (
  dateString: string,
  isDatePickerFormat: boolean = false
): string => {
  const date = new Date(dateString);

  if (!isValid(date)) {
    return "Invalid Date";
  }

  const dateFormat = isDatePickerFormat ? "MM/dd/yyyy" : "MM/dd/yyyy HH:mm";

  return format(date, dateFormat);
};
