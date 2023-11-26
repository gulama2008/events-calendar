import { createContext, useEffect, useState } from "react";
import {
  calculateNumOfDaysForCurrentMonth,
  calculateNumOfDaysForPreviousMonth,
  generateDaysArray,
  generateDaysArrayForPreviousMonth,
  getEventsFromLocalStorage,
  getFirstDayOfMonth,
  getLastDayOfMonth,
} from "../services/utils";

export const CalendarContext = createContext<any>(null);
export interface Event {
  date: string
  event: string[];
}
const CalendarContextProvider = ({ children }: any) => {
  const currentDate = new Date();
  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();
  const [date, setDate] = useState(currentDate);
  const [monthAndYear, setMonthAndYear] = useState(`${month} ${year} `);
  const [numOfDaysForCurrentMonth, setNumOfDaysForCurrentMonth] =
    useState<number>(0);
  const [numOfDaysForPreviousMonth, setNumOfDaysForPreviousMonth] =
    useState<number>(0);
  const [daysArray, setDaysArray] = useState<number[]>([]);
  const [daysArrayForPreviousMonth, setDaysArrayForPreviousMonth] = useState<
    number[]
  >([]);
  const [daysArrayForNextMonth, setDaysArrayForNextMonth] = useState<number[]>(
    []
  );
  const [firstDay, setFirstDay] = useState<number>(0);
  const [lastDay, setLastDay] = useState<number>(0);
  const [firstDayName, setFirstDayName] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const currentEvents = getEventsFromLocalStorage();
  const [events, setEvents] = useState<Event[]>(currentEvents);
  const [currentEventList, setCurrentEventList] = useState<Event>();
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  useEffect(() => {
    const currentNumOfDays = calculateNumOfDaysForCurrentMonth(date);
    setNumOfDaysForCurrentMonth(currentNumOfDays);
    const numOfDaysForPreviousMonth = calculateNumOfDaysForPreviousMonth(date);
    setNumOfDaysForPreviousMonth(numOfDaysForPreviousMonth);
    const daysArray = generateDaysArray(currentNumOfDays);
    setDaysArray(daysArray);
    const firstDay = getFirstDayOfMonth(date);
    setFirstDay(firstDay);
    const daysArrayForPreviousMonth = generateDaysArrayForPreviousMonth(
      numOfDaysForPreviousMonth,
      firstDay
    );
    setDaysArrayForPreviousMonth(daysArrayForPreviousMonth);
    setFirstDayName(dayNames[firstDay]);
    const lastDay = getLastDayOfMonth(date);
    setLastDay(lastDay);
    const daysArrayForNextMonth = generateDaysArray(6 - lastDay);
    setDaysArrayForNextMonth(daysArrayForNextMonth);
  }, [date]);
console.log(events);

  return (
    <CalendarContext.Provider
      value={{
        date,
        daysArray,
        monthAndYear,
        daysArrayForPreviousMonth,
        daysArrayForNextMonth,
        setDate,
        setMonthAndYear,
        dayNames,
        showModal,
        setShowModal,
        events,
        setEvents,
        numOfDaysForCurrentMonth,
        numOfDaysForPreviousMonth,
        currentEventList,
        setCurrentEventList,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};

export default CalendarContextProvider;
