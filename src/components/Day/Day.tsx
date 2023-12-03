import { useContext, useEffect, useState } from "react";
import styles from "./Day.module.scss";
import { CalendarContext, Event } from "../../context/CalendarContextProvider";
import {
  checkIfInDateRange,
  getDate,
  getIndexOfWeek,
} from "../../services/utils";
export interface DayProps {
  day: number;
}

const Day = ({ day }: DayProps) => {
  const {
    date,
    setDate,
    setShowModal,
    events,
    setCurrentEventList,
    filters,
    setFilters,
  } = useContext(CalendarContext);
  // const currentDate = getDate(date, day);
  // const [currentDate, setCurrentDate] = useState();
  const [eventsForCurrentDate, setEventForCurrentDate] = useState<any>();
  let containerClasses = styles.container;
  if (getIndexOfWeek(date, day) === 0 || getIndexOfWeek(date, day) === 6) {
    containerClasses += ` ${styles.weekend}`;
  }
  useEffect(() => {
    const currentDate = getDate(date, day);
    setEventForCurrentDate(null);
    const eventsForCurrentDate = events?.filter((event: Event) => {
      return checkIfInDateRange(currentDate, event.startDate, event.endDate);
    });

    if (eventsForCurrentDate) {
      if (filters.label != "all" || filters.location != "all") {
        let filteredEventList;
        if (filters.label === "all") {
          filteredEventList = eventsForCurrentDate.filter(
            (event: Event) => event.location == filters.location
          );
        } else if (filters.location === "all") {
          filteredEventList = eventsForCurrentDate.filter((event: Event) =>
            event.label.includes(filters.label)
          );
        } else {
          filteredEventList = eventsForCurrentDate.filter(
            (event: Event) =>
              event.location == filters.location &&
              event.label.includes(filters.label)
          );
        }
        setCurrentEventList(filteredEventList);
        setEventForCurrentDate(filteredEventList);
      } else {
        setEventForCurrentDate(eventsForCurrentDate);
        setCurrentEventList(eventsForCurrentDate);
      }
    }
  }, [events, date, filters]);

  const handleClick = () => {
    const newDate = getDate(date, day);
    setDate(newDate);
    setShowModal(true);
    setCurrentEventList(eventsForCurrentDate);
  };

  return (
    <div onClick={handleClick} className={containerClasses}>
      <div className={styles.day}>{day}</div>
      <div className={styles.event_container}>
        {eventsForCurrentDate &&
          eventsForCurrentDate.map((e: Event) => {
            return <div className={styles.event}>{e.eventName}</div>;
          })}
      </div>
    </div>
  );
};

export default Day;
