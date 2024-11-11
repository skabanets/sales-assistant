import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { isValid } from "date-fns";
import { useTheme } from "@mui/material/styles";

import { useUniversalSearchParams } from "../../../hooks";
import { getFormattedDate } from "../../../heplers";
import "react-datepicker/dist/react-datepicker.css";
import "./datepicker.css";

export const DateSelector = () => {
  const { searchParams, setParam } = useUniversalSearchParams();
  const theme = useTheme();

  const initialDateString = searchParams.get("published");
  const [date, setDate] = useState<Date | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--primary-main", theme.palette.primary.main);
    root.style.setProperty("--background-paper", theme.palette.background.paper);
    root.style.setProperty("--blue-A300", theme.palette.blue.A300);
    root.style.setProperty("--blue-100", theme.palette.blue[100]);
    root.style.setProperty("--gray-300", theme.palette.gray[300]);
    root.style.setProperty("--gray-400", theme.palette.gray[400]);
    root.style.setProperty("--gray-700", theme.palette.gray[700]);
    root.style.setProperty("--gray-800", theme.palette.gray[800]);
  }, [theme]);

  useEffect(() => {
    if (initialDateString) {
      const parsedDate = new Date(initialDateString);
      if (isValid(parsedDate)) {
        setDate(parsedDate);
      }
    }
  }, []);

  const handleDateChange = (date: Date | null) => {
    const formattedDate = date ? getFormattedDate(date.toString(), true) : "";
    setParam("published", formattedDate);
    setDate(date);
  };

  return (
    <DatePicker
      selected={date}
      onSelect={handleDateChange}
      onChange={handleDateChange}
      fixedHeight={true}
      maxDate={new Date()}
      calendarStartDay={1}
      showPopperArrow={false}
    />
  );
};
