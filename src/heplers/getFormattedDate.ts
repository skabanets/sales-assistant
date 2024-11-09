import { format } from "date-fns";

export const getFormattedDate = (dateString: string): string => {
  const date = new Date(dateString);
  return format(date, "MM/dd/yyyy HH:mm");
};
