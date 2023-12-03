import { createContext, useEffect, useState } from "react";
import {
  calculateNumOfDaysForCurrentMonth,
  calculateNumOfDaysForPreviousMonth,
  convertDateToString,
  generateDaysArray,
  generateDaysArrayForPreviousMonth,
  getEventsFromLocalStorage,
  getFirstDayOfMonth,
  getLastDayOfMonth,
} from "../services/utils";

import { EventService } from "../services/events-service";

export const CalendarContext = createContext<any>(null);

export interface EventDetails {
  eventName: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  location: string;
  label: string[];
}
export interface Event {
  id: number;
  // date: string;
  // event: EventDetails[];
  eventName: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  location: string;
  label: string[];
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
  const [showEventListContainer, setShowEventListContainer] = useState(false);
  const [showNewEventModal, setShowNewEventModal] = useState<boolean>(false);
  const [showEventDetailsModal, setShowEventDetailsModal] =
    useState<boolean>(false);
  const [events, setEvents] = useState<Event[] | undefined>();
  const [currentEventList, setCurrentEventList] = useState<Event[]>();
  const [currentEvent, setCurrentEvent] = useState<Event>();
  const [eventsChange, setEventsChange] = useState<number>(0);
  const [defaultDateStr, setDefaultDateStr] = useState<string>("");
  const [currentTags, setCurrentTags] = useState<string[]>([]);
  // const [showCountDown, setShowCountDown] = useState<boolean>(true);
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
    const currentDateInString = convertDateToString(date);
    setDefaultDateStr(currentDateInString);
  }, [date]);

  useEffect(() => {
    EventService.get().then((data) => setEvents(data));
    console.log("new fetch");
  }, [eventsChange]);

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
        firstDay,
        lastDay,
        firstDayName,
        showNewEventModal,
        setShowNewEventModal,
        showEventDetailsModal,
        setShowEventDetailsModal,
        showEventListContainer,
        setShowEventListContainer,
        setCurrentEvent,
        currentEvent,
        eventsChange,
        setEventsChange,
        defaultDateStr,
        setDefaultDateStr,
        currentTags,
        setCurrentTags,
        // showCountDown,
        // setShowCountDown,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};

export default CalendarContextProvider;
