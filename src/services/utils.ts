import { Event } from "../context/CalendarContextProvider";

export const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
export interface StringifiedDateEvent {
  date: string;
  event: string[];
}
export const calculateNumOfDaysForCurrentMonth = (date: Date): number => {
  const currentNumOfDays = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  return currentNumOfDays;
};

export const calculateNumOfDaysForPreviousMonth = (date: Date): number => {
  const numOfDaysForPreviousMonth = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();
  return numOfDaysForPreviousMonth;
};

export const generateDaysArray = (num: number): number[] => {
  if (num === 0) {
    return [];
  }
  const daysArray = [];
  for (let i = 1; i <= num; i++) {
    daysArray.push(i);
  }
  return daysArray;
};

export const generateDaysArrayForPreviousMonth = (
  lastDay: number,
  numOfDays: number
): number[] => {
  const daysArray = [];
  if (numOfDays === 0) {
    return [];
  }
  for (let i = lastDay; i > lastDay - numOfDays; i--) {
    daysArray.unshift(i);
  }
  return daysArray;
};

export const getFirstDayOfMonth = (date: Date): number => {
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  return firstDay;
};

export const getLastDayOfMonth = (date: Date): number => {
  const lastDateOfMonth = calculateNumOfDaysForCurrentMonth(date);
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    lastDateOfMonth
  ).getDay();
  return lastDay;
};

export const getIndexOfWeek = (date: Date, day: number): number => {
  const indexOfWeek = new Date(
    date.getFullYear(),
    date.getMonth(),
    day
  ).getDay();
  return indexOfWeek;
};

export const getIndexOfWeekForOtherMonth = (
  date: Date,
  day: number
): number => {
  const indexOfWeek = new Date(
    date.getFullYear(),
    day > 7 ? date.getMonth() - 1 : date.getMonth() + 1,
    day
  ).getDay();
  return indexOfWeek;
};

export const getDate = (date: Date, day: number) => {
  const newDate = new Date(date.getFullYear(), date.getMonth(), day);
  return newDate;
};

export const saveEventsToLocalStorage = (events: Event[]) => {
  // const newEvents: StringifiedDateEvent[] = events.map((e: Event) => {
  //   return { date: e.date.toString(), event: e.event };
  // });
  // const eventsStr = JSON.stringify(newEvents);
  // window.localStorage.setItem("events", eventsStr);
  const eventsStr = JSON.stringify(events);
  window.localStorage.setItem("events", eventsStr);
};

export const getEventsFromLocalStorage = (): Event[] => {
  const eventsStr = window.localStorage.getItem("events");
  if (eventsStr) {
    return JSON.parse(eventsStr);
  }
  return [];
};

export const checkIfInDateRange = (
  date: Date,
  startDate: string,
  endDate: string
): boolean => {
  const startDateArr = startDate.split("-").map((str) => parseInt(str));
  const endDateArr = endDate.split("-").map((str) => parseInt(str));
  const startDateInDateFormat = new Date(
    startDateArr[0],
    startDateArr[1] - 1,
    startDateArr[2]
  );
  const endDateInDateFormat = new Date(
    endDateArr[0],
    endDateArr[1] - 1,
    endDateArr[2]
  );
  if (date >= startDateInDateFormat && date <= endDateInDateFormat) {
    return true;
  }
  return false;
};

export const convertDateToString = (date: Date): string => {
  console.log(date);

  const pad = (n: any) => `${Math.floor(Math.abs(n))}`.padStart(2, "0");
  // const str = `"${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}"`
  const str = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
    date.getDate()
  )}`;
  // const str = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  // console.log(str);
  // console.log(typeof str);
  console.log(str);

  return str;
};

export const countDown = (eventDate: Date) => {
  const today = new Date();
  const millisecondsDiff = eventDate.getTime() - today.getTime();
  
  const seconds = Math.floor((millisecondsDiff / 1000) % 60);
  const minutes = Math.floor((millisecondsDiff / 1000 / 60) % 60);
  const hours = Math.floor((millisecondsDiff / 1000 / 60 / 60) % 24);
  const days = Math.floor(millisecondsDiff / (1000 * 60 * 60 * 24));
  
  const formattedTime = [
    days.toString(),
    hours.toString().padStart(2, "0"),
    minutes.toString().padStart(2, "0"),
    seconds.toString().padStart(2, "0"),
  ]
  return formattedTime;
};

export const getDateAndMonth = (date: string): string => { 
  const dateArr = date.split("-").map((str) => parseInt(str));
  console.log(dateArr[1]);
  
  const dateStr = dateArr[2].toString().padStart(2, "0");
  const monthStr = month[dateArr[1]-1];
  return `${dateStr} ${monthStr}`
}
