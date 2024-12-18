import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { isValid } from "date-fns";
import { useTheme } from "@mui/material/styles";

import { useAppSelector, useUniversalSearchParams } from "../../../hooks";
import { selectFilterState } from "../../../redux";
import "react-datepicker/dist/react-datepicker.css";
import "./datepicker.css";

export const DateSelector = () => {
  const { searchParams, setParam } = useUniversalSearchParams();
  const theme = useTheme();

  const resetFilter = useAppSelector(selectFilterState);

  const initialDateString = searchParams.get("published");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

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
      const [start, end] = initialDateString.split(" - ");
      const parsedStartDate = new Date(start);
      const parsedEndDate = new Date(end);

      if (isValid(parsedStartDate) && isValid(parsedEndDate)) {
        setStartDate(parsedStartDate);
        setEndDate(parsedEndDate);
      }
    }
  }, []);

  useEffect(() => {
    if (resetFilter) {
      setStartDate(null);
      setEndDate(null);
    }
  }, [resetFilter]);

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;

    setStartDate(start);
    setEndDate(end);

    if (start && end) {
      const formattedStartDate = start instanceof Date ? start.toISOString() : "";
      const formattedEndDate = end instanceof Date ? end.toISOString() : "";

      setParam("published", `${formattedStartDate} - ${formattedEndDate}`);
    }
  };

  return (
    <DatePicker
      selected={startDate ?? undefined}
      onChange={handleDateChange}
      startDate={startDate ?? undefined}
      endDate={endDate ?? undefined}
      selectsRange
      fixedHeight={true}
      maxDate={new Date()}
      calendarStartDay={1}
      showPopperArrow={false}
    />
  );
};
