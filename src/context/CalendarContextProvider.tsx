import { createContext, useEffect, useState } from "react";
import {
  calculateNumOfDays,
  generateDaysArray,
  getFirstDayOfMonth,
} from "../services/utils";

export const CalendarContext = createContext<any>(null);

const CalendarContextProvider = ({ children }: any) => {
  const currentDate = new Date();
  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();
  const [date, setDate] = useState(currentDate);
  const [monthAndYear, setMonthAndYear] = useState(`${month} ${year} `);
  const [numOfDays, setNumOfDays] = useState<number>(0);
  const [daysArray, setDaysArray] = useState<number[]>([]);
  const [firstDay, setFirstDay] = useState<number>(0);
  const [firstDayName, setFirstDayName] = useState<string>("");
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  useEffect(() => {
    const currentNumOfDays = calculateNumOfDays(date);
    setNumOfDays(currentNumOfDays);
    const daysArray = generateDaysArray(currentNumOfDays);
    setDaysArray(daysArray);
    const firstDay = getFirstDayOfMonth(date);
    setFirstDay(firstDay);
    setFirstDayName(dayNames[firstDay]);
  }, [date]);

  return (
    <CalendarContext.Provider
      value={{ date, daysArray, monthAndYear, setDate, setMonthAndYear }}
    >
      {children}
    </CalendarContext.Provider>
  );
};

export default CalendarContextProvider;
