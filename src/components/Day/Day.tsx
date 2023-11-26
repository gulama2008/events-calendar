import { useContext, useEffect, useState } from "react";
import styles from "./Day.module.scss";
import { CalendarContext, Event } from "../../context/CalendarContextProvider";
import { getDate, getIndexOfWeek } from "../../services/utils";
export interface DayProps {
  day: number;
}

const Day = ({ day }: DayProps) => {
  const { date, setDate, setShowModal, events,setCurrentEventList } = useContext(CalendarContext);
  const currentDate = getDate(date, day);

  const [eventsForCurrentDate, setEventForCurrentDate] = useState<Event>();
  let containerClasses = styles.container;
  if (getIndexOfWeek(date, day) === 0 || getIndexOfWeek(date, day) === 6) {
    containerClasses += ` ${styles.weekend}`;
  }
  useEffect(() => {
    const eventsForCurrentDate = events.find((event: Event) => {
      return event.date === currentDate.toString();
    });
    if (eventsForCurrentDate) {
      setEventForCurrentDate(eventsForCurrentDate);
    }
  }, [events]);

  const handleClick = () => {
    const newDate = getDate(date, day);
    setDate(newDate);
    setShowModal(true);
    setCurrentEventList(eventsForCurrentDate);
  };
  console.log(currentDate, eventsForCurrentDate);

  return (
    <div onClick={handleClick} className={containerClasses}>
      <div className={styles.day}>{day}</div>
      {eventsForCurrentDate &&
        eventsForCurrentDate.event.map((e: string) => {
          return <div className={styles.event}>{e}</div>;
        })}
    </div>
  );
};

export default Day;
